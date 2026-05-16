import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import SectionHeading from './SectionHeading'

const TESTIMONIALS = [
  {
    quote: 'El equipo de Bufete manejó nuestra fusión empresarial con una profesionalismo y dedicación excepcionales. Su atención al detalle y conocimiento legal nos dio total tranquilidad.',
    author: 'Carlos Espinoza',
    role: 'CEO, TechCorp LATAM',
  },
  {
    quote: 'Recibí asesoría en un caso laboral complejo y lograron una resolución favorable en tiempo récord. Los recomiendo ampliamente.',
    author: 'Ana Lucía Herrera',
    role: 'Directora de RH, Grupo Nova',
  },
  {
    quote: 'Su equipo de propiedad intelectual registró nuestras marcas en 5 países. Un servicio impecable, con comunicación clara y resultados concretos.',
    author: 'Miguel Ángel Ramos',
    role: 'Fundador, InnovaBrand',
  },
]

export default function Testimonials() {
  const [current, setCurrent] = useState(0)

  return (
    <section className="py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Testimonios"
          title="Lo que dicen nuestros clientes"
          description="La satisfacción de nuestros clientes es el mejor reflejo de nuestro compromiso y calidad profesional."
        />

        <div className="max-w-3xl mx-auto">
          <AnimatePresence mode="wait">
            <motion.div
              key={current}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              className="text-center"
            >
              <svg className="w-10 h-10 mx-auto text-accent/40 mb-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10H14.017zM0 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151C7.546 6.068 5.983 8.789 5.983 11H10v10H0z" />
              </svg>
              <blockquote className="text-xl md:text-2xl text-white font-serif leading-relaxed">
                &ldquo;{TESTIMONIALS[current].quote}&rdquo;
              </blockquote>
              <div className="mt-8">
                <p className="font-semibold text-white">{TESTIMONIALS[current].author}</p>
                <p className="text-sm text-text-muted">{TESTIMONIALS[current].role}</p>
              </div>
            </motion.div>
          </AnimatePresence>

          <div className="flex items-center justify-center gap-3 mt-10">
            {TESTIMONIALS.map((_, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                  i === current ? 'bg-accent w-8' : 'bg-border hover:bg-text-muted'
                }`}
                aria-label={`Testimonio ${i + 1}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
