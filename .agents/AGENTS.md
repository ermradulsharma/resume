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

## 📝 Agent Behavior Constraints
- **Propose Major Changes**: Always propose architecture/package changes before execution.
- **Token Efficiency**: Write concise code. Only modify what is necessary.
- **No Destructive Refactors**: Do not delete core files without explicit user confirmation.
