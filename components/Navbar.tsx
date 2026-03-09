'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useState } from 'react';

export default function Navbar() {

  const pathname = usePathname();

  const openMenu = () => {
    const menu = document.getElementById('navbar-mobile-menu');
    //  @ts-ignore
    menu?.showModal();
  }

  const closeMenu = () => {
    const menu = document.getElementById('navbar-mobile-menu');
    //  @ts-ignore
    menu?.close();
  }

  return (
    <>
      <dialog id='navbar-mobile-menu' className='p-0 m-0 w-full h-full'>
        <div className='bg-background-dark text-white h-full flex flex-col items-center'>
          <div className='w-full flex justify-between items-center h-20 px-5'>
            <Link href="/" className="flex items-center gap-3 group">
              <span className="text-xl font-black tracking-tight uppercase">
                <span className='group-hover:scale-110'>DSN</span><span className="text-primary/80">Empresas</span>
              </span>
            </Link>
            <button onClick={() => closeMenu()} className='flex'>
              <span className="material-symbols-outlined hover:text-slate-300">close</span>
            </button>
          </div>
          <div className='my-auto flex flex-col items-center gap-10'>
            <Link onClick={() => closeMenu()} href="/" className={`text-3xl font-medium hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}>Inicio</Link>
            <Link onClick={() => closeMenu()} href="/proyectos" className={`text-3xl font-medium hover:text-primary transition-colors ${pathname.startsWith('/proyectos') ? 'text-primary' : ''}`}>Proyectos</Link>
            <Link onClick={() => closeMenu()} href="/contacto" className={`text-3xl font-medium hover:text-primary transition-colors ${pathname === '/contacto' ? 'text-primary' : ''}`}>Contacto</Link>
            <Link onClick={() => closeMenu()} href="/dashboard-ecommerce" className={`text-3xl font-medium hover:text-primary transition-colors ${pathname === '/contacto' ? 'text-primary' : ''}`}>Iniciar sesión</Link>
          </div>
          
        </div>
      </dialog>
      <nav className="sticky top-0 z-50 w-full border-b border-white/5 bg-background-dark/80 backdrop-blur-md">
        <div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3 group">
            <span className="text-xl font-black tracking-tight uppercase">
              <span className='group-hover:scale-110'>DSN</span><span className="text-primary/80">Empresas</span>
            </span>
          </Link>
          <button onClick={() => openMenu()} className='md:hidden flex'>
            <span className="material-symbols-outlined hover:text-slate-300">
              menu
            </span>
          </button>
          <div className="hidden md:flex items-center gap-10 uppercase">
            <Link href="/" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/' ? 'text-primary' : ''}`}>Inicio</Link>
            <Link href="/proyectos" className={`text-sm font-medium hover:text-primary transition-colors ${pathname.startsWith('/proyectos') ? 'text-primary' : ''}`}>Proyectos</Link>
            <Link href="/contacto" className={`text-sm font-medium hover:text-primary transition-colors ${pathname === '/contacto' ? 'text-primary' : ''}`}>Contacto</Link>
            <Link href="/dashboard-ecommerce" className="group relative inline-flex h-12 items-center justify-center overflow-hidden bg-primary duration-500 hover:bg-primary/90 text-white px-5 py-2.5 rounded-lg text-sm font-bold transition-all">
              <div className="translate-x-0 opacity-100 transition group-hover:-translate-x-[150%] group-hover:opacity-0">Acceso Clientes</div>
              <div className="absolute translate-x-[150%] opacity-0 transition group-hover:translate-x-0 group-hover:opacity-100 flex">
                <span className="material-symbols-outlined">
                  login
                </span>
              </div>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
}
