import { Suspense, lazy, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

const Canvas3D = lazy(() => import('./Canvas3D'))

function useIsMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.innerWidth < 768)
  useEffect(() => {
    const check = () => setMobile(window.innerWidth < 768)
    window.addEventListener('resize', check, { passive: true })
    return () => window.removeEventListener('resize', check)
  }, [])
  return mobile
}

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  const isMobile = useIsMobile()

  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--gradient-hero)',
    }}>
      {/* 3D canvas — desktop only */}
      {!isMobile && (
        <Suspense fallback={null}>
          <Canvas3D />
        </Suspense>
      )}

      {/* Gradient overlay bottom */}
      <div style={{
        position: 'absolute',
        bottom: 0,
        left: 0,
        right: 0,
        height: '260px',
        background: 'linear-gradient(to top, var(--dark) 0%, transparent 100%)',
        pointerEvents: 'none',
      }} />

      {/* Glow blob */}
      <div style={{
        position: 'absolute',
        top: '30%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(27,79,216,0.18) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      {/* Content */}
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px', paddingBottom: '80px' }}>
        <div style={{ maxWidth: '720px' }}>
          <motion.div
            {...fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span className="hero-badge" style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,200,232,0.1)',
              border: '1px solid rgba(0,200,232,0.25)',
              borderRadius: '100px',
              padding: '6px 14px',
              fontSize: '11px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '24px',
              maxWidth: '100%',
              flexWrap: 'wrap',
            }}>
              <span style={{
                width: '6px', height: '6px',
                background: 'var(--cyan)',
                borderRadius: '50%',
                flexShrink: 0,
                animation: 'pulse 2s infinite',
              }} />
              <span className="hero-badge-text">Projet entrepreneurial — Occitanie 2025–2026</span>
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(44px, 10vw, 90px)',
              fontWeight: 800,
              lineHeight: 0.95,
              marginBottom: '24px',
              letterSpacing: '-2px',
            }}
          >
            Ton sac.<br />
            <span style={{
              background: 'var(--gradient-cyan)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent',
              backgroundClip: 'text',
            }}>
              Inviolable.
            </span>
          </motion.h1>

          <motion.p
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.5 }}
            style={{
              fontSize: 'clamp(15px, 2.5vw, 19px)',
              fontWeight: 300,
              color: 'var(--gray-light)',
              lineHeight: 1.7,
              marginBottom: '36px',
              maxWidth: '520px',
            }}
          >
            ZipLock par Lock'Nco verrouille votre fermeture éclair en quelques secondes.
            Discret, ajustable, 4 designs — les mains indiscrètes n'ont aucune chance.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.65 }}
            className="hero-ctas"
            style={{ display: 'flex', gap: '12px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#commander" className="btn-primary" style={{ fontSize: '15px', padding: '16px 36px' }}>
              Commander maintenant
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#produit" className="btn-secondary" style={{ fontSize: '15px' }}>
              Voir le produit
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            className="hero-stats"
            style={{
              display: 'flex',
              gap: '24px',
              marginTop: '48px',
              paddingTop: '32px',
              borderTop: '1px solid rgba(255,255,255,0.08)',
              flexWrap: 'wrap',
            }}
          >
            {[
              { value: '4,90€', label: 'À partir de' },
              { value: '4', label: 'Designs disponibles' },
              { value: '17', label: 'Élèves créateurs' },
            ].map(({ value, label }) => (
              <div key={label}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(22px, 4vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--cyan)',
                }}>
                  {value}
                </div>
                <div style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '2px' }}>
                  {label}
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        style={{
          position: 'absolute',
          bottom: '40px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: '8px',
          zIndex: 2,
        }}
      >
        <span style={{ fontSize: '11px', letterSpacing: '2px', color: 'var(--gray)', textTransform: 'uppercase' }}>
          Scroll
        </span>
        <div style={{
          width: '1px',
          height: '40px',
          background: 'linear-gradient(to bottom, var(--cyan), transparent)',
          animation: 'scrollBounce 1.5s ease-in-out infinite',
        }} />
      </motion.div>

      <style>{`
        @keyframes pulse {
          0%, 100% { opacity: 1; transform: scale(1); }
          50% { opacity: 0.6; transform: scale(0.8); }
        }
        @keyframes scrollBounce {
          0%, 100% { transform: scaleY(1); opacity: 1; }
          50% { transform: scaleY(0.6); opacity: 0.5; }
        }
        @media (max-width: 768px) {
          .hero-ctas { flex-direction: column; }
          .hero-ctas a { text-align: center; }
          .hero-stats { gap: 20px; }
          .hero-badge { letter-spacing: 0.5px; font-size: 9px !important; padding: 5px 10px !important; }
          .hero-badge-text { word-break: break-word; }
        }
        @media (max-width: 480px) {
          .hero-badge { letter-spacing: 0px; }
          .hero-badge-text::after { content: none; }
        }
      `}</style>
    </section>
  )
}
