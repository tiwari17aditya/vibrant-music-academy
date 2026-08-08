import React from 'react';
import { Dumbbell, Film, HeartHandshake, Award, Quote, Sparkles } from 'lucide-react';
import { IYER_SIR_BIO } from '../data/academyData';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '720px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Master Mentor Behind Vibrant Academy
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Meet <span className="gradient-text">{IYER_SIR_BIO.name}</span>
          </h2>
          <p className="theme-text-muted" style={{ fontSize: '1.05rem' }}>
            {IYER_SIR_BIO.title} | {IYER_SIR_BIO.age}
          </p>
        </div>

        {/* Two Column Layout: Bio & Experience */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Card 1: Iyer Sir's Background & Pillars */}
          <div className="theme-card" style={{ padding: '2.5rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.5rem', display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
              <Award color="var(--primary)" /> A Unique Blend of Discipline & Artistry
            </h3>
            
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(245, 158, 11, 0.15)', color: '#f59e0b' }}>
                  <Dumbbell size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>Ex-Gym Trainer Focus</h4>
                  <p className="theme-text-muted" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Integrates ergonomic posture, wrist alignment, and stamina building so students never experience finger fatigue or bad playing habits.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(59, 130, 246, 0.15)', color: '#3b82f6' }}>
                  <Film size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>Acting & Stage Performance Experience</h4>
                  <p className="theme-text-muted" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Teaches students how to conquer stage fright, express musical emotion, and perform with natural presence.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', gap: '1rem', alignItems: 'flex-start' }}>
                <div style={{ padding: '0.6rem', borderRadius: '10px', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981' }}>
                  <HeartHandshake size={22} />
                </div>
                <div>
                  <h4 style={{ margin: '0 0 0.2rem 0', fontSize: '1.05rem' }}>Generational Musical Family Legacy</h4>
                  <p className="theme-text-muted" style={{ margin: 0, fontSize: '0.92rem' }}>
                    Raised in a music-first family. Deeply respects musical tradition while adapting to modern songs and Trinity examination standards.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Card 2: Teaching Philosophy */}
          <div className="theme-card" style={{
            padding: '2.5rem',
            borderRadius: 'var(--radius-lg)',
            background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.05) 0%, rgba(28, 32, 46, 0.9) 100%)'
          }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '1.2rem' }}>Sir's Teaching Philosophy</h3>
            <blockquote style={{
              fontStyle: 'italic',
              fontSize: '1.1rem',
              lineHeight: 1.7,
              borderLeft: '4px solid var(--primary)',
              paddingLeft: '1.2rem',
              margin: '0 0 2rem 0',
              color: 'var(--text-dark-main)'
            }}>
              "{IYER_SIR_BIO.philosophy}"
            </blockquote>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '1.25rem',
              borderRadius: '12px',
              border: '1px solid rgba(255, 255, 255, 0.08)'
            }}>
              <div style={{ fontWeight: 700, marginBottom: '0.5rem', color: 'var(--primary)' }}>
                How Iyer Sir Starts With Every Student:
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, fontSize: '0.92rem', display: 'flex', flexDirection: 'column', gap: '0.4rem' }} className="theme-text-muted">
                <li>Understands your personal musical goals & favorite genres</li>
                <li>Identifies finger strength & rhythm readiness</li>
                <li>Simplifies music theory so it feels natural, not boring</li>
                <li>Prepares a customized roadmap for Trinity certification or song mastery</li>
              </ul>
            </div>
          </div>

        </div>

        {/* Featured Story: IT Professional's Transformation & Gurudakshina */}
        <div style={{
          background: 'linear-gradient(135deg, rgba(59, 130, 246, 0.12) 0%, rgba(245, 158, 11, 0.12) 100%)',
          border: '1px solid rgba(245, 158, 11, 0.25)',
          borderRadius: 'var(--radius-lg)',
          padding: '2.5rem',
          position: 'relative'
        }}>
          <Quote size={40} color="var(--primary)" style={{ opacity: 0.3, position: 'absolute', top: '1.5rem', right: '2rem' }} />
          
          <span className="badge badge-blue" style={{ marginBottom: '0.8rem' }}>
            Gurudakshina Story
          </span>

          <h3 className="heading-serif" style={{ fontSize: '1.6rem', marginBottom: '1rem' }}>
            {IYER_SIR_BIO.studentTransformationStory.title}
          </h3>

          <p style={{ fontSize: '1.05rem', lineHeight: 1.7, marginBottom: '1.2rem', fontStyle: 'italic' }}>
            "{IYER_SIR_BIO.studentTransformationStory.quote}"
          </p>

          <div style={{ fontWeight: 700, color: 'var(--primary)', fontSize: '0.95rem' }}>
            — {IYER_SIR_BIO.studentTransformationStory.author}
          </div>
        </div>

      </div>
    </section>
  );
};

export default AboutSection;
