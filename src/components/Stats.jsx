import { useInView } from 'framer-motion'
import { useRef, useState, useEffect } from 'react'
import { motion } from 'framer-motion'

function CountUp({ target, suffix = '', duration = 2 }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })

  useEffect(() => {
    if (!inView) return
    const startTime = Date.now()
    const endTime = startTime + duration * 1000
    const tick = () => {
      const now = Date.now()
      const progress = Math.min((now - startTime) / (endTime - startTime), 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.round(eased * target))
      if (progress < 1) requestAnimationFrame(tick)
    }
    requestAnimationFrame(tick)
  }, [inView, target, duration])

  return <span ref={ref}>{count}{suffix}</span>
}

const stats = [
  {
    value: 400000,
    suffix: '+',
    label: 'vols à la tire par an',
    sublabel: 'en France',
    icon: '🎒',
  },
  {
    value: 1,
    suffix: ' sur 3',
    label: 'a déjà subi un vol',
    sublabel: 'dans les transports',
    icon: '🚇',
  },
  {
    value: 90,
    suffix: '%',
    label: 'ouvrent via la fermeture',
    sublabel: 'des pickpockets',
    icon: '🔓',
  },
]

export default function Stats() {
  return (
    <section style={{
      background: 'var(--dark-card)',
      borderTop: '1px solid rgba(0,200,232,0.08)',
      borderBottom: '1px solid rgba(0,200,232,0.08)',
      padding: '80px 0',
    }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          style={{
            textAlign: 'center',
            marginBottom: '60px',
          }}
        >
          <p className="section-label">Le problème</p>
          <h2 className="section-title">Les chiffres qui font réfléchir</h2>
        </motion.div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '24px',
        }}>
          {stats.map(({ value, suffix, label, sublabel, icon }, i) => (
            <motion.div
              key={label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.12 }}
              style={{
                background: 'rgba(255,255,255,0.03)',
                border: '1px solid var(--dark-border)',
                borderRadius: 'var(--radius)',
                padding: '36px 32px',
                position: 'relative',
                overflow: 'hidden',
              }}
            >
              <div style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                height: '2px',
                background: 'var(--gradient-cyan)',
              }} />
              <div style={{ fontSize: '32px', marginBottom: '16px' }}>{icon}</div>
              <div style={{
                fontFamily: 'var(--font-heading)',
                fontSize: 'clamp(36px, 5vw, 52px)',
                fontWeight: 800,
                color: 'var(--cyan)',
                lineHeight: 1,
                marginBottom: '12px',
              }}>
                <CountUp target={value} suffix={suffix} />
              </div>
              <div style={{
                fontSize: '16px',
                fontWeight: 500,
                color: 'var(--white)',
                marginBottom: '4px',
              }}>{label}</div>
              <div style={{ fontSize: '13px', color: 'var(--gray)' }}>{sublabel}</div>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          style={{
            textAlign: 'center',
            marginTop: '48px',
            fontSize: '15px',
            color: 'var(--gray)',
            fontStyle: 'italic',
          }}
        >
          Sources : Ministère de l'Intérieur, ONDRP. La solution existe. Elle coûte moins de 5€.
        </motion.p>
      </div>
    </section>
  )
}
