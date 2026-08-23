# Astro Starter Template by Bryan Hogan

This starter helps you make your first website.

Write your content simply in Markdown or MDX, change the colors, text and other styling, then publish the finished site almost anywhere. You own the code and can change every part of it.

> This project contains the boilerplate I use for every website I build. You can use everything or just parts of it.

## Features

- **Easily create pages:** You can create pages using simple markdown. Just add a `.mdx` file to `src/pages/`.
- **A ready-to-use blog:** Add Markdown / MDX posts to `src/content/blog/`. They are automatically included in relevant lists.
- **Simple CSS base:** Change shared colors, fonts, and spacing in one file.
- **Useful components:** Buttons, heroes, cards, icons, navigation, and more are included.
- **Search and sharing basics:** Page titles, descriptions, structured data, and automatic blog social images are ready.
- **Publishing basics:** The starter creates a sitemap, `robots.txt`, and a RSS feed.
- **Responsive and accessible defaults:** The layout works across all screen sizes and includes accessibility considerations.
- **One settings file:** Change site details, social links, and everything you need in just one file: `src/config.ts`.

## Installation and first run

*Planning on adding a video guide soon.*

<details>

<summary>For now consider using this explanation:</summary>

### Prerequisites

Before you begin, install:

- [Node.js](https://nodejs.org/) 22.12.0 or newer. Check with `node --version`.
- npm, which is included with Node.js. Check with `npm --version`.
- [Git](https://git-scm.com/)

### 1. Create the project

Run the guided setup:

```bash
npm create @bryanhogan/web-starter@latest
```

The command downloads and runs the project generator; you do not need to clone this repository first. It asks for:

1. The directory in which to create the project
2. The site name, description, author, and production URL
3. Whether to include `AGENTS.md` and `CLAUDE.md` for AI coding tools
4. Whether to install dependencies with npm
5. Whether to initialize a Git repository

The three yes-or-no choices default to yes. The destination must be new or empty because the generator does not overwrite existing files. The blog and its example posts are always included.

When setup finishes, follow the commands shown in the terminal to enter the project directory and start Astro. Your site will normally be available at `http://localhost:4321`.

<details>

<summary>Command-line options and non-interactive setup</summary>

You can provide the destination directory in the command. For example, this creates `my-website` inside the current directory and accepts all default answers:

```bash
npm create @bryanhogan/web-starter@latest my-website -- --yes
```

Options placed after `--` are passed to the generator:

| Option | Effect |
| --- | --- |
| `--yes` | Skip the questions and use the defaults. |
| `--no-ai` | Do not include `AGENTS.md` or `CLAUDE.md`. |
| `--no-install` | Create the project without running `npm install`. |
| `--no-git` | Create the project without running `git init`. |

With `--yes`, the site name is derived from the directory name and the production URL is set to `https://example.com`. Replace the placeholder values in `src/config.ts` before publishing.

When setup finishes, enter the project directory and start Astro:

```bash
cd my-website
npm run dev
```

If you chose not to install dependencies during setup, run `npm install` before `npm run dev`.

</details>

<details>

<summary>Alternative: clone the repository directly</summary>

Cloning gives you the promotional site exactly as it appears in this repository. It does not ask setup questions or replace its content with the neutral starter content produced by the generator.

```bash
git clone https://github.com/BryanHogan/astro-starter-template.git
cd astro-starter-template
npm install
```

If you downloaded a ZIP, extract it, open a terminal in the extracted directory, and run `npm install`.

</details>

### 2. Review your site details

The guided setup writes the essential values to `src/config.ts`. Analytics stays disabled and social profiles stay empty until you configure them. Review the navigation, social links, analytics, and social image settings before publishing.

Also replace the example assets in `public/`, especially `favicon.svg` and `og-default.png`, when you are ready to use your own branding. The default social image is used by regular pages; blog posts generate title-based images automatically during the build.

See [How to configure `config.ts`](https://starter.bryanhogan.com/blog/how-to-configure-config.ts) for every available field.

### 3. Start the development server

```bash
npm run dev
```

Astro shows a local address in the terminal, normally `http://localhost:4321`. Open it in your browser. Your changes appear while the server is running.

Press <kbd>Ctrl</kbd> + <kbd>C</kbd> in the terminal to stop the server.

If port 4321 is already in use, Astro selects another port; use the exact URL printed in the terminal.

### 4. Create your content

- Edit or replace the example pages in `src/pages/`.
- Add blog posts to `src/content/blog/`.
- Add processed images to `src/assets/images/` or static files to `public/`.
- Update the header and footer navigation links in `src/config.ts` when your page structure changes.

### 5. Build and preview the production site

```bash
npm run build
npm run preview
```

The finished site is placed in `dist/`. The preview command lets you check it before publishing.

Each blog post also generates a 1200 × 630 social image at `dist/og/blog/<post-id>.png`. These files are build output rather than source assets, so they do not need to be added to `public/` or committed to Git.

</details>

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
- [Customizing the design](https://starter.bryanhogan.com/blog/customizing-the-design)
- [Component showcase](https://starter.bryanhogan.com/blog/component-showcase)
- [Markdown style guide](https://starter.bryanhogan.com/blog/markdown-style-guide)

You can use the entire project or take only the pieces you need, such as the styles, layouts, header, footer, or individual components.

<details>

<summary>How the project is put together</summary>

### MDX support

The [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/) lets you use Astro components inside Markdown-like pages.

<details>
<summary>To remove MDX support:</summary>

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

- Add deployment guides for common static hosting providers. Video set up guide.


## Resources and credits

- [Using the Astro framework](https://astro.build/)
- [Built as described on Clean Web Dev Guide](https://webdev.bryanhogan.com/)
- [Built by Bryan Hogan](https://bryanhogan.com/)
- [Using the Flexoki color scheme](https://stephango.com/flexoki) with some adjustments.
