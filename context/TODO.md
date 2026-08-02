# Project TODOs

The project builds successfully. The remaining work is primarily release cleanup, completing promised starter features, accessibility improvements, and maintainer documentation.

## Must fix before release

- [X] Add `public/og-default.png` at 1200 × 630, or update `SITE.ogImage` to reference an existing social-sharing image.
- [x] Add a `/privacy` page, or remove the Privacy link from the footer.
- [x] Add a contact section with `id="contact"` to the About page, or update the header and footer Contact links.
- [x] Remove or replace the `/index2` test route so it is not published or included in the sitemap.
- [x] Replace the `/index` test link inside `index2.astro` if that page is retained.
- [x] Generate `robots.txt` from `SITE.url`, or replace the `https://<YOUR SITE>` placeholder manually.
- [x] Set the 404 page to `noindex, nofollow` and avoid emitting unnecessary canonical and structured-data metadata for it.
- [ ] Implement blog search for `?search=...`, or remove the unsupported `SearchAction` structured data from `Head.astro`.

## Starter features to complete

- [X] Replace the Lorem Ipsum and temporary copy on the Home, About, and Blog pages with useful starter examples.
- [x] Replace vague placeholder titles and descriptions with realistic SEO examples.
- [x] Add a blog content collection and frontmatter schema.
- [x] Add individual blog-post routes and a reusable post layout.
- [x] Turn `/blog` into a post listing rather than a single placeholder page.
- [x] Add publication and modified-date handling for articles.
- [x] Add tags and tag archive pages.
- [x] Add reusable Card and CardGroup components for posts, features, and landing-page content.
- [x] Optionally add blog pagination once multiple sample posts exist.
- [x] Add configured social profile URLs to JSON-LD through a `sameAs` array.
- [x] Replace the placeholder header graphic with an intentional site logo.
- [ ] Add favicon fallbacks and an Apple touch icon; optionally add a web app manifest.

## Accessibility and interaction

- [ ] Add a skip-to-content link in `BaseLayout.astro` and a stable ID on the main content area.
- [x] Add Escape-to-close behavior to the mobile navigation.
- [x] Manage and restore focus when the mobile navigation opens and closes.
- [x] Prevent background scrolling while the mobile navigation is open.
- [x] Clean up navigation event listeners correctly across Astro view transitions.
- [x] Add `aria-current="page"` and a visible active state to the current navigation link.
- [x] Give the home/logo link an accessible name based on `SITE.name` instead of `Logo icon`.

## Documentation and maintenance

- [x] Finish the README introduction and remove its temporary notice.
- [x] Add detailed installation and first-run instructions.
- [x] Document how to configure every field in `src/config.ts`.
- [x] Document how to create Astro and MDX pages.
- [x] Document how to customize colors, typography, spacing, and themes.
- [x] Add component usage examples for Button, Hero, Icon, and SectionTitle.
- [x] Update the README feature list and roadmap to match the actual project state.
- [ ] Add a `LICENSE` file defining how the starter may be reused.
- [x] Fix the undefined `--variable-font-size` reference in `markdown.css` by using an existing token or adding a documented monospace-size token.
- [ ] Replace the header's hard-coded `z-index: 10` with the existing `--z-navbar` design token.

## Optional extensions

These are useful additions, but they are not required for the lightweight baseline.

- [x] Add an RSS feed if the completed blog needs syndication.

## Don't do now but consider for the future

- [ ] Add deployment guidance for common static hosts.
- [ ] Create a web tool that can create the custom styling CSS variables
- [ ] Add `@astrojs/check` and TypeScript as development dependencies.
- [ ] Add an `npm run check` script.

---

- [ ] Adjust BlogPostLayout: Top navigation, next prev post, 
- [ ] Footer and Header should be adjusted in the config file also