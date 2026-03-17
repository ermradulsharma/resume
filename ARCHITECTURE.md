# Architecture Overview

This document provides a high-level overview of the architecture and technical stack for Mradul Sharma's Portfolio application.

## 1. Frontend Stack
- **Framework:** React.js (v19.x) - Single Page Application (SPA).
- **Styling:** Vanilla CSS, styled-components, and React-Bootstrap (v5.x).
- **Icons:** React-Icons (Fa, Bs, Bi) and Boxicons.
- **Routing:** `react-router-dom` (v7.x) for dynamic client-side routing.
- **Animations:** AOS (Animate On Scroll) and pure CSS keyframes.
- **Charts/Visuals:** Chart.js, FullCalendar, and GitHub contribution graphs.

## 2. Data Management
- **Static Configuration:** Local JSON files (`database/*.json`) drive component rendering (e.g., packages, about info, experiences).
- **State Management:** React Context API (e.g., `ThemeContext` for Dark/Light mode) and standard React Hooks (`useState`, `useEffect`).

## 3. SEO and Analytics
- **SEO Hooks:** Custom `useSEO.js` hook injecting OpenGraph tags and metadata dynamically via `react-helmet-async`.
- **Analytics:** Google Analytics 4 (`react-ga4`) initialized globally in `App.jsx` for engagement tracking without compromising privacy.

## 4. CI/CD & Deployment
- **Platform:** Vercel (Production) / GitHub Pages.
- **Pipeline:** GitHub Actions (`.github/workflows`) handles linting, testing, and automated PR checks.
- **Build Tool:** Webpack via `react-scripts`.

## 5. File Structure
```
src/
├── assets/         # Images, PDFs, and static static binaries
├── components/     # Reusable UI building blocks (common, database, frontend)
├── context/        # React context providers (Theme)
├── routes/         # Routing definitions and lazy-loaded views
├── utils/          # Helper modules (Analytics, Formatting)
└── pages/          # High-level route views (About, Contact, Packages)
```

## 6. Code Quality
- Enforced code style using ESLint.
- The project follows a strict separation of concerns, keeping presentation UI separate from business logic / data schemas.
