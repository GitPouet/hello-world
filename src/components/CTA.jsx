import { motion } from 'framer-motion'
import { useState } from 'react'

export default function CTA() {
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    if (email) setSent(true)
  }

  return (
    <section id="commander" style={{
      background: 'var(--dark-card)',
      borderTop: '1px solid rgba(0,200,232,0.1)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Background radial glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '900px',
        height: '500px',
        background: 'radial-gradient(ellipse, rgba(27,79,216,0.15) 0%, transparent 65%)',
        pointerEvents: 'none',
      }} />

      {/* Animated border ring */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '500px',
        height: '500px',
        borderRadius: '50%',
        border: '1px solid rgba(0,200,232,0.06)',
        pointerEvents: 'none',
      }} />
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%,-50%)',
        width: '700px',
        height: '700px',
        borderRadius: '50%',
        border: '1px solid rgba(0,200,232,0.04)',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative', textAlign: 'center' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <p className="section-label" style={{ justifyContent: 'center', display: 'flex' }}>
            Commandez maintenant
          </p>
          <h2 className="section-title" style={{ textAlign: 'center' }}>
            Votre sac mérite mieux<br />
            qu'un coup de chance.
          </h2>
          <p style={{
            fontSize: '18px',
            color: 'var(--gray-light)',
            lineHeight: 1.7,
            margin: '0 auto 48px',
            maxWidth: '540px',
          }}>
            Commandez votre ZipLock directement auprès de Lock'Nco.
            Laissez votre email et on vous recontacte sous 24h.
          </p>

          {sent ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              style={{
                display: 'inline-flex',
                flexDirection: 'column',
                alignItems: 'center',
                gap: '12px',
                padding: '32px 48px',
                background: 'rgba(0,200,232,0.1)',
                border: '1px solid rgba(0,200,232,0.3)',
                borderRadius: '20px',
              }}
            >
              <span style={{ fontSize: '40px' }}>✅</span>
              <div style={{ fontFamily: 'var(--font-heading)', fontSize: '22px', fontWeight: 700 }}>
                Message reçu !
              </div>
              <p style={{ color: 'var(--gray-light)', fontSize: '15px' }}>
                On vous répond dans les 24h. Merci de soutenir Lock'Nco 🙏
              </p>
            </motion.div>
          ) : (
            <form onSubmit={handleSubmit} style={{
              display: 'flex',
              gap: '12px',
              maxWidth: '520px',
              margin: '0 auto 48px',
              flexWrap: 'wrap',
            }}>
              <input
                type="email"
                required
                placeholder="votre@email.fr"
                value={email}
                onChange={e => setEmail(e.target.value)}
                style={{
                  flex: '1',
                  minWidth: '240px',
                  padding: '16px 24px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.12)',
                  borderRadius: '100px',
                  color: 'var(--white)',
                  fontSize: '15px',
                  fontFamily: 'var(--font-body)',
                  outline: 'none',
                  transition: 'border-color 0.2s',
                }}
                onFocus={e => e.target.style.borderColor = 'var(--cyan)'}
                onBlur={e => e.target.style.borderColor = 'rgba(255,255,255,0.12)'}
              />
              <button type="submit" className="btn-primary" style={{ padding: '16px 32px' }}>
                Je commande
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
                  <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>
            </form>
          )}

          <div style={{
            display: 'flex',
            gap: '32px',
            justifyContent: 'center',
            flexWrap: 'wrap',
            marginTop: '32px',
          }}>
            {[
              { icon: '📦', text: 'Livraison rapide' },
              { icon: '🔒', text: 'Paiement sécurisé' },
              { icon: '↩️', text: '14 jours satisfait ou remboursé' },
              { icon: '💬', text: 'Réponse en 24h' },
            ].map(({ icon, text }) => (
              <div key={text} style={{
                display: 'flex',
                alignItems: 'center',
                gap: '8px',
                fontSize: '14px',
                color: 'var(--gray)',
              }}>
                <span>{icon}</span>
                {text}
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
