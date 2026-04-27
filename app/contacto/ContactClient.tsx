'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { mailerService, Email, DEFAULT_MAIL_RECIPIENT } from '@/lib/mailer';

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.6 }
};

export default function ContactContent() {
  const [formValues, setFormValues] = useState({
    fullName: '',
    email: '',
    message: ''
  });
  const [selectedMotive, setSelectedMotive] = useState('Proyecto de Software');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await onSubmit(formValues);
    setIsSubmitting(false);
  };

  const onSubmit = async (data: typeof formValues) => {
    try {
      const payload: Email = {
        fullName: data.fullName,
        from: data.email,
        subject: `${selectedMotive} - ${data.fullName}`,
        message: `Enviado a través del formulario de contacto de DSN WEB.<br/>
                  Motivo: ${selectedMotive}<br/><br/>
                  Contenido del mensaje: ${data.message.replace(/\n/g, "<br/>")}`,
        sendTo: DEFAULT_MAIL_RECIPIENT!
      };

      await mailerService.sendEmail(payload);
      setFormValues({ fullName: '', email: '', message: '' });
      
    } catch (error) {
      console.error("Error al enviar:", error);
    }
  };

  return (
    <div className="bg-background-dark min-h-screen">
      <section className="relative py-16 md:py-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 z-0 opacity-40 pointer-events-none">
          <motion.div
            className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px]"
            style={{ background: 'linear-gradient(135deg, #3B96D1 0%, #6631E9 100%)' }}
            animate={{
              scale: [1, 2, 1],
              x: [0, -250, 0],
              y: [0, -100, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
          <motion.div
            className="absolute bottom-0 right-1/4 w-80 h-96 rounded-full blur-[100px]"
            style={{ background: 'linear-gradient(135deg, #6631E9 0%, #3B96D1 100%)' }}
            animate={{
              scale: [1, 1.2, 1],
              x: [0, 150, 0],
              y: [0, 15, 0],
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              ease: "easeInOut",
              delay: 1,
            }}
          />
        </div>
        <div className="max-w-4xl mx-auto px-4 relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className='text-5xl md:text-7xl font-semibold bg-gradient-to-r from-primary via-sky-100 to-white bg-clip-text text-transparent mb-6 leading-tight tracking-tighter max-w-[700px] m-auto'
          >
            Coordinemos una reunión técnica
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed"
          >
            Contanos qué necesitás y coordinamos el mejor momento para hablar.
          </motion.p>
        </div>
      </section>

      <section className="max-w-7xl mx-auto px-4 py-12 md:py-20">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="max-w-3xl mx-auto w-full"
        >
          <div className="bg-surface border border-white/5 rounded-2xl shadow-2xl overflow-hidden backdrop-blur-sm">
            <div className="p-8 md:p-12">
              <form onSubmit={handleSubmit} className="space-y-10">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="font-bold text-slate-200">Nombre / Empresa</label>
                    <input 
                      required
                      value={formValues.fullName}
                      onChange={(e) => setFormValues({ ...formValues, fullName: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-salte-400 placeholder:text-slate-400" 
                      placeholder="Ej: Juan Pérez - TechCorp" 
                      type="text"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="font-bold text-slate-200">Email Corporativo</label>
                    <input 
                      required
                      value={formValues.email}
                      onChange={(e) => setFormValues({ ...formValues, email: e.target.value })}
                      className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-white placeholder:text-slate-400" 
                      placeholder="nombre@empresa.com" 
                      type="email"
                    />
                  </div>
                </div>
                {/* <div className="space-y-2">
                  <label className="text-sm font-bold text-slate-400">Teléfono / WhatsApp</label>
                  <input 
                    value={formValues.phone}
                    onChange={(e) => setFormValues({ ...formValues, phone: e.target.value })}
                    className="w-full px-0 py-3 bg-transparent border-0 border-b border-slate-700 focus:ring-0 focus:border-primary transition-all outline-none text-white placeholder:text-slate-600" 
                    placeholder="+54 9 345 000 0000" 
                    type="tel"
                  />
                </div> */}
                <div className="space-y-4">
                  <label className="font-bold text-slate-200">¿Sobre qué querés hablar?</label>
                  <div className="flex flex-wrap gap-3">
                    {['Proyecto de Software', 'Infraestructura Crítica', 'Obras', 'BIM', 'Otro'].map((topic, i) => (
                      <button 
                        key={i}
                        type="button"
                        onClick={() => setSelectedMotive(topic)}
                        className={`px-4 py-2 rounded-full border text-sm font-medium transition-all ${selectedMotive === topic ? 'border-primary text-primary bg-primary/10' : 'border-slate-700 hover:border-primary hover:text-primary'}`}
                      >
                        {topic}
                      </button>
                    ))}
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="font-bold text-slate-200">Mensaje</label>
                  <textarea 
                    required
                    value={formValues.message}
                    onChange={(e) => setFormValues({ ...formValues, message: e.target.value })}
                    className="w-full px-4 py-3 bg-slate-800/30 border border-slate-700 rounded-lg focus:border-primary focus:ring-1 focus:ring-primary transition-all outline-none text-white placeholder:text-slate-400 resize-none" 
                    placeholder="Contanos más detalles sobre tu proyecto..." 
                    rows={4}
                  />
                </div>
                <motion.button 
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  disabled={isSubmitting}
                  className={`w-full bg-[radial-gradient(ellipse_at_right,_var(--tw-gradient-stops))] from-accent-violet to-primary text-white font-bold py-4 rounded-full transition-all shadow-lg shadow-primary/20 ${isSubmitting ? 'opacity-50 cursor-not-allowed' : ''}`}
                >
                  {isSubmitting ? 'Enviando...' : 'Solicitar reunión técnica'}
                </motion.button>
              </form>
            </div>
          </div>
        </motion.div>
      </section>

      <section className="py-16 border-t border-white/5">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: 'mail', title: 'Email', value: DEFAULT_MAIL_RECIPIENT },
              { icon: 'call', title: 'Teléfono', value: '+54 9 3454011406' },
              { icon: 'location_on', title: 'Ubicación', value: 'Concordia, Entre Ríos' }
            ].map((item, i) => (
              <motion.div 
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="text-center p-8 rounded-2xl bg-surface border border-white/5"
              >
                <span className="material-symbols-outlined text-primary text-3xl mb-4">{item.icon}</span>
                <h4 className="font-bold text-white mb-2">{item.title}</h4>
                <p className="text-slate-400 text-sm">{item.value}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
