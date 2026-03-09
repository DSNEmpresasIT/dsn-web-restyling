'use client';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
      <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 group">
          <span className="text-xl font-black tracking-tight uppercase">
            <span className='group-hover:scale-110'>DSN</span><span className="text-primary/80">Empresas</span>
          </span>
        </Link>
        <div className="hidden md:flex items-center gap-10 uppercase">
          <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}>Inicio</Link>
          <Link href="/proyectos" className={`text-sm font-medium hover:text-primary transition-colors ${pathname.startsWith('/proyectos') ? 'text-primary' : ''}`}>Proyectos</Link>
          <Link href="/contacto" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/contacto' ? 'text-primary' : ''}`}>Contacto</Link>
          {/* <Link href="/dashboard-ecommerce" className="bg-primary hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all hover:scale-105 active:scale-95">
            Acceso Clientes
          </Link> */}
          <Link href="/dashboard-ecommerce" className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-primary duration-500 hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
            <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Acceso Clientes</div>
            <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 flex">
              <span className="material-symbols-outlined">
                login
              </span>
              {/* <svg width="15" height="15" viewBox="0 0 15 15" fill="none" xmlns="http://www.w3.org/2000/svg" className="h-6 w-6"><path d="M8.14645 3.14645C8.34171 2.95118 8.65829 2.95118 8.85355 3.14645L12.8536 7.14645C13.0488 7.34171 13.0488 7.65829 12.8536 7.85355L8.85355 11.8536C8.65829 12.0488 8.34171 12.0488 8.14645 11.8536C7.95118 11.6583 7.95118 11.3417 8.14645 11.1464L11.2929 8H2.5C2.22386 8 2 7.77614 2 7.5C2 7.22386 2.22386 7 2.5 7H11.2929L8.14645 3.85355C7.95118 3.65829 7.95118 3.34171 8.14645 3.14645Z" fill="currentColor" fill-rule="evenodd" clip-rule="evenodd"></path></svg> */}
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
}
