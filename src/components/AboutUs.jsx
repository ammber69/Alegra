import { useState, useEffect } from 'react'
import { Shield, Clock, Users, Award, ChevronLeft, ChevronRight } from 'lucide-react'
import './AboutUs.css'

const values = [
  {
    icon: Shield,
    title: 'Seguridad',
    desc: 'Operamos con los más altos estándares de seguridad vial. Nuestros operadores están certificados y capacitados continuamente.',
    color: '#003087',
  },
  {
    icon: Clock,
    title: 'Puntualidad',
    desc: 'Cumplimos con los tiempos de entrega acordados. Tu mercancía llega cuando tiene que llegar.',
    color: '#E30613',
  },
  {
    icon: Users,
    title: 'Talento Humano',
    desc: 'Nuestros operadores son el corazón de la empresa. Los cuidamos, capacitamos y reconocemos su esfuerzo.',
    color: '#003087',
  },
  {
    icon: Award,
    title: 'Confiabilidad',
    desc: 'Más de 24 años de relaciones sólidas con nuestros clientes son la mejor prueba de nuestra confiabilidad.',
    color: '#E30613',
  },
]

const stats = [
  { number: '2000', label: 'Año de fundación', suffix: '' },
  { number: '24', label: 'Años de experiencia', suffix: '+' },
  { number: '6', label: 'Tractocamiones iniciales', suffix: '' },
  { number: '100', label: 'Crecimiento orgánico', suffix: '%' },
]

function AnimatedNumber({ target, suffix, isVisible }) {
  const [current, setCurrent] = useState(0)

  useEffect(() => {
    if (!isVisible) return
    const num = parseInt(target, 10)
    const duration = 1600
    const steps = 50
    const increment = num / steps
    let step = 0
    const timer = setInterval(() => {
      step++
      setCurrent(Math.min(Math.round(increment * step), num))
      if (step >= steps) clearInterval(timer)
    }, duration / steps)
    return () => clearInterval(timer)
  }, [isVisible, target])

  return (
    <span>
      {target === '2000' ? (isVisible ? '2000' : '0') : current}
      {suffix}
    </span>
  )
}

export default function AboutUs() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) setVisible(true) },
      { threshold: 0.2 }
    )
    const el = document.getElementById('nosotros')
    if (el) observer.observe(el)
    return () => observer.disconnect()
  }, [])

  return (
    <section id="nosotros" className="section about-section snap-section">
      <div className="container">
        <div className="about-grid">
          {/* Left: Story */}
          <div className={`about-story ${visible ? 'reveal visible' : 'reveal'}`}>
            <span className="section-label">Quiénes Somos</span>
            <h2 className="section-title about-title">
              Una empresa familiar con <span className="text-red">alma veracruzana</span>
            </h2>
            <div className="divider" />
            <p className="about-para">
              Fundada en <strong>diciembre del año 2000</strong> en Córdoba, Veracruz, Transportes Alegra
              nació con apenas 6 tractocamiones graneleros y una visión clara: brindar un servicio
              de transporte que se distinguiera por la seguridad y la palabra cumplida.
            </p>
            <p className="about-para">
              A lo largo de más de dos décadas, evolucionamos estratégicamente hacia el transporte en
              <strong> cajas secas</strong> y <strong>tolvas</strong>, construyendo una flota moderna
              que conecta Veracruz con los principales destinos de la república: CDMX, Puebla, el
              Bajío y el norte del país.
            </p>
            <p className="about-para">
              Hoy somos un referente del sector logístico en el estado de Veracruz, con crecimiento
              <strong> 100% orgánico</strong> y un equipo humano comprometido con la excelencia.
            </p>

            <div className="about-director">
              <div className="about-director-avatar">
                <span>GO</span>
              </div>
              <div>
                <p className="about-director-name">Gicela Ochoa</p>
                <p className="about-director-role">Gerente General | Transportes Alegra</p>
              </div>
            </div>
          </div>

          {/* Right: Stats + Values */}
          <div className={`about-right ${visible ? 'reveal visible' : 'reveal'}`}>
            {/* Stats */}
            <div className="about-stats">
              {stats.map((s, i) => (
                <div key={i} className="about-stat-card">
                  <div className="about-stat-number">
                    <AnimatedNumber target={s.number} suffix={s.suffix} isVisible={visible} />
                  </div>
                  <p className="about-stat-label">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Values */}
            <div className="about-values">
              {values.map((v, i) => {
                const Icon = v.icon
                return (
                  <div key={i} className="about-value-card">
                    <div className="about-value-icon" style={{ background: v.color }}>
                      <Icon size={22} color="#fff" />
                    </div>
                    <div>
                      <h4 className="about-value-title">{v.title}</h4>
                      <p className="about-value-desc">{v.desc}</p>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
