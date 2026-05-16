import { motion } from 'framer-motion'

const tiers = [
  {
    name: 'ZipLock Solo',
    price: '4,90',
    desc: '1 verrou, 1 design au choix',
    features: [
      '1 ZipLock (1 design)',
      'Compatible toutes fermetures',
      'Pose en 5 secondes',
      'Livraison rapide',
    ],
    cta: 'Commander 1 design',
    highlight: false,
  },
  {
    name: 'ZipLock Duo',
    price: '8,50',
    desc: '2 verrous — pour sac + trousse',
    features: [
      '2 ZipLock (designs au choix)',
      'Compatible toutes fermetures',
      'Pose en 5 secondes',
      'Livraison rapide',
      'Économisez 1,30€',
    ],
    cta: 'Commander le Duo',
    highlight: true,
    badge: 'Le plus populaire',
  },
  {
    name: 'ZipLock Pack',
    price: '14,90',
    desc: '4 verrous — les 4 designs complets',
    features: [
      '4 ZipLock (1 de chaque design)',
      'Compatible toutes fermetures',
      'Pose en 5 secondes',
      'Livraison rapide',
      'Collection complète',
      'Idéal pour offrir',
    ],
    cta: 'Commander le Pack',
    highlight: false,
  },
]

export default function Pricing() {
  return (
    <section id="tarifs" style={{ background: 'var(--dark)', padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '72px' }}
        >
          <p className="section-label">Tarifs</p>
          <h2 className="section-title">
            Simple. Transparent.<br />
            <span style={{ color: 'var(--cyan)' }}>Sans surprise.</span>
          </h2>
          <p className="section-subtitle" style={{ margin: '0 auto' }}>
            La sécurité ne devrait pas coûter cher.
            Chez Lock'Nco, elle commence à 4,90€.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          alignItems: 'start',
        }}
          className="pricing-grid"
        >
          {tiers.map(({ name, price, desc, features, cta, highlight, badge }, i) => (
            <motion.div
              key={name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className={highlight ? 'pricing-card-highlight' : ''}
              style={{
                background: highlight
                  ? 'linear-gradient(160deg, #0A2A80 0%, #0D1F60 100%)'
                  : 'var(--dark-card)',
                border: highlight
                  ? '1px solid rgba(0,200,232,0.4)'
                  : '1px solid var(--dark-border)',
                borderRadius: '24px',
                padding: '40px 32px',
                position: 'relative',
                boxShadow: highlight
                  ? '0 0 60px rgba(0,200,232,0.12)'
                  : 'none',
                transform: highlight ? 'scale(1.04)' : 'scale(1)',
              }}
            >
              {badge && (
                <div style={{
                  position: 'absolute',
                  top: '-14px',
                  left: '50%',
                  transform: 'translateX(-50%)',
                  background: 'var(--gradient-cyan)',
                  color: 'var(--dark)',
                  fontSize: '11px',
                  fontWeight: 700,
                  letterSpacing: '1.5px',
                  textTransform: 'uppercase',
                  padding: '6px 20px',
                  borderRadius: '100px',
                  whiteSpace: 'nowrap',
                }}>
                  {badge}
                </div>
              )}

              <h3 style={{
                fontFamily: 'var(--font-heading)',
                fontSize: '18px',
                fontWeight: 700,
                color: highlight ? 'var(--cyan)' : 'var(--gray-light)',
                marginBottom: '8px',
              }}>
                {name}
              </h3>

              <div style={{ marginBottom: '8px' }}>
                <span style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(36px, 10vw, 52px)',
                  fontWeight: 800,
                  color: 'var(--white)',
                  lineHeight: 1,
                }}>
                  {price}
                </span>
                <span style={{ color: 'var(--gray)', fontSize: '18px' }}>€</span>
              </div>

              <p style={{
                fontSize: '14px',
                color: 'var(--gray)',
                marginBottom: '32px',
              }}>
                {desc}
              </p>

              <div style={{
                height: '1px',
                background: highlight ? 'rgba(0,200,232,0.2)' : 'rgba(255,255,255,0.06)',
                marginBottom: '28px',
              }} />

              <ul style={{
                listStyle: 'none',
                display: 'flex',
                flexDirection: 'column',
                gap: '12px',
                marginBottom: '32px',
              }}>
                {features.map((f) => (
                  <li key={f} style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '10px',
                    fontSize: '14px',
                    color: 'var(--gray-light)',
                  }}>
                    <span style={{ color: 'var(--cyan)', fontSize: '16px', flexShrink: 0 }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a
                href="#commander"
                className={highlight ? 'btn-primary' : 'btn-secondary'}
                style={{ display: 'flex', justifyContent: 'center', width: '100%' }}
              >
                {cta}
              </a>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5 }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
            fontSize: '14px',
            color: 'var(--gray)',
          }}
        >
          Paiement sécurisé · Livraison en France métropolitaine · Satisfait ou remboursé 14 jours
        </motion.p>
      </div>

      <style>{`
        @media (max-width: 900px) {
          .pricing-grid { grid-template-columns: 1fr !important; max-width: 480px; margin: 0 auto; }
          .pricing-card-highlight { transform: scale(1) !important; }
        }
      `}</style>
    </section>
  )
}
