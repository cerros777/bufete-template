import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const CONTACT_INFO = [
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    ),
    label: 'Ubicación',
    value: 'Av. Reforma 255, Col. Juárez, CDMX',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
      </svg>
    ),
    label: 'Teléfono',
    value: '+52 (55) 1234 5678',
  },
  {
    icon: (
      <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
      </svg>
    ),
    label: 'Email',
    value: 'contacto@bufete.mx',
  },
]

export default function Contact() {
  return (
    <section id="contacto" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Contacto"
          title="Hablemos de tu caso"
          description="Agenda una consulta inicial sin costo. Analizaremos tu situación legal y te propondremos la mejor estrategia."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <div className="space-y-6">
              {CONTACT_INFO.map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-xl bg-accent/10 flex items-center justify-center text-accent shrink-0">
                    {item.icon}
                  </div>
                  <div>
                    <p className="text-sm text-text-muted">{item.label}</p>
                    <p className="text-white font-medium">{item.value}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="mt-10 p-6 rounded-2xl glass">
              <p className="text-sm text-text-secondary leading-relaxed">
                <span className="text-accent font-semibold">Horario de atención:</span>
                <br />
                Lunes a Viernes: 9:00 - 19:00
                <br />
                Sábados: 10:00 - 14:00
              </p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="space-y-5"
          >
            <div className="grid sm:grid-cols-2 gap-5">
              <input
                type="text"
                placeholder="Nombre completo"
                className="w-full px-5 py-3.5 rounded-2xl bg-bg-card border border-border text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-300"
              />
              <input
                type="email"
                placeholder="Correo electrónico"
                className="w-full px-5 py-3.5 rounded-2xl bg-bg-card border border-border text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-300"
              />
            </div>
            <input
              type="tel"
              placeholder="Teléfono"
              className="w-full px-5 py-3.5 rounded-2xl bg-bg-card border border-border text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-300"
            />
            <select className="w-full px-5 py-3.5 rounded-2xl bg-bg-card border border-border text-text-muted focus:outline-none focus:border-accent transition-colors duration-300">
              <option value="">Área de interés</option>
              <option value="corporativo">Derecho Corporativo</option>
              <option value="litigio">Litigio Estratégico</option>
              <option value="penal">Derecho Penal</option>
              <option value="intelectual">Propiedad Intelectual</option>
              <option value="fiscal">Derecho Fiscal</option>
              <option value="laboral">Derecho Laboral</option>
            </select>
            <textarea
              rows={4}
              placeholder="Describe tu caso brevemente..."
              className="w-full px-5 py-3.5 rounded-2xl bg-bg-card border border-border text-white placeholder-text-muted focus:outline-none focus:border-accent transition-colors duration-300 resize-none"
            />
            <button
              type="submit"
              className="w-full px-8 py-3.5 rounded-2xl bg-accent text-bg-primary font-medium hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/25"
            >
              Enviar Mensaje
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  )
}
