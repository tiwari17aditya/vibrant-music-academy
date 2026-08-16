import React, { useState } from 'react';
import { Guitar, Music, Award, BookOpen, Clock, Check, X, Sparkles, Drum, Mic, Wind, Activity, Radio, Music2, Heart } from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';

const CoursesSection = ({ onSelectCourseToEnroll }) => {
  const [activeTab, setActiveTab] = useState('All');
  const [selectedCourseDetail, setSelectedCourseDetail] = useState(null);

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
            Guitar aur Drums se lekar Tabla, Flute, Ukulele, Violin aur Kathak/Bharatnatyam tak! Ages 6 se 65 tak sabhi ke liye step-by-step classes.
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
          gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))',
          gap: '2rem'
        }}>
          {filteredCourses.map((course) => (
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
                  Popular Batch
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

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>{course.title}</h3>
                <p className="theme-text-muted" style={{ fontSize: '0.92rem', marginBottom: '1.5rem', lineHeight: 1.55 }}>
                  {course.description}
                </p>

                <div style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  fontSize: '0.88rem',
                  marginBottom: '1.5rem',
                  color: 'var(--primary)'
                }}>
                  <Clock size={16} /> {course.duration}
                </div>

                {/* Syllabus Checklist preview */}
                <div style={{ marginBottom: '2rem' }}>
                  <div style={{ fontSize: '0.85rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--text-dark-muted)' }}>
                    Syllabus ke Highlights:
                  </div>
                  {course.syllabus.slice(0, 3).map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', fontSize: '0.88rem', marginBottom: '0.4rem' }}>
                      <Check size={14} color="#10b981" /> {item}
                    </div>
                  ))}
                </div>
              </div>

              <div>
                <div style={{
                  display: 'flex',
                  alignItems: 'baseline',
                  justifyContent: 'space-between',
                  marginBottom: '1.2rem',
                  paddingTop: '1rem',
                  borderTop: '1px solid var(--card-dark-border)'
                }}>
                  <div>
                    <span style={{ fontSize: '1.5rem', fontWeight: 800, color: 'var(--primary)' }}>{course.fee}</span>
                  </div>
                  <button
                    onClick={() => setSelectedCourseDetail(course)}
                    style={{ background: 'none', border: 'none', color: '#3b82f6', cursor: 'pointer', fontSize: '0.88rem', fontWeight: 600 }}
                  >
                    Full Syllabus &rarr;
                  </button>
                </div>

                <button
                  onClick={() => onSelectCourseToEnroll(course)}
                  className="btn btn-primary"
                  style={{ width: '100%' }}
                >
                  Free Demo Seat Book Karein
                </button>
              </div>

            </div>
          ))}
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
                Demo Class Book Karein ({selectedCourseDetail.fee})
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
};

export default CoursesSection;
