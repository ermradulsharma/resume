# 🎨 STRICT DESIGN & UI/UX RULES 🎨

> **CRITICAL — MANDATORY COMPLIANCE**: The AI agent MUST follow these rules on every UI-related task. Existing visual output is protected by default; any exception must be limited in scope and documented.

### Rule precedence
When rules appear to conflict, apply them in this order:
1. Explicit user requirements.
2. Preserve the existing visual design and behavior.
3. Accessibility, semantic correctness, and security.
4. Responsiveness and performance.
5. Maintainability and design-system improvements.

A refactor must not silently become a redesign. If a change can alter rendered output, keep the existing output unless the user explicitly authorizes the visual change.

---

## 🔴 RULE #0 — PROTECT THE CURRENT DESIGN (HIGHEST PRIORITY)
- **DO NOT change the existing visual design, layout, color scheme, typography, or spacing of any page or component UNLESS the user explicitly asks for a design change.**
- When fixing bugs, refactoring code, or changing logic, preserve existing CSS classes, inline styles, and class names unless a technical change is required; if required, preserve the rendered result.
- When adding new components, match the visual language (colors, border-radius, shadows, font-size) already present in the codebase.
- Before touching CSS or `className`, determine whether the rendered output can change. If it can, use an equivalent implementation or request explicit approval. Accessibility and functional bug fixes may change output only as much as necessary to correct the issue.
- Do not perform opportunistic visual cleanup, token migration, spacing normalization, or animation upgrades during unrelated work.

---

## 1. 🏗️ Design System & CSS Architecture
- **Design Tokens as Source of Truth**: New or intentionally refactored styles should use the project's existing CSS variables. Do not migrate existing hardcoded values during a bug fix or unrelated task if migration could alter the rendered output. Never invent token names without checking the current theme implementation.
- **No Specificity Wars**: Keep new selectors flat where practical. Avoid `!important` unless overriding a third-party library or a documented legacy rule.
- **Responsive Preservation**: Preserve existing breakpoint behavior. For new responsive work, prefer mobile-first rules and fluid values (`clamp()`, `min()`, `max()`) without changing established desktop or mobile appearance.
- **Universal Device Responsiveness**: Every new or modified UI must remain usable and visually coherent across mobile phones, tablets, laptops, desktops, wide screens, portrait and landscape orientations, touch devices, and browser zoom up to 200%. Content, controls, text, media, grids, and navigation must not overlap, clip, cause unintended horizontal scrolling, or become unreachable. Add only the minimum responsive adjustments required for existing components so their established visual design remains unchanged at already-supported viewport sizes.
- **Zero Inline Styles for Layout**: Inline styles (`style={{ }}`) are limited to dynamic runtime values (e.g., theme variables, chart colors). Static styling belongs in a CSS file or class; do not rewrite existing inline styles unless the task requires it.
- **Scoped CSS**: New component styles should be co-located in the component's `.css` file. Do not introduce global side effects.

## 2. 👁️ Visual Hierarchy & Aesthetics
- **Whitespace is Non-Negotiable for New UI**: Use generous, consistent spacing for new components, but preserve all existing spacing unless a visual change is requested or a bug requires it.
- **Typography Rules**:
  - Max 2-3 font weights per page: Regular (400), Semi-bold (600), Bold (700).
  - Body line-height: `1.6` – `1.7`. Heading line-height: `1.1` – `1.3`.
  - Preserve the existing project font stack. Do not add or switch to a Google Font solely to satisfy this document; prefer an already approved or self-hosted font when a font change is explicitly requested.
- **Color Usage**:
  - Adhere strictly to the established palette: Primary, Secondary, Background, Surface, Text variants.
  - WCAG AA contrast ratio is mandatory: `4.5:1` for body text, `3:1` for large text.
  - Avoid saturated or jarring colors. Prefer harmonious, curated palettes.
- **Shadows & Depth (Neumorphism Standard)**:
  - **Extruded Convex Surfaces**: Soft dual shadows (`box-shadow: 8px 8px 16px var(--shadow-dark), -8px -8px 16px var(--shadow-light)`) matching base surface.
  - **Inset / Pressed Surfaces**: Pressed states use inner dual shadows (`box-shadow: inset 4px 4px 8px var(--shadow-dark), inset -4px -4px 8px var(--shadow-light)`).
  - **Soft Radius & Boundaries**: Prefer rounded corners (`12px`-`24px`) with soft surface contrast instead of harsh borders.

