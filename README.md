<p align="center">
  <img src="public/assets/images/logo.gif" alt="Mradul Sharma Logo" width="220" />
</p>

# 🚀 Mradul Sharma | Senior Full-Stack Architecture & Portfolio

[![License: MIT](https://img.shields.io/badge/license-MIT-blue.svg)](https://opensource.org/licenses/MIT)
[![React Version](https://img.shields.io/badge/React-19.2.3-61DAFB.svg?logo=react&logoColor=white)](https://reactjs.org/)
[![Node Environment](https://img.shields.io/badge/Node.js-v18%2B-339933.svg?logo=node.js&logoColor=white)](https://nodejs.org/)
[![Vercel Deployment](https://img.shields.io/badge/Deployed_on-Vercel-black.svg?logo=vercel&logoColor=white)](https://vercel.com)
[![Code Quality](https://img.shields.io/badge/Code_Quality-ESLint-4B32C3.svg?logo=eslint&logoColor=white)](https://eslint.org/)
[![Analytics](https://img.shields.io/badge/Analytics-GA4-F4B400.svg?logo=googleanalytics&logoColor=white)](https://analytics.google.com/)

Welcome to the open-source repository of **Mradul Sharma's Professional Portfolio and Technical Hub**. 

This repository operates as a dual-purpose platform: it is a highly optimized, headless **Single Page Application (SPA)** demonstrating modern frontend capabilities, and simultaneously serves as the centralized nexus for my open-source PHP/Laravel package ecosystem.

Built from the ground up prioritizing **performance, accessibility, dynamic SEO**, and **modular scalability**, this codebase is a reflection of my enterprise engineering standards.

---

## 🏗️ Technical Masterclass: Under the Hood

This project transcends a standard template. It is engineered to demonstrate production-grade architectural patterns:

### 1. ⚛️ Advanced React 19 Ecosystem
- **Concurrent Feature Adoption:** Leveraging React 19 methodologies, minimizing re-renders via strict component isolation and memoization strategies.
- **Routing & Code Splitting:** `react-router-dom` (v7) implements dynamic tree rendering. Routes are heavily code-split using `React.lazy()` and `Suspense` with highly optimized fallback skeleton loaders.
- **Custom Hook Paradigms:** Dedicated hooks, such as `useSEO()`, abstract complex DOM manipulations, dynamically injecting localized `<meta>` arrays and OpenGraph schemas via `react-helmet-async`.

### 2. ⚡ Headless Data Architecture & CMS
- **JSON-Driven Hydration:** Entire modules (Experiences, Open Source Packages, Services, FAQs) are loosely coupled from the UI, hydrated synchronously via static `src/components/database/*.json` configurations at runtime.
- **Skywalker Labs Integrations:** Automatically parses and displays metadata (including GitHub OG images) for over 14 bespoke Laravel vendor packages directly sourced from live composer definitions.

### 3. 🛡️ Absolute Performance & Security Optimization
- **Zero-Bloat Guarantee:** The codebase has been subjected to rigorous static analysis (via `depcheck`, `eslint`, and manual dependency graph mapping) to maintain a zero-orphan, zero-dead-code repository state.
- **Optimized Asset Delivery:** Static assets are served over Edge networks via Vercel, utilizing WebP compressions and asynchronous loading attributes `(loading="lazy")` out of the box.

### 4. 🎨 Design System & Micro-Interactions
- **Glassmorphic & Semantic UI:** Combines `react-bootstrap` grids with vanilla CSS semantic tokens (`var(--surface-color)`).
- **Theme Propagation:** Context-driven Light/Dark mode toggling propagated instantly across all components down to internal Chart.js canvas renderers and GitHub contribution grids.

---

## 🌐 Holistic Engineering Stack (Beyond this Repo)

While this repository focuses on the React implementation, my daily engineering ecosystem involves deep, full-stack architectures:

- **Backend / APIs:** PHP 8+, `Laravel`, `Node.js` (Express/NestJS)
- **Databases:** `PostgreSQL`, `MySQL`, `Redis`, `MongoDB`
- **Cloud Infrastructure:** `AWS` (EC2, S3, RDS, Lambda), `Docker`
- **DevOps & Automations:** `GitHub Actions`, `GitLab CI/CD`, Linux Server Admin

*(For a deeper dive into the exact file-by-file configuration, see [ARCHITECTURE.md](ARCHITECTURE.md))*

---

## 🛠️ Local Development & Deployment

### Environment Prerequisites
- Node.js `^18.17.0` (LTS recommended)
- npm `^9.0.0` or Yarn

### Initialization Sequence

```bash
# 1. Clone the repository
git clone https://github.com/ermradulsharma/portfolio.git
cd portfolio

# 2. Resolve dependencies (frozen lockfile recommended for perfect replication)
npm ci

# 3. Ignite the development server (Hot Module Replacement enabled)
npm start
```

Your localized instance will be served at `http://localhost:3000`.

### Production Build Pipeline

```bash
npm run build
```
The React-Scripts Webpack engine will compile, minify, and chunk the application into the `/build` directory, producing optimized static hashed files ready for instantaneous CDN deployment.

---

## 🤝 Community & Support

This repository strictly adheres to open-source community standards. I actively welcome technical discussions, peer code reviews, and structural forks.

- **Found a bug?** Review our [Security Policy](SECURITY.md) for critical leaks, or open an issue based on the parameters in [SUPPORT.md](SUPPORT.md).
- **Want to contribute?** We have specific guidelines! Please read [CONTRIBUTING.md](CONTRIBUTING.md) and our [Code of Conduct](CODE_OF_CONDUCT.md).
- **Future Plans?** Our trajectory is openly documented in [ROADMAP.md](ROADMAP.md).

---

## 👨‍💻 Primary Architect

### Mradul Sharma
*Senior Full-Stack Developer • Cloud Architect • Open-Source Advocate*

<p align="left">
<a href="https://linkedin.com/in/mradulsharma"><img src="https://img.shields.io/badge/LinkedIn-Connect-0077B5?style=for-the-badge&logo=linkedin" alt="LinkedIn" /></a>
<a href="https://github.com/ermradulsharma"><img src="https://img.shields.io/badge/GitHub-Follow-181717?style=for-the-badge&logo=github" alt="GitHub" /></a>
<a href="https://www.upwork.com/freelancers/~01e91f0a0ab6d99a4d"><img src="https://img.shields.io/badge/Upwork-Hire_Me-6FDA44?style=for-the-badge&logo=Upwork" alt="Upwork" /></a>
</p>

### ⚖️ Licensing
Distributed under the [MIT License](LICENSE.md). See `LICENSE.md` for more information.
