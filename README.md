# Astro Starter Template by Bryan Hogan

Welcome! This is **Bryan Hogan's Astro Starter Template**, the easiest way to build a website that you fully control.

*This section is currently still being worked on!*

## Why it's useful

This starter template helps you quickly build a high-quality website that is performant, aesthetically pleasing, provides good UX, accessible, SEO-friendly, free, lock-in free and bloat free.

Do you need a blog? This is the project for you.  
Do you need a personal website? This is the project for you.  
Do you need a landing page? You guessed it.

You can write your content in markdown. The output is a simple static website that you can host anywhere you want for free.

This starter template includes:

- **Simple styling.** You don't have to think about the styling, you can just focus on the content. Scalable styling is done through just CSS including `reset.css`, `var.css` for CSS variables, `global.css`, `util.css` for utility classes and `markdown.css`.
- **SEO ready.** All the `<head>` meta data that you need.
- **Components:**
  - Header
  - Footer
- Sitemap generation
- Example pages

The idea is to keep the starting point simple. Mostly HTML and CSS, with a small amount of JavaScript where it makes sense.

## How to use it

Download / Clone this repository, enter your information in 'src/config.ts', adjust your content and styles, and ready for publish!

Need some more details?

(Future TO DO: Add detailed setup)

<details>

<summary>Setup if you already know what you are doing</summary>

Install dependencies with `npm install` and start the development server with `npm run dev`.

Commands:

- `npm run dev` starts the local development server.
- `npm run build` builds the website into `dist/`.
- `npm run preview` previews the build locally.
- `npm run astro` lets you run Astro commands.

</details>

<details>

<summary>How to write markdown content</summary>

You are new to writing in markdown? Then it's a great time to get started! Writing markdown is simple, and most loved by AI as well.

See: https://www.markdownguide.org/cheat-sheet/

</details>

<details>

<summary>How to add a new page</summary>

(Add)

</details>

<details>

<summary>How to change the colors and styling</summary>

(Add)

</details>

You can use the whole project, or just take the parts you need. For example only the styles folder, the base layout, the header or the footer.

## Resources & References

Astro: https://astro.build/

Clean Web Dev Guide: https://webdev.bryanhogan.com/

This Astro Starter Template has been built by [Bryan Hogan](https://bryanhogan.com/).

The color schema is heavily inspired from [Flexoki](https://stephango.com/flexoki). Using most of the colors, but a little trimmed down and with slights shifts, e.g. `--color-neutral-100` and `--color-neutral-900` are adjusted.

## Explanations & Why (Change title?)

### MDX Support

This project adds the [MDX integration for Astro](https://docs.astro.build/en/guides/integrations-guide/mdx/), allowing you to write `.mdx` files in addition to the `.md` Markdown files.

`.mdx.` files are very powerful and convenient as they are like Markdown files but also allow you to use JavaScript in them such as using Astro components in them.

If you want to remove it do the following:

1. Uninstall with `npm uninstall @astrojs/mdx`.
2. Remove the `mdx()` line in `astro.config.mjs`.
3. Delete any pages ending in `.mdx`. Or change them to `.md`.

### CSS Setup

Using simple CSS in a scalable way. No bloated frameworks. Why this setup and why it works so well is described on the [Clean Web Dev Guide](https://webdev.bryanhogan.com/).

- `reset.css` removes default browser styling I do not want.
- `var.css` contains colors, spacing, typography and layout variables.
- `global.css` contains the basic styles for the whole website.
- `util.css` contains small utility classes I use often.

## Roadmap & To-Dos

Active:

Planned:

### Specific To Dos being worked on

- [ ] Clean up agents.md
- [x] CLean up buttons
- [ ] Icon stuff
- [ ] Tags
- [ ] Social media .json setup
- [ ] Maybe move more project setup into single .json file (e.g. head meta content)
- [ ] Card and card group component
- [x] Hero component

