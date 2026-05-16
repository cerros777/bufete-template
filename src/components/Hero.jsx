import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-b from-bg-primary via-bg-primary to-bg-secondary" />
      <div className="absolute inset-0 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent rounded-full blur-[128px]" />
        <div className="absolute bottom-1/4 right-1/4 w-64 h-64 bg-teal-700 rounded-full blur-[96px]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="max-w-4xl">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass text-sm text-accent mb-8"
          >
            <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
            Excelencia Jurídica desde 2005
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-serif font-bold leading-tight"
          >
            Defendemos tus
            <br />
            <span className="gradient-text">derechos con</span>
            <br />
            compromiso total
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="mt-6 text-lg md:text-xl text-text-secondary leading-relaxed max-w-2xl"
          >
            Somos un despacho jurídico con más de 20 años de experiencia, 
            especializado en derecho corporativo, litigio y asesoría legal integral 
            para empresas y particulares.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            className="mt-10 flex flex-wrap gap-4"
          >
            <a
              href="#contacto"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl bg-accent text-bg-primary font-medium hover:bg-accent-light transition-all duration-300 shadow-lg shadow-accent/25"
            >
              Solicitar Consulta
              <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
            <a
              href="#servicios"
              className="inline-flex items-center gap-2 px-8 py-3.5 rounded-2xl glass text-white font-medium hover:bg-bg-card transition-all duration-300"
            >
              Nuestros Servicios
            </a>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className="mt-16 flex flex-wrap gap-8 md:gap-16"
          >
            {[
              { number: '+500', label: 'Casos exitosos' },
              { number: '20+', label: 'Años de experiencia' },
              { number: '98%', label: 'Satisfacción' },
            ].map((stat) => (
              <div key={stat.label}>
                <span className="text-2xl md:text-3xl font-bold gradient-text">{stat.number}</span>
                <p className="text-sm text-text-muted mt-1">{stat.label}</p>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
