'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/data';
import Link from 'next/link';
import Image from 'next/image';

const categories = ['Todos', 'Infraestructura', 'Software', 'BIM'];

export default function ProjectsPage() {
  const [filter, setFilter] = useState('Todos');

  const filteredProjects = PROJECTS.filter(p => 
    filter === 'Todos' || p.category.toLowerCase().includes(filter.toLowerCase())
  );

  return (
    <div className="bg-background-dark min-h-screen py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-20"
        >
          <h1 className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tighter">
            Proyectos en <span className="text-primary">operación crítica</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ingeniería, software e infraestructura ejecutada para entornos donde no se puede fallar. Garantía técnica de nivel institucional.
          </p>
        </motion.div>

        <div className="flex justify-center gap-4 mb-16 overflow-x-auto pb-4">
          {categories.map((c) => (
            <button 
              key={c}
              onClick={() => setFilter(c)}
              className={`px-6 py-2 rounded-lg text-sm font-bold border transition-all whitespace-nowrap ${filter === c ? 'bg-primary border-primary text-white shadow-lg shadow-primary/20' : 'bg-white/5 border-white/10 text-slate-400 hover:bg-white/10 hover:text-white'}`}
            >
              {c}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredProjects.map((p, i) => (
              <motion.div 
                key={p.id}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
                className="group relative overflow-hidden rounded-2xl border border-white/5 bg-surface hover:border-primary/50 transition-all"
              >
                <Link href={`/proyectos/${p.id}`}>
                  <div className="aspect-[4/3] overflow-hidden relative">
                    <Image 
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
                      src={p.image} 
                      alt={p.title}
                      width={400}
                      height={300}
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-primary/20 backdrop-blur-md border border-primary/30 px-3 py-1 rounded text-[10px] font-bold uppercase text-primary">
                        {p.category}
                      </span>
                    </div>
                  </div>
                  <div className="p-6">
                    <div className="flex items-center gap-2 text-primary mb-2">
                      <span className="material-symbols-outlined text-sm">location_on</span>
                      <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">{p.location}</span>
                    </div>
                    <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
                    <p className="text-slate-500 text-sm mb-6 line-clamp-2">{p.description}</p>
                    <div className="flex items-center gap-2 text-white font-bold text-xs hover:text-primary transition-colors">
                      Ver detalle <span className="material-symbols-outlined text-sm">chevron_right</span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
        </div>
      </div>
    </div>
  );
}
