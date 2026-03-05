# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vendel Homepage — landing page, documentation, and design system for the Vendel SMS gateway platform. Static site built with Astro.

## Commands

```bash
npm install                  # Install dependencies
npm run dev                  # Dev server at localhost:4321
npm run build                # Production build to dist/
npm run preview              # Preview production build
```

## Architecture

- **Framework**: Astro 5 (static site generation, zero JS by default)
- **Styling**: Tailwind CSS v4 (CSS-first config via `@theme` in `global.css`)
- **Typography plugin**: `@tailwindcss/typography` for prose styling in docs
- **Code highlighting**: Shiki with custom `vendel-dark` theme (`src/lib/code-theme.ts`)
- **LLM docs**: `@4hse/astro-llms-txt` generates `/llms.txt` for LLM-friendly content

### Key directories

- `src/pages/` — File-based routing (landing, docs, design system)
- `src/components/` — Astro components (Header, Hero, Features, CodeBlock, etc.)
- `src/layouts/` — Layout.astro (landing), DocsLayout.astro (docs pages)
- `src/styles/global.css` — All design tokens and component styles
- `src/lib/code-theme.ts` — Shiki theme matching the mint palette
- `public/` — Static assets (favicon.svg)

### Pages

| Route | File |
|-------|------|
| `/` | `src/pages/index.astro` |
| `/design-system` | `src/pages/design-system.astro` |
| `/docs` | `src/pages/docs/index.astro` |
| `/docs/*` | Individual doc pages in `src/pages/docs/` |

## Design System

**`src/pages/design-system.astro`** is the single source of truth for the Vendel visual language. It documents:

- Colors (accent, background, text, neutral scale, code syntax)
- Typography (Inter, Libre Baskerville, JetBrains Mono)
- Logo (wordmark construction, icon, light/dark variants)
- Buttons (primary, secondary, link)
- Cards (default, featured, muted)
- Code blocks (vendel-dark Shiki theme, filename headers)
- Alerts (info, warning)
- Patterns (dot pattern, accent dots/circles, dark sections)
- Design tokens (all CSS custom properties, Google Fonts import, shadcn mapping)

**All design tokens live in `src/styles/global.css`** inside the `@theme` block. This file is the canonical definition — the dashboard project (`../vendel/frontend/src/index.css`) maps these same values to shadcn/ui semantic variables.

### When changing styles

1. Update `src/styles/global.css` (the source of truth)
2. Update `src/pages/design-system.astro` to reflect the change
3. Propagate to the dashboard: update `../vendel/frontend/src/index.css` with the same values

### Key design values

- **Accent**: `#2dd4a8` (mint/teal), hover: `#1fa888`
- **Background**: `#edf5f1` (cool mint gray)
- **Text**: `#181c1b` (near-black)
- **Neutrals**: Mint-tinted gray scale (50–950), not standard Tailwind grays
- **Fonts**: Inter (sans), Libre Baskerville (serif), JetBrains Mono (mono)

## Code Style

- Components are `.astro` files with vanilla JS for interactivity (no framework)
- Docs are written as Astro markup, not Markdown content collections
- Use existing CSS classes from `global.css` (`.btn`, `.card`, `.alert`, `.code-block`, etc.) rather than inline Tailwind for component patterns
- "Dashboard" CTAs open `WaitlistModal` (cloud version not yet live)
