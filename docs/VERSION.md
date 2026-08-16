# Version History & Semantic Versioning

This project adheres to [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

## Current Version: `1.1.0` (Authentic Brochure Integration & 10-Course Catalog)

### [1.1.0] - 2026-08-16
- **Added & Updated**:
  - Extracted and integrated authentic real-world data from the official academy brochure flyer (`vibrant-details`).
  - Updated primary inquiry line to **`9065338366`** across all components, headers, footers, and modals.
  - Updated Instagram handle to **`_vibrantbeats_`** (removed `@`).
  - Updated studio address to **`Shop No 1, Plot No-14 Shelter house, Sector 5 Near Union Bank, Ghansoli, Navi Mumbai - 400701`**.
  - Added Devanagari Hindi branding **`वाइब्रेंट म्यूजिक एकेडमी`** and flyer motto (*"WHERE PEOPLE MAKE MUSIC..."*).
  - Expanded course catalog to all **10 authentic brochure programs**: Acoustic & Electric Guitar, Drums, Piano, Tabla, Flute, Vocals & Music Theory, Ukulele, Karaoke Nights, Violin, Kathak & Bharatnatyam, and Trinity Certification.
  - Built **`InstrumentServicesSection.jsx`**: One-Stop Shop for instrument sales, pre-owned gear trade-in, and repair servicing.
  - Built **`FlyerModal.jsx`**: Interactive viewer displaying the original converted brochure image (`/vibrant-details.jpg`).
  - Verified production build (`cmd.exe /c npm run build` — 0 errors).

### [1.0.0] - 2026-08-08
- **Added**:
  - Initial project scaffold with React 18 & Vite 6.
  - Complete Dark Stage & Bright Acoustic theme design system.
  - About Iyer Sir section detailing fitness background, acting career, musical heritage, and Trinity College London prep.
  - Interactive Filterable Course Catalog (Guitar, Keyboard, Drums, Theory, Trinity Initial-8).
  - Web Audio Metronome tool with BPM controls (40-240 BPM).
  - Web Audio Guitar Chord Chart preview engine with synthesized acoustic/electric tones.
  - Trinity Grade Self-Assessment Quiz.
  - Social Media Hub featuring Instagram Reels feed simulator and YouTube lesson player.
  - Simulated Payment Gateway supporting Indian UPI QR codes, Debit/Credit Cards, NetBanking, and instant printable digital receipt.
  - Contact section with WhatsApp direct chat, location details in Mumbai, and inquiry modal.
  - Built-in React Error Boundaries and Audio Safety Guardrails.
  - Developer documentation: `TECH_STACK.md`, `DEPLOYMENT_AND_INFRASTRUCTURE.md`, `.agents/AGENTS.md`, `token_tracker.md`, and hierarchical daily logs under `docs/logs/2026-08/logs_2026-08-08.md`.
