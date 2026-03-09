'use client';

import { motion } from 'framer-motion';
import styles from './ClientsSection.module.css';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const orgs = ['MUNICIPALIDAD', 'GOBIERNO', 'CONCORDIA', 'SALTO GRANDE', 'CAFES', 'ENOHSA'];
const privates = ['AIRPORT_X', 'LOGISTIC_CO', 'CORP_CENTRE', 'IND_FOODS', 'TECH_TOWER', 'BUILD_INC'];

const clients = [
  {
    title: 'Ministerio del Interior',
    sub: ''
  },
  {
    title: 'Equipos de abordo S.A.',
    sub: 'Edasa'
  },
  {
    title: 'Artear Canal 13',
    sub: 'Grupo Clarín'
  },
  {
    title: 'Canal 9 del Litoral',
    sub: ''
  },
  {
    title: 'Energía de Entre Ríos S.A.',
    sub: 'Enersa'
  },
  {
    title: 'LP Pietroboni S.A.',
    sub: ''
  },
  {
    title: 'Aeropuerto Internacional de Concordia',
    sub: ''
  },
  {
    title: 'Paso Fronterizo',
    sub: 'Concordia - Salto'
  },
]

const ClientsSection = () => {

  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <motion.h2 
          {...fadeIn}
          className="text-center text-slate-400 text-lg font-bold uppercase tracking-[0.3em] mb-16"
        >
          Confían en nuestra evidencia técnica
        </motion.h2>
        <div className="space-y-16">
          <motion.div
            {...fadeIn}
          >
            {/* <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Organismos e Instituciones</h3> */}
            {/* <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 transition-all">
              {clients.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className="aspect-square rounded-full text-center flex flex-col items-center justify-center text-slate-200 border border-slate-400/50 font-black text-base italic tracking-widest uppercase p-5"
                >
                  <span>{org.title}</span>
                  {
                    org.sub && <span className='text-xs text-slate-400'>{org.sub}</span>
                  }
                </motion.div>
              ))}
            </div> */}
            <div className="flex flex-wrap items-center justify-center gap-8 transition-all">
              {clients.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05 }}
                  className={`${styles.gradientContainer} ${styles.aux} max-w-44 md:max-w-64 w-full aspect-square rounded-full text-center flex flex-col items-center justify-center text-slate-200 border border-slate-400/50 font-black text-xs md:text-base italic tracking-widest uppercase p-5`}
                >
                  <span>{org.title}</span>
                  {
                    org.sub && <span className='text-xs text-slate-400'>{org.sub}</span>
                  }
                </motion.div>
              ))}
            </div>
          </motion.div>
          {/* <motion.div
            {...fadeIn}
            transition={{ delay: 0.2 }}
          >
            <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Aeropuertos y Privados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 transition-all">
              {privates.map((org, i) => (
                <motion.div
                  key={i}
                  whileHover={{ scale: 1.05, opacity: 1 }}
                  className="h-12 flex items-center justify-center text-slate-200 font-black text-xl italic tracking-widest uppercase"
                >
                  {org}
                </motion.div>
              ))}
            </div>
          </motion.div> */}
        </div>
      </div>
    </section>
  )

}

export default ClientsSection;