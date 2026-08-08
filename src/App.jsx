import React, { useState, useEffect } from 'react';
import ErrorBoundary from './components/ErrorBoundary';
import Header from './components/Header';
import HeroSection from './components/HeroSection';
import AboutSection from './components/AboutSection';
import CoursesSection from './components/CoursesSection';
import SocialHub from './components/SocialHub';
import InteractiveTools from './components/InteractiveTools';
import TestimonialsSection from './components/TestimonialsSection';
import EnrollmentModal from './components/EnrollmentModal';
import PaymentModal from './components/PaymentModal';
import ContactFooter from './components/ContactFooter';
import { COURSES_DATA } from './data/academyData';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [isEnrollmentOpen, setIsEnrollmentOpen] = useState(false);
  const [isPaymentOpen, setIsPaymentOpen] = useState(false);
  const [selectedCourseForModal, setSelectedCourseForModal] = useState(null);
  const [activeEnrollmentData, setActiveEnrollmentData] = useState(null);

  // Smooth scroll handler
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
        />

        <main>
          {/* Hero Banner */}
          <ErrorBoundary>
            <HeroSection
              onExploreCoursesClick={() => scrollToSection('courses')}
              onBookDemoClick={() => handleOpenEnrollment(COURSES_DATA[0])}
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

          {/* Live Social Media Hub */}
          <ErrorBoundary>
            <SocialHub />
          </ErrorBoundary>

          {/* Interactive Music Toolkit (Metronome, Chord Synth, Quiz) */}
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

      </ErrorBoundary>
    </div>
  );
}

export default App;
