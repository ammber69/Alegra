import { MapPin, Phone, Navigation } from 'lucide-react'
import './Location.css'

export default function Location() {
  return (
    <section id="ubicacion" className="section section--grey location-section snap-section">
      <div className="container">
        <div className="section-header section-header--center">
          <span className="section-label">Dónde Estamos</span>
          <h2 className="section-title">Nuestra ubicación</h2>
          <div className="divider divider--center" />
          <p className="section-desc">
            Estamos ubicados en la Carretera Federal Córdoba a Veracruz, en el corazón de Veracruz,
            con acceso privilegiado a las principales rutas del país.
          </p>
        </div>

        <div className="location-grid">
          {/* Map */}
          <div className="location-map-wrap">
            <iframe
              title="Ubicación Transportes Alegra, Carretera Federal Córdoba a Veracruz Km 10.5"
              src="https://maps.google.com/maps?q=18.850231169693128,-96.84452144828084&z=15&output=embed"
              width="100%"
              height="420"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
          
          {/* Info cards */}
          <div className="location-info">
            <div className="location-card">
              <div className="location-card-icon">
                <MapPin size={22} color="#fff" />
              </div>
              <div>
                <h4 className="location-card-title">Dirección</h4>
                <p className="location-card-text">
                  Carretera Federal Córdoba a Veracruz Km 10.5<br />
                  La Palma / Venta Parada<br />
                  Amatlán de los Reyes, Veracruz
                </p>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card-icon location-card-icon--red">
                <Phone size={22} color="#fff" />
              </div>
              <div>
                <h4 className="location-card-title">Teléfono y WhatsApp</h4>
                <a href="tel:+522711675757" className="location-card-link">271 167 5757</a>
              </div>
            </div>

            <div className="location-card">
              <div className="location-card-icon">
                <Navigation size={22} color="#fff" />
              </div>
              <div>
                <h4 className="location-card-title">Accesos principales</h4>
                <p className="location-card-text">
                  Acceso directo desde la Autopista México a Veracruz.<br />
                  A 10 min de Córdoba y 15 min de Orizaba.
                </p>
              </div>
            </div>

            <a
              href="https://www.google.com/maps/search/?api=1&query=18.850231169693128,-96.84452144828084"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary location-nav-btn"
            >
              <Navigation size={16} /> Cómo llegar en Google Maps
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
