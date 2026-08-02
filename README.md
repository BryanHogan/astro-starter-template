# Astro Starter Template by Bryan Hogan

This starter helps you make your first website.

Write your content simply in Markdown or MDX, change the colors, text and other styling, then publish the finished site almost anywhere. You own the code and can change every part of it.

## Features

- **Astro and MDX pages.** Add a file to `src/pages/` to create a page.
- **A ready-to-use blog.** Add Markdown or MDX posts to `src/content/blog/`.
- **Simple CSS.** Change shared colors, fonts, and spacing in one file.
- **Useful components.** Buttons, heroes, cards, icons, navigation, and more are included.
- **Search and sharing basics.** Page titles, descriptions, social images, and structured data are ready.
- **Publishing basics.** The starter creates a sitemap, `robots.txt`, and an RSS feed.
- **Responsive and accessible defaults.** The layout works across screen sizes and includes clear focus styles and accessible labels.
- **One settings file.** Change site details, social links, and optional analytics in `src/config.ts`.

<details>

<summary>See more technical features</summary>

The starter uses Astro content collections for blog posts, scoped component styles, semantic CSS tokens, a three-column layout grid, canonical URLs, Open Graph and Twitter metadata, JSON-LD, Astro view transitions, and non-trailing-slash URLs.

</details>

## Installation and first run

### Prerequisites

Before you begin, install:

- [Node.js](https://nodejs.org/) 22.12.0 or newer. Check with `node --version`.
- npm, which is included with Node.js. Check with `npm --version`.
- Git if you want to clone the repository. You can download the repository as a ZIP instead.

### 1. Get the project

Clone the repository:

```bash
git clone https://github.com/BryanHogan/astro-starter-template.git
cd astro-starter-template
```

If you downloaded a ZIP, extract it and open a terminal in the extracted `astro-starter-template` directory.

### 2. Install dependencies

```bash
npm install
```

This downloads everything the project needs.

### 3. Add your site details

Open `src/config.ts` and replace the example details with your own. Start with the website URL, name, title, description, author, and social image.

Also replace the example assets in `public/`, especially `favicon.svg` and `og-default.png`, when you are ready to use your own branding.

See [How to configure `config.ts`](https://starter.bryanhogan.com/blog/how-to-configure-config.ts) for every available field.

### 4. Start the development server

```bash
npm run dev
```

Astro shows a local address in the terminal, normally `http://localhost:4321`. Open it in your browser. Your changes appear while the server is running.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal to stop the server.

If port 4321 is already in use, Astro selects another port; use the exact URL printed in the terminal.

### 5. Create your content

- Edit or replace the example pages in `src/pages/`.
- Add blog posts to `src/content/blog/`.
- Add processed images to `src/assets/images/` or static files to `public/`.
- Update the navigation links in `src/components/HeaderNavigation.astro` and `src/components/Footer.astro` when your page structure changes.

### 6. Build and preview the production site

```bash
npm run build
npm run preview
```

The finished site is placed in `dist/`. The preview command lets you check it before publishing.

<details>
<summary>

## Commands

</summary>

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Generate the production site in `dist/`. |
| `npm run preview` | Preview the generated production build. |
| `npm run astro -- <command>` | Run an Astro CLI command. |

</details>

## Documentation

- [How to configure `src/config.ts`](https://starter.bryanhogan.com/blog/how-to-configure-config.ts)
- [How to create Astro and MDX pages](https://starter.bryanhogan.com/blog/how-to-create-a-new-page)
- [How to customize the design system](https://starter.bryanhogan.com/blog/how-to-customize-the-design-system)
- [Component showcase](https://starter.bryanhogan.com/blog/component-showcase)
- [Markdown style guide](https://starter.bryanhogan.com/blog/markdown-style-guide)

You can use the entire project or take only the pieces you need, such as the styles, layouts, header, footer, or individual components.

<details>

<summary>How the project is put together</summary>

### MDX support

The [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/) lets you use Astro components inside Markdown-like pages.

<details>
<summary>To remove MDX support:<summary>

1. Convert or remove every `.mdx` page and blog post.
2. Run `npm uninstall @astrojs/mdx`.
3. Remove the `mdx()` integration from `astro.config.mjs`.

</details>

### CSS setup

The project loads its CSS in this order:

- `reset.css` removes browser defaults the template does not use.
- `var.css` defines color, typography, spacing, layout, border, shadow, and other design tokens.
- `global.css` applies site-wide element styles and responsive typography.
- `util.css` provides layout, flow, accessibility, flex, margin, and padding utilities.
- `markdown.css` styles rendered Markdown and MDX prose.

The shared layouts load these files for you. Each component keeps its own extra styles.

For more background, see the [Clean Web Dev Guide](https://webdev.bryanhogan.com/).

</details>

<details>

<summary>Project folder guide</summary>

```text
src/
├── assets/images/       Images processed by Astro
├── components/          Reusable Astro components
├── content/blog/        Markdown and MDX blog posts
├── layouts/             Shared page and post layouts
├── pages/               File-based website routes
├── styles/              Global design system and prose styles
├── config.ts            Site-wide configuration
└── content.config.ts    Blog collection schema
public/                  Static assets copied as-is
```

</details>

## Roadmap

- Add deployment guides for common static hosting providers.

## Resources and credits

- [Using the Astro frame](https://astro.build/)
- [Built as described on Clean Web Dev Guide](https://webdev.bryanhogan.com/)
- [Built by Bryan Hogan](https://bryanhogan.com/)
- [Using the Flexoki color scheme](https://stephango.com/flexoki) with some adjustments.
