import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const VALUES = [
  {
    title: 'Excelencia',
    description: 'Buscamos la más alta calidad en cada servicio legal que ofrecemos.',
  },
  {
    title: 'Integridad',
    description: 'Actuamos con honestidad, transparencia y ética profesional inquebrantable.',
  },
  {
    title: 'Compromiso',
    description: 'Nos dedicamos por completo a la defensa de los intereses de nuestros clientes.',
  },
  {
    title: 'Innovación',
    description: 'Aplicamos tecnología y metodologías modernas para una asesoría más eficiente.',
  },
]

export default function About() {
  return (
    <section id="nosotros" className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Nosotros"
          title="Más de dos décadas de experiencia jurídica"
          description="Fundado en 2005, nuestro despacho ha crecido hasta convertirse en un referente en el sector legal, combinando tradición jurídica con innovación."
        />

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative"
          >
            <div className="relative overflow-hidden rounded-2xl">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/20 to-teal-900/40 rounded-2xl flex items-center justify-center">
                <div className="text-center p-12">
                  <span className="text-6xl font-serif font-bold gradient-text">20+</span>
                  <p className="text-text-secondary mt-2">Años de experiencia</p>
                </div>
              </div>
            </div>
            <div className="absolute -bottom-6 -right-6 w-32 h-32 rounded-2xl bg-accent/10 border border-accent/20 flex items-center justify-center backdrop-blur-sm">
              <span className="text-3xl font-bold gradient-text">+500</span>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <h3 className="text-2xl md:text-3xl font-serif font-semibold text-white mb-6">
              Nuestra Filosofía
            </h3>
            <p className="text-text-secondary leading-relaxed mb-8">
              Creemos en un derecho cercano, transparente y eficaz. Cada caso es único 
              y merece una estrategia personalizada. Nuestro equipo multidisciplinario 
              trabaja de forma coordinada para ofrecer soluciones jurídicas integrales 
              que anticipan y resuelven las necesidades legales de nuestros clientes.
            </p>

            <div className="grid sm:grid-cols-2 gap-4">
              {VALUES.map((value, i) => (
                <motion.div
                  key={value.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.1 }}
                  className="p-5 rounded-2xl bg-bg-card border border-border"
                >
                  <span className="text-accent font-semibold text-sm">{String(i + 1).padStart(2, '0')}</span>
                  <h4 className="text-white font-medium mt-2 mb-1">{value.title}</h4>
                  <p className="text-sm text-text-secondary">{value.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
