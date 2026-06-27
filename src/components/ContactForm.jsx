import { useState } from 'react'
import { MapPin, Phone, Mail, MessageCircle, Send, CheckCircle, X, Lock, Zap } from 'lucide-react'
import './ContactForm.css'

const WHATSAPP = '522713934494'

export default function ContactForm({ isModal = false, onClose }) {
  const [step, setStep] = useState('form')
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '', empresa: '', telefono: '', email: '', tipoCarga: '', mensaje: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)

    const getServiceLabel = (val) => {
      switch(val) {
        case 'caja-seca-full': return 'Caja Seca: Servicio Full';
        case 'caja-seca-sencillo': return 'Caja Seca: Servicio Sencillo';
        case 'tolva': return 'Transporte Granelero (Tolva)';
        case 'dedicado': return 'Servicio Dedicado';
        default: return val || 'Otro';
      }
    }

    const text = `Hola Transportes Alegra, me interesa solicitar una cotización. Aquí están mis datos:

👤 *Nombre:* ${form.nombre}
🏢 *Empresa:* ${form.empresa || 'No especificada'}
📞 *Teléfono:* ${form.telefono}
✉️ *Correo:* ${form.email || 'No especificado'}
🚛 *Servicio:* ${getServiceLabel(form.tipoCarga)}
📝 *Detalles:* ${form.mensaje || 'Sin detalles adicionales'}`;

    const link = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent(text)}`;

    setTimeout(() => {
      setLoading(false)
      setStep('success')
      window.open(link, '_blank', 'noopener,noreferrer')
    }, 800)
  }

  const whatsappLink = `https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, me interesa cotizar un flete con Transportes Alegra.')}`

  const inner = (
    <>
      {step === 'form' ? (
        <form onSubmit={handleSubmit} className="contact-form-fields">
          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="cf-nombre">
                Nombre completo <span className="text-red">*</span>
              </label>
              <input id="cf-nombre" name="nombre" className="form-input" placeholder="Tu nombre"
                value={form.nombre} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-empresa">Empresa</label>
              <input id="cf-empresa" name="empresa" className="form-input" placeholder="Razón social"
                value={form.empresa} onChange={handleChange} />
            </div>
          </div>

          <div className="form-row-2">
            <div className="form-group">
              <label className="form-label" htmlFor="cf-telefono">
                Teléfono / WhatsApp <span className="text-red">*</span>
              </label>
              <input id="cf-telefono" name="telefono" type="tel" className="form-input"
                placeholder="271 000 0000" value={form.telefono} onChange={handleChange} required />
            </div>
            <div className="form-group">
              <label className="form-label" htmlFor="cf-email">Correo electrónico</label>
              <input id="cf-email" name="email" type="email" className="form-input"
                placeholder="correo@empresa.com" value={form.email} onChange={handleChange} />
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="cf-tipoCarga">
              Tipo de carga / Servicio <span className="text-red">*</span>
            </label>
            <div className="form-select-wrapper">
              <select id="cf-tipoCarga" name="tipoCarga" className="form-input form-select"
                value={form.tipoCarga} onChange={handleChange} required>
                <option value="">Selecciona el tipo de servicio...</option>
                <option value="caja-seca-full">Caja Seca: Servicio Full</option>
                <option value="caja-seca-sencillo">Caja Seca: Servicio Sencillo</option>
                <option value="tolva">Transporte Granelero (Tolva)</option>
                <option value="dedicado">Servicio Dedicado</option>
                <option value="otro">Otro / No sé</option>
              </select>
            </div>
          </div>

          <div className="form-group">
            <label className="form-label" htmlFor="cf-mensaje">Detalles de tu carga o ruta</label>
            <textarea id="cf-mensaje" name="mensaje" className="form-input form-textarea" rows={4}
              placeholder="Origen, destino, frecuencia, peso aproximado, etc."
              value={form.mensaje} onChange={handleChange} />
          </div>

          <div className="contact-form-actions">
            <button type="submit" className={`btn cf-submit ${loading ? 'loading' : ''}`}
              disabled={loading}>
              {loading ? <span className="join-spinner" /> : <><Send size={15} /> Enviar cotización</>}
            </button>
            <a href={whatsappLink} target="_blank" rel="noopener noreferrer"
              className="btn btn-wa-secondary">
              <MessageCircle size={16} /> WhatsApp directo
            </a>
          </div>
        </form>
      ) : (
        <div className="cf-success">
          <CheckCircle size={48} color="#22c55e" />
          <h3>¡Solicitud enviada!</h3>
          <p>En menos de 2 horas nuestro equipo se pondrá en contacto contigo con la cotización personalizada.</p>
          {isModal && (
            <button className="btn btn-secondary btn-lg" onClick={onClose} style={{ marginTop: 16 }}>
              Cerrar
            </button>
          )}
        </div>
      )}
    </>
  )

  if (isModal) {
    return (
      <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
        <div className="modal-box cf-modal">
          <button className="modal-close" onClick={onClose}><X size={18} /></button>
          <div className="modal-header cf-modal-header">
            <h2 className="cf-modal-title">Solicitar cotización</h2>
            <div className="contact-form-badges" style={{ justifyContent: 'flex-start', marginTop: '8px' }}>
              <span className="contact-badge-pill">
                <Lock size={12} strokeWidth={2.5} /> Sin costos ocultos
              </span>
              <span className="contact-badge-pill">
                <Zap size={12} strokeWidth={2.5} /> Respuesta en menos de 2h
              </span>
            </div>
          </div>
          <div className="modal-body">{inner}</div>
        </div>
      </div>
    )
  }

  return (
    <section id="contacto" className="section contact-section snap-section">
      <div className="container">
        <div className="contact-grid">
          {/* Left: Info */}
          <div className="contact-info">
            <span className="section-label section-label--light">Contacto</span>
            <h2 className="section-title section-title--light">Hablemos de tu carga</h2>
            <div className="divider divider--gold" />
            <p className="section-desc section-desc--light">
              Cotiza sin compromiso. Te respondemos en menos de 2 horas con una propuesta personalizada.
              Sin precios escondidos, sin letra pequeña.
            </p>

            <div className="contact-items">
              <a href="tel:+522713934494" className="contact-item">
                <div className="contact-item-icon">
                  <Phone size={20} color="#fff" />
                </div>
                <div>
                  <p className="contact-item-label">Teléfono / WhatsApp</p>
                  <p className="contact-item-value">271 393 4494</p>
                </div>
              </a>

              <a href="mailto:alegrarh.operadores@outlook.com" className="contact-item">
                <div className="contact-item-icon">
                  <Mail size={20} color="#fff" />
                </div>
                <div>
                  <p className="contact-item-label">Correo electrónico</p>
                  <p className="contact-item-value">alegrarh.operadores@outlook.com</p>
                </div>
              </a>

              <div className="contact-item">
                <div className="contact-item-icon">
                  <MapPin size={20} color="#fff" />
                </div>
                <div>
                  <p className="contact-item-label">Dirección</p>
                  <p className="contact-item-value">
                    Carr. Federal Córdoba-Veracruz Km 10.5<br />
                    La Palma, Amatlán de los Reyes, Ver.
                  </p>
                </div>
              </div>
            </div>

            <a
              href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, quisiera cotizar un servicio de transporte con Transportes Alegra.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg contact-wa-btn"
            >
              <MessageCircle size={18} /> Escribir por WhatsApp
            </a>
          </div>

          {/* Right: Form */}
          <div className="contact-form-box">
            <h3 className="contact-form-title">Solicita tu cotización</h3>
            <div className="contact-form-badges">
              <span className="contact-badge-pill">
                <Lock size={12} strokeWidth={2.5} /> Sin costos ocultos
              </span>
              <span className="contact-badge-pill">
                <Zap size={12} strokeWidth={2.5} /> Respuesta en menos de 2h
              </span>
            </div>
            {inner}
          </div>
        </div>
      </div>
    </section>
  )
}
