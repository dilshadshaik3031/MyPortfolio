import Container from './ui/Container'
import SectionTitle from './ui/SectionTitle'

export default function Experience() {
  return (
    <Container id="experience" className="py-20">
      <SectionTitle label="Experience" sub="Where I've worked & what I built" />

      <div className="mt-8 space-y-8 max-w-4xl mx-auto">

        <article className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <h3 className="font-semibold text-white text-lg">IT Support Assistant — AUM ITS</h3>
          <p className="text-gray-400 text-sm mb-4">Jan 2025 – Present · USA</p>

          <ul className="text-gray-300 space-y-2">
            <li>• Provide Tier-1 technical support for university-wide hardware, software, and network systems.</li>
            <li>• Utilize ServiceNow for ticketing and SLA tracking.</li>
            <li>• Troubleshoot AV setups, performance issues, and configurations.</li>
            <li>• Document procedures to improve IT operations.</li>
            <li>• Collaborate with senior staff to enhance reliability and performance.</li>
          </ul>
        </article>

        <article className="p-6 rounded-2xl border border-white/10 bg-white/5 backdrop-blur">
          <h3 className="font-semibold text-white text-lg">Software Engineer — Cognizant (Client: KeyBank)</h3>
          <p className="text-gray-400 text-sm mb-4">Sep 2021 – Jul 2024 · India</p>

          <ul className="text-gray-300 space-y-2">
            <li>• Developed backend Java microservices for high-volume banking systems.</li>
            <li>• Optimized APIs and workflows improving performance by 30%.</li>
            <li>• Automated CI/CD using Git, Jenkins, XLR.</li>
            <li>• SQL-based reporting and query optimization.</li>
            <li>• RCA via ServiceNow maintaining SLA compliance.</li>
            <li>• Awarded “Best Employee of the Year” + 8 recognitions.</li>
          </ul>
        </article>

      </div>
    </Container>
  )
}
