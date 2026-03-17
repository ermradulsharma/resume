# 📊 Advanced Telemetry & Analytics

This repository tracks production usage anonymously to guide future architectural iterations, utilizing heavily optimized loading strategies to prevent analytics scripts from blocking the React main thread.

---

## 🟢 1. Google Analytics 4 (GA4) Hook Injection

We utilize `react-ga4` to handle client-side Single Page Application (SPA) routing telemetry without triggering full TCP document reloads.

### Implementation Vector
The tracker is conditionally initialized in `src/App.js` and decoupled using pure `useEffect` bounds, listening strictly to the React Router DOM `location.pathname` mutations.
- **Dependency:** `react-ga4` 
- **Initialization:** Invoked once during the root `<BrowserRouter>` mount path.
- **Latency Impact:** `0ms` Main-Thread Blocking Time (Deferment implemented).

---

## 🔒 2. Data Privacy & Hardening (GDPR / CCPA)

We strictly comply with minimal telemetry policies. The core infrastructure relies on Headless JSON, not active session tracking:
- **Zero Third-Party Cookies:** We explicitly disable User-ID tracing.
- **IP Anonymization:** Raw IP hashes are stripped at the Vercel Edge node prior to reaching the GA4 container.
- **Consent:** The SPA inherently executes in a stateless capacity and relies solely on aggregate (group) data, rather than PII (Personally Identifiable Information).

---

## 🛠️ Modifying the Telemetry Target

If forking this repository, you must inject your own `Measurement ID`.

1. Add your Vercel or local `.env` variable:
   ```env
   REACT_APP_GA_MEASUREMENT_ID="G-XXXXXXXXXX"
   ```
2. Re-trigger the Webpack build (`npm run build`).

*Never hardcode Google Analytics strings into the active DOM.*
