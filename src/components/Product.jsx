import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const products = [
  {
    id: 'heart',
    name: 'Cœur',
    emoji: '♥',
    desc: 'Pour ceux qui sécurisent avec style. Le classique réinventé.',
    color: '#E8006A',
    bg: 'rgba(232, 0, 106, 0.08)',
    border: 'rgba(232, 0, 106, 0.2)',
  },
  {
    id: 'circle',
    name: 'Cercle',
    emoji: '●',
    desc: 'Minimaliste. Discret. Efficace. La forme la plus universelle.',
    color: 'var(--cyan)',
    bg: 'rgba(0, 200, 232, 0.08)',
    border: 'rgba(0, 200, 232, 0.2)',
  },
  {
    id: 'flower',
    name: 'Fleur',
    emoji: '✿',
    desc: 'Quatre pétales, zéro compromis sur la sécurité.',
    color: '#9C5FFF',
    bg: 'rgba(156, 95, 255, 0.08)',
    border: 'rgba(156, 95, 255, 0.2)',
  },
  {
    id: 'star',
    name: 'Étoile',
    emoji: '★',
    desc: 'Pour briller, même dans les endroits bondés.',
    color: '#FFB800',
    bg: 'rgba(255, 184, 0, 0.08)',
    border: 'rgba(255, 184, 0, 0.2)',
  },
]

function ProductShape({ product, isActive }) {
  return (
    <div style={{
      width: '100%',
      aspectRatio: '1',
      maxWidth: '240px',
      margin: '0 auto',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
      background: isActive ? product.bg : 'rgba(255,255,255,0.03)',
      border: `2px solid ${isActive ? product.border : 'rgba(255,255,255,0.06)'}`,
      borderRadius: '24px',
      fontSize: '80px',
      color: isActive ? product.color : 'var(--gray)',
      transition: 'all 0.4s ease',
      boxShadow: isActive ? `0 0 60px ${product.bg}` : 'none',
      cursor: 'pointer',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {isActive && (
        <div style={{
          position: 'absolute',
          inset: 0,
          background: `radial-gradient(circle at center, ${product.bg} 0%, transparent 70%)`,
        }} />
      )}
      <span style={{ position: 'relative', zIndex: 1, filter: isActive ? 'none' : 'grayscale(100%)' }}>
        {product.emoji}
      </span>
    </div>
  )
}

export default function Product() {
  const [active, setActive] = useState(1)
  const current = products[active]

  return (
    <section id="produit" className="section" style={{ background: 'var(--dark)' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '72px' }}
        >
          <p className="section-label">Le produit</p>
          <h2 className="section-title">
            ZipLock — 4 designs,<br />
            <span style={{ color: 'var(--cyan)' }}>1 seul objectif</span>
          </h2>
          <p className="section-subtitle">
            Glissez ZipLock sur votre fermeture éclair. L'aimant et le loquet bloquent l'ouverture.
            Seul vous savez comment le déverrouiller.
          </p>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '60px',
          alignItems: 'center',
        }}
          className="product-grid"
        >
          {/* Left: shape showcase */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '16px',
            }}>
              {products.map((p, i) => (
                <motion.div
                  key={p.id}
                  onClick={() => setActive(i)}
                  whileHover={{ scale: 1.04 }}
                  whileTap={{ scale: 0.97 }}
                  transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                >
                  <ProductShape product={p} isActive={active === i} />
                  <p style={{
                    textAlign: 'center',
                    marginTop: '12px',
                    fontFamily: 'var(--font-heading)',
                    fontWeight: 600,
                    fontSize: '15px',
                    color: active === i ? p.color : 'var(--gray)',
                    transition: 'color 0.3s',
                  }}>{p.name}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Right: product info */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.3 }}
              >
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '40px',
                  fontWeight: 800,
                  color: current.color,
                  marginBottom: '16px',
                }}>
                  ZipLock {current.name}
                </h3>
                <p style={{
                  fontSize: '18px',
                  color: 'var(--gray-light)',
                  lineHeight: 1.7,
                  marginBottom: '32px',
                }}>
                  {current.desc}
                </p>
              </motion.div>
            </AnimatePresence>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px', marginBottom: '40px' }}>
              {[
                { icon: '🔒', text: 'Système aimant + loquet breveté' },
                { icon: '🎯', text: 'Compatible tous sacs à fermeture éclair' },
                { icon: '⚡', text: 'Pose et retrait en moins de 5 secondes' },
                { icon: '✅', text: 'Matériau durable, lavable, léger' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '14px',
                  padding: '14px 18px',
                  background: 'rgba(255,255,255,0.03)',
                  border: '1px solid rgba(255,255,255,0.06)',
                  borderRadius: '12px',
                }}>
                  <span style={{ fontSize: '20px' }}>{icon}</span>
                  <span style={{ fontSize: '15px', color: 'var(--gray-light)' }}>{text}</span>
                </div>
              ))}
            </div>

            <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
              padding: '24px',
              background: 'rgba(0,200,232,0.06)',
              border: '1px solid rgba(0,200,232,0.15)',
              borderRadius: 'var(--radius)',
            }}>
              <div>
                <div style={{ fontSize: '13px', color: 'var(--gray)', marginBottom: '4px' }}>À partir de</div>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: '44px',
                  fontWeight: 800,
                  color: 'var(--cyan)',
                  lineHeight: 1,
                }}>4,90€</div>
              </div>
              <a href="#commander" className="btn-primary" style={{ flex: 1, justifyContent: 'center' }}>
                Commander ce design
              </a>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .product-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
        }
      `}</style>
    </section>
  )
}
