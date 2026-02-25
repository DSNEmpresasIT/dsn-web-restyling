
'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export const SoftwareComponent = () => {
  return (
    <section className="py-24 bg-surface/20" id="software">
        <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
        <motion.div 
          {...fadeIn}
          className="max-w-2xl"
        >
        <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Product Ecosystem</p>
        <h2 className="text-4xl md:text-5xl font-black tracking-tight">Plataformas confiables, escalables y seguras.</h2>
        </motion.div>
        <motion.button 
          {...fadeIn}
          transition={{ delay: 0.2 }}
          className="text-primary font-bold flex items-center gap-2 group"
        >
          Explorar catálogo completo
          <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
        </motion.button>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.1 }}
          whileHover={{ y: -5 }}
          className="bg-surface border border-white/10 rounded-2xl overflow-hidden group">
        <div className="p-10">
        <div className="flex items-center justify-between mb-8">
        <span className="bg-primary/20 text-primary px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">Enterprise Suite</span>
        <div className="flex gap-2">
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400">NESTJS</span>
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400">REDIS</span>
        </div>
        </div>
        <h3 className="text-3xl font-bold mb-4">Suite Border</h3>
        <p className="text-slate-400 mb-8 leading-relaxed">Gestión avanzada de perímetros y control de acceso industrial con integración en tiempo real y biometría.</p>
        <div className="flex flex-wrap gap-3">
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">Control de Activos</span>
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">Monitoreo IoT</span>
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">Auditoría Real-time</span>
        </div>
        </div>
        </motion.div>
        <motion.div 
          {...fadeIn}
          transition={{ delay: 0.2 }}
          whileHover={{ y: -5 }}
          className="bg-surface border border-white/10 rounded-2xl overflow-hidden group">
        <div className="p-10">
        <div className="flex items-center justify-between mb-8">
        <span className="bg-accent-violet/20 text-accent-violet px-4 py-1 rounded text-xs font-bold uppercase tracking-widest">E-Gov Solution</span>
        <div className="flex gap-2">
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400">POSTGRES</span>
        <span className="px-2 py-1 bg-white/5 border border-white/10 rounded text-[10px] text-slate-400">NEXT.JS</span>
        </div>
        </div>
        <h3 className="text-3xl font-bold mb-4">Catálogo Digital</h3>
        <p className="text-slate-400 mb-8 leading-relaxed">Plataforma centralizada para la administración de activos digitales y servicios gubernamentales ciudadanos.</p>
        <div className="flex flex-wrap gap-3">
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">Gestión Documental</span>
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">API Gateway</span>
        <span className="text-xs font-semibold px-3 py-1 bg-white/5 rounded-full text-slate-300">Identidad Digital</span>
        </div>
        </div>
        </motion.div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            {...fadeIn}
            transition={{ delay: 0.3 + i * 0.1 }}
            whileHover={{ y: -5, backgroundColor: "rgba(18, 24, 38, 0.6)" }}
            className="bg-surface/50 border border-white/5 p-8 rounded-xl cursor-default"
          >
            <h4 className="font-bold text-xl mb-3">{['Micrositios', 'ERP en la nube', 'Desarrollo a medida'][i]}</h4>
            <p className="text-sm text-slate-500 mb-4">{[
              'Despliegue rápido de infraestructuras web para campañas y eventos de alto tráfico.',
              'Gestión de recursos empresariales modularizada para pymes y grandes corporaciones.',
              'Arquitecturas de software personalizadas para desafíos técnicos complejos.'
            ][i]}</p>
            <span className="text-primary text-xs font-bold uppercase">{['Escalabilidad Automática', 'SaaS Multi-tenant', 'Full-Stack Engineering'][i]}</span>
          </motion.div>
        ))}
        </div>
        </div>
    </section>
  )
}
