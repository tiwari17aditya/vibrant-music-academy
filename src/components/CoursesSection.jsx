import React, { useState } from 'react';
import { Guitar, Music, Award, BookOpen, Clock, Check, X, Sparkles, Drum, Mic, Wind, Activity, Radio, Music2, Heart, PhoneCall, Tag } from 'lucide-react';
import { COURSES_DATA, ACADEMY_INFO } from '../data/academyData';

const CoursesSection = ({ onSelectCourseToEnroll }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);
  const [selectedGuitarPlanId, setSelectedGuitarPlanId] = useState('3m');

  const categories = ['All', 'Guitar', 'Drums', 'Keyboard', 'Indian Classical', 'Wind Instruments', 'Vocals & Theory', 'Workshops', 'Strings', 'Dance', 'Trinity Prep'];

  const filteredCourses = activeTab === 'All'
    ? COURSES_DATA
    : COURSES_DATA.filter(c => c.category === activeTab);

  const getIconComponent = (iconName) => {
    switch (iconName) {
      case 'Guitar': return <Guitar size={24} color="#f59e0b" />;
      case 'Drum': return <Drum size={24} color="#ef4444" />;
      case 'Music': return <Music size={24} color="#3b82f6" />;
      case 'Activity': return <Activity size={24} color="#10b981" />;
      case 'Wind': return <Wind size={24} color="#06b6d4" />;
      case 'Mic': return <Mic size={24} color="#ec4899" />;
      case 'Sparkles': return <Sparkles size={24} color="#f59e0b" />;
      case 'Radio': return <Radio size={24} color="#8b5cf6" />;
      case 'Music2': return <Music2 size={24} color="#6366f1" />;
      case 'Heart': return <Heart size={24} color="#f43f5e" />;
      case 'Award': return <Award size={24} color="#10b981" />;
      case 'BookOpen': return <BookOpen size={24} color="#ec4899" />;
      default: return <Music size={24} color="#f59e0b" />;
    }
  };

  return (
    <section id="courses" className="section-padding" style={{ position: 'relative' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Official Academy Courses
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            Saare 10 Instrument, Vocal & <span className="gradient-text">Dance Programs</span>
          </h2>
          <p className="theme-text-muted">
            Guitar, Drums, Piano, Tabla, Flute, Ukulele, Violin aur Kathak/Bharatnatyam. Step-by-step guidance for ages 6 to 65.
          </p>
        </div>

        {/* Filter Category Tabs */}
        <div style={{
          display: 'flex',
          justifyContent: 'center',
          flexWrap: 'wrap',
          gap: '0.5rem',
          marginBottom: '2.5rem'
        }}>
          {categories.map((cat, idx) => (
            <button
              key={idx}
              onClick={() => setActiveTab(cat)}
              style={{
                padding: '0.5rem 1.2rem',
                borderRadius: 'var(--radius-full)',
                fontSize: '0.88rem',
                fontWeight: 600,
                cursor: 'pointer',
                border: activeTab === cat ? '1px solid var(--primary)' : '1px solid var(--card-dark-border)',
                background: activeTab === cat ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                color: activeTab === cat ? '#0f1015' : 'inherit',
                transition: 'all 0.2s ease'
              }}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Course Cards Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCourses.map((course) => {
            const isGuitar = course.isGuitar;
            const currentGuitarPlan = isGuitar
              ? course.pricingTiers.find(p => p.id === selectedGuitarPlanId) || course.pricingTiers[1]
              : null;

            return (
              <div
                key={course.id}
                className="theme-card"
                style={{
                  borderRadius: 'var(--radius-lg)',
                  padding: '2rem',
                  display: 'flex',
                  flexDirection: 'column',
                  justifyContent: 'space-between',
                  position: 'relative',
                  border: isGuitar ? '1px solid var(--primary)' : '1px solid var(--card-dark-border)',
                  boxShadow: isGuitar ? '0 10px 30px rgba(245, 158, 11, 0.12)' : 'none',
                  transition: 'transform 0.3s ease, box-shadow 0.3s ease'
                }}
              >
                {course.popular && (
                  <div style={{
                    position: 'absolute',
                    top: '-12px',
                    right: '1.5rem',
                    background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
                    color: '#0f1015',
                    fontSize: '0.75rem',
                    fontWeight: 800,
                    padding: '0.2rem 0.8rem',
                    borderRadius: '12px',
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em'
                  }}>
                    {isGuitar ? 'Special Fee Offer' : 'Popular Program'}
                  </div>
                )}

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', marginBottom: '1.2rem' }}>
                    <div style={{
                      padding: '0.75rem',
                      borderRadius: '12px',
                      background: 'rgba(255, 255, 255, 0.05)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center'
                    }}>
                      {getIconComponent(course.icon)}
                    </div>
                    <div>
                      <span className="badge badge-blue">{course.level}</span>
                    </div>
                  </div>

                  <h3 style={{ fontSize: '1.35rem', marginBottom: '0.6rem' }}>{course.title}</h3>
                  <p className="theme-text-muted" style={{ fontSize: '0.92rem', marginBottom: '1.2rem', lineHeight: 1.55 }}>
                    {course.description}
                  </p>

                  {/* Guitar Specific Plan Selection Tabs */}
                  {isGuitar && (
                    <div style={{
                      background: 'rgba(255,255,255,0.03)',
                      padding: '0.8rem',
                      borderRadius: '12px',
                      marginBottom: '1.2rem',
                      border: '1px solid rgba(245, 158, 11, 0.2)'
                    }}>
                      <div style={{ fontSize: '0.82rem', fontWeight: 700, color: 'var(--primary)', marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                        <Tag size={14} /> Select Guitar Fee Plan (Duration Tiers):
                      </div>
                      
                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '0.35rem', marginBottom: '0.4rem' }}>
                        {course.pricingTiers.slice(0, 3).map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedGuitarPlanId(tier.id)}
                            style={{
                              padding: '0.4rem 0.2rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              border: selectedGuitarPlanId === tier.id ? '1px solid var(--primary)' : '1px solid var(--card-dark-border)',
                              background: selectedGuitarPlanId === tier.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                              color: selectedGuitarPlanId === tier.id ? '#0f1015' : 'inherit'
                            }}
                          >
                            {tier.id === '1m' ? '1 Month' : tier.id === '3m' ? '3 Months' : '6 Months'}
                          </button>
                        ))}
                      </div>

                      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: '0.35rem' }}>
                        {course.pricingTiers.slice(3, 5).map((tier) => (
                          <button
                            key={tier.id}
                            onClick={() => setSelectedGuitarPlanId(tier.id)}
                            style={{
                              padding: '0.4rem 0.2rem',
                              borderRadius: '6px',
                              fontSize: '0.75rem',
                              fontWeight: 700,
                              cursor: 'pointer',
                              border: selectedGuitarPlanId === tier.id ? '1px solid var(--primary)' : '1px solid var(--card-dark-border)',
                              background: selectedGuitarPlanId === tier.id ? 'var(--primary)' : 'rgba(255,255,255,0.05)',
                              color: selectedGuitarPlanId === tier.id ? '#0f1015' : 'inherit'
                            }}
                          >
                            {tier.id === '9m' ? '9 Months' : '12M (1 Year)'}
                          </button>
                        ))}
                      </div>
                    </div>
                  )}

                  <div style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    fontSize: '0.88rem',
                    marginBottom: '1.2rem',
                    color: 'var(--primary)'
                  }}>
                    <Clock size={16} /> {isGuitar ? currentGuitarPlan.durationText : course.duration}
                  </div>

                  {/* Syllabus Checklist preview */}
                  <div style={{ marginBottom: '1.5rem' }}>
                    <div style={{ fontSize: '0.82rem', fontWeight: 700, marginBottom: '0.5rem', color: 'var(--text-dark-muted)' }}>
                      Syllabus Highlights:
                    </div>
                    {course.syllabus.slice(0, 3).map((item, i) => (
                      <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.85rem', marginBottom: '0.35rem' }}>
                        <Check size={14} color="#10b981" /> {item}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Price Display & Action Button */}
                <div>
                  <div style={{
                    paddingTop: '1rem',
                    borderTop: '1px solid var(--card-dark-border)',
                    marginBottom: '1rem'
                  }}>
                    {isGuitar ? (
                      <div>
                        <div style={{ display: 'flex', alignItems: 'baseline', gap: '0.6rem', flexWrap: 'wrap' }}>
                          {currentGuitarPlan.formattedOriginal && (
                            <span style={{ fontSize: '1.05rem', color: '#9ca3af', textDecoration: 'line-through', fontWeight: 600 }}>
                              {currentGuitarPlan.formattedOriginal}
                            </span>
                          )}
                          <span style={{ fontSize: '1.65rem', fontWeight: 800, color: 'var(--primary)' }}>
                            {currentGuitarPlan.formattedPrice}
                          </span>
                          {currentGuitarPlan.savings && (
                            <span style={{ fontSize: '0.78rem', background: 'rgba(16, 185, 129, 0.15)', color: '#10b981', padding: '0.15rem 0.5rem', borderRadius: '6px', fontWeight: 700 }}>
                              {currentGuitarPlan.savings}
                            </span>
                          )}
                        </div>
                        <div style={{ fontSize: '0.78rem', color: 'var(--text-dark-muted)', marginTop: '0.2rem' }}>
                          {currentGuitarPlan.label}
                        </div>
                      </div>
                    ) : (
                      /* Other Instruments Professional Fee Contact Notice */
                      <div style={{
                        background: 'rgba(59, 130, 246, 0.08)',
                        border: '1px dashed rgba(59, 130, 246, 0.3)',
                        padding: '0.75rem',
                        borderRadius: '8px'
                      }}>
                        <div style={{ fontSize: '0.88rem', fontWeight: 700, color: '#3b82f6', marginBottom: '0.2rem' }}>
                          Fee Details & Customized Packages
                        </div>
                        <div style={{ fontSize: '0.82rem', color: 'var(--text-dark-muted)' }}>
                          Rs. Contact Academy for Fee Details & Batch Timing
                        </div>
                      </div>
                    )}
                  </div>

                  <div style={{ display: 'flex', gap: '0.6rem' }}>
                    <button
                      onClick={() => setSelectedCourseDetail(course)}
                      style={{ background: 'none', border: '1px solid var(--card-dark-border)', color: 'inherit', padding: '0.5rem 0.75rem', borderRadius: '8px', cursor: 'pointer', fontSize: '0.82rem', fontWeight: 600 }}
                    >
                      Syllabus
                    </button>
                    
                    <button
                      onClick={() => {
                        const courseWithPlan = isGuitar ? { ...course, selectedPlan: currentGuitarPlan } : course;
                        onSelectCourseToEnroll(courseWithPlan);
                      }}
                      className="btn btn-primary"
                      style={{ flex: 1, fontSize: '0.88rem' }}
                    >
                      {isGuitar ? 'Book Free Demo' : 'Contact for Fee Details'}
                    </button>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>

      {/* Detailed Course Modal */}
      {selectedCourseDetail && (
        <div className="modal-overlay" onClick={() => setSelectedCourseDetail(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
              <h3 style={{ margin: 0, fontSize: '1.5rem' }}>{selectedCourseDetail.title}</h3>
              <button
                onClick={() => setSelectedCourseDetail(null)}
                style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}
              >
                <X size={24} />
              </button>
            </div>

            <p className="theme-text-muted" style={{ marginBottom: '1.5rem' }}>
              {selectedCourseDetail.description}
            </p>

            <div style={{
              background: 'rgba(255, 255, 255, 0.04)',
              padding: '1.2rem',
              borderRadius: '12px',
              marginBottom: '1.5rem'
            }}>
              <div style={{ fontWeight: 700, marginBottom: '0.8rem', color: 'var(--primary)' }}>
                Pura Detailed Syllabus:
              </div>
              <ul style={{ paddingLeft: '1.2rem', margin: 0, display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
                {selectedCourseDetail.syllabus.map((point, idx) => (
                  <li key={idx} style={{ fontSize: '0.95rem' }}>{point}</li>
                ))}
              </ul>
            </div>

            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'flex-end' }}>
              <button onClick={() => setSelectedCourseDetail(null)} className="btn btn-secondary">
                Close
              </button>
              <button
                onClick={() => {
                  const c = selectedCourseDetail;
                  setSelectedCourseDetail(null);
                  onSelectCourseToEnroll(c);
                }}
                className="btn btn-primary"
              >
                Demo Class / Contact Karein
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default CoursesSection;
