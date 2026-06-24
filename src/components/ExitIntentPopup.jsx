import { useEffect, useState, useRef } from 'react'
import { X, MessageCircle } from 'lucide-react'
import './ExitIntentPopup.css'

const WHATSAPP = '522711675757'
const SESSION_KEY = 'alegra_exit_shown'

export default function ExitIntentPopup({ onQuoteClick }) {
  const [visible, setVisible] = useState(false)
  const shownRef = useRef(false)

  useEffect(() => {
    if (sessionStorage.getItem(SESSION_KEY)) return

    // Desktop: mouse leaves viewport from top
    const handleMouseLeave = (e) => {
      if (e.clientY <= 10 && !shownRef.current) {
        shownRef.current = true
        sessionStorage.setItem(SESSION_KEY, '1')
        setTimeout(() => setVisible(true), 200)
      }
    }

    // Mobile: scroll up quickly near top after 30s
    let timer
    const handleMobileTimer = () => {
      timer = setTimeout(() => {
        if (!shownRef.current) {
          shownRef.current = true
          sessionStorage.setItem(SESSION_KEY, '1')
          setVisible(true)
        }
      }, 35000)
    }

    document.addEventListener('mouseleave', handleMouseLeave)
    handleMobileTimer()

    return () => {
      document.removeEventListener('mouseleave', handleMouseLeave)
      clearTimeout(timer)
    }
  }, [])

  const close = () => setVisible(false)

  if (!visible) return null

  return (
    <div className="exit-overlay" onClick={e => e.target === e.currentTarget && close()}>
      <div className="exit-popup">
        <button className="exit-close" onClick={close} aria-label="Cerrar">
          <X size={18} />
        </button>

        <div className="exit-emoji">🚛</div>

        <h3 className="exit-title">¿Te vas sin cotizar?</h3>
        <p className="exit-desc">
          Déjanos ayudarte. En <strong>menos de 2 horas</strong> te enviamos una cotización
          personalizada para tu carga. <strong>Sin compromiso.</strong>
        </p>

        <div className="exit-actions">
          <button className="btn btn-primary btn-lg" style={{ width: '100%', justifyContent: 'center' }}
            onClick={() => { close(); onQuoteClick() }}>
            Sí, quiero mi cotización
          </button>
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, me interesa cotizar un flete con Transportes Alegra.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-lg"
            style={{ width: '100%', justifyContent: 'center' }}
            onClick={close}
          >
            <MessageCircle size={16} /> Escribir por WhatsApp
          </a>
        </div>

        <button className="exit-dismiss" onClick={close}>No, gracias</button>
      </div>
    </div>
  )
}
