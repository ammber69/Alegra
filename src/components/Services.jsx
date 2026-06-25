import { useState, useEffect, useRef } from 'react'
import { Box, Layers, MapPin, Star, ArrowRight, MessageCircle, Check, ChevronLeft, ChevronRight } from 'lucide-react'
import './Services.css'

const WHATSAPP = '522711675757'

const services = [
  {
    icon: Box,
    title: 'Carga General en Cajas Secas',
    subtitle: 'Full & Sencillo',
    desc: 'Transportamos toda clase de mercancía en nuestras cajas secas de 48 y 53 pies. Servicio full (carga completa) y servicio sencillo con la más alta seguridad.',
    features: ['Cajas 48 y 53 pies', 'Carga consolidada o full', 'Temperatura ambiente', 'Seguro de mercancía'],
    whatsappMsg: 'Hola, me interesa una cotización para transporte en caja seca. ¿Podrían ayudarme?',
    gradient: 'linear-gradient(135deg, #003087 0%, #0052d4 100%)',
    accentColor: '#003087',
    badge: 'Más solicitado',
  },
  {
    icon: Layers,
    title: 'Transporte Granelero en Tolvas',
    subtitle: 'Granos y Materiales a Granel',
    desc: 'Contamos con tolvas de alta capacidad para el transporte de granos, arena, grava y materiales a granel. Operamos con la experiencia de nuestros orígenes graneleros.',
    features: ['Alta capacidad de carga', 'Material a granel', 'Granos y semillas', 'Carga y descarga eficiente'],
    whatsappMsg: 'Hola, necesito cotizar transporte granelero en tolva. ¿Pueden darme información?',
    gradient: 'linear-gradient(135deg, #E30613 0%, #ff4757 100%)',
    accentColor: '#E30613',
    badge: null,
  },
  {
    icon: MapPin,
    title: 'Rutas Nacionales',
    subtitle: 'Veracruz · CDMX · Puebla · Bajío · Norte',
    desc: 'Conectamos Veracruz con los principales destinos industriales y comerciales de México. Rutas regulares con seguimiento GPS en tiempo real.',
    features: ['Rutas fijas y especiales', 'GPS en tiempo real', 'Tiempos garantizados', 'Cobertura nacional'],
    whatsappMsg: 'Hola, quisiera información sobre sus rutas nacionales y cotizar un flete.',
    gradient: 'linear-gradient(135deg, #001f5c 0%, #003087 100%)',
    accentColor: '#003087',
    badge: null,
  },
  {
    icon: Star,
    title: 'Servicio Dedicado',
    subtitle: 'Full Service & Operaciones Especiales',
    desc: 'Para empresas con requerimientos de transporte continuo, ofrecemos servicio dedicado con unidades y operadores asignados exclusivamente a su operación.',
    features: ['Unidades dedicadas', 'Operador exclusivo', 'Tarifas preferenciales', 'Reporte personalizado'],
    whatsappMsg: 'Hola, me interesa el servicio dedicado para nuestra empresa. ¿Podemos agendar una llamada?',
    gradient: 'linear-gradient(135deg, #D4AF37 0%, #f0d060 100%)',
    accentColor: '#D4AF37',
    badge: 'Premium',
  },
]

