// src/components/Navbar.jsx
import { NavLink } from 'react-router-dom'
import ThemeToggle from './ui/ThemeToggle'

export default function Navbar() {
  const linkClass = ({ isActive }) =>
    `px-3 py-1 rounded-md transition ${
      isActive ? 'text-white bg-white/6' : 'text-white/70 hover:text-white'
    }`

  return (
    <nav className="w-full fixed top-0 left-0 z-50 bg-[#0b0b0d]/80 backdrop-blur-lg border-b border-white/6">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
        <NavLink to="/" className="text-xl font-bold text-white">Dilshad</NavLink>

        <div className="hidden md:flex items-center gap-4">
          <NavLink to="/" className={linkClass}>Home</NavLink>
          <NavLink to="/about" className={linkClass}>About</NavLink>
          <NavLink to="/skills" className={linkClass}>Skills</NavLink>
          <NavLink to="/projects" className={linkClass}>Projects</NavLink>
          <NavLink to="/experience" className={linkClass}>Experience</NavLink>
          <NavLink to="/contact" className={linkClass}>Contact</NavLink>

          <ThemeToggle />
        </div>

        {/* Mobile fallback */}
        <div className="md:hidden">
          <ThemeToggle />
        </div>
      </div>
    </nav>
  )
}
