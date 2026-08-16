import React from 'react';
import { Play, Sparkles, Award, CheckCircle, ArrowRight, Image as ImageIcon } from 'lucide-react';
import { ACADEMY_INFO, FLYER_ANNOUNCEMENTS } from '../data/academyData';
import { IMAGE_ASSETS } from '../data/mediaAssets';

const HeroSection = ({ onExploreCoursesClick, onBookDemoClick, onOpenFlyerModal }) => {
  return (
    <section style={{
      position: 'relative',
      padding: '4rem 0 3.5rem 0',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(13, 15, 20, 0) 70%)'
    }}>
      {/* Background Blur Orbs */}
      <div style={{
        position: 'absolute',
        top: '-100px',
        right: '-100px',
        width: '400px',
        height: '400px',
        borderRadius: '50%',
        background: 'rgba(59, 130, 246, 0.15)',
        filter: 'blur(90px)',
        pointerEvents: 'none'
      }} />

      <div className="container">
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center'
        }}>
          
          {/* Left Hero Text Column */}
          <div>
            <div style={{ marginBottom: '1rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="badge badge-gold">
                <Sparkles size={14} /> Ghansoli, Navi Mumbai (400701)
              </span>
              <span className="badge badge-blue">
                Structured Music Learning
              </span>
            </div>

            <h1 className="heading-serif" style={{ fontSize: 'clamp(2.3rem, 4.8vw, 3.5rem)', lineHeight: 1.15, marginBottom: '1.2rem' }}>
              Master the Art of Music with <span className="gradient-text">Iyer Sir</span>
            </h1>

            <p className="theme-text-muted" style={{ fontSize: '1.1rem', marginBottom: '1.8rem', lineHeight: 1.6 }}>
              YouTube tutorials aur random videos se confuse hone ke bajaye, step-by-step guidance se music seekhein! Easy techniques, Trinity College London certification aur instrument sales & repairs.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.2rem' }}>
              <button onClick={onExploreCoursesClick} className="btn btn-primary btn-lg">
                Saare 10 Courses Dekhein <ArrowRight size={18} />
              </button>
              <button onClick={onBookDemoClick} className="btn btn-secondary btn-lg">
                <Play size={18} color="#f59e0b" /> Book Free Demo
              </button>
              <button onClick={onOpenFlyerModal} className="btn btn-secondary btn-lg" style={{ background: 'rgba(59, 130, 246, 0.12)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.35)' }}>
                <ImageIcon size={18} /> Official Pamphlet
              </button>
            </div>

            {/* Feature Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(190px, 1fr))', gap: '0.75rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle size={17} color="#10b981" /> 100% Basics & Theory Clarity
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle size={17} color="#10b981" /> Trinity Certification Prep
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.9rem', fontWeight: 500 }}>
                <CheckCircle size={17} color="#10b981" /> Instrument Sales & Repairs
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div style={{ position: 'relative' }}>
            <div className="theme-card" style={{
              borderRadius: 'var(--radius-lg)',
              padding: '0.8rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              position: 'relative'
            }}>
              <img
                src={IMAGE_ASSETS.heroBanner}
                alt="Guitar Practice at Vibrant Music Academy"
                style={{
                  width: '100%',
                  height: '360px',
                  objectFit: 'cover',
                  borderRadius: '14px',
                  display: 'block'
                }}
              />
              
              {/* Overlay Badge - Flyer Callout */}
              <div
                onClick={onOpenFlyerModal}
                style={{
                  position: 'absolute',
                  bottom: '1.25rem',
                  left: '1.25rem',
                  right: '1.25rem',
                  background: 'rgba(15, 16, 21, 0.92)',
                  backdropFilter: 'blur(12px)',
                  padding: '0.9rem 1.1rem',
                  borderRadius: '12px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.8rem',
                  cursor: 'pointer'
                }}
              >
                <div style={{
                  width: '38px',
                  height: '38px',
                  borderRadius: '8px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={22} color="#f59e0b" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {FLYER_ANNOUNCEMENTS.certificationTitle}
                  </div>
                  <div style={{ fontSize: '0.75rem', color: '#9ca3af' }}>
                    Click karein official pamphlet aur offers dekhne ke liye &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Banner */}
        <div style={{
          marginTop: '3.5rem',
          padding: '1.8rem',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--card-dark-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(170px, 1fr))',
          gap: '1.5rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--primary)' }}>{ACADEMY_INFO.stats.students}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)' }}>Students Guided</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: 'var(--secondary)' }}>{ACADEMY_INFO.stats.trinityPassRate}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)' }}>Trinity Pass Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#10b981' }}>{ACADEMY_INFO.stats.yearsExperience}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)' }}>Teaching Legacy</div>
          </div>
          <div>
            <div style={{ fontSize: '2.4rem', fontWeight: 800, color: '#ec4899' }}>{ACADEMY_INFO.stats.ageGroups}</div>
            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)' }}>All Age Groups</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
