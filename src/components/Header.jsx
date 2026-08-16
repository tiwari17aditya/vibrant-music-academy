import React, { useState } from 'react';
import { Music, Moon, Sun, Menu, X, PhoneCall, Lock, Image as ImageIcon } from 'lucide-react';
import { ACADEMY_INFO } from '../data/academyData';

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
    { name: "Courses", href: "#courses" },
    { name: "Sales & Repair", href: "#services" },
    { name: "Socials", href: "#social-hub" },
    { name: "Music Tools", href: "#tools" },
    { name: "Testimonials", href: "#testimonials" },
    { name: "Contact", href: "#contact" }
  ];

  return (
    <header className="glass-nav" style={{ position: 'sticky', top: 0, zIndex: 900, width: '100%' }}>
      <div className="container" style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: '76px' }}>
        
        {/* Brand Logo - Clean & Uncluttered */}
        <a href="#" style={{ display: 'flex', alignItems: 'center', gap: '0.6rem', textDecoration: 'none', color: 'inherit', flexShrink: 0 }}>
          <div style={{
            width: '40px',
            height: '40px',
            borderRadius: '10px',
            background: 'linear-gradient(135deg, #f59e0b 0%, #3b82f6 100%)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            boxShadow: '0 4px 12px rgba(245, 158, 11, 0.3)',
            flexShrink: 0
          }}>
            <Music size={22} color="#0f1015" />
          </div>
          <div>
            <span style={{ fontSize: '1.15rem', fontWeight: 800, letterSpacing: '-0.02em', display: 'block', lineHeight: 1.1 }}>
              VIBRANT <span style={{ color: 'var(--primary)' }}>ACADEMY</span>
            </span>
            <span style={{ fontSize: '0.68rem', color: 'var(--primary)', fontWeight: 700, letterSpacing: '0.04em' }}>
              IYER SIR | GHANSOLI
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav style={{ display: 'flex', alignItems: 'center', gap: '1.25rem' }} className="desktop-nav">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '0.9rem',
                fontWeight: 500,
                whiteSpace: 'nowrap',
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
        <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', flexShrink: 0 }}>
          
          {/* View Official Flyer Button */}
          <button
            onClick={onOpenFlyerModal}
            title="View Official Academy Flyer"
            className="desktop-nav"
            style={{
              background: 'rgba(59, 130, 246, 0.12)',
              border: '1px solid rgba(59, 130, 246, 0.35)',
              color: '#3b82f6',
              padding: '0.4rem 0.75rem',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              gap: '0.35rem',
              fontSize: '0.82rem',
              fontWeight: 600,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            <ImageIcon size={15} /> Pamphlet
          </button>

          {/* Admin Lock Portal Button */}
          <button
            onClick={onAdminPortalClick}
            title="Iyer Sir Admin Portal"
            style={{
              background: 'rgba(245, 158, 11, 0.15)',
              border: '1px solid rgba(245, 158, 11, 0.4)',
              color: 'var(--primary)',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            <Lock size={17} />
          </button>

          {/* Dark / Light Mode Toggle */}
          <button
            onClick={toggleTheme}
            aria-label="Toggle Theme"
            style={{
              background: 'rgba(255, 255, 255, 0.08)',
              border: '1px solid rgba(255, 255, 255, 0.15)',
              color: 'inherit',
              width: '36px',
              height: '36px',
              borderRadius: '8px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer'
            }}
          >
            {isDarkMode ? <Sun size={18} color="#f59e0b" /> : <Moon size={18} color="#3b82f6" />}
          </button>

          {/* Book Demo CTA */}
          <button onClick={onBookDemoClick} className="btn btn-primary btn-sm" style={{ whiteSpace: 'nowrap', padding: '0.45rem 0.9rem', fontSize: '0.85rem' }}>
            <PhoneCall size={15} /> Free Demo
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
              padding: '0.3rem'
            }}
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div style={{
          background: isDarkMode ? '#141721' : '#ffffff',
          borderBottom: '1px solid var(--card-dark-border)',
          padding: '1.25rem',
          display: 'flex',
          flexDirection: 'column',
          gap: '0.9rem'
        }}>
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              style={{
                textDecoration: 'none',
                color: 'inherit',
                fontSize: '1rem',
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
              padding: '0.65rem',
              borderRadius: '8px',
              fontWeight: 700,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '0.5rem',
              cursor: 'pointer'
            }}
          >
            <ImageIcon size={18} /> Official Pamphlet Dekhein
          </button>
        </div>
      )}

      <style>{`
        @media (max-width: 960px) {
          .desktop-nav { display: none !important; }
          .mobile-menu-btn { display: flex !important; }
        }
      `}</style>
    </header>
  );
};

export default Header;
