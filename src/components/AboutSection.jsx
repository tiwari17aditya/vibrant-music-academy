import React from 'react';
import { Dumbbell, Award, Flame, UserCheck, ShieldCheck, Heart } from 'lucide-react';
import { IYER_SIR_BIO } from '../data/academyData';

const AboutSection = () => {
  return (
    <section id="about" className="section-padding" style={{ position: 'relative', background: 'rgba(255, 255, 255, 0.015)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Award size={14} /> Master Music Educator
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Meet <span className="gradient-text">Iyer Sir</span>
          </h2>
          <p className="theme-text-muted" style={{ fontSize: '1.1rem' }}>
            {IYER_SIR_BIO.title} | {IYER_SIR_BIO.age}. Pura focus basics clear karne aur music enjoy karne par.
          </p>
        </div>

        {/* 2-Column Bio Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '3rem',
          alignItems: 'center',
          marginBottom: '4rem'
        }}>
          
          {/* Left Column: Background Card */}
          <div className="theme-card" style={{ padding: '2.2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.45rem', marginBottom: '1.2rem', color: 'var(--primary)' }}>
              Iyer Sir Ki Unique Journey & Experience
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.1rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <Dumbbell size={22} color="#f59e0b" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Ex-Professional Gym Trainer:</strong>
                  <p className="theme-text-muted" style={{ fontSize: '0.92rem', margin: '0.2rem 0 0 0' }}>
                    Music practice ke waqt posture, wrist relaxation aur hand stamina build karne par special focus.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <Flame size={22} color="#3b82f6" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Acting & Stage Performance Experience:</strong>
                  <p className="theme-text-muted" style={{ fontSize: '0.92rem', margin: '0.2rem 0 0 0' }}>
                    Stage fear door karna, audience connection build karna aur expressive musical delivery sikhana.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <Heart size={22} color="#ec4899" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Musical Family Background:</strong>
                  <p className="theme-text-muted" style={{ fontSize: '0.92rem', margin: '0.2rem 0 0 0' }}>
                    Ghar se milne wala deep-rooted passion aur musical heritage jo har class mein jhalakta hai.
                  </p>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <ShieldCheck size={22} color="#10b981" style={{ flexShrink: 0, marginTop: '3px' }} />
                <div>
                  <strong>Trinity College London Certification Mentor:</strong>
                  <p className="theme-text-muted" style={{ fontSize: '0.92rem', margin: '0.2rem 0 0 0' }}>
                    Students ko international grade exams ke liye structured preparation karwana.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Teaching Philosophy */}
          <div>
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.1) 0%, rgba(59, 130, 246, 0.1) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.3)',
              padding: '2rem',
              borderRadius: 'var(--radius-lg)',
              marginBottom: '2rem'
            }}>
              <h4 style={{ fontSize: '1.25rem', marginBottom: '0.8rem', color: 'var(--primary)' }}>
                Iyer Sir Ki Teaching Philosophy 💡
              </h4>
              <blockquote style={{ margin: 0, fontSize: '1.05rem', fontStyle: 'italic', lineHeight: 1.6, color: 'inherit' }}>
                "{IYER_SIR_BIO.philosophy}"
              </blockquote>
            </div>

            <div className="theme-card" style={{ padding: '1.8rem', borderRadius: 'var(--radius-lg)' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.6rem' }}>
                <UserCheck size={20} color="#10b981" />
                <h4 style={{ margin: 0, fontSize: '1.1rem' }}>{IYER_SIR_BIO.studentTransformationStory.title}</h4>
              </div>
              <p className="theme-text-muted" style={{ fontSize: '0.92rem', fontStyle: 'italic', lineHeight: 1.55 }}>
                "{IYER_SIR_BIO.studentTransformationStory.quote}"
              </p>
              <div style={{ fontSize: '0.82rem', color: 'var(--primary)', fontWeight: 600, marginTop: '0.6rem' }}>
                — {IYER_SIR_BIO.studentTransformationStory.author}
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default AboutSection;
