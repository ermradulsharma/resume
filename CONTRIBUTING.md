# 🤝 Contributing to Mradul Sharma's Portfolio & Packages

We actively welcome contributions from the open-source community to improve this React 19 SPA, the underlying JSON schema structures, and the interconnected Skywalker Labs Laravel packages.

This repository strictly adheres to Enterprise-grade Pull Request cycles, CI/CD validations, and semantic versioning.

---

## 🏗️ Architecture Familiarity Requirement

Before contributing, please review the [ARCHITECTURE.md](ARCHITECTURE.md) document. You must understand the **Headless JSON-Driven** approach. We do *not* accept PRs attempting to introduce heavy database layers (e.g., Firebase, Supabase) into this specific frontend repository.

---

## 🛠️ Local Environment Setup

1. **Fork & Clone:**
   ```bash
   git clone https://github.com/YOUR_USERNAME/portfolio.git
   cd portfolio
   ```

2. **Strict Node Pipeline Installation:**
   Requires Node.js `^18.17.0`. Use `npm ci` instead of `npm install` to enforce the frozen `package-lock.json` dependency tree.
   ```bash
   npm ci
   ```

3. **Start Development Engine:**
   ```bash
   npm start
   ```

---

## 📦 Submission Guidelines: The PR Lifecycle

### 1. Branching Strategy
We follow the **GitFlow** methodology. Do not push directly to `main`.
- Features: `feature/your-feature-name`
- Bug Fixes: `fix/ticket-id-or-description`
- Documentation: `docs/document-name`

### 2. Commit Message Standards (Conventional Commits)
Commits must follow the Conventional Commits specification. This allows automated `CHANGELOG.md` generation.
- ✅ `feat(ui): add progressive loading to package cards`
- ✅ `fix(seo): correct OpenGraph injection logic in useSEO hook`
- ❌ `added loading` or `fixed bug`

### 3. Verification Standards (Pre-PR Checklist)
Before opening a Pull Request against the `main` branch, ensure:
1. **Zero ESLint Warnings:** Run `npm run lint` and resolve all AST errors.
2. **Zero Dead Code:** Run `npx depcheck` to verify no orphaned modules were introduced.
3. **No Console Logs:** Production builds will fail if `console.log` statements are detected in UI components.
4. **Responsive Integrity:** Verify Bootstrap 5 grid behavior down to `320px` viewport widths.

### 4. Code Review & Merging
Once submitted:
- The GitHub Actions CI/CD pipeline will automatically build and lint your branch.
- Maintainers (Mradul Sharma) will review the code for architectural alignment.
- Approved features will be merged via **Squash and Merge** to maintain a clean linear commit history on `main`.

---

## 🐛 Defect Reporting (Issues)

If you discover a structural bug, please open a standard Issue using the `.github/ISSUE_TEMPLATE` schemas. 
> 🚨 **Security Vulnerability?** Do NOT open a public issue. See our [Security Policy](SECURITY.md) for direct disclosure instructions.

Thank you for elevating the quality of this open-source architecture!
