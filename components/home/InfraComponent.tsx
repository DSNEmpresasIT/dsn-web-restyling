'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const items = [
  {
    icon: 'router', title: 'Ejecución integral', desc: 'Del Proyecto Ejecutivo a la puesta en servicio y operación.'
  },
  {
    icon: 'router', title: 'Señales Débiles', desc: 'Arquitectura e integración de sistemas, canalizaciones, racks, cableado, tableros, distribución y ordenamiento técnico.'
  },
  {
    icon: 'hub', title: 'Redes y Conectividad', desc: 'Cableado estructurado, fibra óptica (certificación y documentación), enlaces de alta disponibilidad.'
  },
  {
    icon: 'bolt', title: 'Energía Crítica', desc: 'Tableros, protecciones, UPS, respaldo, autonomía, continuidad y pruebas de carga.'
  },
  { 
    icon: 'monitor_heart', title: 'Operación y Control', desc: 'Videovigilancia IP, control de accesos, megafonía/PA, notificación y evacuación integradas a procedimientos operativos.'
  },
  {
    icon: 'dns', title: 'Datacenter', desc: 'Diseño, montaje, climatización, energía, cableado, seguridad lógica y documentación “as built”.'
  },
  {
    icon: 'shield_locked', title: 'Ciberseguridad aplicada a infraestructura', desc: 'Seguridad por diseño para entornos críticos: segmentación, control de privilegios, auditoría, gestión de accesos y hardening alineado a requerimientos del cliente/organismo.'
  },
  {
    icon: 'verified_user', title: 'Integración con organismos', desc: 'Experiencia en proyectos con coordinación de estándares y protocolos de PSA, ANAC, ORSNA, EANA, DNM, Interpol, ARCA, SENASA, Gendarmería Nacional Argentina y Aeropuertos Argentina 2000 (según alcance).'
  },
];

export const InfraComponent = () => {
  return (
    <section className="py-24 relative overflow-hidden bg-background-dark" id="infraestructura">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-50"></div>
      <div className="max-w-screen-2xl mx-auto px-6 relative z-10">
        <motion.div
          {...fadeIn}
          className="max-w-4xl mb-16"
        >
          <p className="text-primary font-bold uppercase tracking-widest text-sm mb-4">Infraestructura</p>
          {/* <h2 className="text-4xl md:text-7xl uppercase font-semibold bg-gradient-to-r from-[#3B96D1] via-sky-100 to-white bg-clip-text text-transparent mb-6">Infraestructura de alta exigencia, diseñada para operar sin interrupciones</h2> */}
          <h2 className="text-4xl md:text-7xl font-semibold bg-gradient-to-r from-[#3B96D1] via-sky-100 to-white bg-clip-text text-transparent mb-6 pb-3">Proyectos llave en mano para requerimientos exigentes y servicios sin interrupciones</h2>
          <p className='text-xl text-slate-400'>Ejecutamos soluciones llave en mano, con soporte y garantía postventa extendida, asegurando continuidad operativa, trazabilidad y performance en entornos críticos.</p>
          {/* <p className="text-xl text-slate-400 mb-6">Diseñamos y ejecutamos proyectos de infraestructura crítica con foco en alta disponibilidad, redundancia y cumplimiento de normas y estándares internacionales de seguridad, para entornos donde la continuidad operativa es un requisito.</p>
          <p className="text-xl text-slate-400">Nos hacemos cargo del ciclo completo: ingeniería del modelo solución, Proyecto Ejecutivo, provisión, implementación, commissioning, pruebas de aceptación y entrega documentada. Entregamos proyectos llave en mano con soporte y garantía postventa por períodos extendidos.</p> */}
        </motion.div>
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-1">
          {items.map((item, i) => (
            <motion.div
              key={i}
              {...fadeIn}
              transition={{ delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className={`bg-slate-800 p-10 border border-white/10 cursor-default rounded-2xl`}
            >
              <span className="material-symbols-outlined text-primary mb-4 text-3xl">{item.icon}</span>
              <h4 className="text-2xl md:text-4xl font-bold mb-4 tracking-tighter">{item.title}</h4>
              <p className="text-slate-400">{item.desc}</p>
            </motion.div>
          ))}
          <motion.div
            {...fadeIn}
            transition={{ delay: 0.5 }}
            whileHover={{ scale: 1.02 }}
            className={`bg-primary p-10 flex flex-col justify-between cursor-pointer rounded-2xl md:col-span-2 xl:col-span-1 group relative overflow-hidden`}
          >
            <div>
              <span className="material-symbols-outlined text-white mb-4 text-3xl">handshake</span>
              <h4 className="text-2xl md:text-4xl font-bold mb-4 tracking-tighter text-white text-balance">Coordinemos un relevamiento técnico y entregamos una propuesta ejecutiva con alcance, hitos, documentación y garantía.</h4>
              {/* <p className="text-white/80">Coordinemos un relevamiento técnico y entregamos una propuesta ejecutiva con alcance, hitos, documentación y garantía.</p> */}
            </div>
            <Link href="/contacto" className="text-white font-bold text-7xl uppercase after:absolute after:inset-0">
              <span className="material-symbols-outlined text-5xl group-hover:scale-125 transition-all duration-300" style={{ fontSize: '48px', color: 'white' }}>arrow_forward</span>
            </Link>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
