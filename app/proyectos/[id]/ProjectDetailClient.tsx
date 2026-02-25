'use client';

import { motion } from 'framer-motion';
import { getProjectById } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';
import { notFound } from 'next/navigation';

interface ProjectDetailClientProps {
  id: string;
}

export default function ProjectDetailClient({ id }: ProjectDetailClientProps) {
  const project = getProjectById(id);

  if (!project) {
    notFound();
  }

  return (
    <div className="bg-background-dark min-h-screen py-12 px-6">
      <div className="max-w-7xl mx-auto">
        <nav className="flex items-center gap-2 text-sm mb-12 text-slate-500">
          <Link href="/proyectos" className="hover:text-primary transition-colors">Portafolio</Link>
          <span className="material-symbols-outlined text-sm">chevron_right</span>
          <span className="text-white font-medium">{project.title}</span>
        </nav>

        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          className="relative mb-20 rounded-3xl overflow-hidden group shadow-2xl"
        >
          <div className="aspect-[21/9] w-full">
            <Image 
              className="w-full h-full object-cover grayscale-[10%] group-hover:scale-105 transition-transform duration-1000" 
              src={project.image} 
              alt={project.title}
              width={1200}
              height={500}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-background-dark/40 to-transparent" />
          </div>
          <div className="absolute bottom-0 left-0 p-8 md:p-16 w-full">
            <motion.span 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
              className="inline-block px-3 py-1 bg-primary/20 text-primary text-xs font-bold tracking-widest uppercase rounded mb-4 border border-primary/30"
            >
              {project.category}
            </motion.span>
            <motion.h1 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="text-4xl md:text-6xl font-black text-white tracking-tighter mb-4"
            >
              {project.title}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="text-slate-300 text-lg max-w-2xl font-light"
            >
              {project.description}
            </motion.p>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-8 space-y-16">
            <section>
              <div className="flex items-center gap-3 mb-8">
                <span className="material-symbols-outlined text-primary text-2xl">info</span>
                <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Contexto</h3>
              </div>
              <p className="text-slate-400 leading-relaxed font-light text-lg">
                Este proyecto representa un hito técnico en la región, donde DSN Empresas desplegó su capacidad integral de ingeniería y supervisión para garantizar la operatividad continua en condiciones críticas. El enfoque multidisciplinario permitió resolver desafíos logísticos y técnicos complejos manteniendo estándares internacionales de seguridad.
              </p>
            </section>

            {project.scope && (
              <section className="bg-surface/30 rounded-2xl p-10 border border-white/5">
                <div className="flex items-center gap-3 mb-10">
                  <span className="material-symbols-outlined text-primary text-2xl">precision_manufacturing</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Alcance técnico</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {project.scope.map((item, i) => (
                    <motion.div 
                      key={i} 
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="flex gap-4"
                    >
                      <span className="material-symbols-outlined text-primary">check_circle</span>
                      <div>
                        <h4 className="text-white font-semibold mb-2">{item.split(':')[0]}</h4>
                        <p className="text-sm text-slate-400">{item.split(':')[1]}</p>
                      </div>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}

            {project.results && (
              <section>
                <div className="flex items-center gap-3 mb-10">
                  <span className="material-symbols-outlined text-primary text-2xl">trending_up</span>
                  <h3 className="text-2xl font-bold text-white tracking-tight uppercase">Resultados e impacto</h3>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                  {project.results.map((r, i) => (
                    <motion.div 
                      key={i}
                      initial={{ opacity: 0, scale: 0.9 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.1 }}
                      className="bg-primary/5 border-l-4 border-primary p-8 rounded-r-2xl"
                    >
                      <div className="text-4xl font-black text-white mb-2">{r.value}</div>
                      <p className="text-[10px] text-slate-500 uppercase tracking-widest font-bold">{r.label}</p>
                    </motion.div>
                  ))}
                </div>
              </section>
            )}
          </div>

          <aside className="lg:col-span-4 space-y-8">
            <div className="bg-surface border border-white/5 rounded-2xl p-8 sticky top-24">
              <h4 className="text-sm font-bold text-primary uppercase tracking-widest mb-8">Detalles del proyecto</h4>
              <div className="space-y-8">
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Ubicación</p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-lg text-primary/60">location_on</span>
                    <p className="text-sm font-medium">{project.location}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Sector</p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-lg text-primary/60">hub</span>
                    <p className="text-sm font-medium">{project.sector || 'Ingeniería & Tecnología'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Año de Ejecución</p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-lg text-primary/60">calendar_today</span>
                    <p className="text-sm font-medium">{project.year || '2022'}</p>
                  </div>
                </div>
                <div>
                  <p className="text-[10px] text-slate-500 uppercase font-bold mb-2 tracking-widest">Cliente</p>
                  <div className="flex items-center gap-2 text-white">
                    <span className="material-symbols-outlined text-lg text-primary/60">account_balance</span>
                    <p className="text-sm font-medium">{project.client || 'Privado'}</p>
                  </div>
                </div>
              </div>
              <div className="mt-12 pt-12 border-t border-white/5">
                <button className="w-full bg-primary hover:bg-primary/90 text-white font-bold py-4 rounded-xl transition-all hover:scale-105">
                  Solicitar reporte técnico
                </button>
              </div>
            </div>
          </aside>
        </div>
      </div>
    </div>
  );
}
