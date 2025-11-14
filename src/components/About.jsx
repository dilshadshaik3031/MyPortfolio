import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'

export default function About() {
  return (
    <Container id="about">
      <SectionTitle label="About" sub="Who I am & what I do" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 leading-relaxed text-gray-300">
          <p>
            I’m a passionate software developer with experience in full-stack development, cloud computing,
            and cybersecurity. I’ve built end-to-end applications like a Bug Tracker, Heart Disease Prediction
            System, and Cloud Expense Tracker.
          </p>

          <p>
            Previously, I worked with enterprise applications at <span className="font-semibold text-white">KeyBank</span>.
            I’m currently focused on integrating Java, AWS, and AI to build impactful solutions.
          </p>
        </div>

        <div className="p-6 rounded-3xl border border-white/10 bg-white/5 backdrop-blur">
          <h3 className="font-semibold text-white mb-3">Tech Stack</h3>
          <p className="text-sm text-gray-400">See “Skills” below for full list.</p>
        </div>
      </div>
    </Container>
  )
}
