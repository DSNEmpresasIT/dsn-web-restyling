const MarketingAndBranding = () => {

  return (
    <section className="py-24 bg-surface/10 border-t border-white/5" id="branding">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          <div className="lg:col-span-1">
            <h2 className="text-3xl font-black mb-6">Marketing &amp; Branding Técnico</h2>
            <p className="text-slate-500 text-sm leading-relaxed mb-8">Comunicación estratégica para empresas de ingeniería y tecnología que necesitan hablar el mismo idioma que sus clientes.</p>
          </div>
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">branding_watermark</span>
              <div>
                <h5 className="font-bold">Identidad de Marca</h5>
                <p className="text-xs text-slate-500">Manuales de marca industriales</p>
              </div>
            </div>
            <div className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">web</span>
              <div>
                <h5 className="font-bold">Sitios Comerciales</h5>
                <p className="text-xs text-slate-500">Performance y conversión B2B</p>
              </div>
            </div>
            <div className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">campaign</span>
              <div>
                <h5 className="font-bold">Campañas Digitales</h5>
                <p className="text-xs text-slate-500">Ads segmentados por industria</p>
              </div>
            </div>
            <div className="p-6 bg-surface border border-white/5 rounded-xl flex items-center gap-4">
              <span className="material-symbols-outlined text-primary bg-primary/10 p-3 rounded">auto_mode</span>
              <div>
                <h5 className="font-bold">Automatización</h5>
                <p className="text-xs text-slate-500">CRM e Inbound para técnicos</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )

}

export default MarketingAndBranding;