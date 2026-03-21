import { motion } from 'framer-motion';
import Link from 'next/link';
import { Project } from '@/lib/projects';

interface ProjectCardProps {
  project: Project;
  index: number;
}

const ProjectCard = ({ project: p, index: i }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3, delay: i * 0.04, ease: "easeOut" }}
      className="group relative overflow-hidden rounded-2xl border border-white/5 bg-slate-800 hover:border-primary/50 transition-all"
    >
      <Link href={`/proyectos/${p.id}`}>
        <div className="overflow-hidden relative">
          {/* <Image 
            className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110" 
            src={p.image}
            alt={p.title}
            width={400}
            height={300}
          /> */}
          <div className="absolute inset-0 bg-gradient-to-t from-background-dark via-transparent to-transparent opacity-80" />
          <div className="absolute top-4 left-4">
            <span className="bg-primary/50 backdrop-blur-md border border-primary/30 px-3 py-1 rounded text-[10px] font-bold uppercase text-white">
              {p.category}
            </span>
          </div>
        </div>
        <div className="p-6">
          {/* <div className="flex items-center gap-2 text-primary mb-2">
            <span className="material-symbols-outlined text-sm">location_on</span>
            <span className="text-[10px] font-semibold tracking-wider uppercase text-slate-400">{p.location}</span>
          </div> */}
          <h3 className="text-xl font-bold text-white mb-3 group-hover:text-primary transition-colors">{p.title}</h3>
          <p className="text-slate-500 text-sm mb-6 line-clamp-2">{p.description}</p>
          <div className="flex items-center gap-2 text-white font-bold text-xs hover:text-primary transition-colors">
            Ver detalle <span className="material-symbols-outlined text-sm">chevron_right</span>
          </div>
        </div>
      </Link>
    </motion.div>
  )

}

export default ProjectCard;