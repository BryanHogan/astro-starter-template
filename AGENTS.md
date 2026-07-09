# AGENTS.md for Astro Starter Template

This is Bryan Hogan's Astro starter template — a lightweight, accessible foundation for performant websites with a token-based design system, SEO-ready head, and sensible defaults. It is a reusable template.

## 🏗️ Project Structure

- **Framework**: Astro 7 with MDX support
- **Site URL**: https://starter.bryanhogan.me (set in `src/config.ts`, not hardcoded). People are expected to place their URL there themselves when using this template.
- **Node**: >= 22.12.0
- **Pages**: `.astro` and `.mdx` files in `src/pages/` (no content collections)
- **No RSS, tests, or linter** — the Head component notes how to add an RSS feed if needed

## 📦 Key Dependencies

- `@astrojs/mdx` - MDX pages with component imports
- `@astrojs/sitemap` - Sitemap generation

## 🛠️ Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## 📁 Key Directories

- `src/pages/` - Pages (`.astro` and `.mdx`)
- `src/layouts/` - `BaseLayout.astro` (all pages) and `PageLayout.astro` (markdown/MDX pages)
- `src/components/` - Reusable Astro components (Head, HeaderNavigation, Footer, Icon, SectionTitle, Hero, Button)
- `src/styles/` - Global stylesheets (see Styling System)
- `src/assets/images/` - Images processed by Astro
- `src/config.ts` - The `SITE` object: single source of truth for site name, URL, author, socials, analytics
- `public/` - Static assets (favicon, robots.txt)

## 🎨 Styling System

- Stylesheets load in order via BaseLayout: `reset.css` → `var.css` → `global.css` → `util.css`; PageLayout adds `markdown.css` for prose
- `var.css` holds all design tokens: Flexoki-based color scales (`--color-{hue}-100` to `-900`), typography, spacing, borders, shadows, z-index, layout widths (`--site-max-width: 84rem`, `--content-max-width: 45rem`)
- Semantic color tokens map onto the scales: `--color-accent-*`, `--color-background`, `--color-surface`, `--color-text`, `--color-border`, `--color-link`, `--color-focus-ring`
- `util.css` provides utility classes: `.base-layout` (3-column grid with `.full-width` breakout), `.flow`, `.height-smart-fill-screen`, flex helpers, and margin/padding classes per spacing token
- `global.css` sets element defaults and responsive heading sizes

## 🎯 Development Conventions

- Anything site-specific (name, URL, author, socials, analytics) is edited in `SITE` in `src/config.ts` — never hardcoded in components
- Components use fixed `--space-*` tokens for spacing; `--flow-space` is only for prose flow (`.flow`, `.markdown-container`)
- Use semantic color tokens (`--color-text`, `--color-accent-500`) in components, not raw scale values
- Page structure uses the `.base-layout` grid with `.full-width` breakout — don't invent custom containers
- `.astro` pages wrap content in `BaseLayout` directly; `.mdx` pages declare `layout: ../layouts/PageLayout.astro` in frontmatter with `title` and `description`
- Responsive breakpoint: `@media (min-width: 48rem)`
- Components use scoped `<style>` blocks referencing tokens from `var.css`

## 🔧 Technical Features

- SEO-complete `Head.astro`: canonical URLs, Open Graph, Twitter cards, JSON-LD structured data, article meta
- Pages can inject page-specific head tags via `<Fragment slot="head">`
- View transitions via `<ClientRouter />`
- Sitemap at `/sitemap-index.xml`; `trailingSlash: 'never'`
- Optional umami analytics (enabled by setting `SITE.analytics.umamiId`)
- Accessibility: visible focus ring, `.visually-hidden` utility, `aria` handling in Icon and navigation components
- Icons are inline SVG strings in `Icons.ts`, rendered through `Icon.astro`

## 🚧 Work in Progress

- `Button.astro` is a stub (planned types: primary, secondary, subtle, ghost; sizes: grow, large, medium, small)
- `Hero.astro` is under construction
- To-dos in `src/config.ts`: automatic og-image generation, more analytics options
- Don't treat these stubs as finished patterns to copy
