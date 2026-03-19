'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const items = [
  {
    icon: 'branding_watermark', title: 'Identidad de Marca', desc: 'Branding y posicionamiento.' },
  { icon: 'web', title: 'Sitios Comerciales', desc: 'Sitios web comerciales y landings.' },
  { icon: 'campaign', title: 'Campañas Digitales', desc: 'Campañas (Meta/Google) + reporting.' },
  { icon: 'auto_mode', title: 'Automatización', desc: 'Formularios, CRM, embudos y seguimiento.' },
];

const MarketingAndBranding = () => {

  return (
    // <section className="py-24 bg-surface/10 border-t border-white/5" id="branding">
    //   <div className="max-w-screen-2xl mx-auto px-6">
    //     <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
    //       <motion.div 
    //         {...fadeIn}
    //         className="lg:col-span-1"
    //       >
    //         <h2 className="text-3xl font-black mb-6">Marketing &amp; Branding Técnico</h2>
    //         <p className="text-slate-500 text-sm leading-relaxed mb-8">Comunicación estratégica para empresas de ingeniería y tecnología que necesitan hablar el mismo idioma que sus clientes.</p>
    //       </motion.div>
    //       <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
    //         {items.map((item, i) => (
    //           <motion.div
    //             key={i}
    //             {...fadeIn}
    //             transition={{ delay: i * 0.1 }}
    //             whileHover={{ y: -5, backgroundColor: "rgba(18, 24, 38, 0.6)" }}
    //             className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4 cursor-default"
    //           >
    //             <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">{item.icon}</span>
    //             <div>
    //               <h5 className="font-bold">{item.title}</h5>
    //               <p className="text-xs text-slate-500">{item.desc}</p>
    //             </div>
    //           </motion.div>
    //         ))}
    //       </div>
    //     </div>
    //   </div>
    // </section>
    <section className="py-24">
      <div className="max-w-screen-2xl mx-auto px-6">
        <motion.div {...fadeIn} className="text-center mb-16">
          <p className='text-primary font-bold uppercase tracking-widest text-sm mb-4'>Marketing &amp; Branding Técnico</p>
          <h2 className="mb-4 tracking-tight text-4xl md:text-7xl uppercase font-semibold bg-gradient-to-r from-primary via-sky-100 to-white bg-clip-text text-transparent">Estrategia, contenido y performance con foco en resultados</h2>
          <p className="text-slate-400 text-xl mb-8">Estrategia y producción orientada a resultados, integrando marca, performance y automatización comercial.</p>
          <div className="w-20 h-1 bg-primary mx-auto"></div>
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-8">
          {items.map((s, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="p-8 border border-white/5 bg-slate-800 rounded-xl transition-all group"
            >
              <span className="material-symbols-outlined text-primary text-6xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</span>
              <h4 className="text-2xl md:text-4xl font-bold mb-3 text-white">{s.title}</h4>
              <p className="text-slate-400 text-sm leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )

}

export default MarketingAndBranding;