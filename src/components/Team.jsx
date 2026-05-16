import { motion } from 'framer-motion'

export default function Team() {
  return (
    <section id="equipe" style={{
      background: 'linear-gradient(180deg, var(--dark) 0%, var(--dark-card) 100%)',
      padding: '120px 0',
      position: 'relative',
      overflow: 'hidden',
    }}>
      {/* Decorative grid */}
      <div style={{
        position: 'absolute',
        inset: 0,
        backgroundImage: `
          linear-gradient(rgba(0,200,232,0.04) 1px, transparent 1px),
          linear-gradient(90deg, rgba(0,200,232,0.04) 1px, transparent 1px)
        `,
        backgroundSize: '60px 60px',
        pointerEvents: 'none',
      }} />

      <div className="container" style={{ position: 'relative' }}>
        <div style={{
          display: 'grid',
          gridTemplateColumns: '1fr 1fr',
          gap: '80px',
          alignItems: 'center',
        }}
          className="team-grid"
        >
          {/* Left: text */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="section-label">Notre équipe</p>
            <h2 className="section-title">
              17 élèves.<br />
              <span style={{ color: 'var(--cyan)' }}>1 vraie idée.</span>
            </h2>
            <p style={{
              fontSize: '17px',
              color: 'var(--gray-light)',
              lineHeight: 1.8,
              marginBottom: '32px',
            }}>
              Nous sommes un groupe de 17 élèves de 3ème au collège Via Domitia à Poussan,
              en Occitanie. Dans le cadre du programme{' '}
              <strong style={{ color: 'var(--white)' }}>Entreprendre Pour Apprendre</strong>,
              nous avons fondé Lock'Nco pour résoudre un problème que tout le monde connaît
              mais que personne n'avait encore vraiment réglé.
            </p>
            <p style={{
              fontSize: '17px',
              color: 'var(--gray-light)',
              lineHeight: 1.8,
              marginBottom: '40px',
            }}>
              On a conçu le produit, fabriqué les prototypes, construit la marque
              et lancé les ventes — tout ça pendant nos cours. ZipLock, c'est notre
              réponse à un monde où garder ses affaires ne devrait pas être un luxe.
            </p>

            <div style={{
              display: 'flex',
              gap: '16px',
              flexWrap: 'wrap',
            }}>
              {[
                { label: 'Collège Via Domitia', sub: 'Poussan, Hérault' },
                { label: 'EPA', sub: 'Entreprendre Pour Apprendre' },
                { label: 'Occitanie', sub: 'Région partenaire' },
              ].map(({ label, sub }) => (
                <div key={label} style={{
                  padding: '14px 20px',
                  background: 'rgba(255,255,255,0.04)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '12px',
                }}>
                  <div style={{ fontFamily: 'var(--font-heading)', fontSize: '14px', fontWeight: 700 }}>
                    {label}
                  </div>
                  <div style={{ fontSize: '12px', color: 'var(--gray)', marginTop: '2px' }}>{sub}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: visual */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
          >
            <div style={{
              background: 'var(--gradient-blue)',
              borderRadius: '24px',
              padding: 'clamp(24px, 6vw, 48px)',
              position: 'relative',
              overflow: 'hidden',
            }}>
              {/* Decorative circles */}
              <div style={{
                position: 'absolute',
                top: '-60px',
                right: '-60px',
                width: '200px',
                height: '200px',
                borderRadius: '50%',
                background: 'rgba(0,200,232,0.15)',
              }} />
              <div style={{
                position: 'absolute',
                bottom: '-40px',
                left: '-40px',
                width: '140px',
                height: '140px',
                borderRadius: '50%',
                background: 'rgba(255,255,255,0.05)',
              }} />

              <div style={{ position: 'relative', zIndex: 1 }}>
                <div style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(48px, 15vw, 80px)',
                  fontWeight: 800,
                  color: 'rgba(255,255,255,0.12)',
                  lineHeight: 1,
                  marginBottom: '8px',
                }}>
                  3ème
                </div>
                <h3 style={{
                  fontFamily: 'var(--font-heading)',
                  fontSize: 'clamp(20px, 5vw, 28px)',
                  fontWeight: 800,
                  color: 'var(--white)',
                  marginBottom: '8px',
                }}>
                  Collège Via Domitia
                </h3>
                <p style={{ color: 'var(--cyan)', fontSize: '15px', marginBottom: '32px' }}>
                  Poussan, Hérault — Occitanie
                </p>

                <div className="team-stats-grid" style={{
                  display: 'grid',
                  gridTemplateColumns: '1fr 1fr',
                  gap: '12px',
                }}>
                  {[
                    { n: '17', l: 'élèves fondateurs' },
                    { n: '2025', l: 'année de création' },
                    { n: '4', l: 'designs produit' },
                    { n: '4,90€', l: 'prix de départ' },
                  ].map(({ n, l }) => (
                    <div key={l} style={{
                      background: 'rgba(255,255,255,0.08)',
                      borderRadius: '12px',
                      padding: '16px',
                    }}>
                      <div style={{
                        fontFamily: 'var(--font-heading)',
                        fontSize: '28px',
                        fontWeight: 800,
                        color: 'var(--cyan)',
                      }}>
                        {n}
                      </div>
                      <div style={{ fontSize: '12px', color: 'rgba(255,255,255,0.6)', marginTop: '2px' }}>
                        {l}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <style>{`
        @media (max-width: 768px) {
          .team-grid { grid-template-columns: 1fr !important; gap: 40px !important; }
          .team-stats-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
