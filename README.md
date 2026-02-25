# DSN Empresas

Sitio web corporativo de DSN Empresas - Empresa de servicios y soluciones empresariales.

## Descripción

Web corporativa desarrollada con Next.js, React y Tailwind CSS. Presenta información sobre los servicios, proyectos y contacto de la empresa.

## Tecnologías

- **Framework:** Next.js
- **UI:** React
- **Estilos:** Tailwind CSS
- **Animaciones:** Framer Motion
- **Lenguaje:** TypeScript

## Requisitos

- Node.js 18.x o superior
- npm

## Instalación

```bash
npm install
```

## Desarrollo

Para levantar el servidor de desarrollo:

```bash
npm run dev
```

El servidor estará disponible en [http://localhost:3000](http://localhost:3000)

## Producción

### Build

```bash
npm run build
```

### Iniciar servidor de producción

```bash
npm start
```

## Estructura del proyecto

```
├── app/                    # Rutas y páginas de Next.js
│   ├── page.tsx           # Página principal
│   ├── contacto/          # Página de contacto
│   └── proyectos/         # Página de proyectos
├── components/            # Componentes reutilizables
├── lib/                   # Utilidades y datos
├── public/               # Archivos estáticos
└── tailwind.config.ts    # Configuración de Tailwind
```

## Linting

```bash
npm run lint
```
