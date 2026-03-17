# 🕵️ Technical FAQ & Architectural Decisions

This document addresses the most prevalent technical inquiries surrounding the engineering decisions of Mradul Sharma's Portfolio.

---

### Q1: Why use a Headless JSON-driven approach instead of a standard RDBMS (SQL) backend?
**A:** This repository represents the Frontend Edge Client. Coupling a heavy database (like PostgreSQL/Laravel) directly to a portfolio SPA introduces unnecessary latency, ORM overhead, and complicated deployment vectors. By hydrating components via static `JSON` payloads:
1. **Performance:** Webpack bundles the JSON, allowing Vercel's Edge network to serve the data globally with zero database query latency.
2. **Security:** Eliminates SQL injection vectors entirely.
3. **Reliability:** The site boasts 100% uptime regardless of backend server status.

### Q2: How does the Skywalker Labs package integration work without a dynamic API?
**A:** We utilize custom pre-build Node.js scripts (`scripts/fetchPackages.js`). During the GitHub Actions CI/CD cycle, these scripts parse the live `composer.json` metadata of our Laravel packages, generate physical OpenGraph (OG) image URLs from GitHub's dynamic rendering engine, and write the deterministic state into `src/components/database/portfolio.json` before Webpack compiles. 

### Q3: Why React Router v7 over Next.js App Router?
**A:** Next.js provides excellent Server-Side Rendering (SSR), but for a portfolio where data mutation is low and extreme interactive client-side animations (like custom DOM Canvas charts and AOS bindings) are paramount, a classic Client-Side Rendered (CSR) SPA guarantees smoother imperative DOM control without React Server Component (RSC) boundary conflicts. SEO is surgically managed via `react-helmet-async`.

### Q4: I noticed the removal of `react-scripts`. What is powering the Webpack dev server?
**A:** (Version 0.4.x Update) The `react-scripts` bundle inherently drags legacy, vulnerable sub-dependencies (e.g., outdated `ajv` or Babel configs). We have implemented aggressive dependency deduplication. Our Webpack compilation path is now strictly guarded. If you clone the repo, ensure you run `npm ci` strictly on Node `18.x+` to prevent local audit violations.

### Q5: How is the Light/Dark mode engineered to prevent React re-render thrashing?
**A:** Instead of passing theme states down a massive prop drilling chain or forcing React Context to trigger global Virtual DOM diffs on every toggle, our `ThemeContext` simply mounts a single `data-theme="dark"` attribute to the native `<html>` document root. The entire application responds via highly optimized CSS natively utilizing `var(--color-background)` logic. React re-renders zero component trees during a theme switch.
