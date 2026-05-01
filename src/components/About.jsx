import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'

export default function About() {
  return (
    <Container id="about">
      <SectionTitle label="About" sub="Who I am & what I do" />

      <div className="grid md:grid-cols-2 gap-8">
        <div className="space-y-4 leading-relaxed text-gray-300">
          <p>
            
        Software Engineer with experience in cloud-native applications, AI/ML systems, and scalable full-stack development.
        Skilled in Java, Python, React, Node.js, Spring Boot, REST APIs, Docker, AWS, and IBM Cloud technologies.
    </p>
          <p>
          Currently pursuing a Master’s in Computer Science at Auburn University at Montgomery with interests in
          machine learning, distributed systems, backend engineering, and AI-driven healthcare applications.
                    </p>
                    <p>
        Experienced in developing real-world applications, deploying cloud-based systems, and applying machine learning
        techniques to solve practical problems through research-oriented projects.
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
