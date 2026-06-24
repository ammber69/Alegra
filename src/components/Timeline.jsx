import { useState, useEffect, useRef } from 'react'
import './Timeline.css'

const milestones = [
  {
    year: '2000',
    title: 'Fundación',
    subtitle: 'Córdoba, Veracruz',
    desc: 'Transportes Alegra nace en diciembre del año 2000 con 6 tractocamiones graneleros y la visión de ofrecer un servicio de transporte diferente: seguro, puntual y con la calidez veracruzana. Una empresa familiar con grandes sueños.',
    color: '#003087',
    icon: '🚛',
  },
  {
    year: '2002',
    title: 'Cambio Estratégico',
    subtitle: 'Cajas Secas & Tolvas',
    desc: 'Identificamos una oportunidad de mercado y tomamos la decisión estratégica de migrar hacia el transporte en cajas secas y tolvas. Este pivote marcó el inicio de un crecimiento sostenido y nos posicionó en un nicho más diverso y rentable.',
    color: '#E30613',
    icon: '📦',
  },
  {
    year: '2010',
    title: 'Expansión de Rutas',
    subtitle: 'Cobertura Nacional',
    desc: 'Extendemos nuestras operaciones a las rutas más importantes del país: Veracruz – CDMX, Veracruz – Puebla, y comenzamos a atender el Bajío y el norte de México. Nuestra flota y equipo humano crecen para responder a la demanda.',
    color: '#003087',
    icon: '🗺️',
  },
  {
    year: '2020',
    title: 'Pandemia y Resiliencia',
    subtitle: 'Operación sin parar',
    desc: 'Durante la pandemia de COVID-19, Transportes Alegra mantuvo sus operaciones activas apoyando la cadena de suministro del país. Demostramos nuestra solidez y compromiso, siendo reconocidos por clientes y operadores por nuestra responsabilidad.',
    color: '#E30613',
    icon: '💪',
  },
  {
    year: '2026',
    title: 'Flota Moderna & Futuro',
    subtitle: 'Expansión continua',
    desc: 'Hoy contamos con una flota moderna de tractocamiones Kenworth equipados con tecnología de rastreo GPS. Seguimos creciendo de forma orgánica, apostando por el talento humano y la modernización constante de nuestras unidades.',
    color: '#D4AF37',
    icon: '🌟',
  },
]

export default function Timeline() {
  const [active, setActive]     = useState(0)
  const [visible, setVisible]   = useState(true)   // controls fade
  const [paused, setPaused]     = useState(false)
  const trackRef  = useRef(null)
  const timerRef  = useRef(null)
  const pauseRef  = useRef(null)

  // Auto-advance every 4 seconds
  useEffect(() => {
    if (paused) return
    timerRef.current = setInterval(() => {
      changeSlide(prev => (prev + 1) % milestones.length)
    }, 4000)
    return () => clearInterval(timerRef.current)
  }, [paused]) // eslint-disable-line

  // Scroll active node into view on mobile
  useEffect(() => {
    if (!trackRef.current) return
    const nodes = trackRef.current.querySelectorAll('.timeline-node')
    if (nodes[active]) {
      nodes[active].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' })
    }
  }, [active])

  // Fade-in → fade-out → update → fade-in
  const changeSlide = (nextFn) => {
    setVisible(false)
    setTimeout(() => {
      setActive(prev => {
        const next = typeof nextFn === 'function' ? nextFn(prev) : nextFn
        return next
      })
      setVisible(true)
    }, 200)
  }

  const handleSelect = (i) => {
    clearInterval(timerRef.current)
    clearTimeout(pauseRef.current)
    setPaused(true)
    changeSlide(() => i)
    // Resume after 8 s of no interaction
    pauseRef.current = setTimeout(() => setPaused(false), 8000)
  }

  const m = milestones[active]

  return (
    <section id="historia" className="section section--dark timeline-section snap-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label section-label--light">Nuestra Historia</span>
          <h2 className="section-title section-title--light">
            24 años construyendo confianza
          </h2>
          <div className="divider divider--center divider--gold" />
          <p className="section-desc section-desc--light">
            Un recorrido de esfuerzo, visión y orgullo veracruzano que nos ha llevado a ser referentes del transporte en México.
          </p>
        </div>

        {/* Timeline track */}
        <div className="timeline-track" ref={trackRef}>
          {milestones.map((milestone, i) => (
            <button
              key={milestone.year}
              className={`timeline-node ${active === i ? 'active' : ''}`}
              onClick={() => handleSelect(i)}
              style={{ '--node-color': milestone.color }}
              aria-label={`Ver hito ${milestone.year}: ${milestone.title}`}
            >
              <div className="timeline-node-dot">
                <span>{milestone.icon}</span>
              </div>
              <span className="timeline-node-year">{milestone.year}</span>
            </button>
          ))}
        </div>

        {/* Progress bar — key forces reset on each change */}
        <div className="timeline-progress-wrap">
          <div
            className={`timeline-progress-bar ${paused ? 'paused' : ''}`}
            style={{ '--accent': m.color }}
            key={`pb-${active}-${paused}`}
          />
        </div>

        {/* Active card — NO key prop, uses CSS opacity transition */}
        <div
          className="timeline-card"
          style={{
            '--card-accent': m.color,
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.2s ease',
          }}
        >
          <div className="timeline-card-year" style={{ color: m.color }}>
            {m.year}
          </div>
          <div className="timeline-card-content">
            <div className="timeline-card-icon">{m.icon}</div>
            <div>
              <h3 className="timeline-card-title">{m.title}</h3>
              <p className="timeline-card-subtitle">{m.subtitle}</p>
              <p className="timeline-card-desc">{m.desc}</p>
            </div>
          </div>
          <div className="timeline-card-nav">
            <button
              className="timeline-nav-btn"
              onClick={() => handleSelect(Math.max(0, active - 1))}
              disabled={active === 0}
            >
              ← Anterior
            </button>
            <div className="timeline-nav-dots">
              {milestones.map((_, i) => (
                <button
                  key={i}
                  className={`timeline-nav-dot ${active === i ? 'active' : ''}`}
                  onClick={() => handleSelect(i)}
                  aria-label={`Ir a ${milestones[i].year}`}
                />
              ))}
            </div>
            <button
              className="timeline-nav-btn"
              onClick={() => handleSelect(Math.min(milestones.length - 1, active + 1))}
              disabled={active === milestones.length - 1}
            >
              Siguiente →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
