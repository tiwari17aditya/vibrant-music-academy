# Version History & Semantic Versioning

This project adheres to [Semantic Versioning](https://semver.org/) (MAJOR.MINOR.PATCH).

## Current Version: `1.2.0` (Hinglish Edition, UI Fixes, Inquiry DB & Fraud Prevention)

### [1.2.0] - 2026-08-16
- **Added & Refactored**:
  - **UI & Header Distortion Fix**: Fixed sticky header layout (`76px`), flex alignment, and moved top ribbon above header container to eliminate line-wrapping and overlap.
  - **Pure Hinglish Content**: Converted all UI copy, titles, course descriptions, bio, and CTAs across all components into natural **Hinglish** (Latin script, zero Devanagari script).
  - **Sample Videos Removal**: Removed all sample YouTube video embeds, video player modals, and fake video feeds.
  - **Database Inquiry System (`inquiryStorage.js`)**: Built client-side database persistence for student callback inquiries (Name + Phone + Timestamp + Source).
  - **Simplified Name & Phone Forms**: Refactored Header Demo Modal, Instrument Service Desk, and Footer Contact forms to strictly require Name and 10-digit Phone Number only.
  - **Fraud Prevention**: Completely removed online payment modals, UPI QR codes, VPAs, and credit card inputs. Replaced with direct Free Demo Seat Reservation.
  - **Modular Social Architecture**: Modularized `MODULAR_SOCIAL_PLATFORMS` in `mediaAssets.js` for Instagram (`_vibrantbeats_`) and future platform additions.
  - Verified production build (`cmd.exe /c npm run build` — 0 errors).

### [1.1.0] - 2026-08-16
- **Added & Updated**:
  - Extracted and integrated authentic real-world data from the official academy brochure flyer (`vibrant-details`).
  - Updated primary inquiry line to **`9065338366`** across all components, headers, footers, and modals.
  - Updated Instagram handle to **`_vibrantbeats_`**.
  - Updated studio address to **`Shop No 1, Plot No-14 Shelter house, Sector 5 Near Union Bank, Ghansoli, Navi Mumbai - 400701`**.
  - Expanded course catalog to all **10 authentic brochure programs**.
  - Built **`InstrumentServicesSection.jsx`** and **`FlyerModal.jsx`**.

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
