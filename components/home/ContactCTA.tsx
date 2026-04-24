'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import styles from './ContactCTA.module.css';


const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const ContactCTA = () => {

  return (
    <section className="py-24">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          {...fadeIn}
          className="relative bg-slate-800 border border-white/10 rounded-3xl p-5 md:p-24 overflow-hidden text-center"
        >
          <div className={`${styles.contactCtaGradient} w-1/2 h-1/2 absolute bottom-0 left-1/4 -translate-x-1/2 rotate-[-45deg]`}></div>
          <div className={`${styles.contactCtaGradient2} w-2 /5 h-2/5 absolute top-10 right-20 rotate-[-45deg] contact-cta-gradient-2`}></div>
          <div className="absolute inset-0 hero-mesh backdrop-blur-[]"></div>
          <div className="relative z-10 flex flex-col justify-center">
            <h2 className="text-3xl md:text-7xl font-semibold mb-8 leading-tight tracking-tighter">
              De la ingeniería a la operación,<br /><span className="text-primary bg-gradient-to-r from-primary to-accent-violet bg-clip-text text-transparent">con evidencia y garantía.</span>
            </h2>
            <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-12 font-light">
              Experiencia comprobada para entregar tu proyecto listo para operar, con alta disponibilidad, trazabilidad y garantía.
            </p>
            <Link href="/contacto" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-full px-6 font-medium text-neutral-200 mx-auto bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-accent-violet to-primary">
              <span>Agendar consulta técnica gratuita</span>
              <div className="ml-1 transition group-hover:translate-x-1 flex">
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </div>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  )

}

export default ContactCTA;