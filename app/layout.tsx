import type { Metadata } from 'next';
import './globals.css';
import AppShell from '@/components/AppShell';

export const metadata: Metadata = {
  metadataBase: new URL('https://dsnempresas.com.ar'),
  title: {
    default: 'DSN Empresas | Ingeniería y Software de Alta Disponibilidad',
    template: '%s | DSN Empresas'
  },
  description: 'DSN Empresas - Empresa de software e ingeniería de alta disponibilidad en Concordia, Entre Ríos. Desarrollo de sistemas críticos, infraestructura aeroportuaria y soluciones digitales para organizaciones modernas.',
  keywords: [
    'DSN Empresas',
    'software Concordia',
    'empresa de software Concordia',
    'ingeniería Concordia',
    'aeropuerto Concordia',
    'infraestructura crítica',
    'alta disponibilidad',
    'desarrollo de software Argentina',
    'catálogo digital',
    'sistemas empresariales'
  ],
  authors: [{ name: 'DSN Empresas' }],
  creator: 'DSN Empresas',
  publisher: 'DSN Empresas',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: 'https://dsnempresas.com.ar',
    siteName: 'DSN Empresas',
    title: 'DSN Empresas | Ingeniería y Software de Alta Disponibilidad',
    description: 'Empresa de software e ingeniería de alta disponibilidad en Concordia, Entre Ríos. Desarrollo de sistemas críticos e infraestructura para organizaciones modernas.',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'DSN Empresas - Ingeniería y Software de Alta Disponibilidad',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'DSN Empresas | Ingeniería y Software de Alta Disponibilidad',
    description: 'Empresa de software e ingeniería de alta disponibilidad en Concordia, Entre Ríos.',
    images: ['/og-image.jpg'],
  },
  verification: {
    google: 'google-site-verification-code',
  },
  alternates: {
    canonical: 'https://dsnempresas.com.ar',
    languages: {
      'es-AR': 'https://dsnempresas.com.ar',
      'es': 'https://dsnempresas.com.ar',
    },
  },
  category: 'technology',
  classification: 'Business',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="es" className="dark">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800;900&display=swap" rel="stylesheet" />
        <link href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:wght,FILL@100..700,0..1&display=swap" rel="stylesheet" />
      </head>
      <body className="bg-background-dark text-slate-100 antialiased overflow-x-hidden min-h-screen flex flex-col">
        <AppShell>
          {children}
        </AppShell>
      </body>
    </html>
  );
}
