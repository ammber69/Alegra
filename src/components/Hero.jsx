import { useEffect, useRef, useState } from 'react'
import { ChevronDown, ArrowRight, Phone } from 'lucide-react'
import './Hero.css'

export default function Hero({ onQuoteClick, onJoinClick }) {
  const [scrollY, setScrollY] = useState(0)
  const heroRef = useRef(null)

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll, { passive: true })
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const scrollDown = () => {
    const el = document.getElementById('nosotros')
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
  }

  const parallaxOffset = scrollY * 0.4

  return (
    <section id="inicio" className="hero snap-section" ref={heroRef}>
      {/* Parallax background */}
      <div
        className="hero-bg"
        style={{ transform: `translateY(${parallaxOffset}px)` }}
      />

      {/* Gradient overlay */}
      <div className="hero-overlay" />

      {/* Brand stripe */}
      <div className="hero-stripe">
        <span></span><span></span><span></span>
      </div>

      <div className="hero-content container">
        <div className="hero-badge">
          <span className="hero-badge-dot" />
          Más de 24 años al servicio de México
        </div>

        <h1 className="hero-title">
          Transporte confiable
          <br />
          <span className="hero-title-accent">que mueve a México</span>
        </h1>

        <p className="hero-subtitle">
          Conectamos empresas de todo el país con soluciones de transporte
          <br className="desktop-only" />
          en cajas secas y tolvas. Seguridad, puntualidad y compromiso veracruzano.
        </p>

        <div className="hero-stats">
          <div className="hero-stats-main">
            <div className="hero-stat">
              <span className="hero-stat-num">+24</span>
              <span className="hero-stat-label">Años de experiencia</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">100%</span>
              <span className="hero-stat-label">Crecimiento orgánico</span>
            </div>
            <div className="hero-stat-divider" />
            <div className="hero-stat">
              <span className="hero-stat-num">GPS</span>
              <span className="hero-stat-label">Rastreo en tiempo real</span>
            </div>
          </div>
          
          <div className="hero-stats-secondary">
            <div className="hero-stat">
              <span className="hero-stat-num">24/7</span>
              <span className="hero-stat-label">Soporte disponible</span>
            </div>
          </div>
        </div>

        <div className="hero-actions">
          <button className="btn btn-primary btn-lg hero-btn-quote" onClick={onQuoteClick}>
            Cotiza tu carga <ArrowRight size={18} />
          </button>
          <button className="btn btn-outline btn-lg" onClick={onJoinClick}>
            Únete a nuestro equipo
          </button>
          <a href="tel:+522713934494" className="btn btn-lg hero-btn-phone">
            <Phone size={17} /> 271 393 4494
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <button className="hero-scroll-btn" onClick={scrollDown} aria-label="Scroll hacia abajo">
        <span className="hero-scroll-text">Descubre más</span>
        <ChevronDown size={22} className="hero-scroll-icon" />
      </button>

      {/* Bottom city silhouette */}
      <div className="hero-bottom-fade" />
    </section>
  )
}
