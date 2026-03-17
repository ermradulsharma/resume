# 🏛️ Open Source Project Governance

This document outlines the formalized operational governance model underpinning Mradul Sharma's Portfolio repository and the associated Skywalker Labs open-source PHP/Laravel integrations.

---

## 1. Leadership Structure & Mantle

### Project Dictator & Lead Architect
- **Name:** Mradul Sharma ([@ermradulsharma](https://github.com/ermradulsharma))
- **Role:** Sole BDFL (Benevolent Dictator for Life) & Core Maintainer.
- **Authority:** Retains absolute veto power over all architectural patterns, frontend UI designs, and CI/CD integrations merged into the `main` ecosystem.
- **Responsibilities:** 
  - Release management and SemVer alignments.
  - Final PR reviews and vulnerability triage.
  - Vercel Edge compute deployment approvals.

### Community Contributors
- **Role:** General Open-Source Community.
- **Authority:** Empowered to flag issues, suggest performance optimizations, and open non-breaking feature Pull Requests.
- **Elevation Path:** Consistent, high-fidelity PRs successfully merged over multiple quarters may result in an invitation to join the "Trusted Maintainers" board (future consideration).

---

## 2. Iterative Decision-Making Flow

We employ a "Consensus-Oriented, Maintainer-Decided" philosophy tailored for single-maintainer enterprise architectures:

1. **Ideation Phase:** All major architectural mutations (e.g., migrating from React Router v7 to Next.js App Router) must begin as an RFC (Request for Comments) inside the GitHub Discussions/Issues tab.
2. **Community Polling:** The issue remains open for a minimum of 72 hours for community stress-testing and feedback.
3. **Execution Phase:** If approved by the Lead Architect, the feature moves into the `<feature-branch>` development cycle.
4. **Integration Phase:** Code must pass automated GH Action linters (`eslint`, `depcheck`, React Testing Library bounds) before manual Maintainer merge.

---

## 3. Disagreement & Escalation

Should a disagreement arise regarding a localized styling implementation, performance metric, or library integration choice:
- **Technical resolution:** Data drives the outcome. The faction proving a statically better performance metric (e.g., lower Lighthouse TTI, smaller bundle size) generally wins.
- **Final Binding Vector:** Under all circumstances, the Lead Architect's decision is final and non-negotiable within the scope of this repository to prevent endless bikeshedding.

---

## 4. Code of Conduct Enforcement

Governance does not exist independently of community safety. Code reviews and discussions are bound by our [Code of Conduct](CODE_OF_CONDUCT.md). 

Violations of this construct by any contributor will result in immediate organizational blocking.
