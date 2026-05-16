import { motion } from 'framer-motion'
import SectionHeading from './SectionHeading'

const TEAM = [
  {
    name: 'Dr. Alejandro Mendoza',
    role: 'Socio Fundador',
    area: 'Derecho Corporativo',
    initials: 'AM',
  },
  {
    name: 'Dra. Carolina Rivas',
    role: 'Socia Directora',
    area: 'Litigio Estratégico',
    initials: 'CR',
  },
  {
    name: 'Dr. Roberto Vega',
    role: 'Asociado Senior',
    area: 'Derecho Penal',
    initials: 'RV',
  },
  {
    name: 'Dra. Mariana Solís',
    role: 'Asociada Senior',
    area: 'Propiedad Intelectual',
    initials: 'MS',
  },
]

const containerVariants = {
  hidden: {},
  visible: {
    transition: { staggerChildren: 0.1 },
  },
}

const memberVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5 },
  },
}

export default function Team() {
  return (
    <section id="equipo" className="py-24 md:py-32 bg-bg-secondary">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <SectionHeading
          label="Equipo"
          title="Profesionales de primer nivel"
          description="Contamos con un equipo multidisciplinario de abogados altamente especializados, comprometidos con la excelencia y la defensa de tus intereses."
        />

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6"
        >
          {TEAM.map((member) => (
            <motion.div
              key={member.name}
              variants={memberVariants}
              className="group text-center p-6 rounded-2xl bg-bg-card border border-border hover:border-accent/30 transition-all duration-500"
            >
              <div className="w-24 h-24 mx-auto rounded-2xl bg-gradient-to-br from-accent/20 to-teal-800/30 flex items-center justify-center mb-5 group-hover:from-accent/30 group-hover:to-teal-700/40 transition-all duration-500">
                <span className="text-2xl font-bold gradient-text">{member.initials}</span>
              </div>
              <h3 className="text-lg font-semibold text-white">{member.name}</h3>
              <p className="text-accent text-sm font-medium mt-1">{member.role}</p>
              <p className="text-text-muted text-sm mt-1">{member.area}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}
