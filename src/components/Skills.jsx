import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'
import Pill from './ui/Pill'
import SKILLS from '../data/skillsData'

export default function Skills() {
  const flat = Object.values(SKILLS).flat()

  return (
    <Container id="skills">
      <SectionTitle label="Skills" sub="Core technologies I work with" />

      <div className="flex flex-wrap gap-2 justify-center">
        {flat.map(s => (
          <Pill key={s}>{s}</Pill>
        ))}
      </div>
    </Container>
  )
}
