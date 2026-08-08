import React from 'react';
import { Star, Quote, Sparkles } from 'lucide-react';
import { TESTIMONIALS_DATA } from '../data/academyData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="section-padding" style={{ position: 'relative', background: 'rgba(255, 255, 255, 0.02)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Student Experiences
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            What Our <span className="gradient-text">Students Say</span>
          </h2>
          <p className="theme-text-muted">
            Stories from kids, working professionals, and seniors learning guitar, keyboard, and preparing for Trinity exams with Iyer Sir.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem'
        }}>
          {TESTIMONIALS_DATA.map((t, idx) => (
            <div
              key={idx}
              className="theme-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                position: 'relative'
              }}
            >
              <Quote size={32} color="var(--primary)" style={{ opacity: 0.2, position: 'absolute', top: '1.5rem', right: '1.5rem' }} />

              <div>
                {/* Rating Stars */}
                <div style={{ display: 'flex', gap: '0.2rem', marginBottom: '1rem' }}>
                  {[...Array(t.rating)].map((_, i) => (
                    <Star key={i} size={18} color="#f59e0b" fill="#f59e0b" />
                  ))}
                </div>

                <p style={{ fontSize: '1rem', lineHeight: 1.6, marginBottom: '1.5rem', fontStyle: 'italic' }}>
                  "{t.text}"
                </p>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', borderTop: '1px solid var(--card-dark-border)', paddingTop: '1rem' }}>
                <div>
                  <div style={{ fontWeight: 700, fontSize: '1rem' }}>{t.name}</div>
                  <div style={{ fontSize: '0.82rem', color: 'var(--text-dark-muted)' }}>{t.role}</div>
                </div>
                <span className="badge badge-blue">{t.tag}</span>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TestimonialsSection;
