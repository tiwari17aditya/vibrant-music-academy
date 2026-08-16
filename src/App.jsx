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
import PaymentModal from './components/PaymentModal';
import AdminPortal from './components/AdminPortal';
import QuickApproachWidget from './components/QuickApproachWidget';
import ContactFooter from './components/ContactFooter';
import FlyerModal from './components/FlyerModal';
import { COURSES_DATA } from './data/academyData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [isAdminPortalOpen, setIsAdminPortalOpen] = useState(false);
  const [isFlyerModalOpen, setIsFlyerModalOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  const [activeEnrollmentData, setActiveEnrollmentData] = useState(null);

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

  const handleProceedToPayment = (enrollmentData) => {
    setActiveEnrollmentData(enrollmentData);
    setIsEnrollmentOpen(false);
    setIsPaymentOpen(true);
  };

  return (
    <div className={`app-wrapper ${isDarkMode ? 'dark-theme' : 'light-mode'}`}>
      <ErrorBoundary>
        
        {/* Header */}
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

          {/* Live Social Media Hub */}
          <ErrorBoundary>
            <SocialHub />
          </ErrorBoundary>

          {/* Interactive Music Toolkit (Metronome, Guitar Tuner, Piano Keys, Chord Synth, Quiz) */}
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

        {/* Enrollment Modal */}
        {isEnrollmentOpen && (
          <EnrollmentModal
            preSelectedCourse={selectedCourseForModal}
            onClose={() => setIsEnrollmentOpen(false)}
            onProceedToPayment={handleProceedToPayment}
          />
        )}

        {/* Payment Modal */}
        {isPaymentOpen && activeEnrollmentData && (
          <PaymentModal
            enrollmentData={activeEnrollmentData}
            onClose={() => setIsPaymentOpen(false)}
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