## 3. ⚡ Micro-Interactions & Performance
- **Every Interactive Element Needs States**: New or modified interactive elements need usable `:hover`, `:focus-visible`, and `:active` states where the state is supported by the device and interaction. Preserve existing states when fixing unrelated logic.
- **Animation Budget**:
  - Duration: 150ms (instant feedback) to 300ms (panel transitions). Never exceed 500ms for UI elements.
  - Prefer animating `transform` and `opacity`; never animate layout properties such as `width`, `height`, `top`, or `left` for routine UI transitions.
  - Small color transitions may be used for controls when consistent with the existing design and when they do not cause layout changes.
  - Use `will-change: transform` only when needed. Respect `prefers-reduced-motion: reduce` for new animations.
- **Loading States**: Preserve the existing loading pattern. Use skeleton loaders for content-heavy waits and spinners for inline or overlay states. Never introduce a blank white/dark page for a loading or error state.
- **Perceived Performance**: Use optimistic UI only for reversible, low-risk actions. Avoid blocking renders without changing established loading behavior unnecessarily.

## 4. ♿ Accessibility (A11Y) — Zero Tolerance
- **Semantic HTML is Law**: `<button>` for actions, `<a>` for navigation, `<h1>–<h6>` in proper order, landmarks (`<main>`, `<nav>`, `<aside>`).
- **Keyboard Navigation**: Every interactive element MUST be reachable via `Tab`. A custom `outline: none` is ONLY allowed if replaced with a clearly visible `:focus-visible` custom ring.
- **ARIA Attributes**: `aria-label` for icon-only buttons, `aria-expanded` for dropdowns/accordions, `aria-hidden="true"` for decorative icons.
- **Alt Text**: Every `<img>` MUST have a meaningful, descriptive `alt` attribute. Decorative images use `alt=""`.

## 5. 🧩 Component Defensiveness & Reusability
- **Overflow-Safe**: Long text must remain readable. Use `overflow-wrap: break-word` for body content; use ellipsis with `overflow: hidden; white-space: nowrap` only for intentionally single-line labels, buttons, or metadata. Do not truncate descriptions, articles, headings, or accessible names.
- **No Magic Numbers for New UI**: New padding/margin values should use existing CSS variables or the established token scale. Preserve existing values during unrelated fixes.
- **Adaptable Layout**: Avoid new fixed widths that break inside flex/grid parents. Fixed dimensions remain valid for icons, avatars, badges, and intentionally constrained visual elements when they match the existing layout.

## 6. 🌓 Theming & Dark Mode
- **CSS Variable Override Pattern**: New theme-sensitive values must use the project's existing CSS variables and theme scopes. Do not rename or migrate existing values during unrelated work.
- **No Pure Black/White for New Theme Values**: Prefer the project's established near-black and off-white values. Preserve existing pure black/white values unless a theme redesign is explicitly requested.
- **Dark Mode Images**: Apply image dimming only when the asset is visibly too bright in dark mode; do not apply it blindly to logos, screenshots, transparent assets, or already-dark images.
- **Test Every Modified Component in Both Modes**: Verify changed UI in both light and dark mode, while preserving the current appearance of unmodified states.

## 7. 🚫 Absolute Prohibitions
- **NEVER** remove existing CSS classes or className props without explicit user instruction.
- **NEVER** change spacing (padding/margin) on existing components unless it's a bug or user-requested.
- **NEVER** switch fonts or colors to a completely different value without user approval.
- **NEVER** add animations to elements that already have none — unless user asks for it.
- **NEVER** use `display: none` to hide accessibility-critical content — use `aria-hidden` or `visually-hidden` class instead.
- **NEVER** override third-party library styles with broad selectors (e.g., `.modal * { }`) — scope overrides tightly.

---

## 8. ✅ Change-Safety Checklist

Before completing a UI task:
- Confirm whether the request is functional, accessibility-related, responsive, or visual.
- Record the affected components and preserve unrelated selectors, class names, tokens, spacing, and breakpoints.
- Compare light and dark mode behavior for every modified component.
- Verify modified UI at representative mobile, tablet, desktop, wide-screen, portrait, and landscape viewports, plus browser zoom up to 200%; confirm there is no overlap, clipping, unintended horizontal scrolling, or unreachable content.
- Verify keyboard access, visible focus, semantic elements, image alternatives, and reduced-motion behavior where applicable.
- Run the project's available lint, build, and test commands when code was changed.
- If a visual change is unavoidable for correctness, keep it minimal and explain the affected output in the change summary.

*Every React component, CSS file, and JSX attribute touching UI MUST be evaluated against these rules. When in doubt, preserve the existing design; do not redesign by assumption.*