function ServiceCard({ service, onQuote, index, isActive }) {
  const Icon = service.icon
  const wa = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(service.whatsappMsg)}`

  return (
    <div
      className="svc-card"
      style={{ '--svc-delay': `${index * 0.1}s` }}
      data-active={isActive ? 'true' : 'false'}
    >
      {/* Gradient header */}
      <div className="svc-card-header" style={{ background: service.gradient }}>
        <div className="svc-card-header-pattern" />
        {service.badge && (
          <span className="svc-badge">{service.badge}</span>
        )}
        <div className="svc-icon-ring">
          <Icon size={30} color="#fff" strokeWidth={1.8} />
        </div>
        <h3 className="svc-card-title">{service.title}</h3>
        <p className="svc-card-subtitle">{service.subtitle}</p>
      </div>

      {/* Card body */}
      <div className="svc-card-body">
        <p className="svc-card-desc">{service.desc}</p>

        <div className="svc-features">
          {service.features.map((f, i) => (
            <div key={i} className="svc-feature">
              <span className="svc-feature-check" style={{ background: service.accentColor }}>
                <Check size={12} color="#fff" strokeWidth={3} />
              </span>
              <span>{f}</span>
            </div>
          ))}
        </div>

        <div className="svc-card-actions">
          <a
            href={wa}
            target="_blank"
            rel="noopener noreferrer"
            className="svc-btn svc-btn--wa"
          >
            <MessageCircle size={16} />
            WhatsApp
          </a>
          <button className="svc-btn svc-btn--outline" onClick={onQuote}>
            Cotizar <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </div>
  )
}

export default function Services({ onQuoteClick }) {
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isMobile, setIsMobile] = useState(false)
  const viewportRef = useRef(null)

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth <= 900)
    checkMobile()
    window.addEventListener('resize', checkMobile)
    return () => window.removeEventListener('resize', checkMobile)
  }, [])

  const cardsToShow = isMobile ? 1 : 2
  const maxIndex = services.length - cardsToShow

  // On mobile: just update currentIndex (CSS handles visibility)
  // On desktop: update currentIndex for CSS transform
  const goTo = (index) => {
    const max = isMobile ? services.length - 1 : maxIndex
    setCurrentIndex(Math.max(0, Math.min(index, max)))
  }

  const nextSlide = () => goTo(currentIndex + 1)
  const prevSlide = () => goTo(currentIndex - 1)

  // Adjust current index if it exceeds maxIndex due to resize
  useEffect(() => {
    if (currentIndex > maxIndex) {
      setCurrentIndex(maxIndex)
    }
  }, [maxIndex, currentIndex])

  return (
    <section id="servicios" className="section section--grey services-section snap-section">
      <div className="container">
        <div className="section-header section-header--center" style={{ marginBottom: '16px' }}>
          <span className="section-label">Nuestros Servicios</span>
          <h2 className="section-title" style={{ marginBottom: '6px' }}>Soluciones de transporte <br />para tu empresa</h2>
          <div className="divider divider--center" style={{ margin: '6px auto 12px' }} />
          <p className="section-desc">
            Ofrecemos servicios especializados de carga en cajas secas y tolvas con cobertura nacional.
            <strong> Sin precios fijos</strong>: cada cotización es personalizada.
          </p>
        </div>

        <div className="svc-slider-container">
          <button 
            className="svc-arrow svc-arrow--left" 
            onClick={prevSlide} 
            disabled={currentIndex === 0}
            aria-label="Previous service"
          >
            <ChevronLeft size={24} />
          </button>
          
          <div
            className="svc-slider-viewport"
            ref={viewportRef}
          >
            <div 
              className="svc-slider-track" 
              style={{ '--current-index': currentIndex }}
            >
              {services.map((s, i) => (
                <ServiceCard
                  key={i}
                  service={s}
                  onQuote={onQuoteClick}
                  index={i}
                  isActive={isMobile ? i === currentIndex : true}
                />
              ))}
            </div>
          </div>

          <button 
            className="svc-arrow svc-arrow--right" 
            onClick={nextSlide} 
            disabled={isMobile ? currentIndex >= services.length - 1 : currentIndex === maxIndex}
            aria-label="Next service"
          >
            <ChevronRight size={24} />
          </button>
        </div>

        <div className="svc-dots">
          {Array.from({ length: isMobile ? services.length : maxIndex + 1 }).map((_, i) => (
            <button
              key={i}
              className={`svc-dot ${currentIndex === i ? 'active' : ''}`}
              onClick={() => goTo(i)}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        <div className="svc-cta-bar" style={{ marginTop: '10px' }}>
          <div className="svc-cta-content">
            <p className="svc-cta-title">¿No encontraste lo que buscas?</p>
            <p className="svc-cta-text">
              Contáctanos y diseñamos una solución de transporte a tu medida.
            </p>
          </div>
          <button className="svc-cta-btn" onClick={onQuoteClick}>
            Solicitar cotización personalizada <ArrowRight size={16} />
          </button>
        </div>
      </div>
    </section>
  )
}
