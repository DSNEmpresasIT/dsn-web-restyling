'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-black tracking-tight uppercase">
            DSN <span className="text-primary/80">Empresas</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10">
          <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}>Inicio</Link>
          <Link href="/proyectos" className={`text-sm font-medium hover:text-primary transition-colors ${pathname.startsWith('/proyectos') ? 'text-primary' : ''}`}>Proyectos</Link>
          <Link href="/contacto" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/contacto' ? 'text-primary' : ''}`}>Contacto</Link>
        </div>
        <Link href="/dashboard-ecommerce" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 active:scale-95">
          Acceso Clientes
        </Link>
      </div>
    </nav>
  );
}
