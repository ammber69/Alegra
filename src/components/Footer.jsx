import { MapPin, Phone, Mail, ArrowUp, MessageCircle } from 'lucide-react'
import './Footer.css'

const WHATSAPP = '522713934494'

const quickLinks = [
  { label: 'Inicio',        href: '#inicio' },
  { label: 'Quiénes Somos', href: '#nosotros' },
  { label: 'Servicios',     href: '#servicios' },
  { label: 'Nuestra Flota', href: '#flota' },
  { label: 'Historia',      href: '#historia' },
  { label: 'Ubicación',     href: '#ubicacion' },
  { label: 'Contacto',      href: '#contacto' },
]

const services = [
  'Carga en Cajas Secas (Full)',
  'Carga en Cajas Secas (Sencillo)',
  'Transporte Granelero (Tolvas)',
  'Rutas Nacionales',
  'Servicio Dedicado',
]

export default function Footer() {
  const scrollToTop = () => window.scrollTo({ top: 0, behavior: 'smooth' })

  const handleLink = (e, href) => {
    e.preventDefault()
    const el = document.getElementById(href.replace('#', ''))
    if (!el) return
    window.scrollTo({ top: el.getBoundingClientRect().top + window.scrollY, behavior: 'smooth' })
  }

  return (
    <footer className="footer">
      <div className="footer-stripe">
        <span /><span /><span />
      </div>

      <div className="container">
        <div className="footer-grid">
          {/* Brand */}
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="/logoAlegra.png" alt="Transportes Alegra Logo" className="footer-logo-img" />
              <div>
                <p className="footer-logo-name">Transportes Alegra</p>
                <p className="footer-logo-legal">Auto Líneas Especializadas en Graneles, S.A. de C.V.</p>
              </div>
            </div>
            <p className="footer-tagline">
              Más de 24 años conectando a México con transporte de carga confiable,
              puntual y con orgullo veracruzano.
            </p>

            <div className="footer-contact-items">
              <a href="tel:+522713934494" className="footer-contact-item">
                <Phone size={15} /> 271 393 4494
              </a>
              <a href="mailto:alegrarh.operadores@outlook.com" className="footer-contact-item">
                <Mail size={15} /> alegrarh.operadores@outlook.com
              </a>
            </div>

            <div className="footer-social">
              <a href="#" onClick={e => e.preventDefault()} className="footer-social-link" aria-label="Facebook" title="Próximamente Facebook">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="footer-social-link" aria-label="Instagram" title="Próximamente Instagram">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
              </a>
              <a href="#" onClick={e => e.preventDefault()} className="footer-social-link" aria-label="TikTok" title="Próximamente TikTok">
                <svg viewBox="0 0 24 24" fill="currentColor" width="18" height="18">
                  <path d="M19.59 6.69a4.83 4.83 0 01-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 01-2.88 2.5 2.89 2.89 0 01-2.89-2.89 2.89 2.89 0 012.89-2.89c.28 0 .54.04.79.1V9.01a6.33 6.33 0 00-.79-.05 6.34 6.34 0 00-6.34 6.34 6.34 6.34 0 006.34 6.34 6.34 6.34 0 006.33-6.34V8.69a8.27 8.27 0 004.84 1.54V6.79a4.85 4.85 0 01-1.07-.1z"/>
                </svg>
              </a>
              <a
                href={`https://wa.me/${WHATSAPP}`}
                target="_blank"
                rel="noopener noreferrer"
                className="footer-social-link footer-social-link--wa"
                aria-label="WhatsApp"
              >
                <MessageCircle size={18} />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div className="footer-col">
            <h4 className="footer-col-title">Navegación</h4>
            <ul className="footer-links">
              {quickLinks.map(l => (
                <li key={l.href}>
                  <a href={l.href} className="footer-link" onClick={e => handleLink(e, l.href)}>
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="footer-col">
            <h4 className="footer-col-title">Servicios</h4>
            <ul className="footer-links">
              {services.map(s => (
                <li key={s}>
                  <a href="#servicios" className="footer-link" onClick={e => handleLink(e, '#servicios')}>
                    {s}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Address / CTA */}
          <div className="footer-col footer-map-col">
            <h4 className="footer-col-title">Ubicación</h4>
            <p className="footer-address-text">
              Carr. Federal Córdoba-Veracruz Km 10.5,<br />
              La Palma / Venta Parada,<br />
              Amatlán de los Reyes, Veracruz.
            </p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=18.850231169693128,-96.84452144828084"
              target="_blank"
              rel="noopener noreferrer"
              className="footer-map-link"
            >
              <MapPin size={14} /> Ver en Google Maps
            </a>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom">
          <p className="footer-copy">
            © 2026 <strong>Transportes Alegra</strong> · Auto Líneas Especializadas en Graneles, S.A. de C.V. · Todos los derechos reservados.
          </p>
          <p className="footer-seo-links">
            <a href="#servicios" onClick={e => handleLink(e, '#servicios')}>Transporte de carga Veracruz</a>
            {' · '}
            <a href="#servicios" onClick={e => handleLink(e, '#servicios')}>Fletes Córdoba</a>
            {' · '}
            <a href="#servicios" onClick={e => handleLink(e, '#servicios')}>Cajas secas Veracruz</a>
          </p>
          <button className="footer-top-btn" onClick={scrollToTop} aria-label="Volver arriba">
            <ArrowUp size={18} />
          </button>
        </div>
      </div>
    </footer>
  )
}
