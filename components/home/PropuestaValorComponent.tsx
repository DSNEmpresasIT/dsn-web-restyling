
import { SERVICES } from '@/lib/data';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const PropuestaValorComponent = () => {
  
  return (
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <h2 className="mb-4 tracking-tight text-4xl md:text-7xl uppercase font-semibold bg-gradient-to-r from-primary via-sky-100 to-white bg-clip-text text-transparent">Propuesta de Valor</h2>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {SERVICES.map((s, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 border border-white/5 bg-slate-800 rounded-xl transition-all group"
            >
              <span className="material-symbols-outlined text-primary text-6xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</span>
              <h4 className="text-xl md:text-4xl font-bold mb-3 text-white">{s.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default PropuestaValorComponent;