import { useState } from 'react'
import { motion, AnimatePresence } from 'framer-motion'

const photos = [
  { src: '/gallery/g04-skate.png',         alt: 'ZipLock au skatepark',          span: 'wide' },
  { src: '/gallery/g05-festival-yellow.png', alt: 'Festival — sac jaune sécurisé', span: 'tall' },
  { src: '/gallery/g12-flatlay.png',        alt: '4 designs, 4 couleurs',         span: 'normal' },
  { src: '/gallery/g10-station.png',        alt: 'ZipLock étoile en gare',        span: 'normal' },
  { src: '/gallery/g11-group-rooftop.png',  alt: 'On est tous Lock\'Nco',          span: 'wide' },
  { src: '/gallery/g01-hero-teal.png',      alt: 'Cœur — close-up produit',       span: 'normal' },
]

const allPhotos = [
  { src: '/gallery/g04-skate.png',          alt: 'Skatepark' },
  { src: '/gallery/g05-festival-yellow.png', alt: 'Festival jaune' },
  { src: '/gallery/g11-group-rooftop.png',  alt: 'Groupe rooftop' },
  { src: '/gallery/g12-flatlay.png',        alt: 'Flat lay 4 designs' },
  { src: '/gallery/g01-hero-teal.png',      alt: 'Hero teal' },
  { src: '/gallery/g09-festival-duo.png',   alt: 'Festival duo' },
  { src: '/gallery/g02-metro.png',          alt: 'Métro' },
  { src: '/gallery/g10-station.png',        alt: 'Gare' },
  { src: '/gallery/g13-picnic.png',         alt: 'Picnic' },
  { src: '/gallery/g03-school.png',         alt: 'Collège' },
  { src: '/gallery/g08-star-hands.png',     alt: 'Pose étoile' },
  { src: '/gallery/g06-market-red.png',     alt: 'Marché' },
  { src: '/gallery/g07-howto.png',          alt: 'Comment ça marche' },
]

