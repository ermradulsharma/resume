# 🛑 STRICT AGENT RULES FOR THIS WORKSPACE 🛑
**CRITICAL**: The AI agent MUST strictly adhere to these Senior Full Stack Developer standards. Any deviation is unacceptable.

## 🏗️ Architecture & Core Principles
- **Component-Based & Modular**: Build small, independent, highly reusable UI components. Group files by feature (`src/features/auth/`).
- **Separation of Concerns (SoC)**: Strictly separate UI (presentational), Business Logic (hooks), and Data Fetching.
- **No Monoliths**: Max file size ~150-200 lines. Proactively break down large components.
- **DRY (Don't Repeat Yourself)**: Zero code duplication. Extract reusable utilities and hooks.
- **SOLID & ACID**: Adhere to SOLID for scalable code and ACID properties for backend/data integrity.

## 📏 Code Quality & Standards
- **Pure JavaScript**: This codebase is strictly JavaScript. Do NOT use TypeScript. Use JSDoc only if complex data structures require clarity.
- **Formatting**: Strictly follow ESLint & Prettier. No formatting bypasses.
- **Naming**: `PascalCase` (Components/Interfaces), `camelCase` (Vars/Functions/Hooks), `UPPER_SNAKE_CASE` (Constants).

## 🔄 State & Data Fetching
- **Server State**: Use React Query / RTK Query for API calls and caching.
- **Client State**: Use Context API / Zustand. ZERO deep prop drilling.
- **Immutability**: NEVER mutate state directly. Always use setter functions.

## ⚡ Performance & Security
- **Optimization**: Route-level code splitting (`React.lazy`), strategic memoization (`useMemo`, `useCallback`), optimized images.
- **Security**: NEVER hardcode secrets (use `.env`). Sanitize all user inputs to prevent XSS.

## 🚨 Error Handling & a11y
- **Graceful Failures**: Global & Feature-level Error Boundaries. Always `try/catch` async operations.
- **Accessibility & SEO**: Semantic HTML5, `aria-labels`, `alt` tags, proper heading hierarchies (`h1-h6`).

## 🎨 Neumorphism Design Rules
- **Neumorphic Aesthetic**: Build soft, tactile, 3D extruded UI components with dual directional light and dark shadows matching the base surface background.
- **Dual Shadow Standards**:
  - **Extruded / Convex (Cards, Buttons, Badges)**: `box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light);`
  - **Inset / Pressed (Inputs, Containers, Active States)**: `box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light);`
- **Soft Geometry**: Use rounded corners (`border-radius: 12px` to `24px`) with subtle surface gradients. Avoid harsh border outlines; use soft semi-transparent highlights instead.
- **Micro-Interactions**: Use smooth state transitions (`transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1)`) shifting from convex to inset on hover/active.
- **Contrast & Accessibility**: Enforce strict WCAG AA contrast (`4.5:1` ratio minimum) for text and interactive controls over soft neumorphic surfaces.

## 📝 Agent Behavior Constraints
- **Propose Major Changes**: Always propose architecture/package changes before execution.
- **Token Efficiency**: Write concise code. Only modify what is necessary.
- **No Destructive Refactors**: Do not delete core files without explicit user confirmation.

