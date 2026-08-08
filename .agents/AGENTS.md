# Workspace Customization Rules & Token Optimization Guidelines

## Project Scope
- Project Name: Vibrant Music Academy Web Application
- Target Audience: Students of all age groups seeking music education (Guitar, Keyboard, Drums, Trinity Certification, Theory)
- Key Stakeholder: Iyer Sir (~50 years, former gym trainer, actor, musical family background)
- Location: Ghansoli, Navi Mumbai, 400701
- Goal: Showcase Vibrant Academy, attract students, provide interactive music utilities, simulate enrollment/payments, and deliver a high-quality portfolio piece.

## Architecture & Code Standards
1. **Zero External Paid Dependencies**: Use standard browser Web Audio API, React state, Pure CSS3, and open-source Lucide React icons.
2. **Centralized Media Assets**: Store all image URLs, video embeds, social links, and map URLs in `src/data/mediaAssets.js`.
3. **Design Tokens**: Standardize all colors, typography, glassmorphism filters, and breakpoints in `src/index.css`.
4. **State Management**: Keep UI state localized to components or shared via clean props/context.
5. **Guardrails**:
   - Web Audio gain must be clamped to `<= 0.3` to avoid audio distortion and protect ears.
   - Form inputs (name, phone, email) must undergo regex sanitization.
   - React components wrapped with `ErrorBoundary` to prevent app-wide crashes.

## Packup Command Rule
Whenever the user asks to **"packup"**:
1. Update documentation files in `docs/` (`VERSION.md`, `TECH_STACK.md`, daily logs under `docs/logs/YYYY-MM/logs_YYYY-MM-DD.md`).
2. Create a session summary file under `docs/session_summaries/session_summary_YYYY-MM-DD.md` summarizing all changes in that session.
3. Perform Git staging, commit, and push (`git add .`, `git commit`, `git push origin main`).
4. Provide a final session summary report confirming Git push status.

## Token Optimization Guidelines
- Reusable modular data structures stored in `src/data/academyData.js` and `src/data/mediaAssets.js`.
- Keep component code concise, declarative, and focused on single responsibilities.
- Avoid duplicate string literals by referencing centralized data constants.
