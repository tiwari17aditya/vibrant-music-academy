# Vibrant Music Academy 🎸🎹🥁

> **A modern, high-performance web application & interactive music platform for Vibrant Music Academy (Ghansoli, Navi Mumbai, 400701), created as a heartfelt *Gurudakshina* for Iyer Sir.**

![Vibrant Music Academy](https://images.unsplash.com/photo-1511671782779-c97d3d27a1d4?w=1200&auto=format&fit=crop&q=80)

---

## 📌 Project Overview

**Vibrant Music Academy** is a web application designed to showcase **Iyer Sir’s** music education academy in Ghansoli, Navi Mumbai (400701). It acts as both a digital storefront to attract prospective students across all age groups and a practical platform equipped with verified real-world brochure details (phone `9065338366`, shop address, 10 instrument & dance programs, instrument sales & repairs, free interactive music utilities, and simulated payment gateway).

This project also serves as a flagship portfolio piece demonstrating modern frontend architecture, state management, CSS custom design tokens, and Web Audio synthesis.

---

## ✨ Key Features (v1.1.0 Updates)

- 📸 **Authentic Brochure Flyer Viewer (`FlyerModal.jsx`)**: High-resolution viewer displaying the original academy pamphlet photo (`/vibrant-details.jpg`).
- 🏬 **One-Stop Shop: Instrument Sales & Repairs (`InstrumentServicesSection.jsx`)**: Comprehensive desk for new & certified pre-owned instrument sales, trade-in, and professional repair servicing (re-stringing, neck setup, action tuning, drum tuning).
- 🎶 **Complete 10-Course Catalog**: Filterable curriculum covering Acoustic & Electric Guitar, Drums, Piano, Tabla, Flute, Vocals & Music Theory, Ukulele, Karaoke Nights, Violin, Kathak & Bharatnatyam, and Trinity Certification (Initial to Grade 8).
- 🎭 **Iyer Sir’s Biography & Legacy**: Highlights his background as a former gym trainer (focusing on playing posture & stamina), acting experience (stage presence), musical family heritage, and Trinity College London certification prep.
- 📜 **Student Transformation Story**: Features the real journey from YouTube tutorial burnout to confident intermediate guitar playing.
- 📱 **Live Social Media Hub**: Instagram Reels wall featuring handle `_vibrantbeats_` and embedded YouTube tutorial player modal.
- 📞 **Verified Contact Line**: Direct booking line **`9065338366`** and WhatsApp dispatch link.
- 🔊 **Built-in 100% Free Interactive Student Toolkit**:
  - **Web Audio Metronome**: Real-time visual pulse ring and audio click engine (40–240 BPM).
  - **Guitar Chord Visualizer & Synth**: Interactive fretboard diagrams (C, G, Am, F, D, Em) with audio synthesis playback.
  - **Trinity Grade Readiness Quiz**: 4-question self-assessment tool for beginners.
- 💳 **Simulated Payment Gateway & Digital Receipt**:
  - Auto-generated Indian UPI QR Code canvas for GPay, PhonePe, Paytm with VPA `iyer.sir.vibrant@upi`.
  - Credit/Debit Card form validation.
  - Automated printable receipt (`VMA-2026-XXXX`) with 1-click WhatsApp dispatch to Iyer Sir.
- 🌙 **Dual Theme Support**: Stage Dark Mode (Obsidian & Amber Gold accents) and Acoustic Light Mode with smooth glassmorphism blurs.

---

## 🛠️ Tech Stack & Architecture

- **Frontend Framework**: React 18 + Vite 6
- **Styling**: Pure CSS3 with CSS Custom Properties, Flexbox/Grid, and Glassmorphism backdrop filters
- **Audio Engine**: Native Browser Web Audio API (`AudioContext`, Oscillator nodes, Gain safety caps)
- **Icons**: Lucide React icons & custom SVG brand vectors
- **Infrastructure & Configuration**:
  - `src/data/mediaAssets.js`: **Centralized Media Asset Hub** — Single file to edit all image URLs, YouTube video embeds, social handles, and studio map links.
  - `src/data/academyData.js`: Centralized data constants for courses, fee structures, bio, and student reviews.
  - `.agents/AGENTS.md`: Workspace rules & token optimization
  - `docs/SUGGESTED_ENHANCEMENTS.md`: **Future Roadmap & Enhancements** — WhatsApp webhooks, Supabase real-time DB, student practice portal, and multi-language support.
  - `docs/TECH_STACK.md`: Complete tech stack manifest
  - `docs/VERSION.md`: Semantic versioning (`v1.0.0`)
  - `docs/DEPLOYMENT_AND_INFRASTRUCTURE.md`: Free Vercel/Netlify hosting & Supabase/Firebase guides
  - `docs/logs/`: Hierarchical engineering activity and token usage logs

---

## 🚀 Quick Start (Local Development)

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/YOUR_USERNAME/vibrant-music-academy.git
   cd vibrant-music-academy
   ```

2. **Install Dependencies**:
   ```bash
   npm install
   ```

3. **Start Development Server**:
   ```bash
   npm run dev
   ```
   Open `http://localhost:5173` in your browser.

4. **Build for Production**:
   ```bash
   npm run build
   ```

---

## 🌐 Deploy to Vercel (100% Free)

1. Push your repository to GitHub.
2. Sign in to [Vercel](https://vercel.com) and click **New Project**.
3. Import `vibrant-music-academy`.
4. Framework Preset: `Vite`.
5. Click **Deploy** to generate a free live SSL URL (`.vercel.app`).

---

## ❤️ Credits & Acknowledgments

Designed and developed with gratitude as a **Gurudakshina** for **Iyer Sir** at **Vibrant Music Academy**, Ghansoli, Navi Mumbai, 400701.
