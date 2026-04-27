'use client';

import Link from 'next/link';
import { DEFAULT_MAIL_RECIPIENT } from '@/lib/mailer';

export default function Footer() {

  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-background-dark border-t border-white/5 pt-24 pb-12">
      <div className="max-w-screen-2xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-20 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <span className="text-3xl font-black tracking-tight uppercase">DSN<span className="text-primary bg-gradient-to-r from-primary to-accent-violet bg-clip-text text-transparent">Empresas</span></span>
            </div>
            <p className="text-slate-400 text-xl leading-relaxed mb-6 text-pretty">Proporcionando excelencia técnica en software e infraestructura desde Concordia, Argentina para toda la región.</p>
            <div className='pt-5'>
              <h6 className="font-bold mb-6 uppercase text-xl tracking-widest text-slate-200">Contacto</h6>
              <ul className="space-y-4 text-xl text-slate-400">
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">location_on</span> Concordia, Entre Ríos</li>
                <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-xl">mail</span>{DEFAULT_MAIL_RECIPIENT}</li>
              </ul>
            </div>
          </div>
          <div>
            <h6 className="font-bold mb-8 uppercase text-xl tracking-widest text-slate-200">Servicios</h6>
            <ul className="space-y-4 text-xl text-slate-400">
              <li>
                <Link href="/proyectos" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Software a Medida</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Software a Medida</div></Link>
              </li>
              <li>
                <Link href="/proyectos" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Infraestructura Crítica</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Infraestructura Crítica</div></Link>
              </li>
              <li>
                <Link href="/proyectos" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Ciberseguridad</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Ciberseguridad</div></Link>
              </li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-8 uppercase text-xl tracking-widest text-slate-200">Empresa</h6>
            <ul className="space-y-4 text-xl text-slate-400">
              <li>
                <Link href="/proyectos" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Sobre Nosotros</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Sobre Nosotros</div></Link>
              </li>
              <li>
                <Link href="/proyectos" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Proyectos</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Proyectos</div></Link>
              </li>
              <li>
                <Link href="/contacto" className="group relative inline-flex items-center justify-center overflow-hidden font-medium duration-500 hover:text-primary"><div className="translate-y-0 transition group-hover:-translate-y-[150%]">Contacto</div><div className="absolute translate-y-[150%] transition group-hover:translate-y-0">Contacto</div></Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-slate-400">© {currentYear} DSN Empresas. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-slate-400">
            <a className="hover:text-primary" href="#">Privacidad</a>
            <a className="hover:text-primary" href="#">Términos Técnicos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
