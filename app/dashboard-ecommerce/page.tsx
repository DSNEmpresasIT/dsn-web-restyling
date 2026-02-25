const Login = () => {
  return (
    <div className="bg-background-light dark:bg-background-dark font-display text-slate-900 dark:text-slate-100 min-h-screen" >
      <div className="flex min-h-screen w-full flex-col lg:flex-row">
        <div className="relative hidden w-full lg:flex lg:w-1/2 flex-col justify-between p-12 overflow-hidden bg-slate-900 border-r border-slate-800">
          <div className="absolute inset-0 grid-pattern opacity-40"></div>
          <div className="absolute inset-0 tech-gradient"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[60%] opacity-20 bg-primary blur-[120px] rounded-full"></div>

          <div className="relative z-10 h-full flex flex-col">
            <div className="flex items-center gap-3 mb-12">
              <div className="size-10 bg-primary rounded-lg flex items-center justify-center shadow-lg shadow-primary/20">
                <span className="material-symbols-outlined text-white text-2xl">hub</span>
              </div>
              <h2 className="text-white text-xl font-extrabold tracking-tight">DSN EMPRESAS</h2>
            </div>
            <div className="space-y-6 my-auto">
              <h1 className="text-white text-5xl font-black leading-tight tracking-tight">
                Acceso Clientes DSN
              </h1>
              <p className="text-slate-400 text-lg leading-relaxed font-light max-w-lg">
                Ingresá para administrar tu plataforma y operar con continuidad. Control total sobre tu infraestructura crítica.
              </p>
            </div>
          </div>

          {/* <div className="relative z-10 w-full aspect-video rounded-xl border border-white/10 bg-slate-800/50 backdrop-blur-sm overflow-hidden flex items-center justify-center group">
            <img alt="Infraestructura de red DSN" className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-700" data-alt="Abstract dark server room with blue LED lighting and network cables" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhIwT2u1E3Dy_jx5bex5W2FmB8aOPwv9ssIaOSJYglI1OmrAsQZDWu_sIii7sWc_zFLG9SO5M2DU1a6SYUxC3sB7tZbggl3iy3W6GpBnB3JC-VkEkjuhGkwiA-3lEuq4B3JBJ8y0IDeNBhg8L61K1c0uidJkhFy2T5h3PLwS7ftaToz4pgGQxU2NIf0qIbOv5ysGiSOxZtEptmjXgn105HH-FTQetQy39hZCOQgXZFtfAhnMCBrj8-96sqKMAtsLId13JHj1fw4YE" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="absolute bottom-6 left-6 flex items-center gap-2">
              <div className="size-2 rounded-full bg-emerald-500 animate-pulse"></div>
              <span className="text-xs font-mono text-emerald-400 uppercase tracking-widest">Sistemas Operativos - Status: Nominal</span>
            </div>
          </div> */}
          <div className="relative z-10 grid grid-cols-2 gap-8 border-t border-white/5 pt-8">
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Soporte técnico</p>
              <p className="text-slate-300 font-medium">24–48 hs hábiles</p>
            </div>
            <div>
              <p className="text-slate-500 text-xs font-bold uppercase tracking-wider mb-2">Base operativa</p>
              <p className="text-slate-300 font-medium">Concordia, Entre Ríos</p>
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col lg:w-1/2 items-center justify-center p-6 lg:p-12 bg-background-light dark:bg-background-dark">
          <div className="lg:hidden flex items-center gap-2 mb-12">
            <div className="size-8 bg-primary rounded flex items-center justify-center">
              <span className="material-symbols-outlined text-white text-xl">hub</span>
            </div>
            <h2 className="dark:text-white text-slate-900 text-lg font-bold">DSN Empresas</h2>
          </div>
          <div className="w-full max-w-[440px] space-y-8">
            <div className="text-center lg:text-left">
              <h2 className="text-slate-900 dark:text-white text-3xl font-bold tracking-tight mb-2">Iniciar sesión</h2>
              <p className="text-slate-500 dark:text-slate-400">Accedé con tu correo corporativo y contraseña.</p>
            </div>
            <form className="space-y-5">
              <div className="space-y-2">
                <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                  Email Corporativo
                </label>
                <div className="relative">
                  <input className="w-full h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="nombre@empresa.com" type="email" />
                </div>
              </div>
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-sm font-semibold text-slate-700 dark:text-slate-300">
                    Contraseña
                  </label>
                  <a className="text-sm font-medium text-primary hover:underline" href="#">¿Olvidaste tu contraseña?</a>
                </div>
                <div className="relative group">
                  <input className="w-full h-12 bg-white dark:bg-slate-800/50 border border-slate-200 dark:border-slate-700 rounded-lg px-4 pr-12 text-slate-900 dark:text-white placeholder:text-slate-400 focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none" placeholder="••••••••" type="password" />
                  <button className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined">visibility</span>
                  </button>
                </div>
              </div>
              <button className="w-full h-12 bg-primary hover:bg-primary/90 text-white font-bold rounded-lg shadow-lg shadow-primary/20 transition-all flex items-center justify-center gap-2 mt-4">
                <span>Iniciar sesión</span>
                <span className="material-symbols-outlined text-xl">login</span>
              </button>
            </form>
            <div className="p-4 bg-slate-100 dark:bg-slate-800/40 rounded-lg border border-slate-200 dark:border-slate-700/50 flex gap-3">
              <span className="material-symbols-outlined text-slate-400 shrink-0">info</span>
              <p className="text-xs text-slate-500 dark:text-slate-400 leading-normal">
                Si necesitás acceso, solicitá el alta de tu cuenta con tu ejecutivo técnico asignado.
              </p>
            </div>
            <footer className="pt-8 border-t border-slate-200 dark:border-slate-800 flex flex-wrap justify-center lg:justify-start gap-x-8 gap-y-2">
              <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Contacto</a>
              <a className="text-xs text-slate-400 hover:text-primary transition-colors" href="#">Soporte</a>
              <span className="text-xs text-slate-500">© <span id="year">2026</span> DSN Infraestructura</span>
            </footer>
          </div>
        </div>
      </div>
    </div >
  )
}

export default Login;