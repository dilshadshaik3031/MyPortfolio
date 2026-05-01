export default function SectionTitle({ label, sub }) {
  return (
    <div className="text-center mb-10">
      <h1 className="text-4xl font-extrabold text-white">{label}</h1>
      {sub && <p className="text-gray-400 mt-2">{sub}</p>}
    </div>
  )
}
