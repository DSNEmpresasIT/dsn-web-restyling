import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';

const HeroComponent = () => {

  return (
    <section className="relative min-h-[90vh] flex items-center bg-background-dark hero-mesh overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background-dark to-accent-violet/5 animate-technical-gradient"></div>
      <div className="max-w-screen-2xl mx-auto px-6 grid lg:grid-cols-2 gap-16 relative z-10 py-20">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="flex flex-col justify-center"
        >
          {/* <h1 className="uppercase text-4xl sm:text-6xl xl:text-7xl 2xl:text-8xl font-semibold tracking-tighter leading-none mb-6">Confianza construida en <span className="text-primary">proyectos reales</span></h1> */}
          <h1 className="uppercase text-4xl sm:text-6xl xl:text-7xl font-semibold tracking-tighter leading-none mb-6">Soluciones de nivel global para <span className="text-primary">entornos de alta exigencia</span></h1>
          <p className="text-xl text-slate-400 max-w-lg mb-10 leading-relaxed font-light">
            Somos una Empresa Argentina especializada en diseñar, ejecutar y operar soluciones end-to-end para entornos donde no se puede fallar: aeropuertos, pasos fronterizos, industria, empresas y organismos.
          </p>
          <div className="flex flex-wrap gap-4">
            {/* <Link href="/contacto" className="bg-white hover:bg-gray-100 text-gray-900 px-8 py-4 rounded-lg font-bold flex items-center gap-2 transition-all hover:scale-105 active:scale-95 shadow-lg shadow-primary/20">
                Coordinemos una reunión técnica
                <span className="material-symbols-outlined text-lg">arrow_forward</span>
              </Link> */}
            <Link href="/contacto" className="group border border-white/10 relative inline-flex rounded-full items-center justify-center bg-white/5 py-4 pl-8 pr-14 font-medium text-neutral-50">
              <span className="z-10 pr-2 group-hover:text-gray-900 transition-colors duration-200">Coordinemos una reunión técnica</span>
              <div className="absolute right-1 inline-flex h-12 w-12 items-center justify-end rounded-full bg-white text-gray-900 transition-[width] group-hover:w-[calc(100%-8px)]"><div className="mr-3.5 flex items-center justify-center">
                <span className="material-symbols-outlined">
                  arrow_forward
                </span>
              </div>
              </div>
            </Link>
            <Link href="/proyectos" className="bg-white/5 hover:bg-white/10 border border-white/10 px-8 py-4 rounded-full font-bold transition-all">
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
              className="rounded-xl animated-hero opacity-60 grayscale-0 w-full h-full"
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
  )

}

export default HeroComponent;