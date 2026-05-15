import { Suspense, lazy } from 'react'
import { motion } from 'framer-motion'

const Canvas3D = lazy(() => import('./Canvas3D'))

const fadeUp = {
  initial: { opacity: 0, y: 30 },
  animate: { opacity: 1, y: 0 },
}

export default function Hero() {
  return (
    <section style={{
      position: 'relative',
      minHeight: '100vh',
      display: 'flex',
      alignItems: 'center',
      overflow: 'hidden',
      background: 'var(--gradient-hero)',
    }}>
      {/* 3D canvas */}
      <Suspense fallback={null}>
        <Canvas3D />
      </Suspense>

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
      <div className="container" style={{ position: 'relative', zIndex: 2, paddingTop: '100px' }}>
        <div style={{ maxWidth: '720px' }}>
          <motion.div
            {...fadeUp}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <span style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: '8px',
              background: 'rgba(0,200,232,0.1)',
              border: '1px solid rgba(0,200,232,0.25)',
              borderRadius: '100px',
              padding: '6px 16px',
              fontSize: '12px',
              fontWeight: 500,
              letterSpacing: '1.5px',
              textTransform: 'uppercase',
              color: 'var(--cyan)',
              marginBottom: '32px',
            }}>
              <span style={{
                width: '6px', height: '6px',
                background: 'var(--cyan)',
                borderRadius: '50%',
                animation: 'pulse 2s infinite',
              }} />
              Projet entrepreneurial — Occitanie 2025–2026
            </span>
          </motion.div>

          <motion.h1
            {...fadeUp}
            transition={{ duration: 0.7, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            style={{
              fontFamily: 'var(--font-heading)',
              fontSize: 'clamp(48px, 8vw, 90px)',
              fontWeight: 800,
              lineHeight: 0.95,
              marginBottom: '28px',
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
              fontSize: 'clamp(16px, 2vw, 20px)',
              fontWeight: 300,
              color: 'var(--gray-light)',
              lineHeight: 1.7,
              marginBottom: '44px',
              maxWidth: '520px',
            }}
          >
            ZipLock par Lock'Nco verrouille votre fermeture éclair en quelques secondes.
            Discret, ajustable, 4 designs — les mains indiscrètes n'ont aucune chance.
          </motion.p>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.65 }}
            style={{ display: 'flex', gap: '16px', flexWrap: 'wrap', alignItems: 'center' }}
          >
            <a href="#commander" className="btn-primary" style={{ fontSize: '16px', padding: '18px 40px' }}>
              Commander maintenant
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </a>
            <a href="#produit" className="btn-secondary">
              Voir le produit
            </a>
          </motion.div>

          <motion.div
            {...fadeUp}
            transition={{ duration: 0.6, delay: 0.8 }}
            style={{
              display: 'flex',
              gap: '32px',
              marginTop: '60px',
              paddingTop: '40px',
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
                  fontSize: 'clamp(24px, 3vw, 32px)',
                  fontWeight: 800,
                  color: 'var(--cyan)',
                }}>
                  {value}
                </div>
                <div style={{ fontSize: '13px', color: 'var(--gray)', marginTop: '2px' }}>
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
      `}</style>
    </section>
  )
}
