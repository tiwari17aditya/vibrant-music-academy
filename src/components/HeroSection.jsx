import React from 'react';
import { Play, Sparkles, Award, CheckCircle, ArrowRight, Image as ImageIcon, Wrench } from 'lucide-react';
import { ACADEMY_INFO, FLYER_ANNOUNCEMENTS } from '../data/academyData';
import { IMAGE_ASSETS } from '../data/mediaAssets';

const HeroSection = ({ onExploreCoursesClick, onBookDemoClick, onOpenFlyerModal }) => {
  return (
    <section style={{
      position: 'relative',
      padding: '5rem 0 4rem 0',
      overflow: 'hidden',
      background: 'radial-gradient(circle at 50% 20%, rgba(245, 158, 11, 0.12) 0%, rgba(13, 15, 20, 0) 70%)'
    }}>
      {/* Background Decorative Blur Orbs */}
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
          gap: '3.5rem',
          alignItems: 'center'
        }}>
          
          {/* Left Hero Text Column */}
          <div>
            <div style={{ marginBottom: '1.2rem', display: 'flex', flexWrap: 'wrap', gap: '0.6rem' }}>
              <span className="badge badge-gold">
                <Sparkles size={14} /> Ghansoli, Navi Mumbai (400701)
              </span>
              <span className="badge badge-blue">
                {ACADEMY_INFO.nameHindi}
              </span>
            </div>

            <h1 className="heading-serif" style={{ fontSize: 'clamp(2.4rem, 5vw, 3.6rem)', lineHeight: 1.15, marginBottom: '1.2rem' }}>
              Unlock Your Musical Genius with <span className="gradient-text">Iyer Sir</span>
            </h1>

            <p className="theme-text-muted" style={{ fontSize: '1.1rem', marginBottom: '2rem', lineHeight: 1.6 }}>
              Struggling with YouTube tutorials or lost chord diagrams? Clear your fundamentals step-by-step with structured guidance, Trinity College London certification, and instrument sales & repairs.
            </p>

            {/* CTAs */}
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem', marginBottom: '2.5rem' }}>
              <button onClick={onExploreCoursesClick} className="btn btn-primary btn-lg">
                Explore All 10 Courses <ArrowRight size={20} />
              </button>
              <button onClick={onBookDemoClick} className="btn btn-secondary btn-lg">
                <Play size={18} color="#f59e0b" /> Book Free Demo
              </button>
              <button onClick={onOpenFlyerModal} className="btn btn-secondary btn-lg" style={{ background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6', border: '1px solid rgba(59, 130, 246, 0.4)' }}>
                <ImageIcon size={18} /> View Official Flyer
              </button>
            </div>

            {/* Feature Checklist */}
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '0.8rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', fontWeight: 500 }}>
                <CheckCircle size={18} color="#10b981" /> 100% Fundamentals Clarity
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', fontWeight: 500 }}>
                <CheckCircle size={18} color="#10b981" /> Trinity Certification Prep
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.92rem', fontWeight: 500 }}>
                <CheckCircle size={18} color="#10b981" /> Instrument Sales & Repair
              </div>
            </div>
          </div>

          {/* Right Hero Image Card */}
          <div style={{ position: 'relative' }}>
            <div className="theme-card" style={{
              borderRadius: 'var(--radius-lg)',
              padding: '1rem',
              boxShadow: '0 25px 60px rgba(0,0,0,0.4)',
              position: 'relative'
            }}>
              <img
                src={IMAGE_ASSETS.heroBanner}
                alt="Guitar Music Practice at Vibrant Academy"
                style={{
                  width: '100%',
                  height: '380px',
                  objectFit: 'cover',
                  borderRadius: '16px',
                  display: 'block'
                }}
              />
              
              {/* Overlay Badge - Flyer Callout */}
              <div
                onClick={onOpenFlyerModal}
                style={{
                  position: 'absolute',
                  bottom: '1.5rem',
                  left: '1.5rem',
                  right: '1.5rem',
                  background: 'rgba(15, 16, 21, 0.92)',
                  backdropFilter: 'blur(12px)',
                  padding: '1rem',
                  borderRadius: '14px',
                  border: '1px solid rgba(245, 158, 11, 0.4)',
                  display: 'flex',
                  alignItems: 'center',
                  gap: '1rem',
                  cursor: 'pointer',
                  transition: 'transform 0.2s ease'
                }}
              >
                <div style={{
                  width: '42px',
                  height: '42px',
                  borderRadius: '10px',
                  background: 'rgba(245, 158, 11, 0.2)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  flexShrink: 0
                }}>
                  <Award size={24} color="#f59e0b" />
                </div>
                <div style={{ flex: 1 }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--primary)' }}>
                    {FLYER_ANNOUNCEMENTS.certificationTitle}
                  </div>
                  <div style={{ fontSize: '0.78rem', color: '#9ca3af' }}>
                    Click to inspect official academy brochure flyer & offer &rarr;
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* Statistics Banner */}
        <div style={{
          marginTop: '4rem',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'rgba(255, 255, 255, 0.03)',
          border: '1px solid var(--card-dark-border)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))',
          gap: '2rem',
          textAlign: 'center'
        }}>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--primary)' }}>{ACADEMY_INFO.stats.students}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>Students Guided</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: 'var(--secondary)' }}>{ACADEMY_INFO.stats.trinityPassRate}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>Trinity Pass Rate</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#10b981' }}>{ACADEMY_INFO.stats.yearsExperience}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>Teaching Legacy</div>
          </div>
          <div>
            <div style={{ fontSize: '2.5rem', fontWeight: 800, color: '#ec4899' }}>{ACADEMY_INFO.stats.ageGroups}</div>
            <div style={{ fontSize: '0.9rem', color: 'var(--text-dark-muted)' }}>All Age Groups Taught</div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default HeroSection;
