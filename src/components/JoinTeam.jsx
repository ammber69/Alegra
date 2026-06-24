import { useState } from 'react'
import { X, User, Phone, MapPin, Truck, FileText, Send, CheckCircle } from 'lucide-react'
import './JoinTeam.css'

export default function JoinTeam({ onClose }) {
  const [step, setStep] = useState('form') // 'form' | 'success'
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({
    nombre: '',
    telefono: '',
    ciudad: '',
    licencia: '',
    experiencia: '',
    mensaje: '',
  })

  const handleChange = e => setForm(f => ({ ...f, [e.target.name]: e.target.value }))

  const handleSubmit = (e) => {
    e.preventDefault()
    setLoading(true)
    // Simulate submission
    setTimeout(() => {
      setLoading(false)
      setStep('success')
    }, 1500)
  }

  return (
    <div className="modal-overlay" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-box join-modal">
        <button className="modal-close" onClick={onClose} aria-label="Cerrar">
          <X size={18} />
        </button>

        {step === 'form' ? (
          <>
            <div className="modal-header join-modal-header">
              <div className="join-modal-icon">
                <Truck size={28} color="#fff" />
              </div>
              <h2 className="join-modal-title">Únete a nuestro equipo</h2>
              <p className="join-modal-sub">
                ¿Eres operador? Te ofrecemos sueldo competitivo, prestaciones de ley y más.
                Llena el formulario y te contactamos.
              </p>
            </div>

            <div className="modal-body">
              <form onSubmit={handleSubmit}>
                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="join-nombre">
                      <User size={13} /> Nombre completo *
                    </label>
                    <input
                      id="join-nombre"
                      name="nombre"
                      className="form-input"
                      placeholder="Tu nombre completo"
                      value={form.nombre}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="join-telefono">
                      <Phone size={13} /> Teléfono / WhatsApp *
                    </label>
                    <input
                      id="join-telefono"
                      name="telefono"
                      type="tel"
                      className="form-input"
                      placeholder="271 000 0000"
                      value={form.telefono}
                      onChange={handleChange}
                      required
                    />
                  </div>
                </div>

                <div className="form-row">
                  <div className="form-group">
                    <label className="form-label" htmlFor="join-ciudad">
                      <MapPin size={13} /> Ciudad de origen *
                    </label>
                    <input
                      id="join-ciudad"
                      name="ciudad"
                      className="form-input"
                      placeholder="Ej: Córdoba, Veracruz"
                      value={form.ciudad}
                      onChange={handleChange}
                      required
                    />
                  </div>
                  <div className="form-group">
                    <label className="form-label" htmlFor="join-licencia">
                      <FileText size={13} /> Tipo de licencia *
                    </label>
                    <select
                      id="join-licencia"
                      name="licencia"
                      className="form-input"
                      value={form.licencia}
                      onChange={handleChange}
                      required
                    >
                      <option value="">Selecciona...</option>
                      <option value="E">Licencia Tipo E (Federal)</option>
                      <option value="A">Licencia Tipo A</option>
                      <option value="B">Licencia Tipo B</option>
                      <option value="otro">Otro</option>
                    </select>
                  </div>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="join-experiencia">
                    <Truck size={13} /> Años de experiencia como operador *
                  </label>
                  <select
                    id="join-experiencia"
                    name="experiencia"
                    className="form-input"
                    value={form.experiencia}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Selecciona...</option>
                    <option value="1-2">1 a 2 años</option>
                    <option value="3-5">3 a 5 años</option>
                    <option value="5-10">5 a 10 años</option>
                    <option value="10+">Más de 10 años</option>
                  </select>
                </div>

                <div className="form-group">
                  <label className="form-label" htmlFor="join-mensaje">
                    Cuéntanos sobre ti (opcional)
                  </label>
                  <textarea
                    id="join-mensaje"
                    name="mensaje"
                    className="form-input"
                    rows={3}
                    placeholder="Rutas que has manejado, tipo de carga, etc."
                    value={form.mensaje}
                    onChange={handleChange}
                  />
                </div>

                <div className="join-benefits">
                  <p className="join-benefits-title">Lo que ofrecemos:</p>
                  <div className="join-benefits-list">
                    {['Sueldo competitivo', 'Prestaciones de ley', 'IMSS y seguro de vida', 'Bonos de puntualidad', 'Camión en buen estado', 'Apoyo en ruta 24/7'].map((b, i) => (
                      <span key={i} className="join-benefit-tag">✓ {b}</span>
                    ))}
                  </div>
                </div>

                <button
                  type="submit"
                  className={`btn btn-primary btn-lg join-submit ${loading ? 'loading' : ''}`}
                  disabled={loading}
                >
                  {loading ? (
                    <span className="join-spinner" />
                  ) : (
                    <><Send size={16} /> Enviar solicitud</>
                  )}
                </button>
              </form>
            </div>
          </>
        ) : (
          <div className="join-success">
            <div className="join-success-icon">
              <CheckCircle size={52} color="#22c55e" />
            </div>
            <h3 className="join-success-title">¡Solicitud enviada!</h3>
            <p className="join-success-sub">
              Gracias por tu interés en Transportes Alegra. Nuestro equipo de RH se pondrá en contacto contigo en las próximas 24 horas.
            </p>
            <a
              href={`https://wa.me/522711675757?text=${encodeURIComponent('Hola, acabo de enviar mi solicitud para unirme al equipo de Transportes Alegra.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-whatsapp btn-lg"
              style={{ display: 'inline-flex', marginTop: 16 }}
            >
              También contáctanos por WhatsApp
            </a>
          </div>
        )}
      </div>
    </div>
  )
}
