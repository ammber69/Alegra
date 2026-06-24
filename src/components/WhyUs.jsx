import { Shield, Clock, Heart, Headphones, MapPin, Truck, Handshake, Zap } from 'lucide-react'
import './WhyUs.css'

const reasons = [
  {
    icon: Shield,
    title: 'Seguridad ante todo',
    desc: 'Operadores con más de 5 años de experiencia promedio, capacitados en manejo defensivo y seguridad vial.',
    color: '#185FA5', // Blue (Operational/Logistical)
    stat: '0',
    statLabel: 'Siniestros en 2025',
  },
  {
    icon: Heart,
    title: 'Operadores valorados',
    desc: 'Conductores contentos cuidan mejor la carga. Ofrecemos salarios altamente competitivos y trato profesional.',
    color: '#D85A30', // Red (Human/Commercial)
    stat: '+100%',
    statLabel: 'Prestaciones superiores',
  },
  {
    icon: Clock,
    title: 'Puntualidad garantizada',
    desc: 'Cumplimos rigurosamente los tiempos de entrega acordados. Más de 24 años de palabra cumplida.',
    color: '#185FA5', // Blue (Operational/Logistical)
    stat: '24+',
    statLabel: 'Años de servicio de fletes',
  },
  {
    icon: MapPin,
    title: 'Rastreo GPS 24/7',
    desc: 'Seguimiento satelital activo en toda la flota. Monitoreo constante de ubicación y velocidad en tiempo real.',
    color: '#185FA5', // Blue (Operational/Logistical)
    stat: '100%',
    statLabel: 'Monitoreo satelital activo',
  },
  {
    icon: Headphones,
    title: 'Soporte 24/7',
    desc: 'Atención personalizada las 24 horas del día, los 7 días de la semana para coordinar su ruta y resolver imprevistos.',
    color: '#D85A30', // Red (Human/Commercial)
    stat: '24/7',
    statLabel: 'Disponibilidad telefónica',
  },
  {
    icon: Handshake,
    title: 'Compromiso y lealtad',
    desc: 'Construimos relaciones de largo plazo. El 80% de nuestros clientes industriales llevan más de 10 años con nosotros.',
    color: '#D85A30', // Red (Human/Commercial)
    stat: '+10 años',
    statLabel: 'Relación promedio comercial',
  },
  {
    icon: Truck,
    title: 'Flota Kenworth moderna',
    desc: 'Mantenimiento preventivo riguroso en taller certificado. Unidades con menos de 5 años de antigüedad.',
    color: '#185FA5', // Blue (Operational/Logistical)
    stat: '< 5 años',
    statLabel: 'Edad promedio de unidades',
  },
  {
    icon: Zap,
    title: 'Respuesta inmediata',
    desc: 'Cotizaciones comerciales y de fletes listas en menos de 2 horas. Asignación rápida de camiones.',
    color: '#D85A30', // Red (Human/Commercial)
    stat: '< 2h',
    statLabel: 'Tiempo de respuesta comercial',
  },
]

export default function WhyUs({ onQuoteClick }) {
  return (
    <section className="section section--grey whyus-section snap-section">
      <div className="container">
        <div className="section-header section-header--center" style={{ marginBottom: '30px' }}>
          <span className="section-label">¿Por Qué Elegirnos?</span>
          <h2 className="section-title" style={{ marginBottom: '8px' }}>Lo que nos hace diferentes</h2>
          <div className="divider divider--center" style={{ margin: '8px auto 16px' }} />
          <p className="section-desc">
            No solo transportamos mercancía. Transportamos la confianza de nuestros clientes 
            a través de pilares sólidos de servicio.
          </p>
        </div>

        <div className="whyus-grid">
          {reasons.map((r, i) => {
            const Icon = r.icon
            const isBlue = r.color === '#185FA5'
            const iconBg = isBlue ? '#E6F1FB' : '#FAECE7'
            return (
              <div 
                key={i} 
                className="whyus-card" 
                style={{ 
                  '--accent': r.color,
                  '--icon-bg': iconBg
                }}
              >
                <div className="whyus-icon-wrapper">
                  <Icon size={18} strokeWidth={2.5} />
                </div>
                
                <span className="whyus-metric">{r.stat}</span>
                <span className="whyus-metric-label">{r.statLabel}</span>
                
                <h3 className="whyus-title">{r.title}</h3>
                <p className="whyus-desc">{r.desc}</p>
              </div>
            )
          })}
        </div>

        <div className="whyus-cta-bar">
          <div className="whyus-cta-content">
            <h3 className="whyus-cta-title">¿Listo para mover tu carga con los mejores?</h3>
            <p className="whyus-cta-sub">Garantizamos seguridad, puntualidad y soporte dedicado 24/7.</p>
          </div>
          <button className="btn btn-primary" onClick={onQuoteClick}>
            Solicitar cotización gratuita
          </button>
        </div>
      </div>
    </section>
  )
}
