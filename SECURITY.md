# 🛡️ Enterprise Security Policy

As a platform showcasing Senior Full-Stack architecture and distributing live PHP/Laravel vendor packages, we maintain a **Zero-Trust Security Posture**. 

The security of this repository, its dependent open-source libraries, and the underlying deployment pipeline is our absolute highest priority.

---

## 📅 Supported Versions

We strictly backport security patches to the current stable architecture only.

| Version Pipeline | Node Environment | React Version | Status |
| :--- | :--- | :--- | :--- |
| **0.4.x (Current)** | `>=18.17` | `19.x+` | 🟢 Supported (Active Patching) |
| **< 0.3.x (Legacy Admin)** | `<18.0` | `<18.x` | 🔴 Deprecated (Unsupported) |

---

## 🚨 Responsible Disclosure Process (Bug Bounty)

If you are a security researcher, penetration tester, or developer who has discovered a vulnerability within:
1. The React SPA architecture (e.g., prototype pollution, DOM XSS, SSRF).
2. The GitHub Actions CI/CD pipeline (e.g., credential leaking, artifact poisoning).
3. The integrated **Skywalker Labs** PHP/Laravel packages.

**Do NOT open a public Issue or Pull Request.** Publicly disclosing vulnerabilities structurally compromises the integrity of downstream users relying on Mradul Sharma's open-source packages.

### Action Plan:
1. Immediately email **Mradul Sharma** directly at: `mradulsharma786@gmail.com`
2. Encrypt your payload if necessary, and use the subject line: `[URGENT SECURITY DISCLOSURE] - <Vulnerability Type>`
3. Provide a reliable Proof of Concept (PoC) script or detailed reproduction steps to immediately trigger the exploit vector.

---

## ⏳ SLA & Remediation Timeline
- **Triage:** We assure an initial acknowledgment and classification within **24 hours**.
- **Patch Development:** High-severity (CVSS >7.0) structural flaws will receive a hotfix patch merged to the `main` branch under **48 hours**.
- **Credit:** With your permission, researchers supplying valid, reproducible zero-day exploits will be formally acknowledged in our `CHANGELOG.md` Hall of Fame for the corresponding CVE.

---

## 🔒 Automated Vulnerability Scanning
This repository is aggressively monitored via automated SAST tools. 
- `Dependabot` operates on a weekly cadence for all Node modules. 
- GitHub Advanced Security scans push payloads for accidentally committed AWS/Vercel/Database secrets in real-time.
