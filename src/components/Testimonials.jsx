import { Star, Quote } from 'lucide-react'
import './Testimonials.css'

const testimonials = [
  {
    name: 'Rodrigo Hernández',
    company: 'Grupo Industrial Orizaba',
    role: 'Gerente de Logística',
    initials: 'RH',
    text: 'Llevamos más de 8 años trabajando con Transportes Alegra para mover nuestros productos hacia CDMX y el Bajío. Nunca nos han fallado en puntualidad y el seguimiento de la carga es impecable.',
    stars: 5,
    color: '#003087',
  },
  {
    name: 'Patricia Molina',
    company: 'Distribuidora Sur-Este',
    role: 'Directora Comercial',
    initials: 'PM',
    text: 'Cambiamos a Transportes Alegra hace 5 años y fue la mejor decisión. El servicio dedicado que nos ofrecieron redujo nuestros tiempos de entrega a Puebla en un 30%. Altamente recomendados.',
    stars: 5,
    color: '#E30613',
  },
  {
    name: 'Carlos Vázquez',
    company: 'Agro Exportaciones Veracruz',
    role: 'Director General',
    initials: 'CV',
    text: 'Para el transporte de granos a granel, necesitamos una empresa que entienda los tiempos de cosecha. Alegra siempre está disponible cuando los necesitamos, incluso en temporadas altas.',
    stars: 5,
    color: '#003087',
  },
]

export default function Testimonials() {
  return (
    <section className="section testimonials-section snap-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Testimonios</span>
          <h2 className="section-title">Lo que dicen nuestros clientes</h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            La confianza de nuestros clientes es nuestro mayor logro. Más de dos décadas
            construyendo relaciones sólidas en toda la república.
          </p>
        </div>

        <div className="testimonials-grid">
          {testimonials.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-quote-icon">
                <Quote size={20} color={t.color} />
              </div>

              <div className="testimonial-stars">
                {Array.from({ length: t.stars }).map((_, s) => (
                  <Star key={s} size={16} fill="#F59E0B" color="#F59E0B" />
                ))}
              </div>

              <p className="testimonial-text">"{t.text}"</p>

              <div className="testimonial-author">
                <div className="testimonial-avatar" style={{ background: t.color }}>
                  {t.initials}
                </div>
                <div>
                  <p className="testimonial-name">{t.name}</p>
                  <p className="testimonial-role">{t.role}</p>
                  <p className="testimonial-company">{t.company}</p>
                </div>
              </div>

              <div className="testimonial-accent" style={{ background: t.color }} />
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
