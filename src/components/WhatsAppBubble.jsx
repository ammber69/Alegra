import { MessageCircle } from 'lucide-react'
import './WhatsAppBubble.css'

const WHATSAPP = '522711675757'
const MSG = 'Hola, quisiera cotizar un servicio de transporte con Transportes Alegra.'

export default function WhatsAppBubble() {
  return (
    <a
      href={`https://wa.me/${WHATSAPP}?text=${encodeURIComponent(MSG)}`}
      target="_blank"
      rel="noopener noreferrer"
      className="wa-bubble"
      aria-label="Contactar por WhatsApp"
    >
      <svg className="wa-icon" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" fill="white">
        <path d="M16 .5C7.44.5.5 7.44.5 16c0 2.74.72 5.36 2.08 7.68L.5 31.5l8.04-2.1A15.48 15.48 0 0016 31.5c8.56 0 15.5-6.94 15.5-15.5S24.56.5 16 .5zm0 28.4a12.85 12.85 0 01-6.5-1.77l-.46-.28-4.78 1.25 1.27-4.65-.3-.48A12.9 12.9 0 1116 28.9zm7.09-9.66c-.39-.2-2.3-1.13-2.66-1.26-.36-.13-.62-.19-.88.2-.26.38-1.01 1.26-1.24 1.52-.23.26-.46.3-.85.1-.39-.2-1.64-.6-3.12-1.93-1.15-1.02-1.93-2.28-2.16-2.67-.22-.38-.02-.59.17-.78.18-.18.39-.46.58-.69.2-.24.26-.4.39-.67.13-.26.06-.5-.03-.7-.1-.2-.88-2.12-1.2-2.9-.32-.78-.64-.67-.88-.68h-.75c-.26 0-.68.1-1.03.48-.36.38-1.36 1.33-1.36 3.24s1.39 3.75 1.58 4.01c.2.26 2.74 4.18 6.63 5.86.93.4 1.65.64 2.22.82.93.3 1.78.25 2.44.15.75-.11 2.3-.94 2.62-1.85.33-.91.33-1.7.23-1.86-.1-.16-.36-.26-.75-.46z"/>
      </svg>
      <span className="wa-tooltip">¡Escríbenos!</span>
      <span className="wa-ping" />
    </a>
  )
}
