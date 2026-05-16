import { motion } from 'framer-motion'

const steps = [
  {
    n: '01',
    title: 'Choisissez votre design',
    body: 'Cœur, cercle, fleur ou étoile — sélectionnez le modèle qui correspond à votre style. Tous les designs offrent la même protection.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <circle cx="16" cy="16" r="12" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M10 16l4 4 8-8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '02',
    title: 'Glissez sur la tirette',
    body: 'Enfilez ZipLock sur la tirette de votre fermeture éclair. Le système s\'adapte automatiquement à toutes les tailles.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <path d="M8 16h16M20 12l4 4-4 4" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
      </svg>
    ),
  },
  {
    n: '03',
    title: 'Verrouillez en 1 geste',
    body: 'Appuyez jusqu\'au clic magnétique. La goupille se verrouille. Votre sac est sécurisé. Impossible à ouvrir sans le code de déverrouillage.',
    icon: (
      <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
        <rect x="8" y="15" width="16" height="11" rx="2" stroke="currentColor" strokeWidth="1.5"/>
        <path d="M11 15v-3a5 5 0 0110 0v3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
        <circle cx="16" cy="21" r="1.5" fill="currentColor"/>
      </svg>
    ),
  },
]

export default function HowItWorks() {
  return (
    <section id="comment" style={{
      background: 'linear-gradient(180deg, var(--dark) 0%, var(--dark-card) 50%, var(--dark) 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '800px',
        height: '400px',
        background: 'radial-gradient(ellipse, rgba(27,79,216,0.1) 0%, transparent 70%)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '80px' }}
        >
          <p className="section-label">Utilisation</p>
          <h2 className="section-title">3 secondes.<br />Sac verrouillé.</h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            Pas de clé. Pas d'app. Pas de prise de tête.
            ZipLock fonctionne immédiatement, partout.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '2px',
          position: 'relative',
        }}
          className="steps-grid"
        >
          {/* Connector line */}
          <div style={{
            position: 'absolute',
            top: '60px',
            left: '16.67%',
            right: '16.67%',
            height: '1px',
            background: 'linear-gradient(to right, transparent, var(--cyan), var(--blue-mid), var(--cyan), transparent)',
            opacity: 0.3,
          }}
            className="steps-connector"
          />

          {steps.map(({ n, title, body, icon }, i) => (
            <motion.div
              key={n}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              style={{
                padding: '40px 32px',
                background: 'rgba(255,255,255,0.025)',
                border: '1px solid var(--dark-border)',
                borderRadius: 'var(--radius)',
                position: 'relative',
                margin: '1px',
              }}
            >
              {/* Step number */}
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(40px, 10vw, 72px)',
                fontWeight: 800,
                color: 'rgba(0,200,232,0.08)',
                position: 'absolute',
                top: '16px',
                right: '16px',
                lineHeight: 1,
                userSelect: 'none',
                overflow: 'hidden',
                maxWidth: '50%',
              }}>
                {n}
              </div>

              {/* Icon */}
              <div style={{
                width: '64px',
                height: '64px',
                borderRadius: '16px',
                background: 'rgba(0,200,232,0.1)',
                border: '1px solid rgba(0,200,232,0.2)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                marginBottom: '24px',
                color: 'var(--cyan)',
              }}>
                {icon}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '22px',
                fontWeight: 700,
                marginBottom: '12px',
                color: 'var(--white)',
              }}>
                {title}
              </h3>
              <p style={{
                fontSize: '15px',
                color: 'var(--gray-light)',
                lineHeight: 1.7,
              }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .steps-grid { grid-template-columns: 1fr !important; gap: 12px !important; }
          .steps-connector { display: none; }
        }
      `}</style>
    </section>
  )
}
