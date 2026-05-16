import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const links = [
  { href: '#produit', label: 'Produit' },
  { href: '#comment', label: 'Comment ça marche' },
  { href: '#equipe', label: 'Notre équipe' },
  { href: '#tarifs', label: 'Tarifs' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      <motion.nav
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          zIndex: 1000,
          padding: scrolled ? '12px 0' : '20px 0',
          background: scrolled
            ? 'rgba(4, 6, 13, 0.92)'
            : 'transparent',
          backdropFilter: scrolled ? 'blur(20px)' : 'none',
          borderBottom: scrolled ? '1px solid rgba(0,200,232,0.1)' : 'none',
          transition: 'all 0.4s ease',
        }}
      >
        <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <a href="#" style={{ display: 'flex', flexDirection: 'column', textDecoration: 'none' }}>
            <span style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '22px',
              fontWeight: 800,
              color: 'var(--white)',
              letterSpacing: '-0.5px',
            }}>
              Lock<span style={{ color: 'var(--cyan)' }}>'</span>Nco
            </span>
            <span style={{
              fontSize: '9px',
              letterSpacing: '2.5px',
              color: 'var(--cyan)',
              fontWeight: 500,
              textTransform: 'uppercase',
              marginTop: '-2px',
            }}>
              Secure Your Zipper
            </span>
          </a>

          <nav style={{ display: 'flex', gap: '36px', alignItems: 'center' }}
            className="desktop-nav">
            {links.map(({ href, label }) => (
              <a key={href} href={href} style={{
                fontFamily: 'var(--font-body)',
                fontSize: '14px',
                fontWeight: 400,
                color: 'var(--gray-light)',
                transition: 'color 0.2s',
              }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--gray-light)'}
              >
                {label}
              </a>
            ))}
            <a href="#commander" className="btn-primary" style={{ padding: '10px 24px', fontSize: '13px' }}>
              Commander
            </a>
          </nav>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'none',
              border: '1px solid rgba(0,200,232,0.3)',
              borderRadius: '8px',
              padding: '8px 12px',
              color: 'var(--white)',
              fontSize: '18px',
              display: 'none',
            }}
          >
            {menuOpen ? '✕' : '☰'}
          </button>
        </div>
      </motion.nav>

      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed',
              top: '64px',
              left: 0,
              right: 0,
              background: 'rgba(4, 6, 13, 0.98)',
              backdropFilter: 'blur(20px)',
              zIndex: 999,
              padding: '24px',
              borderBottom: '1px solid rgba(0,200,232,0.1)',
            }}
          >
            {links.map(({ href, label }) => (
              <a key={href} href={href}
                onClick={() => setMenuOpen(false)}
                style={{
                  display: 'block',
                  padding: '14px 0',
                  fontFamily: 'var(--font-heading)',
                  fontSize: '18px',
                  fontWeight: 600,
                  color: 'var(--white)',
                  borderBottom: '1px solid rgba(255,255,255,0.06)',
                }}
              >
                {label}
              </a>
            ))}
            <a href="#commander" className="btn-primary" style={{ marginTop: '20px', justifyContent: 'center' }}>
              Commander
            </a>
          </motion.div>
        )}
      </AnimatePresence>

      <style>{`
        @media (max-width: 768px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; align-items: center; justify-content: center; min-width: 44px; min-height: 44px; }
        }
      `}</style>
    </>
  )
}
