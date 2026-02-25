'use client';

import { METRICS, SERVICES, PROJECTS } from '@/lib/data';
import { AnimatedNumber } from '@/components/AnimatedNumber';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function Home() {
  return (
    <>
      <section className="relative min-h-[90vh] flex items-center bg-background-dark hero-mesh overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-dark to-accent-violet/5 animate-technical-gradient"></div>
        <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 py-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col justify-center"
          >
            <h1 className="text-6xl font-black tracking-tighter leading-none mb-6  md:text-6xl">Alta disponibilidad no es una promesa. <span className="text-primary">Es diseño.</span></h1>
            <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
              Ingeniería y software de calidad diseñados para alta demanda y disponibilidad. Operamos el núcleo crítico de organizaciones modernas.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contacto" className="bg-primary hover:bg-primary/90 text-white px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                Coordinemos una reunión técnica
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link>
              <Link href="/proyectos" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-lg font-bold transition-all">
                Ver capacidades
              </Link>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotate: -2 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, delay: 0.2 }}
            className="relative hidden lg:block"
          >
            <div className="absolute -inset-10 bg-primary/20 blur-[120px] rounded-full"></div>
            <div className="relative border border-white/10 bg-surface/50 rounded-2xl p-4 backdrop-blur-sm overflow-hidden group">
              <Image
                className="rounded-xl animated-hero opacity-60 grayscale-0"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuCLNI0kFe_ZK7egnf6HEmy8FPdaPrLyIgFaJbcvemG44BfcqDYrwT5U9Fc0YUKvs-FYH3uEsnglkcu33uoEaWIK6az6jKhPwnt_7GKXu77emLUHSOmYa45zHpcCtq5S3bJDN8ega2tb0tuKnohhW4ItBxxwTqEwDIlkCGQlNjqJTjYdQIPAVp_NRi915fES7N5CC_Ng2YYmAvytzGsuq2hZZ-cutSF0v0-lR_vbHx6r86JpujGLfHRr6OE-sTYRTV0HytQuKQXFkRY"
                alt="Server Rack"
                width={600}
                height={400}
              />
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-8">
                <div className="bg-background-dark/80 border border-white/10 p-6 rounded-lg backdrop-blur-xl">
                  <div className="flex items-center gap-4 mb-4">
                    <span className="material-symbols-outlined text-primary">analytics</span>
                    <span className="text-xs font-bold tracking-widest uppercase">System Core Status</span>
                  </div>
                  <div className="space-y-3">
                    {[92, 78, 85].map((w, i) => (
                      <div key={i} className="h-1 bg-white/5 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: `${w}%` }}
                          transition={{ duration: 1.5, delay: 0.5 + i * 0.2 }}
                          className={`h-full ${i === 1 ? 'bg-accent-violet' : 'bg-primary'}`}
                        />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-background-dark border-y border-white/5">
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
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="text-center mb-16">
            <h2 className="text-3xl font-bold mb-4 tracking-tight">Propuesta de Valor</h2>
            <div className="w-20 h-1 bg-primary mx-auto"></div>
          </motion.div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {SERVICES.map((s, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -5, backgroundColor: "rgba(18, 24, 38, 0.5)" }}
                className="p-8 border border-white/5 bg-surface/30 rounded-xl transition-all group"
              >
                <span className="material-symbols-outlined text-primary text-4xl mb-6 group-hover:scale-110 transition-transform inline-block">{s.icon}</span>
                <h4 className="text-xl font-bold mb-3">{s.title}</h4>
                <p className="text-slate-400 text-sm leading-relaxed">{s.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24" id="proyectos">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div {...fadeIn} className="flex items-center gap-4 mb-16">
            <div className="h-px bg-white/10 flex-1"></div>
            <h2 className="text-2xl font-bold tracking-widest uppercase">Casos de Éxito</h2>
            <div className="h-px bg-white/10 flex-1"></div>
          </motion.div>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {PROJECTS.slice(0, 2).map((p, i) => (
              <motion.div
                key={i}
                {...fadeIn}
                whileHover={{ y: -5 }}
                className="group cursor-pointer"
              >
                <Link href={`/proyectos/${p.id}`}>
                  <div className="aspect-[16/9] overflow-hidden rounded-2xl mb-6 relative">
                    <Image
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 scale-105 group-hover:scale-100"
                      src={p.image}
                      alt={p.title}
                      width={800}
                      height={450}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-60"></div>
                  </div>
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-primary text-xs font-bold uppercase tracking-widest mb-2">{p.category}</p>
                      <h3 className="text-2xl font-bold group-hover:text-primary transition-colors">{p.title}</h3>
                      <p className="text-slate-400 mt-2">{p.description}</p>
                    </div>
                    <span className="material-symbols-outlined text-3xl opacity-0 group-hover:opacity-100 transition-opacity">open_in_new</span>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
          <div className="mt-16 text-center">
            <Link href="/proyectos" className="text-primary font-bold inline-flex items-center gap-2 group hover:gap-4 transition-all">
              Explorar portafolio completo
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </Link>
          </div>
        </div>
      </section>

      <section className="py-24">
        <div className="max-w-7xl mx-auto px-6">
          <motion.div
            {...fadeIn}
            className="relative bg-surface border border-white/10 rounded-3xl p-12 md:p-24 overflow-hidden text-center"
          >
            <div className="absolute inset-0 hero-mesh opacity-20"></div>
            <div className="relative z-10">
              <h2 className="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tighter">
                De la ingeniería a la operación,<br /><span className="text-primary">con evidencia y garantía.</span>
              </h2>
              <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-12 font-light">
                Estamos listos para su próximo desafío de alta disponibilidad. Nuestro equipo técnico responderá en menos de 24 horas.
              </p>
              <Link href="/contacto" className="bg-primary hover:bg-primary/90 text-white px-10 py-5 rounded-xl font-bold text-lg shadow-2xl shadow-primary/20 transition-all hover:scale-105">
                Agendar consulta técnica gratuita
              </Link>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  );
}
