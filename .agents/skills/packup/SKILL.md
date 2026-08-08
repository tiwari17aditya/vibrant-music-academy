---
name: packup
description: Perform end-of-session packup workflow. Automatically updates documentation, generates session summary logs in docs/session_summaries/session_summary_YYYY-MM-DD.md, updates docs files, and performs git add, commit, and push to GitHub.
---

# Packup Workflow Skill

When the user requests **"packup"** or triggers the packup command:

## 1. Documentation & Log Updates
- Update all relevant documentation in `docs/` (`docs/VERSION.md`, `docs/TECH_STACK.md`, `docs/logs/YYYY-MM/logs_YYYY-MM-DD.md`, `README.md`).
- Generate a session summary document under `docs/session_summaries/session_summary_YYYY-MM-DD.md` detailing:
  - Total changes made during the session (both agent and user modifications)
  - Key technical achievements and component updates
  - Verification & build status (`npm run build`)
  - Git commit & push metrics

## 2. Git & GitHub Operations
Execute the following commands:
1. `git add .`
2. `git commit -m "packup: Session summary update for YYYY-MM-DD"`
3. `git push origin main`

## 3. Final Session Report
Synthesize a clear summary confirming the build status, updated documentation files, session log location, and successful GitHub push.
