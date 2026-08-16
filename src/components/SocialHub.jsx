import React from 'react';
import { Heart, ExternalLink, Sparkles } from 'lucide-react';
import { SOCIAL_HUB_DATA, ACADEMY_INFO } from '../data/academyData';
import { MODULAR_SOCIAL_PLATFORMS } from '../data/mediaAssets';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const SocialHub = () => {
  return (
    <section id="social-hub" className="section-padding" style={{ position: 'relative', background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Live Updates & Socials
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Iyer Sir's <span className="gradient-text">Social Media Feed</span>
          </h2>
          <p className="theme-text-muted">
            Iyer Sir ke daily reels, student performance highlights aur guitar tips dekhne ke liye Instagram par follow karein!
          </p>

          {/* Modular Social Platforms Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap', gap: '1rem', marginTop: '1.5rem' }}>
            {MODULAR_SOCIAL_PLATFORMS.filter(p => p.active).map((platform) => (
              <a
                key={platform.id}
                href={platform.url}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary btn-sm"
                style={{ color: platform.color, borderColor: platform.color, display: 'flex', alignItems: 'center', gap: '0.5rem' }}
              >
                <InstagramIcon size={18} color={platform.color} />
                <span>{platform.name}: <strong>{platform.handle}</strong></span>
                <ExternalLink size={14} />
              </a>
            ))}
          </div>
        </div>

        {/* Instagram Feed Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
          gap: '1.8rem'
        }}>
          {SOCIAL_HUB_DATA.instagramPosts.map((post) => (
            <a
              key={post.id}
              href={`https://instagram.com/${ACADEMY_INFO.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="theme-card"
              style={{
                borderRadius: 'var(--radius-lg)',
                overflow: 'hidden',
                textDecoration: 'none',
                color: 'inherit',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                transition: 'transform 0.3s ease, box-shadow 0.3s ease'
              }}
            >
              <div style={{ position: 'relative', height: '260px', overflow: 'hidden' }}>
                <img
                  src={post.thumbnail}
                  alt={post.title}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
                <div style={{
                  position: 'absolute',
                  top: '1rem',
                  left: '1rem',
                  background: 'rgba(15, 16, 21, 0.85)',
                  backdropFilter: 'blur(8px)',
                  padding: '0.25rem 0.7rem',
                  borderRadius: '12px',
                  fontSize: '0.75rem',
                  fontWeight: 700,
                  color: 'var(--primary)'
                }}>
                  {post.tag}
                </div>
              </div>

              <div style={{ padding: '1.25rem' }}>
                <h4 style={{ fontSize: '1.05rem', margin: '0 0 0.8rem 0', lineHeight: 1.4, fontWeight: 700 }}>
                  {post.title}
                </h4>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  fontSize: '0.85rem',
                  color: 'var(--text-dark-muted)',
                  paddingTop: '0.75rem',
                  borderTop: '1px solid var(--card-dark-border)'
                }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.3rem', color: '#ec4899', fontWeight: 600 }}>
                    <Heart size={15} fill="#ec4899" /> {post.likes}
                  </div>
                  <div>{post.date}</div>
                </div>
              </div>
            </a>
          ))}
        </div>

        {/* Bottom Social Banner */}
        <div style={{ textAlign: 'center', marginTop: '3rem' }}>
          <a
            href={`https://instagram.com/${ACADEMY_INFO.instagram}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-primary btn-lg"
          >
            <InstagramIcon size={20} /> Instagram Par Follow Karein ({ACADEMY_INFO.instagram})
          </a>
        </div>

      </div>
    </section>
  );
};

export default SocialHub;
