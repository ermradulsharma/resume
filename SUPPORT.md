# 🛠️ Enterprise Support & SLAs

Our support ecosystem is designed to mirror professional enterprise standards, ensuring high-fidelity assistance for developers, recruiters, and open-source consumers interacting with Mradul Sharma's Portfolio and Skywalker Labs integrations.

---

## 1. Zero-Tier Support (Self-Service)
Before executing a support request, we mandate reviewing our structured documentation:
- Architecture flows and hydration limits: [ARCHITECTURE.md](ARCHITECTURE.md)
- Dependency graphs, rendering paths, and routing: [README.md](README.md)
- Frequently encountered Edge/Vercel deployment questions: [FAQ.md](FAQ.md)

---

## 2. Open-Source Tier Support
If adapting our React SPA templates or PHP packages, use GitHub functionality:
- **Bug Discovery:** If you trigger a render error or invalid JSON fetch, open an Issue using the `bug_report.md` template. Include your Node version, React stack traces, and browser environment.
- **Architectural Questions:** For questions regarding *why* a specific hook (`useSEO`) or styling paradigm was chosen, use GitHub Discussions.

> **Response SLA:** Community-tier support is handled asynchronously on a best-effort basis, typically prioritized during weekend maintainer sprints.

---

## 3. Professional & Enterprise Inquiries
For recruiters, hiring managers, or commercial clients seeking B2B full-stack engineering contracts:
- **Primary Contact Vector:** Direct outreach via the Contact portal on the live production environment (`https://mradulsharma.vercel.app/`).
- **Direct Email:** `mradulsharma786@gmail.com`
- **Response SLA:** Enterprise inquiries bypass the community queue and hold a **< 24 hour SLA**.

---

## 🚨 Vercel/Production Incidents
If the `mradulsharma.vercel.app` production Edge network is returning `5xx` status codes:
- Do not open a standard issue. Tag `@ermradulsharma` directly in a new Issue titled **`[P0 INFRASTRUCTURE OUTAGE]`**. The maintainer's alert telemetry will trigger immediately.
