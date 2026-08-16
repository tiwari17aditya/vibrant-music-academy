import React, { useState } from 'react';
import { X, CheckCircle, PhoneCall, Calendar, MapPin, Sparkles, Tag } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';
import { saveInquiry } from '../utils/inquiryStorage';

const EnrollmentModal = ({ preSelectedCourse, onClose }) => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleFormSubmit = (e) => {
    e.preventDefault();
    if (!name || !phone) return;

    let courseTitle = preSelectedCourse ? preSelectedCourse.title : 'General Demo Class';
    if (preSelectedCourse && preSelectedCourse.selectedPlan) {
      courseTitle += ` (${preSelectedCourse.selectedPlan.label} - ${preSelectedCourse.selectedPlan.formattedPrice})`;
    }

    const success = saveInquiry({
      name,
      phone,
      course: courseTitle,
      source: 'Free Demo / Fee Inquiry Modal'
    });

    if (success) {
      setSubmitted(true);
    }
  };

  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '520px',
          width: '90%',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-dark-card)',
          border: '1px solid var(--primary)',
          boxShadow: '0 25px 60px rgba(0, 0, 0, 0.6)'
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-dark-border)', paddingBottom: '1rem' }}>
          <div>
            <span className="badge badge-gold" style={{ marginBottom: '0.4rem' }}>
              <Sparkles size={13} /> Official Academy Inquiry
            </span>
            <h3 style={{ margin: 0, fontSize: '1.4rem' }}>
              Free Demo & Fee Inquiry
            </h3>
          </div>
          <button
            onClick={onClose}
            style={{
              background: 'rgba(255,255,255,0.08)',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              borderRadius: '50%',
              width: '36px',
              height: '36px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center'
            }}
          >
            <X size={20} />
          </button>
        </div>

        {submitted ? (
          <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
            <div style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.15)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              margin: '0 auto 1.25rem auto'
            }}>
              <CheckCircle size={38} color="#10b981" />
            </div>
            
            <h4 style={{ fontSize: '1.4rem', margin: '0 0 0.5rem 0' }}>Inquiry Confirmed! 🎉</h4>
            <p className="theme-text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Aapki request Iyer Sir ke paas submit ho gayi hai. Iyer Sir jaldi hi <strong>{phone}</strong> par call karke batch timings aur fee details share karenge.
            </p>

            <div style={{ background: 'rgba(255,255,255,0.04)', padding: '1rem', borderRadius: '12px', textAlign: 'left', marginBottom: '1.5rem', fontSize: '0.88rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginBottom: '0.4rem' }}>
                <MapPin size={16} color="var(--primary)" /> <strong>Studio Address:</strong> {ACADEMY_INFO.address}
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                <PhoneCall size={16} color="#10b981" /> <strong>Academy Direct:</strong> {ACADEMY_INFO.phone}
              </div>
            </div>

            <button onClick={onClose} className="btn btn-primary" style={{ width: '100%' }}>
              Done / Close
            </button>
          </div>
        ) : (
          <form onSubmit={handleFormSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {preSelectedCourse && (
              <div style={{
                background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.12) 0%, rgba(59, 130, 246, 0.12) 100%)',
                border: '1px solid rgba(245, 158, 11, 0.3)',
                padding: '1rem',
                borderRadius: '12px',
                fontSize: '0.92rem'
              }}>
                <div style={{ color: 'var(--primary)', fontWeight: 700, marginBottom: '0.2rem' }}>Selected Program:</div>
                <div style={{ fontWeight: 800, fontSize: '1.05rem' }}>{preSelectedCourse.title}</div>
                
                {preSelectedCourse.selectedPlan ? (
                  <div style={{ color: '#10b981', fontWeight: 700, fontSize: '0.9rem', marginTop: '0.3rem', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
                    <Tag size={14} /> {preSelectedCourse.selectedPlan.label}: {preSelectedCourse.selectedPlan.formattedPrice}
                    {preSelectedCourse.selectedPlan.formattedOriginal && (
                      <span style={{ color: '#9ca3af', textDecoration: 'line-through', fontSize: '0.8rem' }}>
                        {preSelectedCourse.selectedPlan.formattedOriginal}
                      </span>
                    )}
                  </div>
                ) : (
                  <div style={{ color: 'var(--text-dark-muted)', fontSize: '0.85rem', marginTop: '0.2rem' }}>
                    {preSelectedCourse.fee}
                  </div>
                )}
              </div>
            )}

            <div style={{ fontSize: '0.88rem', color: 'var(--text-dark-muted)', background: 'rgba(255,255,255,0.03)', padding: '0.75rem', borderRadius: '8px' }}>
              🔒 <strong>Safe Studio Registration:</strong> Online payment ki zaroorat nahi hai. Demo class studio aakar attend karein.
            </div>

            <div>
              <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                Aapka Naam (Full Name) *
              </label>
              <input
                type="text"
                required
                placeholder="Enter your full name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <div>
              <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                Mobile / Phone Number *
              </label>
              <input
                type="tel"
                required
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem',
                  borderRadius: '8px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  boxSizing: 'border-box'
                }}
              />
            </div>

            <button type="submit" className="btn btn-primary btn-lg" style={{ marginTop: '0.5rem', width: '100%' }}>
              <Calendar size={18} /> Submit Demo & Fee Inquiry
            </button>

          </form>
        )}

      </div>
    </div>
  );
};

export default EnrollmentModal;
