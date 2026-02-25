'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const items = [
  { icon: 'router', title: 'Señales Débiles', desc: 'Instalaciones de precisión para sistemas de control y comunicación de baja potencia.' },
  { icon: 'hub', title: 'Redes y Conectividad', desc: 'Tendido de fibra óptica y configuración de nodos de alta velocidad.' },
  { icon: 'bolt', title: 'Energía Crítica', desc: 'Sistemas de respaldo y UPS para garantizar operación ininterrumpida.' },
  { icon: 'monitor_heart', title: 'Operación y Control', desc: 'Diseño de centros de monitoreo y salas de situación técnica.' },
  { icon: 'dns', title: 'Datacenter', desc: 'Construcción y mantenimiento de entornos de servidor certificados.' },
];

export const InfraComponent = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-dark" id="infraestructura">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
        <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          {...fadeIn}
          className="max-w-3xl mb-16"
        >
        <h2 className="text-4xl md:text-5xl font-black mb-6">Capacidad Técnica en Terreno</h2>
        <p className="text-xl text-slate-400">No solo programamos. Construimos la infraestructura física que sostiene el mundo digital.</p>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-1">
        {items.map((item, i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ delay: i * 0.1 }}
            whileHover={{ y: -5, backgroundColor: "rgba(18, 24, 38, 0.6)" }}
            className="bg-surface/40 p-10 border border-white/5 cursor-default"
          >
            <span className="material-symbols-outlined text-primary mb-4 text-3xl">{item.icon}</span>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter">{item.title}</h4>
            <p className="text-slate-400 text-sm">{item.desc}</p>
          </motion.div>
        ))}
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.5 }}
          whileHover={{ scale: 1.02 }}
          className="bg-primary p-10 flex flex-col justify-between cursor-pointer"
        >
          <div>
            <span className="material-symbols-outlined text-white mb-4 text-3xl">shield_locked</span>
            <h4 className="text-xl font-bold mb-4 uppercase tracking-tighter text-white">Cybersecurity Unit</h4>
            <p className="text-white/80 text-sm">Unidad táctica de protección de perímetros lógicos y auditoría de vulnerabilidades.</p>
          </div>
          <button className="mt-8 border-b border-white text-white font-bold text-xs uppercase tracking-widest w-fit hover:border-transparent transition-all">Hablar con un experto</button>
        </motion.div>
        </div>
        </div>
    </section>
  )
}
