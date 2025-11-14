export default function Container({ children, id }) {
  return (
    <section id={id} className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
      {children}
    </section>
  )
}
