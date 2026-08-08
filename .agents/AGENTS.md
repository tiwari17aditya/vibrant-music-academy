# Workspace Customization Rules & Token Optimization Guidelines

## Project Scope
- Project Name: Vibrant Music Academy Web Application
- Target Audience: Students of all age groups seeking music education (Guitar, Keyboard, Drums, Trinity Certification, Theory)
- Key Stakeholder: Iyer Sir (~50 years, former gym trainer, actor, musical family background)
- Goal: Showcase Vibrant Academy, attract students, provide interactive music utilities, simulate enrollment/payments, and deliver a high-quality portfolio piece.

## Architecture & Code Standards
1. **Zero External Paid Dependencies**: Use standard browser Web Audio API, React state, Pure CSS3, and open-source Lucide React icons.
2. **Design Tokens**: Standardize all colors, typography, glassmorphism filters, and breakpoints in `src/index.css`.
3. **State Management**: Keep UI state localized to components or shared via clean props/context.
4. **Guardrails**:
   - Web Audio gain must be clamped to `<= 0.3` to avoid audio distortion and protect ears.
   - Form inputs (name, phone, email) must undergo regex sanitization.
   - React components wrapped with `ErrorBoundary` to prevent app-wide crashes.

## Token Optimization Guidelines
- Reusable modular data structures stored in `src/data/academyData.js`.
- Keep component code concise, declarative, and focused on single responsibilities.
- Avoid duplicate string literals by referencing centralized data constants.
