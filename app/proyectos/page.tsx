'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { PROJECTS } from '@/lib/projects';
import ProjectCard from '@/components/proyectos/ProjectCard';

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
          <h1 className="text-5xl md:text-7xl font-semibold bg-gradient-to-r from-primary via-sky-100 to-white bg-clip-text text-transparent mb-6 leading-tight tracking-tighter uppercase max-w-[700px] m-auto">
            Proyectos en operación crítica
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
            Ingeniería, software e infraestructura ejecutada para entornos donde no se puede fallar. Garantía técnica de nivel institucional.
          </p>
        </motion.div>
        <div className="flex flex-wrap justify-center gap-4 mb-16 overflow-x-auto pb-4">
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
          {filteredProjects.map((p: any, i) => (
            <ProjectCard key={p.id} project={p} index={i} />
          ))}
        </div>
      </div>
    </div>
  );
}
