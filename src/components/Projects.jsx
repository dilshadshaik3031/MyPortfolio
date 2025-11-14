import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'
import Pill from './ui/Pill'
import Button from './ui/Button'
import PROJECTS from '../data/projectsData'
import { motion } from 'framer-motion'

export default function Projects() {
  return (
    <Container id="projects">
      <SectionTitle label="Projects" sub="Real work that demonstrates my skills" />

      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PROJECTS.map(p => (
          <motion.article
            key={p.title}
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.4 }}
            className="p-5 rounded-3xl border border-white/10 bg-white/5 backdrop-blur shadow-sm"
          >
            <h3 className="font-semibold text-white text-lg">{p.title}</h3>
            <p className="mt-2 text-gray-300 text-sm">{p.description}</p>

            <div className="mt-3 flex flex-wrap gap-2">
              {p.tags.map(t => <Pill key={t}>{t}</Pill>)}
            </div>

            {p.repo && (
              <div className="mt-4">
                <Button variant="outline" href={p.repo}>GitHub</Button>
              </div>
            )}
          </motion.article>
        ))}
      </div>
    </Container>
  )
}
