# Astro Starter Template by Bryan Hogan

This is the Astro starter I use when I do not want to start from an empty folder.

It includes the basic things I need on almost every website: a layout, a header, a footer, useful CSS files, metadata in the `<head>`, a few example pages and sitemap generation.

The goal is simple: start with a clean base and then adjust it for the project.

## What is included

- Astro v6
- A `BaseLayout.astro` with the common page setup
- CSS reset, variables, global styles and utility classes
- Responsive header navigation
- Footer with navigation and social links
- Home, about and 404 pages
- Sitemap setup with `@astrojs/sitemap`

## How to use it

Install the dependencies:

```bash
npm install
```

Start the dev server:

```bash
npm run dev
```

---

Or just copy the relevant files that you need, e.g. the `/styles` folder.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the website into `dist/`.
- `npm run preview` previews the production build.
- `npm run astro` runs Astro CLI commands.

This project expects Node.js `22.12.0` or newer.

## Things to change for a real project

Before publishing a website with this starter, go through these files:

1. Rename the project in `package.json` and `package-lock.json`.
2. Set the real website URL in `astro.config.mjs`.
3. Update the page titles and descriptions in `src/pages/`.
4. Update the metadata in `src/layouts/BaseLayout.astro`.
5. Replace the favicon in `public/favicon.svg`.
6. Replace the logo image used in `src/components/Header.astro`.
7. Change the header and footer links.
8. Add real social links in `src/components/Footer.astro`.
9. Adjust the design variables in `src/styles/var.css`.

## CSS

The CSS is split up so it stays easy to change:

- [`reset.css`]() for browser defaults.
- [`var.css`]() contains colors, typography, spacing and layout variables.
- `global.css` contains the basic styles for the whole site.
- `util.css` contains utility classes.


## More

Find out why things are the way they are in my [web development guide](https://webdev.bryanhogan.com/).

Built by [Bryan Hogan](https://bryanhogan.com/).
