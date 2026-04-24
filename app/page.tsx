'use client';

import { SoftwareComponent } from '@/components/home/SoftwareComponent';
import { InfraComponent } from '@/components/home/InfraComponent';
import MarketingAndBranding from '@/components/home/MarketingAndBranding';
import ClientsSection from '@/components/home/ClientsSection';
import HeroComponent from '@/components/home/HeroComponent';
import PropuestaValorComponent from '@/components/home/PropuestaValorComponent';
import ProjectsSection from '@/components/home/ProjectsSectionComponent';
import ContactCTA from '@/components/home/ContactCTA';

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
      <ContactCTA />
    </>
  );
}
