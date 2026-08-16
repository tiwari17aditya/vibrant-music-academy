import React from 'react';
import { X, PhoneCall, Award, MapPin, Sparkles, ShoppingBag, CheckCircle } from 'lucide-react';
import { ACADEMY_INFO, FLYER_ANNOUNCEMENTS } from '../data/academyData';
import { IMAGE_ASSETS } from '../data/mediaAssets';

const FlyerModal = ({ onClose, onBookDemoClick }) => {
  return (
    <div className="modal-overlay" onClick={onClose} style={{ zIndex: 1100 }}>
      <div
        className="modal-content"
        onClick={(e) => e.stopPropagation()}
        style={{
          maxWidth: '880px',
          width: '95%',
          maxHeight: '90vh',
          overflowY: 'auto',
          padding: '2rem',
          borderRadius: 'var(--radius-lg)',
          background: 'var(--bg-dark-card)',
          border: '1px solid var(--primary)',
          boxShadow: '0 25px 60px rgba(245, 158, 11, 0.25)'
        }}
      >
        {/* Header Bar */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1.5rem', borderBottom: '1px solid var(--card-dark-border)', paddingBottom: '1rem' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', marginBottom: '0.3rem' }}>
              <span className="badge badge-gold">
                <Sparkles size={14} /> Official Pamphlet
              </span>
              <span className="badge badge-blue">Verified Academy Details</span>
            </div>
            <h2 style={{ fontSize: '1.6rem', margin: 0, fontWeight: 800 }}>
              {ACADEMY_INFO.name}
            </h2>
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

        {/* Content Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(310px, 1fr))', gap: '2rem', alignItems: 'start' }}>
          
          {/* Left Column: Authentic Image Flyer */}
          <div style={{ textAlign: 'center' }}>
            <div style={{
              borderRadius: '16px',
              overflow: 'hidden',
              border: '2px solid rgba(245, 158, 11, 0.4)',
              boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
              background: '#000'
            }}>
              <img
                src={IMAGE_ASSETS.brochureFlyer}
                alt="Official Vibrant Music Academy Brochure Flyer"
                style={{ width: '100%', height: 'auto', display: 'block', maxHeight: '520px', objectFit: 'contain' }}
              />
            </div>
            <p className="theme-text-muted" style={{ fontSize: '0.82rem', marginTop: '0.8rem' }}>
              📸 Original physical pamphlet of Vibrant Music Academy, Ghansoli, Navi Mumbai.
            </p>
          </div>

          {/* Right Column: Key Details Breakdown from Image */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
            
            {/* Discount Banner Card */}
            <div style={{
              background: 'linear-gradient(135deg, rgba(245, 158, 11, 0.15) 0%, rgba(59, 130, 246, 0.15) 100%)',
              border: '1px solid rgba(245, 158, 11, 0.5)',
              padding: '1.2rem',
              borderRadius: '14px'
            }}>
              <div style={{ fontSize: '0.82rem', fontWeight: 800, color: 'var(--primary)', textTransform: 'uppercase', letterSpacing: '0.05em', marginBottom: '0.3rem' }}>
                🌟 Exclusive Pamphlet Offer
              </div>
              <div style={{ fontSize: '1.05rem', fontWeight: 700, marginBottom: '0.4rem' }}>
                "{FLYER_ANNOUNCEMENTS.annualDiscountBanner}"
              </div>
              <div style={{ fontSize: '0.88rem', color: '#10b981', fontWeight: 600 }}>
                ● {FLYER_ANNOUNCEMENTS.demoClassCallToAction} ●
              </div>
            </div>

            {/* Quick Highlights Grid */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', fontSize: '0.92rem' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Award size={20} color="#f59e0b" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Trinity College London Certification:</strong> Exam readiness prep.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <ShoppingBag size={20} color="#3b82f6" style={{ flexShrink: 0 }} />
                <div>
                  <strong>One Stop Shop:</strong> Sale, purchase & repair for all musical instruments.
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '0.75rem' }}>
                <MapPin size={20} color="#ec4899" style={{ flexShrink: 0, marginTop: '2px' }} />
                <div>
                  <strong>Studio Address:</strong><br />
                  <span className="theme-text-muted">{ACADEMY_INFO.address}</span>
                </div>
              </div>

              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <PhoneCall size={20} color="#10b981" style={{ flexShrink: 0 }} />
                <div>
                  <strong>Official Inquiry Line:</strong> <strong style={{ color: 'var(--primary)', fontSize: '1.05rem' }}>{ACADEMY_INFO.phone}</strong>
                </div>
              </div>
            </div>

            {/* Courses Checklist from Flyer */}
            <div style={{ background: 'rgba(255,255,255,0.03)', padding: '1rem', borderRadius: '12px', border: '1px solid var(--card-dark-border)' }}>
              <div style={{ fontSize: '0.88rem', fontWeight: 700, marginBottom: '0.6rem', color: 'var(--primary)' }}>
                Pamphlet Ke Saare 10 Programs:
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.4rem', fontSize: '0.85rem' }}>
                <div><CheckCircle size={13} color="#10b981" /> Acoustic & Electric Guitar</div>
                <div><CheckCircle size={13} color="#10b981" /> Drums</div>
                <div><CheckCircle size={13} color="#10b981" /> Piano</div>
                <div><CheckCircle size={13} color="#10b981" /> Tabla</div>
                <div><CheckCircle size={13} color="#10b981" /> Flute</div>
                <div><CheckCircle size={13} color="#10b981" /> Vocals & Music Theory</div>
                <div><CheckCircle size={13} color="#10b981" /> Ukulele</div>
                <div><CheckCircle size={13} color="#10b981" /> Karaoke Nights</div>
                <div><CheckCircle size={13} color="#10b981" /> Violin</div>
                <div><CheckCircle size={13} color="#10b981" /> Kathak & Bharatnatyam</div>
              </div>
            </div>

            {/* Action CTAs */}
            <div style={{ display: 'flex', gap: '1rem', marginTop: '0.5rem' }}>
              <button
                onClick={() => {
                  onClose();
                  onBookDemoClick();
                }}
                className="btn btn-primary"
                style={{ flex: 1 }}
              >
                <PhoneCall size={18} /> Free Demo Class Book Karein
              </button>
              <a
                href={`https://wa.me/${ACADEMY_INFO.whatsapp}?text=Hi%20Iyer%20Sir,%20mujhe%20pamphlet%20annual%20discount%20claim%20karna%20hai!`}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-secondary"
                style={{ background: '#25D366', color: '#fff', border: 'none' }}
              >
                WhatsApp Sir
              </a>
            </div>

          </div>

        </div>
      </div>
    </div>
  );
};

export default FlyerModal;
