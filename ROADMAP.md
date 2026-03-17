# 🗺️ Engineering Architecture Roadmap

This strategic roadmap outlines the future evolutionary milestones for Mradul Sharma's Portfolio repository. It focuses on elevating the stack from an SPA to a highly federated, Edge-computed Enterprise configuration.

---

## 🟢 [Phase 1] Q2 2026: Frontend Hardening (Current)
- [x] **Depcheck & Dead Code Eradication:** Complete auditing and removal of all monolithic Dashboard routes, optimizing Webpack bundle size.
- [x] **Headless Package CI:** Node script integration to automatically crawl Laravel `composer.json` files and serialize outputs into SPA JSON states.
- [ ] **E2E Playwright Integration:** Implementing robust End-to-End assertions testing routing boundaries and Theme injection states across WebKit, Firefox, and Chromium.

## 🟡 [Phase 2] Q3 2026: Next-Gen Capabilities
- **Web Workers & Canvas Offloading:** Migrate heavy Chart.js rendering and GitHub Contribution calculations off the main UI thread via Web Workers to hit perfect `100` Lighthouse Performance scores.
- **RSC (React Server Components) Migration:** Incremental adoption of Next.js 15+ App Routing. Transitioning `.json` database hydration from client-side `useEffect` over to pure Server-Side fetches for `0ms` Client-side JS latency.
- **WASM (WebAssembly) Integration:** Prototype compiling a core PHP/Laravel string parsing algorithm into Rust/WASM, enabling the frontend to execute Skywalker Labs logic directly in the browser at near-native speeds.

## 🔴 [Phase 3] Q4 2026+: Infrastructure Edge
- **Global Edge Caching:** Distribute JSON payloads via Redis Global Datastores mounted on Vercel Edge Functions, enabling sub-`10ms` dynamic payload resolution anywhere on earth.
- **Micro-Frontend Orchestration:** Decouple the "Open Source Packages" UI layer into an isolated micro-frontend deployed via Module Federation (Webpack 5), allowing the underlying Laravel backend team to deploy UI changes independently of the main portfolio build.

---
*Note: Architectural vectors are subject to shift based on the evolution of the React ecosystem and business logic requirements.*
