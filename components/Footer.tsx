import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-background-dark border-t border-white/5 pt-24 pb-12">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-24">
          <div>
            <div className="flex items-center gap-3 mb-8">
              <div className="bg-primary p-1.5 rounded">
                <span className="material-symbols-outlined text-white text-xl">account_tree</span>
              </div>
              <span className="text-xl font-black tracking-tight uppercase">DSN <span className="text-primary/80">Empresas</span></span>
            </div>
            <p className="text-slate-500 text-sm leading-relaxed mb-6">Proporcionando excelencia técnica en software e infraestructura desde Concordia, Argentina para toda la región.</p>
          </div>
          <div>
            <h6 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-300">Servicios</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" href="/proyectos">Software a Medida</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/proyectos">Infraestructura Crítica</Link></li>
              <li><Link className="hover:text-primary transition-colors" href="/proyectos">Ciberseguridad</Link></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-300">Empresa</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li><Link className="hover:text-primary transition-colors" href="/proyectos">Sobre Nosotros</Link></li>
              <li><Link href="/proyectos" className="hover:text-primary transition-colors">Proyectos</Link></li>
              <li><a className="hover:text-primary transition-colors" href="#">Contacto</a></li>
            </ul>
          </div>
          <div>
            <h6 className="font-bold mb-8 uppercase text-xs tracking-widest text-slate-300">Contacto</h6>
            <ul className="space-y-4 text-sm text-slate-500">
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">location_on</span> Concordia, Entre Ríos</li>
              <li className="flex gap-3"><span className="material-symbols-outlined text-primary text-sm">mail</span> info@dsnempresas.com.ar</li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col md:flex-row justify-between items-center pt-12 border-t border-white/5 gap-6">
          <p className="text-xs text-slate-600">© 2024 DSN Empresas. Todos los derechos reservados.</p>
          <div className="flex gap-8 text-xs text-slate-600">
            <a className="hover:text-slate-400" href="#">Privacidad</a>
            <a className="hover:text-slate-400" href="#">Términos Técnicos</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
