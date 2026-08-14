# AGENTS.md for this Astro website

This is a generated Astro website with MDX support, accessible components, a token-based design system, SEO-ready metadata, and sensible defaults.

## Project structure

- **Framework**: Astro 7 with MDX support
- **Site configuration**: `src/config.ts` is the source of truth for the site name, production URL, author, navigation, social links, and analytics
- **Node**: 22.12.0 or newer
- **Pages**: `.astro` and `.mdx` files in `src/pages/`
- **Blog posts**: Markdown and MDX files in `src/content/blog/`
- **RSS**: Summary feed generated from the blog content collection at `/rss.xml`
- **Tests and linting**: No test runner or linter is configured

## Available scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the production site
- `npm run preview` - Preview the production build
- `npm run astro -- <command>` - Run an Astro CLI command

## Key directories

- `src/pages/` - Page routes
- `src/layouts/` - Shared page and blog-post layouts
- `src/components/` - Reusable Astro components
- `src/content/blog/` - Blog content collection
- `src/styles/` - Global stylesheets and design tokens
- `src/assets/images/` - Images processed by Astro
- `src/config.ts` - Site-wide configuration
- `public/` - Static assets such as the favicon, default social image, and other files served unchanged

## Styling system

- Stylesheets load through `BaseLayout.astro` in this order: `reset.css` → `var.css` → `global.css` → `util.css`. `PageLayout.astro` also loads `markdown.css` for prose.
- `var.css` defines the color scales, semantic colors, typography, spacing, borders, shadows, z-index values, and layout widths.
- Use semantic color tokens such as `--color-text`, `--color-background`, and `--color-accent-500` in components instead of raw color-scale values.
- Components use fixed `--space-*` tokens for spacing. Reserve `--flow-space` for prose flow in `.flow` and `.markdown-container`.
- Page structure uses the `.base-layout` grid and its `.full-width` breakout rather than custom containers.
- Reusable components keep their additional styles in scoped `<style>` blocks.
- Use `@media (min-width: 48rem)` for the established responsive breakpoint.

## Development conventions

- Treat `SITE` in `src/config.ts` as authoritative for all site-specific information; do not hardcode those values in components.
- Wrap `.astro` pages directly in `BaseLayout.astro`.
- Give `.mdx` pages frontmatter with `layout: ../layouts/PageLayout.astro`, a `title`, and a `description`. `PageLayout` adds top spacing by default; set `topSpacing: false` when the first component provides its own spacing.
- Add blog posts to the configured content collection and follow its frontmatter schema in `src/content.config.ts`.
- Put images that Astro should optimize in `src/assets/images/`. Put files that should be served unchanged in `public/`.
- Update header and footer links in `src/config.ts` when the page structure changes.

## SEO and accessibility

- `Head.astro` provides canonical URLs, Open Graph and Twitter metadata, JSON-LD structured data, and article metadata.
- Blog posts generate title-based social images at `/og/blog/<post-id>.png` during the build; regular pages use the configured default image.
- Pages can add page-specific head elements through the `head` slot.
- The site generates a sitemap and RSS feed and uses non-trailing-slash URLs.
- Preserve visible focus styles, accessible names, semantic landmarks, and existing ARIA behavior when changing components.
- Use the shared `Icon.astro` component and icons defined in `Icons.ts` rather than duplicating inline icon markup.

## Verification

- Do not start a development server for automated verification.
- Use `npm run build` when a production build is needed to verify a change.
- Because no tests or linter are configured, supplement the build with focused static checks appropriate to the files changed.
