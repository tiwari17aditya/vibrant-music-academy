# Tech Stack Manifest - Vibrant Music Academy

This document tracks all technology components, open-source libraries, audio APIs, security mechanisms, and guardrail implementations used in this project.

## 1. Core Frontend Stack
- **Framework**: React `^18.3.0` (Client-side rendering & component architecture)
- **Build Tool / Bundler**: Vite `^6.0.0` (Fast HMR, optimized production bundle)
- **Language**: JavaScript (ESNext, JSX)
- **Styling**: Pure CSS3 with CSS Custom Properties, Flexbox/Grid, Glassmorphic backdrop-filters, and Responsive Media Queries.

## 2. Admin Security & Zero-Cache Mechanisms
- **In-Memory & Session Security**: Admin PIN (`1234` default) is authenticated in-memory and temporary `sessionStorage` only. **Zero persistent disk caching of raw PINs** to prevent credential leakage.
- **Changeable Security PIN**: Iyer Sir can change the Admin PIN dynamically during any active session.
- **Admin Dashboard**: Real-time view of student registrations, fee payment receipts (`VMA-2026-XXXX`), callback inquiries, and CSV export capabilities.

## 3. Open Source UI Components, Authentic Flyer & Quick Approach
- **Icons**: `lucide-react` (Free, MIT licensed vector icon set)
- **Typography**: Google Fonts (`Outfit` for sans-serif UI, `Playfair Display` for musical headings)
- **Official Brochure Modal (`FlyerModal.jsx`)**: High-resolution viewer displaying original pamphlet image (`/vibrant-details.jpg`).
- **One-Stop Shop Services (`InstrumentServicesSection.jsx`)**: Instrument sales, pre-owned gear trade-in, and repair servicing.
- **Quick Approach Speed Dial**: Floating bottom-right widget providing 1-click access to WhatsApp Chat (`9065338366`), Direct Phone Call (`9065338366`), Free Demo Booking, and Ghansoli Studio Location (`Shop No 1, Plot No-14 Shelter house, Sector 5`).
- **Social Integration**: Instagram handle `_vibrantbeats_` and YouTube lessons.

## 4. Audio & Music Engine (100% Free & Native)
- **Native Browser Web Audio API**:
  - `AudioContext` oscillator node synthesis for Metronome clicks (1000Hz accent, 800Hz normal).
  - **Standard 6-String Guitar Tuner**: Reference pitch frequencies (E2=82.41Hz, A2=110.00Hz, D3=146.83Hz, G3=196.00Hz, B3=246.94Hz, E4=329.63Hz).
  - **Playable Piano Keyboard Keys**: Octave range C4 to C5 with dual Western notation & Indian Sargam pitch labels.
  - Polyphonic tone synthesis for Guitar Chord previews (C, G, Am, F, D, Em).
  - Safety gain clamping (`max gain <= 0.25`) for ear safety and audio distortion prevention.

## 5. Security & Stability Guardrails
- **React Error Boundary**: `src/components/ErrorBoundary.jsx` catching runtime exceptions in sub-components without app crashes.
- **XSS & Input Sanitization**: Form input filtering for phone numbers (Indian 10-digit format regex: `9065338366`) and string escaping.
- **Audio Safety Caps**: Maximum decibel/gain clamp on Web Audio API nodes.
