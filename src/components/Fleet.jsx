import { useState } from 'react'
import { ChevronLeft, ChevronRight, Truck, Cpu, Gauge, Calendar } from 'lucide-react'
import './Fleet.css'

// Using real fleet images provided by the client
const fleetImages = [
  {
    url: '/banersolo.png',
    label: 'Unidad de Carga Pesada, Cajas Secas de 53 pies',
    type: 'Caja Seca',
  },
  {
    url: '/Tracto.jpg',
    label: 'Tractocamión Kenworth con Branding Oficial de Transportes Alegra',
    type: 'Tractocamión',
  },
  {
    url: '/BanerConboy.jpeg',
    label: 'Convoy de Unidades, Autolíneas Especializadas en Graneles',
    type: 'Flota en Operación',
  },
]

const fleetStats = [
  { icon: Truck,    value: 'Kenworth',  label: 'Marca principal de flota' },
  { icon: Calendar, value: '< 5 años', label: 'Edad promedio de unidades' },
  { icon: Gauge,    value: '22 ton',   label: 'Capacidad de carga (caja seca)' },
  { icon: Cpu,      value: 'GPS 24/7', label: 'Rastreo satelital en tiempo real' },
]

export default function Fleet() {
  const [current, setCurrent] = useState(0)
  const [isTransitioning, setIsTransitioning] = useState(false)

  const goTo = (idx) => {
    if (isTransitioning) return
    setIsTransitioning(true)
    setTimeout(() => {
      setCurrent(idx)
      setIsTransitioning(false)
    }, 200)
  }

  const prev = () => goTo((current - 1 + fleetImages.length) % fleetImages.length)
  const next = () => goTo((current + 1) % fleetImages.length)

  return (
    <section id="flota" className="section fleet-section snap-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Nuestra Flota</span>
          <h2 className="section-title">Unidades modernas, listas para mover tu carga</h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            Flota de tractocamiones Kenworth en óptimas condiciones mecánicas, con mantenimiento preventivo constante
            y tecnología de rastreo satelital GPS instalada en cada unidad.
          </p>
        </div>

        {/* Slider */}
        <div className="fleet-slider">
          <div className={`fleet-slide ${isTransitioning ? 'transitioning' : ''}`}>
            <img
              src={fleetImages[current].url}
              alt={fleetImages[current].label}
              className="fleet-slide-img"
            />
            <div className="fleet-slide-overlay">
              <div className="fleet-slide-badge">{fleetImages[current].type}</div>
              <p className="fleet-slide-label">{fleetImages[current].label}</p>
            </div>
          </div>

          {/* Controls */}
          <button className="fleet-arrow fleet-arrow--left" onClick={prev} aria-label="Anterior">
            <ChevronLeft size={24} />
          </button>
          <button className="fleet-arrow fleet-arrow--right" onClick={next} aria-label="Siguiente">
            <ChevronRight size={24} />
          </button>

          {/* Dots */}
          <div className="fleet-dots">
            {fleetImages.map((_, i) => (
              <button
                key={i}
                className={`fleet-dot ${current === i ? 'active' : ''}`}
                onClick={() => goTo(i)}
                aria-label={`Imagen ${i + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail strip */}
          <div className="fleet-thumbs">
            {fleetImages.map((img, i) => (
              <button
                key={i}
                className={`fleet-thumb ${current === i ? 'active' : ''}`}
                onClick={() => goTo(i)}
              >
                <img src={img.url} alt={img.label} />
              </button>
            ))}
          </div>
        </div>

        {/* Fleet stats */}
        <div className="fleet-stats">
          {fleetStats.map((s, i) => {
            const Icon = s.icon
            return (
              <div key={i} className="fleet-stat">
                <div className="fleet-stat-icon">
                  <Icon size={22} color="var(--blue)" />
                </div>
                <div className="fleet-stat-value">{s.value}</div>
                <div className="fleet-stat-label">{s.label}</div>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