function Lightbox({ photos, startIndex, onClose }) {
  const [current, setCurrent] = useState(startIndex)

  const prev = () => setCurrent(i => (i - 1 + photos.length) % photos.length)
  const next = () => setCurrent(i => (i + 1) % photos.length)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
      style={{
        position: 'fixed', inset: 0, zIndex: 9999,
        background: 'rgba(0,0,0,0.95)',
        display: 'flex', alignItems: 'center', justifyContent: 'center',
        backdropFilter: 'blur(12px)',
      }}
    >
      {/* Close */}
      <button
        onClick={onClose}
        style={{
          position: 'absolute', top: '20px', right: '24px',
          background: 'rgba(255,255,255,0.1)',
          border: '1px solid rgba(255,255,255,0.15)',
          borderRadius: '50%', width: '44px', height: '44px',
          color: 'white', fontSize: '20px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >✕</button>

      {/* Counter */}
      <div style={{
        position: 'absolute', top: '24px', left: '50%', transform: 'translateX(-50%)',
        fontSize: '13px', color: 'rgba(255,255,255,0.5)', letterSpacing: '2px',
      }}>
        {current + 1} / {photos.length}
      </div>

      {/* Prev */}
      <button
        onClick={e => { e.stopPropagation(); prev() }}
        style={{
          position: 'absolute', left: '16px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '12px', width: '48px', height: '48px',
          color: 'white', fontSize: '22px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >‹</button>

      {/* Image */}
      <motion.img
        key={current}
        initial={{ opacity: 0, scale: 0.96 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.25 }}
        src={photos[current].src}
        alt={photos[current].alt}
        onClick={e => e.stopPropagation()}
        style={{
          maxWidth: '90vw', maxHeight: '88vh',
          objectFit: 'contain', borderRadius: '16px',
        }}
      />

      {/* Next */}
      <button
        onClick={e => { e.stopPropagation(); next() }}
        style={{
          position: 'absolute', right: '16px', top: '50%', transform: 'translateY(-50%)',
          background: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.12)',
          borderRadius: '12px', width: '48px', height: '48px',
          color: 'white', fontSize: '22px', cursor: 'pointer',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}
      >›</button>

      {/* Thumbnails */}
      <div style={{
        position: 'absolute', bottom: '20px', left: '50%', transform: 'translateX(-50%)',
        display: 'flex', gap: '8px', overflowX: 'auto', maxWidth: '90vw', padding: '4px',
      }}>
        {photos.map((p, i) => (
          <img
            key={i}
            src={p.src}
            alt={p.alt}
            onClick={e => { e.stopPropagation(); setCurrent(i) }}
            style={{
              width: '52px', height: '52px', objectFit: 'cover',
              borderRadius: '8px', cursor: 'pointer', flexShrink: 0,
              border: i === current ? '2px solid var(--cyan)' : '2px solid transparent',
              opacity: i === current ? 1 : 0.5,
              transition: 'all 0.15s',
            }}
          />
        ))}
      </div>
    </motion.div>
  )
}

export default function Gallery() {
  const [lightbox, setLightbox] = useState(null)
  const [showAll, setShowAll] = useState(false)

  return (
    <section id="galerie" style={{ background: 'var(--dark)', padding: '120px 0' }}>
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          style={{ marginBottom: '56px' }}
        >
          <p className="section-label">En situation</p>
          <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-between', flexWrap: 'wrap', gap: '16px' }}>
            <h2 className="section-title">
              ZipLock dans<br />
              <span style={{ color: 'var(--cyan)' }}>la vraie vie.</span>
            </h2>
            <button
              onClick={() => setShowAll(true)}
              className="btn-secondary"
              style={{ marginBottom: '8px', padding: '12px 28px', fontSize: '14px', whiteSpace: 'nowrap' }}
            >
              Voir toute la galerie
              <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
                <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </button>
          </div>
        </motion.div>

        {/* Magazine grid */}
        <div className="gallery-grid" style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gridTemplateRows: 'auto',
          gap: '12px',
        }}>
          {photos.map((photo, i) => (
            <motion.div
              key={photo.src}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              onClick={() => setLightbox(i)}
              whileHover={{ scale: 1.02 }}
              style={{
                gridColumn: photo.span === 'wide' ? 'span 2' : 'span 1',
                gridRow: photo.span === 'tall' ? 'span 2' : 'span 1',
                position: 'relative', overflow: 'hidden',
                borderRadius: '16px', cursor: 'pointer',
                aspectRatio: photo.span === 'wide' ? '16/9' : photo.span === 'tall' ? 'auto' : '4/5',
                minHeight: photo.span === 'tall' ? '480px' : 'unset',
                background: 'var(--dark-card)',
              }}
            >
              <img
                src={photo.src}
                alt={photo.alt}
                loading="lazy"
                style={{
                  width: '100%', height: '100%',
                  objectFit: 'cover', display: 'block',
                  transition: 'transform 0.4s ease',
                }}
              />
              <div style={{
                position: 'absolute', inset: 0,
                background: 'linear-gradient(to top, rgba(0,0,0,0.5) 0%, transparent 50%)',
                opacity: 0, transition: 'opacity 0.3s',
              }}
                className="gallery-overlay"
              />
              <div style={{
                position: 'absolute', bottom: '16px', left: '16px',
                fontSize: '13px', color: 'white', fontWeight: 500,
                opacity: 0, transition: 'opacity 0.3s',
              }}
                className="gallery-caption"
              >
                {photo.alt}
              </div>
            </motion.div>
          ))}
        </div>

        {/* CTA voir plus */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginTop: '40px' }}
        >
          <button
            onClick={() => setShowAll(true)}
            style={{
              background: 'none', border: 'none', cursor: 'pointer',
              display: 'inline-flex', alignItems: 'center', gap: '8px',
              fontSize: '14px', color: 'var(--cyan)',
              fontFamily: 'var(--font-body)', padding: '12px 0',
            }}
          >
            <span style={{ borderBottom: '1px solid rgba(0,200,232,0.4)' }}>
              Voir les 13 photos
            </span>
            <svg width="14" height="14" viewBox="0 0 16 16" fill="none">
              <path d="M3 8H13M13 8L9 4M13 8L9 12" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </button>
        </motion.div>
      </div>

      {/* Full gallery modal */}
      <AnimatePresence>
        {showAll && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed', inset: 0, zIndex: 9000,
              background: 'rgba(4,6,13,0.97)',
              overflowY: 'auto', backdropFilter: 'blur(16px)',
            }}
          >
            <div style={{ maxWidth: '1100px', margin: '0 auto', padding: '80px 20px 60px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '40px' }}>
                <div>
                  <p className="section-label" style={{ marginBottom: '6px' }}>Galerie complète</p>
                  <h2 style={{ fontFamily: 'var(--font-heading)', fontSize: '28px', fontWeight: 800 }}>
                    Toutes les photos
                  </h2>
                </div>
                <button
                  onClick={() => setShowAll(false)}
                  style={{
                    background: 'rgba(255,255,255,0.08)',
                    border: '1px solid rgba(255,255,255,0.12)',
                    borderRadius: '12px', width: '48px', height: '48px',
                    color: 'white', fontSize: '20px', cursor: 'pointer',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                  }}
                >✕</button>
              </div>

              <div className="gallery-full-grid" style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(3, 1fr)',
                gap: '12px',
              }}>
                {allPhotos.map((photo, i) => (
                  <motion.div
                    key={photo.src}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: i * 0.04 }}
                    onClick={() => setLightbox(i)}
                    whileHover={{ scale: 1.02 }}
                    style={{
                      borderRadius: '14px', overflow: 'hidden',
                      cursor: 'pointer', aspectRatio: '4/5',
                      background: 'var(--dark-card)',
                    }}
                  >
                    <img
                      src={photo.src}
                      alt={photo.alt}
                      loading="lazy"
                      style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
                    />
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Lightbox */}
      <AnimatePresence>
        {lightbox !== null && (
          <Lightbox
            photos={showAll ? allPhotos : photos.map(p => ({ src: p.src, alt: p.alt }))}
            startIndex={lightbox}
            onClose={() => setLightbox(null)}
          />
        )}
      </AnimatePresence>

      <style>{`
        .gallery-grid > div:hover .gallery-overlay,
        .gallery-grid > div:hover .gallery-caption { opacity: 1 !important; }
        .gallery-grid > div:hover img { transform: scale(1.04); }
        @media (max-width: 768px) {
          .gallery-grid { grid-template-columns: repeat(2, 1fr) !important; }
          .gallery-grid > div[style*="span 2"] { grid-column: span 2 !important; }
          .gallery-grid > div[style*="span 2"][style*="span 1"] { grid-column: span 1 !important; }
          .gallery-full-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 480px) {
          .gallery-grid { grid-template-columns: 1fr !important; }
          .gallery-grid > div { grid-column: span 1 !important; grid-row: span 1 !important; aspect-ratio: 4/3 !important; min-height: unset !important; }
          .gallery-full-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>
    </section>
  )
}
