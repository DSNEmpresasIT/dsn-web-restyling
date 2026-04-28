/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'standalone',
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'lh3.googleusercontent.com',
      },
    ],
  },
  env: {
    NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION: process.env.NEXT_PUBLIC_GLOBAL_API_BASE_URL_PRODUCTION,
    NEXT_PUBLIC_EMAILTOSEND: process.env.NEXT_PUBLIC_EMAILTOSEND,
  },
};

module.exports = nextConfig;
