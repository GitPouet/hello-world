import { motion } from 'framer-motion'

const values = [
  {
    label: 'Sécurité',
    title: 'Zéro compromis.',
    body: 'Le système aimant + loquet de ZipLock rend l\'ouverture impossible sans déverrouillage volontaire. Testé, validé, efficace.',
    gradient: 'linear-gradient(135deg, #0A1F6E, #1B4FD8)',
    glow: 'rgba(27,79,216,0.3)',
    icon: '🔐',
  },
  {
    label: 'Esthétique',
    title: 'Sécurisé ne veut pas dire moche.',
    body: '4 formes conçues pour compléter votre style. Le ZipLock se remarque pour sa beauté, pas pour sa présence — c\'est le but.',
    gradient: 'linear-gradient(135deg, #1B4FD8, #00C8E8)',
    glow: 'rgba(0,200,232,0.3)',
    icon: '✨',
  },
  {
    label: 'Innovant',
    title: 'Une idée simple. Un impact réel.',
    body: 'Imaginé par 17 élèves de 3ème. Pas de batterie, pas d\'app, pas d\'abonnement. Un objet qui marche — c\'est tout.',
    gradient: 'linear-gradient(135deg, #00C8E8, #0A1F6E)',
    glow: 'rgba(0,200,232,0.25)',
    icon: '💡',
  },
]

export default function Values() {
  return (
    <section style={{ background: 'var(--dark)', padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p className="section-label">Nos valeurs</p>
          <h2 className="section-title">
            Ce qu'on ne négocie pas
          </h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '24px',
        }}
          className="values-grid"
        >
          {values.map(({ label, title, body, gradient, glow, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.15 }}
              whileHover={{ y: -8, transition: { duration: 0.25 } }}
              style={{
                background: 'var(--dark-card)',
                border: '1px solid var(--dark-border)',
                borderRadius: '24px',
                padding: '48px 36px',
                position: 'relative',
                overflow: 'hidden',
                cursor: 'default',
              }}
            >
              {/* Top gradient bar */}
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '3px',
                background: gradient,
              }} />

              {/* Glow effect on hover handled by whileHover */}
              <div style={{
                position: 'absolute',
                bottom: '-60px',
                right: '-60px',
                width: '200px',
                height: '200px',
                background: `radial-gradient(circle, ${glow} 0%, transparent 70%)`,
                pointerEvents: 'none',
              }} />

              <div style={{ fontSize: '40px', marginBottom: '20px' }}>{icon}</div>

              <div style={{
                fontSize: '11px',
                letterSpacing: '2.5px',
                textTransform: 'uppercase',
                color: 'var(--cyan)',
                fontWeight: 500,
                marginBottom: '12px',
              }}>
                {label}
              </div>

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '24px',
                fontWeight: 700,
                lineHeight: 1.2,
                marginBottom: '16px',
                color: 'var(--white)',
              }}>
                {title}
              </h3>

              <p style={{
                fontSize: '15px',
                color: 'var(--gray-light)',
                lineHeight: 1.75,
              }}>
                {body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>

      <style>{`
        @media (max-width: 600px) {
          .values-grid { grid-template-columns: 1fr !important; }
        }
        @media (min-width: 601px) and (max-width: 1024px) {
          .values-grid { grid-template-columns: 1fr 1fr !important; }
        }
      `}</style>
    </section>
  )
}
