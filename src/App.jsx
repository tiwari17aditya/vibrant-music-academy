import React, { useState } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import InstrumentServicesSection from './components/InstrumentServicesSection';
import SocialHub from './components/SocialHub';
import InteractiveTools from './components/InteractiveTools';
import TestimonialsSection from './components/TestimonialsSection';
import EnrollmentModal from './components/EnrollmentModal';
import AdminPortal from './components/AdminPortal';
import QuickApproachWidget from './components/QuickApproachWidget';
import ContactFooter from './components/ContactFooter';
import FlyerModal from './components/FlyerModal';
import { COURSES_DATA, FLYER_ANNOUNCEMENTS } from './data/academyData';
import { Sparkles } from 'lucide-react';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);

  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleOpenEnrollment = (course = null) => {
    setSelectedCourseForModal(course || COURSES_DATA[0]);
    setIsEnrollmentOpen(true);
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-theme' : 'light-mode'}`}>
      <ErrorBoundary>
        
        {/* Top Announcement Ribbon - Rendered above sticky header to prevent layout distortion */}
        <div style={{
          background: 'linear-gradient(90deg, #f59e0b 0%, #d97706 50%, #3b82f6 100%)',
          color: '#0f1015',
          fontSize: '0.8rem',
          fontWeight: 700,
          textAlign: 'center',
          padding: '0.35rem 1rem',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: '0.6rem',
          zIndex: 901
        }}>
          <span><Sparkles size={13} inline style={{ verticalAlign: 'middle' }} /> "{FLYER_ANNOUNCEMENTS.annualDiscountBanner}"</span>
          <button
            onClick={() => setIsFlyerModalOpen(true)}
            style={{
              background: '#0f1015',
              color: '#fff',
              border: 'none',
              borderRadius: '10px',
              padding: '0.15rem 0.55rem',
              fontSize: '0.72rem',
              fontWeight: 700,
              cursor: 'pointer',
              whiteSpace: 'nowrap'
            }}
          >
            Pamphlet Dekhein &rarr;
          </button>
        </div>

        {/* Sticky Clean Header */}
        <Header
          isDarkMode={isDarkMode}
          setIsDarkMode={setIsDarkMode}
          onBookDemoClick={() => handleOpenEnrollment(COURSES_DATA[0])}
          onAdminPortalClick={() => setIsAdminPortalOpen(true)}
          onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
        />

        <main>
          {/* Hero Banner */}
          <ErrorBoundary>
            <HeroSection
              onExploreCoursesClick={() => scrollToSection('courses')}
              onBookDemoClick={() => handleOpenEnrollment(COURSES_DATA[0])}
              onOpenFlyerModal={() => setIsFlyerModalOpen(true)}
            />
          </ErrorBoundary>

          {/* About Iyer Sir & Academy */}
          <ErrorBoundary>
            <AboutSection />
          </ErrorBoundary>

          {/* Courses & Trinity Certification Catalog */}
          <ErrorBoundary>
            <CoursesSection
              onSelectCourseToEnroll={(course) => handleOpenEnrollment(course)}
            />
          </ErrorBoundary>

          {/* One-Stop Shop: Instrument Sales, Purchase & Repair */}
          <ErrorBoundary>
            <InstrumentServicesSection />
          </ErrorBoundary>

          {/* Live Modular Social Media Hub */}
          <ErrorBoundary>
            <SocialHub />
          </ErrorBoundary>

          {/* Interactive Music Toolkit */}
          <ErrorBoundary>
            <InteractiveTools />
          </ErrorBoundary>

          {/* Student Testimonials */}
          <ErrorBoundary>
            <TestimonialsSection />
          </ErrorBoundary>

        </main>

        {/* Footer & Contact Section */}
        <ErrorBoundary>
          <ContactFooter />
        </ErrorBoundary>

        {/* Floating Quick Approach Speed Dial */}
        <ErrorBoundary>
          <QuickApproachWidget
            onBookDemoClick={() => handleOpenEnrollment(COURSES_DATA[0])}
          />
        </ErrorBoundary>

        {/* Official Flyer / Brochure Modal */}
        {isFlyerModalOpen && (
          <FlyerModal
            onClose={() => setIsFlyerModalOpen(false)}
            onBookDemoClick={() => handleOpenEnrollment(COURSES_DATA[0])}
          />
        )}

        {/* Direct Seat Booking / Free Demo Enrollment Modal (Name + Phone Only, No Payment) */}
        {isEnrollmentOpen && (
          <EnrollmentModal
            preSelectedCourse={selectedCourseForModal}
            onClose={() => setIsEnrollmentOpen(false)}
          />
        )}

        {/* Admin Portal Modal */}
        {isAdminPortalOpen && (
          <AdminPortal
            onClose={() => setIsAdminPortalOpen(false)}
          />
        )}

      </ErrorBoundary>
    </div>
  );
}

export default App;
