'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const items = [
  { icon: 'branding_watermark', title: 'Identidad de Marca', desc: 'Manuales de marca industriales' },
  { icon: 'web', title: 'Sitios Comerciales', desc: 'Performance y conversión B2B' },
  { icon: 'campaign', title: 'Campañas Digitales', desc: 'Ads segmentados por industria' },
  { icon: 'auto_mode', title: 'Automatización', desc: 'CRM e Inbound para técnicos' },
];

const MarketingAndBranding = () => {

  return (
    <section className="py-24 bg-surface/10 border-t border-white/5" id="branding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <motion.div 
            {...fadeIn}
            className="lg:col-span-1"
          >
            <h2 className="text-3xl font-black mb-6">Marketing &amp; Branding Técnico</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Comunicación estratégica para empresas de ingeniería y tecnología que necesitan hablar el mismo idioma que sus clientes.</p>
          </motion.div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {items.map((item, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(18, 24, 38, 0.6)" }}
                className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4 cursor-default"
              >
                <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">{item.icon}</span>
                <div>
                  <h5 className="font-bold">{item.title}</h5>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )

}

export default MarketingAndBranding;