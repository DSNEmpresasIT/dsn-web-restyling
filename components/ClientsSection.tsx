const ClientsSection = () => {

  return (
    <section className="py-24 bg-background-dark">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-center text-slate-500 text-xs font-bold uppercase tracking-[0.3em] mb-16">Confían en nuestra evidencia técnica</h2>
        <div className="space-y-16">
          <div>
            <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Organismos e Instituciones</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">MUNICIPALIDAD</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">GOBIERNO</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">CONCORDIA</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">SALTO GRANDE</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">CAFES</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">ENOHSA</div>
            </div>
          </div>
          <div>
            <h3 className="text-sm font-bold text-slate-400 mb-8 px-4 border-l-2 border-primary">Aeropuertos y Privados</h3>
            <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-8 opacity-40 grayscale hover:grayscale-0 transition-all">
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">AIRPORT_X</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">LOGISTIC_CO</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">CORP_CENTRE</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">IND_FOODS</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">TECH_TOWER</div>
              <div className="h-12 flex items-center justify-center font-black text-xl italic tracking-widest uppercase">BUILD_INC</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default ClientsSection;