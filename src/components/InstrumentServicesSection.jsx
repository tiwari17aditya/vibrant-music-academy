import React, { useState } from 'react';
import { ShoppingBag, Wrench, RefreshCw, Sparkles, Send, CheckCircle, PhoneCall } from 'lucide-react';
import { ACADEMY_INFO, INSTRUMENT_SERVICES, FLYER_ANNOUNCEMENTS } from '../data/academyData';
import { saveInquiry } from '../utils/inquiryStorage';

const InstrumentServicesSection = () => {
  const [contactName, setContactName] = useState('');
  const [contactPhone, setContactPhone] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleInquirySubmit = (e) => {
    e.preventDefault();
    if (!contactName || !contactPhone) return;
    
    const success = saveInquiry({
      name: contactName,
      phone: contactPhone,
      course: 'Instrument Repair & Sales Desk',
      source: 'Instrument Services Desk'
    });

    if (success) {
      setSubmitted(true);
      setTimeout(() => {
        setContactName('');
        setContactPhone('');
        setSubmitted(false);
      }, 4000);
    }
  };

  const getServiceIcon = (iconName) => {
    switch (iconName) {
      case 'Wrench': return <Wrench size={28} color="#f59e0b" />;
      case 'ShoppingBag': return <ShoppingBag size={28} color="#3b82f6" />;
      case 'RefreshCw': return <RefreshCw size={28} color="#10b981" />;
      default: return <Wrench size={28} color="#f59e0b" />;
    }
  };

  return (
    <section id="services" className="section-padding" style={{ position: 'relative', background: 'rgba(255,255,255,0.01)' }}>
      <div className="container">
        
        {/* Section Header */}
        <div style={{ textAlign: 'center', maxWidth: '750px', margin: '0 auto 3rem auto' }}>
          <span className="badge badge-gold" style={{ marginBottom: '0.8rem' }}>
            <Sparkles size={14} /> Official Academy Services
          </span>
          <h2 className="heading-serif" style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}>
            {FLYER_ANNOUNCEMENTS.oneStopShopTitle}: <span className="gradient-text">Sales, Purchase & Repair</span>
          </h2>
          <p className="theme-text-muted" style={{ fontSize: '1.05rem' }}>
            {FLYER_ANNOUNCEMENTS.oneStopShopSubtitle}. Instrument tuning, setup, re-stringing aur repairs Iyer Sir ke 15+ years experience ke saath.
          </p>
        </div>

        {/* 3 Main Service Cards */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2rem',
          marginBottom: '3.5rem'
        }}>
          {INSTRUMENT_SERVICES.map((srv) => (
            <div
              key={srv.id}
              className="theme-card"
              style={{
                padding: '2rem',
                borderRadius: 'var(--radius-lg)',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                border: '1px solid var(--card-dark-border)',
                transition: 'transform 0.3s ease, border-color 0.3s ease'
              }}
            >
              <div>
                <div style={{
                  width: '56px',
                  height: '56px',
                  borderRadius: '16px',
                  background: 'rgba(255,255,255,0.05)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginBottom: '1.25rem'
                }}>
                  {getServiceIcon(srv.icon)}
                </div>

                <h3 style={{ fontSize: '1.35rem', marginBottom: '0.8rem' }}>{srv.title}</h3>
                <p className="theme-text-muted" style={{ fontSize: '0.94rem', lineHeight: 1.6, marginBottom: '1.5rem' }}>
                  {srv.description}
                </p>
              </div>

              <div>
                <a
                  href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hi%20Iyer%20Sir!%20Mujhe%20${encodeURIComponent(srv.title)}%20ke%20baare%20mein%20jaanna%20hai.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-secondary"
                  style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.5rem' }}
                >
                  <Send size={16} /> WhatsApp Par Details Poochein
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Service Inquiry Box (Name & Phone Only) */}
        <div className="theme-card" style={{
          padding: '2.5rem',
          borderRadius: 'var(--radius-lg)',
          background: 'linear-gradient(135deg, rgba(20, 23, 33, 0.9) 0%, rgba(13, 15, 20, 0.95) 100%)',
          border: '1px solid var(--primary)',
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
          gap: '2.5rem',
          alignItems: 'center'
        }}>
          <div>
            <span className="badge badge-blue" style={{ marginBottom: '0.8rem' }}>
              Instrument Repair Desk
            </span>
            <h3 style={{ fontSize: '1.8rem', marginBottom: '0.8rem' }}>
              Guitar Repair ya Instrument Servicing Chahiye?
            </h3>
            <p className="theme-text-muted" style={{ fontSize: '0.98rem', marginBottom: '1.5rem', lineHeight: 1.6 }}>
              Apna instrument Ghansoli studio (Shop No 1, Plot No-14 Shelter house, Sector 5) par laayein fast turnaround repair, action tuning aur string replacement ke liye.
            </p>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', color: 'var(--primary)', fontWeight: 700, fontSize: '1.1rem' }}>
              <PhoneCall size={22} /> Direct Call: {ACADEMY_INFO.phone}
            </div>
          </div>

          <div>
            {submitted ? (
              <div style={{ textAlign: 'center', padding: '2rem', background: 'rgba(16, 185, 129, 0.1)', borderRadius: '14px', border: '1px solid #10b981' }}>
                <CheckCircle size={44} color="#10b981" style={{ marginBottom: '0.8rem' }} />
                <h4 style={{ margin: '0 0 0.4rem 0', fontSize: '1.2rem' }}>Inquiry Receive Ho Gayi!</h4>
                <p className="theme-text-muted" style={{ fontSize: '0.9rem', margin: 0 }}>
                  Iyer Sir jaldi hi aapko call karenge.
                </p>
              </div>
            ) : (
              <form onSubmit={handleInquirySubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                <div style={{ fontSize: '0.9rem', color: 'var(--primary)', fontWeight: 600 }}>
                  📝 Apni Details Fill Karein (Only Name & Phone)
                </div>

                <div>
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Aapka Naam (Full Name) *
                  </label>
                  <input
                    type="text"
                    required
                    placeholder="Ex. Rohan Sharma"
                    value={contactName}
                    onChange={(e) => setContactName(e.target.value)}
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
                  <label style={{ fontSize: '0.85rem', fontWeight: 600, display: 'block', marginBottom: '0.3rem' }}>
                    Mobile / Phone Number *
                  </label>
                  <input
                    type="tel"
                    required
                    placeholder="10-digit mobile number"
                    value={contactPhone}
                    onChange={(e) => setContactPhone(e.target.value)}
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

                <button type="submit" className="btn btn-primary" style={{ marginTop: '0.4rem' }}>
                  Submit Service Request
                </button>
              </form>
            )}
          </div>
        </div>

      </div>
    </section>
  );
};

export default InstrumentServicesSection;
