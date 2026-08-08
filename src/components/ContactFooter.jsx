import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, Music, CheckCircle } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

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

const ContactFooter = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmitInquiry = (e) => {
    e.preventDefault();
    if (!name || !phone) return;
    setSubmitted(true);
    setTimeout(() => {
      setName('');
      setPhone('');
      setMessage('');
      setSubmitted(false);
    }, 4000);
  };

  return (
    <footer id="contact" style={{ position: 'relative', borderTop: '1px solid var(--card-dark-border)', background: 'var(--bg-dark-secondary)' }}>
      <div className="section-padding container">
        
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '3rem',
          marginBottom: '4rem'
        }}>
          
          {/* Column 1: Studio Address & Info */}
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '1.2rem' }}>
              <div style={{
                width: '40px',
                height: '40px',
                borderRadius: '10px',
                background: 'var(--primary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                color: '#0f1015'
              }}>
                <Music size={22} />
              </div>
              <h3 style={{ margin: 0, fontSize: '1.4rem' }}>{ACADEMY_INFO.name}</h3>
            </div>

            <p className="theme-text-muted" style={{ fontSize: '0.95rem', marginBottom: '1.8rem', lineHeight: 1.6 }}>
              {ACADEMY_INFO.tagline}. Step into our studio or join our interactive online 1-on-1 sessions.
            </p>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.8rem' }}>
                <MapPin size={20} color="var(--primary)" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Studio Location:</strong><br />
                  <span className="theme-text-muted">{ACADEMY_INFO.location}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Phone size={20} color="var(--secondary)" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Call / Phone:</strong> <span className="theme-text-muted">{ACADEMY_INFO.phone}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Mail size={20} color="#10b981" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Email Inquiry:</strong> <span className="theme-text-muted">{ACADEMY_INFO.email}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.8rem' }}>
                <Clock size={20} color="#ec4899" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Studio Hours:</strong> <span className="theme-text-muted">Tue - Sun: 9:00 AM - 8:30 PM (Mon Closed)</span>
                </div>
              </div>
            </div>

            {/* Direct WhatsApp CTA */}
            <div style={{ marginTop: '2rem' }}>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hi%20Iyer%20Sir!%20I%20want%20to%20know%20more%20about%20music%20classes%20at%20Vibrant%20Academy.`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary"
                style={{ background: '#25D366', color: '#ffffff', width: '100%', boxSizing: 'border-box' }}
              >
                <Send size={18} /> Chat Directly on WhatsApp
              </a>
            </div>
          </div>

          {/* Column 2: Inquiry Form */}
          <div className="theme-card" style={{ padding: '2rem', borderRadius: 'var(--radius-lg)' }}>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '1.2rem' }}>Send a Quick Inquiry</h3>

            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                <CheckCircle size={48} color="#10b981" style={{ marginBottom: '1rem' }} />
                <h4 style={{ fontSize: '1.2rem', marginBottom: '0.4rem' }}>Thank You!</h4>
                <p className="theme-text-muted" style={{ fontSize: '0.9rem' }}>
                  Iyer Sir will contact you shortly to schedule your demo class.
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmitInquiry} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Your Name *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Enter your full name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--card-dark-border)',
                      color: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Phone / Mobile *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--card-dark-border)',
                      color: 'inherit',
                      boxSizing: 'border-box'
                    }}
                  />
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Which instrument do you want to learn?
                  </label>
                  <textarea
                    rows="3"
                    placeholder="e.g. Guitar basics, Trinity exam prep, Keyboard..."
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    style={{
                      width: '100%',
                      padding: '0.7rem',
                      borderRadius: '8px',
                      background: 'rgba(255,255,255,0.05)',
                      border: '1px solid var(--card-dark-border)',
                      color: 'inherit',
                      boxSizing: 'border-box',
                      resize: 'none'
                    }}
                  />
                </div>

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.5rem' }}>
                  Submit Inquiry
                </button>
              </form>
            )}
          </div>

        </div>

        {/* Bottom Credits & Copyright */}
        <div style={{
          borderTop: '1px solid rgba(255,255,255,0.08)',
          paddingTop: '2rem',
          display: 'flex',
          flexWrap: 'wrap',
          alignItems: 'center',
          justifyContent: 'space-between',
          gap: '1rem',
          fontSize: '0.88rem',
          color: 'var(--text-dark-muted)'
        }}>
          <div>
            &copy; {new Date().getFullYear()} {ACADEMY_INFO.name}. All rights reserved.
          </div>
          <div style={{ display: 'flex', gap: '1.5rem' }}>
            <a href={`https://instagram.com/${ACADEMY_INFO.instagram}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <InstagramIcon size={18} />
            </a>
            <a href={`https://youtube.com/${ACADEMY_INFO.youtube}`} target="_blank" rel="noopener noreferrer" style={{ color: 'inherit' }}>
              <YoutubeIcon size={18} />
            </a>
          </div>
          <div>
            Designed with ❤️ as <strong style={{ color: 'var(--primary)' }}>Gurudakshina</strong> for Iyer Sir
          </div>
        </div>

      </div>
    </footer>
  );
};

export default ContactFooter;
