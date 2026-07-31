# Project TODOs

The project builds successfully. The remaining work is primarily release cleanup, completing promised starter features, accessibility improvements, and maintainer documentation.

## Must fix before release

- [ ] Add `public/og-default.png` at 1200 × 630, or update `SITE.ogImage` to reference an existing social-sharing image.
- [ ] Add a `/privacy` page, or remove the Privacy link from the footer.
- [ ] Add a contact section with `id="contact"` to the About page, or update the header and footer Contact links.
- [ ] Remove or replace the `/index2` test route so it is not published or included in the sitemap.
- [ ] Replace the `/index` test link inside `index2.astro` if that page is retained.
- [ ] Generate `robots.txt` from `SITE.url`, or replace the `https://<YOUR SITE>` placeholder manually.
- [ ] Set the 404 page to `noindex, nofollow` and avoid emitting unnecessary canonical and structured-data metadata for it.
- [ ] Implement blog search for `?search=...`, or remove the unsupported `SearchAction` structured data from `Head.astro`.

## Starter features to complete

- [ ] Replace the Lorem Ipsum and temporary copy on the Home, About, and Blog pages with useful starter examples.
- [ ] Replace vague placeholder titles and descriptions with realistic SEO examples.
- [ ] Add a blog content collection and frontmatter schema.
- [ ] Add individual blog-post routes and a reusable post layout.
- [ ] Turn `/blog` into a post listing rather than a single placeholder page.
- [ ] Add publication and modified-date handling for articles.
- [ ] Add tags and tag archive pages.
- [ ] Add reusable Card and CardGroup components for posts, features, and landing-page content.
- [ ] Optionally add blog pagination once multiple sample posts exist.
- [ ] Add configured social profile URLs to JSON-LD through a `sameAs` array.
- [ ] Replace the placeholder header graphic with an intentional site logo.
- [ ] Add favicon fallbacks and an Apple touch icon; optionally add a web app manifest.

## Accessibility and interaction

- [ ] Add a skip-to-content link in `BaseLayout.astro` and a stable ID on the main content area.
- [ ] Add Escape-to-close behavior to the mobile navigation.
- [ ] Manage and restore focus when the mobile navigation opens and closes.
- [ ] Prevent background scrolling while the mobile navigation is open.
- [ ] Clean up navigation event listeners correctly across Astro view transitions.
- [ ] Add `aria-current="page"` and a visible active state to the current navigation link.
- [ ] Give the home/logo link an accessible name based on `SITE.name` instead of `Logo icon`.

## Documentation and maintenance

- [ ] Finish the README introduction and remove the “still being worked on” notice.
- [ ] Add detailed installation and first-run instructions.
- [ ] Document how to configure every field in `src/config.ts`.
- [ ] Document how to create Astro and MDX pages.
- [ ] Document how to customize colors, typography, spacing, and themes.
- [ ] Add component usage examples for Button, Hero, Icon, and SectionTitle.
- [ ] Add deployment guidance for common static hosts.
- [ ] Update the README feature list and roadmap to match the actual project state.
- [ ] Add a `LICENSE` file defining how the starter may be reused.
- [ ] Add `@astrojs/check` and TypeScript as development dependencies.
- [ ] Add an `npm run check` script.
- [ ] Add a small CI workflow that runs the project check and production build.
- [ ] Fix the undefined `--variable-font-size` reference in `markdown.css` by using an existing token or adding a documented monospace-size token.
- [ ] Replace the header's hard-coded `z-index: 10` with the existing `--z-navbar` design token.

## Optional extensions

These are useful additions, but they are not required for the lightweight baseline.

- [ ] Add an RSS feed if the completed blog needs syndication.
- [ ] Add additional analytics providers if there is a clear use case.
- [ ] Add a site-wide light/dark theme switcher.
- [ ] Add a broader automated test or lint suite if the template grows more interactive.
- [ ] Add dependency-update automation such as Dependabot or Renovate.

