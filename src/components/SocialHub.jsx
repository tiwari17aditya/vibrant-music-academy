import React, { useState } from 'react';
import { Heart, Eye, Play, ExternalLink, Sparkles, X } from 'lucide-react';
import { SOCIAL_HUB_DATA, ACADEMY_INFO } from '../data/academyData';

const InstagramIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
    <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
  </svg>
);

const YoutubeIcon = ({ size = 18, color = 'currentColor' }) => (
  <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke={color} strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
    <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
  </svg>
);

const SocialHub = () => {
  const [activeMediaTab, setActiveMediaTab] = useState('reels');
  const [activeVideoModal, setActiveVideoModal] = useState(null);

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
            Follow Iyer Sir's daily reels, guitar tips, student performance highlights, and YouTube tutorials!
          </p>

          {/* Social Links Bar */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginTop: '1.5rem' }}>
            <a
              href={`https://instagram.com/${ACADEMY_INFO.instagram}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ color: '#ec4899' }}
            >
              <InstagramIcon size={18} /> {ACADEMY_INFO.instagram} <ExternalLink size={14} />
            </a>
            <a
              href={`https://youtube.com/${ACADEMY_INFO.youtube}`}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-secondary btn-sm"
              style={{ color: '#ef4444' }}
            >
              <YoutubeIcon size={18} /> {ACADEMY_INFO.youtube} <ExternalLink size={14} />
            </a>
          </div>
        </div>

        {/* Tab Selector */}
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', marginBottom: '2.5rem' }}>
          <button
            onClick={() => setActiveMediaTab('reels')}
            className={`btn ${activeMediaTab === 'reels' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <InstagramIcon size={18} /> Instagram Reels Feed ({SOCIAL_HUB_DATA.instagramReels.length})
          </button>
          <button
            onClick={() => setActiveMediaTab('youtube')}
            className={`btn ${activeMediaTab === 'youtube' ? 'btn-primary' : 'btn-secondary'}`}
          >
            <YoutubeIcon size={18} /> YouTube Masterclasses ({SOCIAL_HUB_DATA.youtubeLessons.length})
          </button>
        </div>

        {/* Instagram Reels Grid */}
        {activeMediaTab === 'reels' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(260px, 1fr))',
            gap: '1.8rem'
          }}>
            {SOCIAL_HUB_DATA.instagramReels.map((reel) => (
              <div
                key={reel.id}
                className="theme-card"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  overflow: 'hidden',
                  position: 'relative',
                  cursor: 'pointer',
                  transition: 'transform 0.3s ease'
                }}
                onClick={() => window.open(`https://instagram.com`, '_blank')}
              >
                <div style={{ position: 'relative', height: '320px' }}>
                  <img
                    src={reel.thumbnail}
                    alt={reel.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '1rem',
                    left: '1rem',
                    background: 'rgba(0,0,0,0.6)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '8px',
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    color: '#f59e0b'
                  }}>
                    {reel.tag}
                  </div>

                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '54px',
                    height: '54px',
                    borderRadius: '50%',
                    background: 'rgba(245, 158, 11, 0.9)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    boxShadow: '0 0 20px rgba(245, 158, 11, 0.6)'
                  }}>
                    <Play size={24} color="#0f1015" fill="#0f1015" />
                  </div>

                  <div style={{
                    position: 'absolute',
                    bottom: 0,
                    left: 0,
                    right: 0,
                    padding: '1.2rem',
                    background: 'linear-gradient(to top, rgba(0,0,0,0.9), transparent)'
                  }}>
                    <h4 style={{ color: '#ffffff', fontSize: '0.98rem', marginBottom: '0.6rem', lineHeight: 1.3 }}>
                      {reel.title}
                    </h4>
                    <div style={{ display: 'flex', gap: '1rem', color: '#9ca3af', fontSize: '0.82rem' }}>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Eye size={14} /> {reel.views}
                      </span>
                      <span style={{ display: 'flex', alignItems: 'center', gap: '0.3rem' }}>
                        <Heart size={14} color="#ef4444" /> {reel.likes}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* YouTube Masterclasses Grid */}
        {activeMediaTab === 'youtube' && (
          <div style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: '2rem'
          }}>
            {SOCIAL_HUB_DATA.youtubeLessons.map((yt) => (
              <div
                key={yt.id}
                className="theme-card"
                style={{ borderRadius: 'var(--radius-lg)', padding: '1.5rem' }}
              >
                <div
                  style={{
                    position: 'relative',
                    height: '200px',
                    borderRadius: '12px',
                    overflow: 'hidden',
                    marginBottom: '1.2rem',
                    background: '#000',
                    cursor: 'pointer'
                  }}
                  onClick={() => setActiveVideoModal(yt)}
                >
                  <img
                    src="https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=800&auto=format&fit=crop&q=80"
                    alt={yt.title}
                    style={{ width: '100%', height: '100%', objectFit: 'cover', opacity: 0.8 }}
                  />
                  <div style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    transform: 'translate(-50%, -50%)',
                    width: '60px',
                    height: '60px',
                    borderRadius: '50%',
                    background: '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}>
                    <Play size={28} color="#ffffff" fill="#ffffff" />
                  </div>
                  <div style={{
                    position: 'absolute',
                    bottom: '0.8rem',
                    right: '0.8rem',
                    background: 'rgba(0,0,0,0.8)',
                    color: '#fff',
                    padding: '0.2rem 0.5rem',
                    borderRadius: '4px',
                    fontSize: '0.78rem',
                    fontWeight: 700
                  }}>
                    {yt.duration}
                  </div>
                </div>

                <h3 style={{ fontSize: '1.15rem', marginBottom: '0.5rem' }}>{yt.title}</h3>
                <p className="theme-text-muted" style={{ fontSize: '0.9rem', marginBottom: '1.2rem' }}>
                  {yt.description}
                </p>

                <button
                  onClick={() => setActiveVideoModal(yt)}
                  className="btn btn-secondary btn-sm"
                  style={{ width: '100%', color: '#ef4444' }}
                >
                  <YoutubeIcon size={16} /> Watch Lesson Video
                </button>
              </div>
            ))}
          </div>
        )}

      </div>

      {/* Video Modal Player */}
      {activeVideoModal && (
        <div className="modal-overlay" onClick={() => setActiveVideoModal(null)}>
          <div className="modal-content" style={{ maxWidth: '800px' }} onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.25rem' }}>{activeVideoModal.title}</h3>
              <button
                onClick={() => setActiveVideoModal(null)}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <div style={{ position: 'relative', paddingBottom: '56.25%', height: 0, overflow: 'hidden', borderRadius: '12px' }}>
              <iframe
                title={activeVideoModal.title}
                src={activeVideoModal.embedUrl}
                style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>
        </div>
      )}

    </section>
  );
};

export default SocialHub;
