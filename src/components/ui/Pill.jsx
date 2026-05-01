export default function Pill({ children, className = '' }) {
  return (
    <span className={`px-3 py-1 rounded-full text-sm bg-white/10 text-white border border-white/10 ${className}`}>
      {children}
    </span>
  )
}
