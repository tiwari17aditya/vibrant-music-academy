import React, { useState } from 'react';
import { X, CheckCircle, ArrowRight, User, Phone, Mail, Calendar, ShieldCheck } from 'lucide-react';
import { COURSES_DATA } from '../data/academyData';

const EnrollmentModal = ({ preSelectedCourse, onClose, onProceedToPayment }) => {
  const [selectedCourseId, setSelectedCourseId] = useState(preSelectedCourse ? preSelectedCourse.id : COURSES_DATA[0].id);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [batch, setBatch] = useState('Weekend Morning (Sat-Sun 10 AM)');
  const [learningMode, setLearningMode] = useState('Offline Studio Class (Mumbai)');
  const [errorMsg, setErrorMsg] = useState('');

  const currentCourse = COURSES_DATA.find(c => c.id === selectedCourseId) || COURSES_DATA[0];

  const handleSubmit = (e) => {
    e.preventDefault();
    setErrorMsg('');

    if (!name.trim()) {
      setErrorMsg("Please enter your full name.");
      return;
    }

    // Phone validation regex (Indian 10-digit format)
    const phoneRegex = /^[6-9]\d{9}$/;
    const cleanPhone = phone.replace(/\D/g, '');
    if (!phoneRegex.test(cleanPhone)) {
      setErrorMsg("Please enter a valid 10-digit Indian mobile number (e.g. 9820012345).");
      return;
    }

    const enrollmentData = {
      name: name.trim(),
      phone: cleanPhone,
      email: email.trim() || 'Not Provided',
      course: currentCourse,
      batch,
      learningMode,
      amount: currentCourse.numericFee,
      date: new Date().toLocaleDateString('en-IN')
    };

    onProceedToPayment(enrollmentData);
  };

  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
          <div>
            <h3 style={{ margin: 0, fontSize: '1.5rem' }}>Student Registration</h3>
            <span style={{ fontSize: '0.85rem', color: 'var(--primary)' }}>Vibrant Music Academy - Iyer Sir</span>
          </div>
          <button onClick={onClose} style={{ background: 'none', border: 'none', color: 'inherit', cursor: 'pointer' }}>
            <X size={24} />
          </button>
        </div>

        {errorMsg && (
          <div style={{
            background: 'rgba(239, 68, 68, 0.15)',
            border: '1px solid rgba(239, 68, 68, 0.4)',
            color: '#ef4444',
            padding: '0.8rem 1rem',
            borderRadius: '10px',
            fontSize: '0.9rem',
            marginBottom: '1.2rem'
          }}>
            {errorMsg}
          </div>
        )}

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
          
          {/* Select Course */}
          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              Select Music Course:
            </label>
            <select
              value={selectedCourseId}
              onChange={(e) => setSelectedCourseId(e.target.value)}
              style={{
                width: '100%',
                padding: '0.75rem',
                borderRadius: '10px',
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid var(--card-dark-border)',
                color: 'inherit',
                fontSize: '0.95rem'
              }}
            >
              {COURSES_DATA.map(c => (
                <option key={c.id} value={c.id} style={{ background: '#1c202e', color: '#fff' }}>
                  {c.title} ({c.fee})
                </option>
              ))}
            </select>
          </div>

          {/* Name Input */}
          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              Student Full Name *
            </label>
            <div style={{ position: 'relative' }}>
              <User size={18} color="#9ca3af" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input
                type="text"
                placeholder="e.g. Rahul Sharma"
                value={name}
                onChange={(e) => setName(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Phone Input */}
          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              WhatsApp Mobile Number *
            </label>
            <div style={{ position: 'relative' }}>
              <Phone size={18} color="#9ca3af" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input
                type="tel"
                placeholder="10-digit mobile number"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Email Input */}
          <div>
            <label style={{ fontSize: '0.88rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
              Email Address (Optional)
            </label>
            <div style={{ position: 'relative' }}>
              <Mail size={18} color="#9ca3af" style={{ position: 'absolute', top: '12px', left: '12px' }} />
              <input
                type="email"
                placeholder="rahul@example.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.75rem 0.75rem 0.75rem 2.5rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  fontSize: '0.95rem',
                  boxSizing: 'border-box'
                }}
              />
            </div>
          </div>

          {/* Batch & Mode Selection */}
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '1rem' }}>
            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                Batch Time
              </label>
              <select
                value={batch}
                onChange={(e) => setBatch(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  fontSize: '0.88rem'
                }}
              >
                <option value="Weekend Morning (Sat-Sun 10 AM)" style={{ background: '#1c202e' }}>Sat-Sun 10 AM</option>
                <option value="Weekday Evening (Tue-Thu 6 PM)" style={{ background: '#1c202e' }}>Tue-Thu 6 PM</option>
                <option value="Custom Flexible Slots" style={{ background: '#1c202e' }}>Custom Flexible</option>
              </select>
            </div>

            <div>
              <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.4rem' }}>
                Learning Mode
              </label>
              <select
                value={learningMode}
                onChange={(e) => setLearningMode(e.target.value)}
                style={{
                  width: '100%',
                  padding: '0.65rem',
                  borderRadius: '10px',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid var(--card-dark-border)',
                  color: 'inherit',
                  fontSize: '0.88rem'
                }}
              >
                <option value="Offline Studio Class (Mumbai)" style={{ background: '#1c202e' }}>Offline Studio (Mumbai)</option>
                <option value="Online 1-on-1 Interactive" style={{ background: '#1c202e' }}>Online 1-on-1</option>
              </select>
            </div>
          </div>

          <div style={{
            background: 'rgba(245, 158, 11, 0.1)',
            border: '1px solid rgba(245, 158, 11, 0.25)',
            padding: '1rem',
            borderRadius: '12px',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
            marginTop: '0.5rem'
          }}>
            <div>
              <div style={{ fontSize: '0.8rem', color: '#9ca3af' }}>Monthly Course Fee</div>
              <div style={{ fontSize: '1.4rem', fontWeight: 800, color: 'var(--primary)' }}>
                ₹{currentCourse.numericFee.toLocaleString('en-IN')}
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.4rem', fontSize: '0.8rem', color: '#10b981' }}>
              <ShieldCheck size={16} /> 100% Free Demo Class Included
            </div>
          </div>

          <button type="submit" className="btn btn-primary btn-lg" style={{ width: '100%', marginTop: '0.5rem' }}>
            Proceed to Payment <ArrowRight size={20} />
          </button>

        </form>

      </div>
    </div>
  );
};

export default EnrollmentModal;
