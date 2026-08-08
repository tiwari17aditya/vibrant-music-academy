# Tech Stack Manifest - Vibrant Music Academy

This document tracks all technology components, open-source libraries, audio APIs, and guardrail implementations used in this project.

## 1. Core Frontend Stack
- **Framework**: React `^18.3.0` (Client-side rendering & component architecture)
- **Build Tool / Bundler**: Vite `^6.0.0` (Fast HMR, optimized production build)
- **Language**: JavaScript (ESNext, JSX)
- **Styling**: Pure CSS3 with CSS Custom Properties, Flexbox/Grid, Glassmorphism backdrop-filters, and Responsive Media Queries.

## 2. Open Source UI Components & Icons
- **Icons**: `lucide-react` (Free, MIT licensed vector icon set)
- **Typography**: Google Fonts (`Outfit` for sans-serif UI, `Playfair Display` for musical headings)

## 3. Audio & Music Engine (100% Free & Native)
- **Native Browser Web Audio API**:
  - `AudioContext` oscillator node synthesis for Metronome clicks (High tone 1000Hz, Low tone 800Hz).
  - Polyphonic tone synthesis for Guitar Chord previews (E, A, D, G, B, E pitch frequencies).
  - Safety gain clamping (`max gain: 0.3`) for ear safety and audio distortion prevention.

## 4. Payment Gateway & Enrollment Engine (Simulated)
- **UPI QR Generator**: Dynamic client-side Canvas / SVG generation for Indian UPI apps (GPay, PhonePe, Paytm, BHIM).
- **Payment Interface**: Mock Credit/Debit Card validation with Luhn check simulation and instant receipt generator.

## 5. Security & Stability Guardrails
- **React Error Boundary**: `src/components/ErrorBoundary.jsx` catching runtime exceptions.
- **XSS & Input Sanitization**: Form input filtering for phone numbers (Indian 10-digit format) and email strings.
- **Audio Safety Caps**: Maximum decibel/gain clamp on Web Audio API nodes.

## 6. Recommended Infrastructure (Free & Open Source)
- **Hosting / Deployment**: Vercel Free Tier / Netlify / GitHub Pages
- **Database (Optional Backend)**: Supabase PostgreSQL (Free Tier 500MB) or Firebase Firestore (Free Spark Plan)
- **Version Control**: Git + GitHub
