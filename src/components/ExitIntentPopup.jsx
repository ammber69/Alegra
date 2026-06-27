import { useEffect, useState, useRef } from 'react'
import { X, MessageCircle } from 'lucide-react'
import './ExitIntentPopup.css'

const WHATSAPP = '522713934494'
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
        {/* Top brand accent lines */}
        <div className="exit-accent-bar">
          <span></span>
          <span></span>
          <span></span>
        </div>

        <button className="exit-close" onClick={close} aria-label="Cerrar">
          <X size={18} />
        </button>

        <div className="exit-header">
          <span className="exit-badge">Respuesta en menos de 2h ⚡</span>
          <div className="exit-emoji-wrapper">
            <span className="exit-emoji" role="img" aria-label="Camión">🚛</span>
          </div>
        </div>

        <h3 className="exit-title">¿Te vas sin cotizar?</h3>
        
        <p className="exit-desc">
          Déjanos ayudarte. Te enviamos una <strong>cotización personalizada</strong> para tu carga en tiempo récord. <strong>¡Totalmente sin compromiso!</strong>
        </p>

        <div className="exit-actions">
          <button 
            className="btn btn-primary btn-exit-primary"
            onClick={() => { close(); onQuoteClick() }}
          >
            Obtener Cotización Gratis
          </button>
          
          <a
            href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent('Hola, me interesa cotizar un flete con Transportes Alegra.')}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-whatsapp btn-exit-whatsapp"
            onClick={close}
          >
            <MessageCircle size={18} />
            <span>Escribir por WhatsApp</span>
          </a>
        </div>

        <button className="exit-dismiss" onClick={close}>No, gracias. Prefiero salir.</button>
      </div>
    </div>
  )
}
