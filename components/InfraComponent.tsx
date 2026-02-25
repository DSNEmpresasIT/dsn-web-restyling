export const InfraComponent = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-dark" id="infraestructura">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="max-w-3xl mb-16">
        <h2 className="text-4xl md:text-5xl font-black mb-6">Capacidad Técnica en Terreno</h2>
        <p className="text-xl text-slate-400">No solo programamos. Construimos la infraestructura física que sostiene el mundo digital.</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        <div className="bg-surface/40 p-10 border border-white/5 hover:bg-surface/60 transition-colors">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">router</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Señales Débiles</h4>
        <p className="text-slate-400 text-sm">Instalaciones de precisión para sistemas de control y comunicación de baja potencia.</p>
        </div>
        <div className="bg-surface/40 p-10 border border-white/5 hover:bg-surface/60 transition-colors">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">hub</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Redes y Conectividad</h4>
        <p className="text-slate-400 text-sm">Tendido de fibra óptica y configuración de nodos de alta velocidad.</p>
        </div>
        <div className="bg-surface/40 p-10 border border-white/5 hover:bg-surface/60 transition-colors">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">bolt</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Energía Crítica</h4>
        <p className="text-slate-400 text-sm">Sistemas de respaldo y UPS para garantizar operación ininterrumpida.</p>
        </div>
        <div className="bg-surface/40 p-10 border border-white/5 hover:bg-surface/60 transition-colors">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">monitor_heart</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Operación y Control</h4>
        <p className="text-slate-400 text-sm">Diseño de centros de monitoreo y salas de situación técnica.</p>
        </div>
        <div className="bg-surface/40 p-10 border border-white/5 hover:bg-surface/60 transition-colors">
        <span className="material-symbols-outlined text-primary mb-4 text-3xl">dns</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">Datacenter</h4>
        <p className="text-slate-400 text-sm">Construcción y mantenimiento de entornos de servidor certificados.</p>
        </div>
        <div className="bg-primary p-10 flex flex-col justify-between">
        <div>
        <span className="material-symbols-outlined text-white mb-4 text-3xl">shield_locked</span>
        <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white">Cybersecurity Unit</h4>
        <p className="text-white/80 text-sm">Unidad táctica de protección de perímetros lógicos y auditoría de vulnerabilidades.</p>
        </div>
        <button className="mt-8 border-b border-white text-white font-bold text-xs uppercase tracking-widest w-fit hover:border-transparent transition-all">Hablar con un experto</button>
        </div>
        </div>
        </div>
    </section>
  )
}
