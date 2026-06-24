import { useState, useEffect } from 'react'
import './index.css'

import Navbar          from './components/Navbar'
import Hero            from './components/Hero'
import AboutUs         from './components/AboutUs'
import Timeline        from './components/Timeline'
import Services        from './components/Services'
import Fleet           from './components/Fleet'
import WhyUs           from './components/WhyUs'
import Testimonials    from './components/Testimonials'
import Location        from './components/Location'
import ContactForm     from './components/ContactForm'
import Footer          from './components/Footer'
import JoinTeam        from './components/JoinTeam'
import ExitIntentPopup from './components/ExitIntentPopup'
import WhatsAppBubble  from './components/WhatsAppBubble'

export default function App() {
  const [showJoinModal,  setShowJoinModal]  = useState(false)
  const [showQuoteModal, setShowQuoteModal] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)

  // Scroll progress bar
  useEffect(() => {
    const onScroll = () => {
      const total = document.body.scrollHeight - window.innerHeight
      const progress = total > 0 ? (window.scrollY / total) * 100 : 0
      setScrollProgress(progress)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll when modal open
  useEffect(() => {
    document.body.style.overflow = (showJoinModal || showQuoteModal) ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [showJoinModal, showQuoteModal])

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="scroll-progress-bar"
        style={{ width: `${scrollProgress}%` }}
        role="progressbar"
        aria-valuenow={scrollProgress}
      />

      {/* Fixed elements */}
      <Navbar
        onJoinClick={() => setShowJoinModal(true)}
      />
      <WhatsAppBubble />

      {/* Main content */}
      <main>
        <Hero
          onQuoteClick={() => setShowQuoteModal(true)}
          onJoinClick={() => setShowJoinModal(true)}
        />
        <AboutUs />
        <Services onQuoteClick={() => setShowQuoteModal(true)} />
        <Fleet />
        <Timeline />
        <WhyUs onQuoteClick={() => setShowQuoteModal(true)} />
        <Testimonials />
        <Location />
        <ContactForm />
      </main>

      <Footer />

      {/* Modals */}
      {showJoinModal && (
        <JoinTeam onClose={() => setShowJoinModal(false)} />
      )}

      {showQuoteModal && (
        <ContactForm
          isModal
          onClose={() => setShowQuoteModal(false)}
        />
      )}

      {/* Exit intent popup */}
      <ExitIntentPopup onQuoteClick={() => setShowQuoteModal(true)} />
    </>
  )
}
