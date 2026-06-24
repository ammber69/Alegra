import { useState, useEffect } from 'react'
import { Phone, Menu, X, ChevronRight } from 'lucide-react'
import './Navbar.css'

const navLinks = [
  { href: '#inicio',    label: 'Inicio' },
  { href: '#nosotros',  label: 'Quiénes Somos' },
  { href: '#servicios', label: 'Servicios' },
  { href: '#flota',     label: 'Flota' },
  { href: '#historia',  label: 'Historia' },
  { href: '#ubicacion', label: 'Ubicación' },
  { href: '#contacto',  label: 'Contacto' },
]

export default function Navbar({ onJoinClick }) {
  const [scrolled, setScrolled]       = useState(false)
  const [menuOpen, setMenuOpen]       = useState(false)
  const [activeLink, setActiveLink]   = useState('#inicio')

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 60)
      // Highlight active section
      const sections = navLinks.map(l => l.href.replace('#', ''))
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id)
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActiveLink(`#${id}`)
          break
        }
      }
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const close = () => setMenuOpen(false)

  const handleLinkClick = (e, href) => {
    e.preventDefault()
    close()
    const id = href.replace('#', '')
    const el = document.getElementById(id)
    if (!el) return
    // Use scrollTo instead of scrollIntoView — compatible with scroll-snap-type: mandatory
    const top = el.getBoundingClientRect().top + window.scrollY
    window.scrollTo({ top, behavior: 'smooth' })
  }

  return (
    <>
      <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
        <div className="navbar-inner container">
          <a href="#inicio" className="navbar-logo" onClick={e => handleLinkClick(e, '#inicio')}>
            <img src="/logoAlegra.png" alt="Transportes Alegra" className="navbar-logo-img" />
          </a>

          {/* Desktop Nav */}
          <nav className="navbar-links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Desktop CTA */}
          <div className="navbar-actions">
            <a href="tel:+522711675757" className="navbar-phone">
              <Phone size={15} />
              271 167 5757
            </a>
            <button className="btn btn-primary btn-sm" onClick={onJoinClick}>
              Únete al equipo <ChevronRight size={14} />
            </button>
          </div>

          {/* Hamburger */}
          <button
            className="navbar-hamburger"
            onClick={() => setMenuOpen(o => !o)}
            aria-label="Abrir menú"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile menu */}
        <div className={`navbar-mobile ${menuOpen ? 'open' : ''}`}>
          <nav className="navbar-mobile-links">
            {navLinks.map(link => (
              <a
                key={link.href}
                href={link.href}
                className={`navbar-mobile-link ${activeLink === link.href ? 'active' : ''}`}
                onClick={e => handleLinkClick(e, link.href)}
              >
                {link.label} <ChevronRight size={16} />
              </a>
            ))}
          </nav>
          <div className="navbar-mobile-cta">
            <a href="tel:+522711675757" className="btn btn-secondary" style={{width:'100%',justifyContent:'center'}}>
              <Phone size={16} /> Llamar: 271 167 5757
            </a>
            <button className="btn btn-primary" style={{width:'100%',justifyContent:'center'}} onClick={() => { onJoinClick(); close() }}>
              Únete al equipo
            </button>
          </div>
        </div>
      </header>

      {/* Overlay for mobile */}
      {menuOpen && <div className="navbar-overlay" onClick={close} />}
    </>
  )
}
