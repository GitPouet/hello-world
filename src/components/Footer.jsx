import { motion } from 'framer-motion'

export default function Footer() {
  return (
    <footer style={{
      background: '#020408',
      borderTop: '1px solid rgba(255,255,255,0.06)',
      padding: '60px 0 32px',
    }}>
      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: '2fr 1fr 1fr',
          gap: '48px',
          marginBottom: '48px',
        }}
          className="footer-grid"
        >
          {/* Brand */}
          <div>
            <div style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '26px',
              fontWeight: 800,
              color: 'var(--white)',
              marginBottom: '6px',
            }}>
              Lock<span style={{ color: 'var(--cyan)' }}>'</span>Nco
            </div>
            <div style={{
              fontSize: '10px',
              letterSpacing: '2.5px',
              color: 'var(--cyan)',
              fontWeight: 500,
              textTransform: 'uppercase',
              marginBottom: '20px',
            }}>
              Secure Your Zipper
            </div>
            <p style={{
              fontSize: '14px',
              color: 'var(--gray)',
              lineHeight: 1.7,
              maxWidth: '300px',
            }}>
              Mini-entreprise fondée par 17 élèves de 3ème
              au collège Via Domitia, Poussan — dans le cadre
              du programme Entreprendre Pour Apprendre.
            </p>

            <div className="footer-social" style={{
              display: 'flex',
              gap: '12px',
              marginTop: '24px',
            }}>
              <a
                href="https://www.instagram.com/lock.nco/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.2s',
                  color: 'var(--white)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,200,232,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(0,200,232,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                📷
              </a>
              <a
                href="https://www.facebook.com/people/Lock-Nco/61586293395441/"
                target="_blank"
                rel="noopener noreferrer"
                style={{
                  width: '40px',
                  height: '40px',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '18px',
                  transition: 'all 0.2s',
                  color: 'var(--white)',
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.background = 'rgba(0,200,232,0.1)'
                  e.currentTarget.style.borderColor = 'rgba(0,200,232,0.3)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.background = 'rgba(255,255,255,0.05)'
                  e.currentTarget.style.borderColor = 'rgba(255,255,255,0.08)'
                }}
              >
                👥
              </a>
            </div>
          </div>

          {/* Links */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--white)',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}>
              Navigation
            </h4>
            {[
              { href: '#produit', label: 'Le produit' },
              { href: '#comment', label: 'Comment ça marche' },
              { href: '#equipe', label: 'Notre équipe' },
              { href: '#tarifs', label: 'Tarifs' },
              { href: '#commander', label: 'Commander' },
            ].map(({ href, label }) => (
              <a
                key={href}
                href={href}
                style={{
                  display: 'block',
                  fontSize: '14px',
                  color: 'var(--gray)',
                  marginBottom: '10px',
                  transition: 'color 0.2s',
                }}
                onMouseEnter={e => e.target.style.color = 'var(--white)'}
                onMouseLeave={e => e.target.style.color = 'var(--gray)'}
              >
                {label}
              </a>
            ))}
          </div>

          {/* Contact */}
          <div>
            <h4 style={{
              fontFamily: 'var(--font-heading)',
              fontSize: '14px',
              fontWeight: 700,
              color: 'var(--white)',
              marginBottom: '20px',
              letterSpacing: '0.5px',
            }}>
              Nous trouver
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
              {[
                { icon: '📍', text: 'Collège Via Domitia\nPoussan, 34560 Hérault' },
                { icon: '📸', text: '@lock.nco sur Instagram' },
                { icon: '🤝', text: 'Programme EPA\nEntreprendre Pour Apprendre' },
              ].map(({ icon, text }) => (
                <div key={text} style={{
                  display: 'flex',
                  gap: '10px',
                  fontSize: '13px',
                  color: 'var(--gray)',
                  lineHeight: 1.6,
                }}>
                  <span style={{ flexShrink: 0 }}>{icon}</span>
                  <span style={{ whiteSpace: 'pre-line' }}>{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="footer-bottom" style={{
          paddingTop: '32px',
          borderTop: '1px solid rgba(255,255,255,0.05)',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
          flexWrap: 'wrap',
          gap: '12px',
        }}>
          <p style={{ fontSize: '13px', color: 'var(--gray)' }}>
            © 2025–2026 Lock'Nco · Tous droits réservés
          </p>
          <div style={{
            display: 'flex',
            alignItems: 'center',
            flexWrap: 'wrap',
            gap: '6px',
            fontSize: '12px',
            color: 'var(--gray)',
          }}>
            <span>Créé avec ❤️ par des élèves de 3ème</span>
            <span style={{ color: 'rgba(255,255,255,0.1)' }}>·</span>
            <span>Occitanie 🌿</span>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .footer-grid { grid-template-columns: 1fr !important; gap: 36px !important; }
          .footer-bottom { flex-direction: column !important; text-align: center; }
          .footer-social a { min-width: 48px !important; min-height: 48px !important; }
        }
      `}</style>
    </footer>
  )
}
