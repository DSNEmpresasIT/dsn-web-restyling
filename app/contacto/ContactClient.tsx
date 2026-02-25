'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ContactContent() {
  return (
    <div className="bg-background-dark min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-20 pointer-events-none">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-primary/30 rounded-full blur-[128px]"></div>
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-primary/20 rounded-full blur-[128px]"></div>
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary text-xs font-bold uppercase tracking-widest mb-4"
          >
            Consultoría Técnica B2B
          </motion.span>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-4xl md:text-6xl font-black tracking-tight mb-6 leading-tight"
          >
            Coordinemos una <span className="text-primary">reunión técnica</span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Contanos qué necesitás y coordinamos el mejor momento para hablar.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto w-full"
        >
          <div className="bg-surface border border-white/5 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <form className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Nombre / Empresa</label>
                    <input 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" 
                      placeholder="Ej: Juan Pérez - TechCorp" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-bold text-slate-400">Email Corporativo</label>
                    <input 
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" 
                      placeholder="nombre@empresa.com" 
                      type="email"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Teléfono / WhatsApp</label>
                  <input 
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" 
                    placeholder="+54 9 345 000 0000" 
                    type="tel"
                  />
                </div>
                <div className="space-y-4">
                  <label className="text-sm font-bold text-slate-400 uppercase tracking-widest">¿Sobre qué querés hablar?</label>
                  <div className="flex flex-wrap gap-3">
                    {['Proyecto de Software', 'Infraestructura Crítica', 'Obras', 'BIM', 'Otro'].map((topic, i) => (
                      <button 
                        key={i}
                        type="button"
                        className="px-4 py-2 rounded-full border border-slate-700 text-sm font-medium hover:border-primary hover:text-primary transition-all"
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Mensaje</label>
                  <textarea 
                    className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-white placeholder:text-slate-600 resize-none" 
                    placeholder="Contanos más detalles sobre tu proyecto..." 
                    rows={4}
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-primary/20"
                >
                  Solicitar reunión técnica
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'mail', title: 'Email', value: 'contacto@dsnempresas.com' },
              { icon: 'call', title: 'Teléfono', value: '+54 345 421-XXXX' },
              { icon: 'location_on', title: 'Ubicación', value: 'Concordia, Entre Ríos' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-surface/30 border border-white/5"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
