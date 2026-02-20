# Segura® Landing Page Recreation (Astro + React)

This project is a structured recreation of the Segura® landing page, built from scratch using Astro with selective React islands for interactive components.

The goal is to reproduce the original layout and behavior while keeping clear boundaries for structure, localization, and component architecture.

## Tech stack

- **Astro** — Static-first rendering
- **React** (Islands) — Interactive navigation and UI controls (dropdowns, menu toggle, language switcher, top banner)
- **TypeScript**

## Localization

The project supports:

- **`/`** — English (en)
- **`/pt-br/`** — Portuguese (pt-br)

Homepage routes are separate for explicit routing; locale is driven by `src/content/en/` and `src/content/pt/` plus `src/lib/locale.ts`. Navigation, footer, and internal links are locale-aware.

## Project structure

- **`src/layouts/`** — Main layout and metadata
- **`src/components/`** — Reusable UI (navigation, sections, footer)
- **`src/content/`** — Locale-specific content (en, pt)
- **`src/pages/`** — Route entry points (`index.astro`, `pt-br/index.astro`, `404.astro`)
- **`src/lib/`** — Shared utilities (e.g. locale helpers)
- **`src/styles/vendor/`** — Original vendor CSS (unchanged)

Section-based components live under `src/components/sections/`. Hydration is limited to interactive parts (nav, dropdowns, toggles).

## SEO and metadata

Per locale:

- `<title>` and `<meta name="description">`
- Canonical URLs
- Open Graph tags
- Robots directives
- JSON-LD (e.g. Organization)

The **404 page**:

- Returns HTTP 404
- Uses `noindex, follow`
- Handles canonicals in a locale-aware way

## Scope and constraints

- **No marketing/analytics scripts** (GTM, GA, HubSpot, etc.) — focus is structural and visual fidelity.
- **No backend or dynamic data** — frontend-only recreation.
- Styling and interaction are governed by project rules in `.cursor/rules/` (styling, interaction, images, execution).

## Getting started

```bash
npm install
npm run dev
```
