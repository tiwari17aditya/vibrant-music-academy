# Deployment & Infrastructure Guide (100% Free & Open Source)

This document details how to host, deploy, and connect a database for **Vibrant Music Academy** using exclusively **FREE** tier services and open-source infrastructure.

---

## 1. Frontend Hosting Options (Free Tier)

### Option A: Vercel (Recommended for Vite + React)
1. **Repository Setup**: Push project code to GitHub.
2. **Connect Vercel**: Sign up at [vercel.com](https://vercel.com) with GitHub.
3. **Import Repo**: Click "New Project" -> Select `project-vibrant-guitar`.
4. **Build Settings**:
   - Framework Preset: `Vite`
   - Build Command: `npm run build`
   - Output Directory: `dist`
5. **Deploy**: Click Deploy. Instant SSL certificate (`.vercel.app`) is generated automatically.

### Option B: Netlify
1. Log in to [netlify.com](https://netlify.com).
2. Connect GitHub repository.
3. Build Command: `npm run build`, Publish Directory: `dist`.
4. Deploys instantly with free SSL (`.netlify.app`).

### Option C: GitHub Pages
1. Install gh-pages: `npm install --save-dev gh-pages`.
2. Add build script in `package.json`: `"deploy": "gh-pages -d dist"`.
3. Set base in `vite.config.js`: `base: '/project-vibrant-guitar/'`.
4. Run `npm run deploy`.

---

## 2. Database Options (Free Tier)

### Option A: Supabase (PostgreSQL - Recommended)
- **Features**: Realtime Database, Authentication, Row Level Security, Instant REST/GraphQL API.
- **Free Plan**: 500 MB database, 50,000 monthly active users, unlimited API requests.
- **Integration Setup**:
  1. Create a project at [supabase.com](https://supabase.com).
  2. Create tables for `inquiries`, `enrollments`, and `payments`.
  3. Install JS client: `npm install @supabase/supabase-js`.
  4. Pass `SUPABASE_URL` and `SUPABASE_ANON_KEY` via `.env`.

### Option B: Firebase Firestore (NoSQL)
- **Free Plan (Spark)**: 1 GB storage, 50K reads/day, 20K writes/day.
- **Integration**: Ideal for real-time enrollment alerts and WhatsApp automated trigger hooks.

### Option C: Standalone LocalStorage & Export (Included in v1.0.0)
- All enrollment data, demo requests, and simulated payment receipts are saved in client browser `localStorage` and can be exported as a `.JSON` or `.CSV` file directly by Iyer Sir without any backend overhead!

---

## 3. Social Media & Media Hosting
- **Instagram**: Embed official posts using Instagram OEmbed or public post IFrames.
- **YouTube**: Embed free playlist videos using native `<iframe>` embeds.
- **Images & Visual Assets**: Host custom academy photos on GitHub repository assets folder or free CDN (Cloudinary Free Plan / Unsplash API).
