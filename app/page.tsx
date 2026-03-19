'use client';

import { motion } from 'framer-motion';
import { SoftwareComponent } from '@/components/home/SoftwareComponent';
import { InfraComponent } from '@/components/home/InfraComponent';
import Link from 'next/link';
import MarketingAndBranding from '@/components/home/MarketingAndBranding';
import ClientsSection from '@/components/home/ClientsSection';
import HeroComponent from '@/components/home/HeroComponent';
import PropuestaValorComponent from '@/components/home/PropuestaValorComponent';
import ProjectsSection from '@/components/home/ProjectsSectionComponent';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      
      <HeroComponent />

      {/* <section className="py-24 bg-background-dark border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {METRICS.map((m, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                className="bg-surface border border-white/5 p-8 rounded-xl hover:border-primary/50 transition-colors group"
              >
                <p className="text-slate-500 text-sm font-bold uppercase tracking-widest mb-4">{m.label}</p>
                <h3 className="text-5xl font-black text-white group-hover:text-primary transition-colors">
                  <AnimatedNumber value={m.number} suffix={m.suffix} plus={m.value.includes('+')} />
                </h3>
                <p className="text-slate-400 mt-2">{m.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      <PropuestaValorComponent />

      <SoftwareComponent></SoftwareComponent>
      
      <InfraComponent></InfraComponent>

      <ProjectsSection />

      <MarketingAndBranding />
      
      <ClientsSection />

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeIn}
            className="relative bg-slate-800 border border-white/10 rounded-3xl p-5 md:p-24 overflow-hidden text-center"
          >
            <div className="absolute inset-0 hero-mesh opacity-20"></div>
            <div className="relative z-10 flex flex-col justify-center">
              <h2 className="text-3xl md:text-7xl font-semibold uppercase mb-8 leading-tight tracking-tighter">
                De la ingeniería a la operación,<br /><span className="text-primary">con evidencia y garantía.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                Experiencia comprobada para entregar tu proyecto listo para operar, con alta disponibilidad, trazabilidad y garantía.
              </p>
              {/* <Link href="/contacto" className="flex justify-center m-auto bg-primary hover:bg-primary/90 text-white px-5 py-2 md:px-10 md:py-5 rounded-xl font-bold md:text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                <span>Agendar consulta técnica gratuita</span>
              </Link> */}
              <Link href="/contacto" className="group relative inline-flex h-12 items-center justify-center overflow-hidden rounded-lg bg-primary px-6 font-medium text-neutral-200 mx-auto hover:bg-primary/90">
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
    </>
  );
}
