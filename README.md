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

## Further notes

- The color schema is heavily inspired from Flexoki: https://stephango.com/flexoki
  - Using most of the colors, but a little trimmed down and with slights shifts, e.g. `--color-neutral-100` and `--color-neutral-900` are adjusted.

## MDX Support

This project adds the [MDX integration for Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/), allowing you to write `.mdx` files in addition to the `.md` Markdown files.

`.mdx.` files are very powerful and convenient as they are like Markdown files but also allow you to use JavaScript in them such as using Astro components in them.

If you want to remove it do the following:

1. Uninstall with `npm uninstall @astrojs/mdx`.
2. Remove the `mdx()` line in `astro.config.mjs`.
3. Delete any pages ending in `.mdx`. Or change them to `.md`.

## Learn more

Find out why things are the way they are in my [web development guide](https://webdev.bryanhogan.com/).

You probably also want to take a look at the [Astro documentation](https://docs.astro.build/en/getting-started/).

This Astro Starter Template has been built by [Bryan Hogan](https://bryanhogan.com/).

## To Do's

Things that will be added to this project:

- [ ] Clean up agents.md
- [x] CLean up buttons
- [ ] Icon stuff
- [ ] Tags
- [ ] Social media .json setup
- [ ] Maybe move more project setup into single .json file (e.g. head meta content)
- [ ] Card and card group component
- [x] Hero component

---

# Astro Starter Template by Bryan Hogan: The best way to build a simple website

Welcome! This is **Bryan Hogan's Astro Starter Template**, the easiest way to build a website that you fully control.

*This section is currently still being worked on!*

## What makes this website starter so special and useful

This starter template helps you quickly build a high-quality website that is performant, aesthetically pleasing, provides good UX, accessible, SEO-friendly, free, lock-in free and bloat free.

Do you need a blog? This is the project for you.  
Do you need a personal website? This is the project for you.  
Do you need a landing page? You guessed it.

You can write your content in markdown. The output is a simple static website that you can host anywhere you want for free.

## How to use it

Download / Clone this repository, enter your information in 'src/config.ts', adjust your content and styles, and ready for publish!

Need some more details?

(Future TO DO: Add detailed setup)

### How to write markdown content

You are new to writing in markdown? Then it's a great time to get started! Writing markdown is simple, and most loved by AI as well.

See: https://www.markdownguide.org/cheat-sheet/

### How to add a new page

(Add)

### How to change the colors and styling

(Add)

## Resources & References

Astro: https://astro.build/

Clean Web Dev Guide: https://webdev.bryanhogan.com/

This Astro Starter Template has been built by [Bryan Hogan](https://bryanhogan.com/).

## Explanations & Why (Change title?)

### MDX

### CSS Setup

## Roadmap & To-Dos

Active:

Planned:


### Specific To Dos being worked on

