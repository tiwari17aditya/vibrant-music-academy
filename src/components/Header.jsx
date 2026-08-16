import React, { useState } from 'react';
import { Music, Moon, Sun, Menu, X, PhoneCall, Lock, Sparkles, Image as ImageIcon } from 'lucide-react';
import { ACADEMY_INFO, FLYER_ANNOUNCEMENTS } from '../data/academyData';

const Header = ({ isDarkMode, setIsDarkMode, onBookDemoClick, onAdminPortalClick, onOpenFlyerModal }) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleTheme = () => {
    setIsDarkMode(!isDarkMode);
    if (isDarkMode) {
      document.body.classList.add('light-mode');
    } else {
      document.body.classList.remove('light-mode');
    }
  };

  const navLinks = [
    { name: "About Sir", href: "#about" },
    { name: "Courses & Trinity", href: "#courses" },
    { name: "Sales & Repair", href: "#services" },
    { name: "Social Hub", href: "#social-hub" },
    { name: "Music Tools", href: "#tools" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900 }}>
      
      {/* Announcement Ribbon for Annual Discount */}
      <div style={{
        background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 50%, #3b82f6 100%)',
        color: '#0f1015',
        fontSize: '0.82rem',
        fontWeight: 700,
        textAlign: 'center',
        padding: '0.3rem 1rem',
        letterSpacing: '0.02em',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        gap: '0.6rem'
      }}>
        <span><Sparkles size={14} inline style={{ verticalAlign: 'middle' }} /> "{FLYER_ANNOUNCEMENTS.annualDiscountBanner}"</span>
        <button
          onClick={onOpenFlyerModal}
          style={{
            background: '#0f1015',
            color: '#fff',
            border: 'none',
            borderRadius: '12px',
            padding: '0.15rem 0.6rem',
            fontSize: '0.75rem',
            fontWeight: 700,
            cursor: 'pointer'
          }}
        >
          View Pamphlet &rarr;
        </button>
      </div>

      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '80px' }}>
        
        {/* Brand Logo with Devanagari Subtitle */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', textDecoration: 'none', color: 'inherit' }}>
          <div style={{
            width: '44px',
            height: '44px',
            borderRadius: '12px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 15px rgba(245, 158, 11, 0.3)'
          }}>
            <Music size={24} color="#0f1015" />
          </div>
          <div>
            <span style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 }}>
              VIBRANT <span style={{ color: 'var(--primary)' }}>ACADEMY</span>
            </span>
            <span style={{ fontSize: '0.7rem', color: 'var(--primary)', fontWeight: 600, letterSpacing: '0.04em' }}>
              {ACADEMY_INFO.nameHindi} | IYER SIR
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.92rem',
                fontWeight: 500,
                transition: 'color 0.2s ease'
              }}
              onMouseEnter={(e) => e.target.style.color = 'var(--primary)'}
              onMouseLeave={(e) => e.target.style.color = 'inherit'}
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Action Controls */}
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.6rem' }}>
          
          {/* View Pamphlet Button */}
          <button
            onClick={onOpenFlyerModal}
            title="View Official Brochure / Pamphlet"
            className="desktop-nav"
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              border: '1px solid rgba(59, 130, 246, 0.4)',
              color: '#3b82f6',
              padding: '0.45rem 0.8rem',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.4rem',
              fontSize: '0.85rem',
              fontWeight: 600,
              cursor: 'pointer'
            }}
          >
            <ImageIcon size={16} /> Official Flyer
          </button>

          {/* Admin Lock Portal Button */}
          <button
            onClick={onAdminPortalClick}
            title="Iyer Sir Admin Portal"
            style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: 'var(--primary)',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            <Lock size={18} />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'inherit',
              width: '40px',
              height: '40px',
              borderRadius: '10px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              transition: 'background 0.2s'
            }}
          >
            {isDarkMode ? <Sun size={20} color="#f59e0b" /> : <Moon size={20} color="#3b82f6" />}
          </button>

          {/* Book Demo CTA */}
          <button onClick={onBookDemoClick} className="btn btn-primary btn-sm">
            <PhoneCall size={16} /> Free Demo Class
          </button>

          {/* Mobile Menu Toggle */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="mobile-menu-btn"
            style={{
              background: 'transparent',
              border: 'none',
              color: 'inherit',
              cursor: 'pointer',
              display: 'none',
              padding: '0.4rem'
            }}
          >
            {mobileMenuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: isDarkMode ? '#141721' : '#ffffff',
          borderBottom: '1px solid var(--card-dark-border)',
          padding: '1.5rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '1.05rem',
                fontWeight: 600
              }}
            >
              {link.name}
            </a>
          ))}
          <button
            onClick={() => {
              setMobileMenuOpen(false);
              onOpenFlyerModal();
            }}
            style={{
              background: 'rgba(59, 130, 246, 0.15)',
              color: '#3b82f6',
              border: '1px solid #3b82f6',
              padding: '0.75rem',
              borderRadius: '10px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ImageIcon size={18} /> View Official Academy Flyer
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 900px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
