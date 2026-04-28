# ──────────────────────────────────────────────
# Stage 1: Build Next.js (standalone output)
# ──────────────────────────────────────────────
FROM node:20-alpine AS build-nextjs

WORKDIR /app

# NEXT_PUBLIC_* vars are baked into the bundle at build time
ARG NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION
ARG NEXT_PUBLIC_EMAILTOSEND
ENV NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION=$NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION
ENV NEXT_PUBLIC_EMAILTOSEND=$NEXT_PUBLIC_EMAILTOSEND

COPY package*.json ./
RUN npm ci --frozen-lockfile

# Copy only Next.js source — dashboard-ecommerce is built in its own stage
COPY app ./app
COPY components ./components
COPY lib ./lib
COPY public ./public
COPY next.config.js postcss.config.js tailwind.config.ts tsconfig.json ./

RUN npm run build

# ──────────────────────────────────────────────
# Stage 2: Build Angular dashboard
# ──────────────────────────────────────────────
FROM node:20-alpine AS build-angular

WORKDIR /app

COPY dashboard-ecommerce/package*.json ./
RUN npm ci --frozen-lockfile

COPY dashboard-ecommerce/ ./

RUN npm run build

# ──────────────────────────────────────────────
# Stage 3: Production runner
# ──────────────────────────────────────────────
FROM node:20-alpine AS runner

RUN apk add --no-cache nginx

ENV NODE_ENV=production

WORKDIR /app

# Next.js standalone server + static assets
COPY --from=build-nextjs /app/.next/standalone ./
COPY --from=build-nextjs /app/.next/static ./.next/static
COPY --from=build-nextjs /app/public ./public

# Angular build output → served as static files by nginx
COPY --from=build-angular /app/dist/dashboard-ecommerce /usr/share/nginx/html/dashboard-ecommerce

COPY nginx.conf /etc/nginx/nginx.conf
COPY start.sh ./
RUN sed -i 's/\r$//' start.sh && chmod +x start.sh

EXPOSE 80

CMD ["./start.sh"]
