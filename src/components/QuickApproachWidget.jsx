import React, { useState } from 'react';
import { MessageCircle, Phone, Calendar, MapPin, X, ChevronUp, Sparkles, Send } from 'lucide-react';
import { SOCIAL_LINKS, LOCATION_ASSETS } from '../data/mediaAssets';

const QuickApproachWidget = ({ onBookDemoClick }) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div style={{ position: 'fixed', bottom: '2rem', right: '2rem', zIndex: 990 }}>
      
      {/* Expanded Quick Options Menu */}
      {isOpen && (
        <div style={{
          background: 'var(--card-dark)',
          border: '1px solid var(--primary)',
          borderRadius: '16px',
          padding: '1.2rem',
          marginBottom: '1rem',
          boxShadow: '0 15px 35px rgba(0,0,0,0.5)',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.8rem',
          minWidth: '240px',
          animation: 'pulseGlow 0.3s ease'
        }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '0.6rem' }}>
            <span style={{ fontSize: '0.88rem', fontWeight: 800, color: 'var(--primary)', display: 'flex', alignItems: 'center', gap: '0.4rem' }}>
              <Sparkles size={14} /> Quick Approach
            </span>
            <button onClick={() => setIsOpen(false)} style={{ background: 'none', border: 'none', color: '#9ca3af', cursor: 'pointer' }}>
              <X size={16} />
            </button>
          </div>

          {/* Option 1: WhatsApp Direct */}
          <a
            href={SOCIAL_LINKS.whatsapp.directUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-sm"
            style={{ background: '#25D366', color: '#ffffff', justifyContent: 'flex-start' }}
          >
            <MessageCircle size={16} /> Chat on WhatsApp
          </a>

          {/* Option 2: Direct Call */}
          <a
            href={`tel:${SOCIAL_LINKS.whatsapp.number}`}
            className="btn btn-secondary btn-sm"
            style={{ justifyContent: 'flex-start', color: '#3b82f6' }}
          >
            <Phone size={16} /> Call Iyer Sir Directly
          </a>

          {/* Option 3: Book Demo */}
          <button
            onClick={() => {
              setIsOpen(false);
              onBookDemoClick();
            }}
            className="btn btn-primary btn-sm"
            style={{ justifyContent: 'flex-start' }}
          >
            <Calendar size={16} /> Request Free Demo
          </button>

          {/* Option 4: Studio Location */}
          <a
            href={LOCATION_ASSETS.googleMapsEmbedUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="btn btn-secondary btn-sm"
            style={{ justifyContent: 'flex-start', fontSize: '0.78rem' }}
          >
            <MapPin size={16} color="var(--primary)" /> Ghansoli Studio Location
          </a>
        </div>
      )}

      {/* Floating Trigger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        style={{
          width: '56px',
          height: '56px',
          borderRadius: '50%',
          background: 'linear-gradient(135deg, #f59e0b 0%, #d97706 100%)',
          color: '#0f1015',
          border: 'none',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          cursor: 'pointer',
          boxShadow: '0 8px 25px rgba(245, 158, 11, 0.5)',
          transition: 'transform 0.2s ease'
        }}
        aria-label="Quick Connect"
      >
        {isOpen ? <X size={26} /> : <MessageCircle size={26} />}
      </button>

    </div>
  );
};

export default QuickApproachWidget;
