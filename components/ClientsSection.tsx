'use client';

import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const orgs = ['MUNICIPALIDAD', 'GOBIERNO', 'CONCORDIA', 'SALTO GRANDE', 'CAFES', 'ENOHSA'];
const privates = ['AIRPORT_X', 'LOGISTIC_CO', 'CORP_CENTRE', 'IND_FOODS', 'TECH_TOWER', 'BUILD_INC'];

const ClientsSection = () => {

  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          {...fadeIn}
          className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-16"
        >
          Confían en nuestra evidencia técnica
        </motion.h2>
        <div className="space-y-16">
          <motion.div
            {...fadeIn}
          >
            <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Organismos e Instituciones</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              {orgs.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </motion.div>
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Aeropuertos y Privados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              {privates.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )

}

export default ClientsSection;