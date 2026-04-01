import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { getProjectById } from '@/lib/projects';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

const ProjectsSection = () => {

  const FEATURED_PROJECTS = [
    getProjectById("aeropuerto-comodoro-pierrestegui"),
    getProjectById("edificio-panorama-xxi")
  ];

  return (
    <section className="py-24" id="proyectos">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div {...fadeIn} className="flex items-center gap-4 mb-16">
          <div className="h-px bg-white/10 flex-1"></div>
          <h2 className="mb-4 tracking-tight text-4xl md:text-7xl uppercase font-semibold bg-gradient-to-r from-primary via-sky-100 to-white bg-clip-text text-transparent">Casos de Éxito</h2>
          <div className="h-px bg-white/10 flex-1"></div>
        </motion.div>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {FEATURED_PROJECTS.map((p, i) => (
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
                    <p className="text-slate-400 mt-2 line-clamp-3">{p.description}</p>
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
  )

}

export default ProjectsSection;