# Astro Starter Template by Bryan Hogan

Hi there!

This is my starter template for Astro.

I use it when I want to build a new website, but do not want to start with an empty folder again. It includes the things I need almost every time I build a site.

Things like:

- a CSS reset
- CSS variables
- global styles
- utility classes
- a base layout
- basic `<head>` metadata
- a header
- a footer
- sitemap generation
- a few example pages

The idea is to keep the starting point simple. Mostly HTML and CSS, with a small amount of JavaScript where it makes sense.

## How to get started

Install the dependencies:

```bash
npm install
```

Start the development server:

```bash
npm run dev
```

Astro will show you the local URL in the terminal. Usually it is:

```text
http://localhost:4321
```

This project expects Node.js `22.12.0` or newer.

## Commands

- `npm run dev` starts the local development server.
- `npm run build` builds the website into `dist/`.
- `npm run preview` previews the build locally.
- `npm run astro` lets you run Astro commands.

## What to change first

If you use this for a real project, change these things first:

1. Rename the project in `package.json` and `package-lock.json`.
2. Change the website URL in `astro.config.mjs`.
3. Update the page titles and descriptions in `src/pages/`.
4. Update the metadata in `src/layouts/BaseLayout.astro`.
5. Replace the favicon in `public/favicon.svg`.
6. Replace the logo image used in `src/components/Header.astro`.
7. Change the header links.
8. Change the footer links.
9. Add your real social links in `src/components/Footer.astro`.
10. Adjust the design variables in `src/styles/var.css`.

Do not forget the metadata. The template still includes example values for the Open Graph image, author, copyright and site name.

## Adding a new page

Astro uses file based routing, so add new pages in `src/pages/`.

A simple page can look like this:

```astro
---
import BaseLayout from "../layouts/BaseLayout.astro";
---

<BaseLayout title="Page title" description="Page description">
    <main class="base-layout">
        <section class="flow">
            <h1>Page heading</h1>
            <p>Page content.</p>
        </section>
    </main>
</BaseLayout>
```

The `base-layout` class keeps content aligned with the normal page width. Use `full-width` on a direct child if something should go across the full page.

## CSS

The CSS is split into a few files:

- `reset.css` removes default browser styling I do not want.
- `var.css` contains colors, spacing, typography and layout variables.
- `global.css` contains the basic styles for the whole website.
- `util.css` contains small utility classes I use often.

You can use the whole project, or just take the parts you need. For example only the styles folder, the base layout, the header or the footer.

## Learn more

Find out why things are the way they are in my [web development guide](https://webdev.bryanhogan.com/).

You probably also want to take a look at the [Astro documentation](https://docs.astro.build/en/getting-started/).

This Astro Starter Template has been built by [Bryan Hogan](https://bryanhogan.com/).
