# Astro Starter Template by Bryan Hogan

A free Astro starter template for good, fast and accessible websites you fully control.

Write your content simply in Markdown or MDX, change the colors, text and other styling, then publish the finished site anywhere. You own the code and can change every part of it.

> This project contains the boilerplate I use for every website I build. You can use everything or just parts of it.

## Features

- **Easily create pages:** You can create pages using simple Markdown. Just add a `.mdx` file to `src/pages/`.
- **A ready-to-use blog:** Add Markdown or MDX posts to `src/content/blog/`. They are automatically included in relevant lists.
- **Simple CSS base:** Change shared colors, fonts, and spacing in one file.
- **Useful components:** Buttons, heroes, cards, icons, navigation, and more are included.
- **Search and sharing basics:** Page titles, descriptions, structured data, and automatic blog social images are ready.
- **Publishing basics:** The starter creates a sitemap, `robots.txt`, and an RSS feed.
- **Responsive and accessible defaults:** The layout works across all screen sizes and includes accessibility considerations.
- **One settings file:** Change site details, social links, and everything you need in just one file: `src/config.ts`.

## Installation and first run

*Planning on adding a video guide soon.*

<details>

<summary>Setup explanation:</summary>

### Prerequisites

Before you begin, install:

- [Node.js](https://nodejs.org/) 22.12.0 or newer. Check with `node --version`. You will also need npm, which is included with Node.js.
- [Git](https://git-scm.com/)
- A way to edit your files, e.g. [Visual Studio Code](https://code.visualstudio.com/) or [Zed](https://zed.dev/).

### 1. Create the project

Run the guided setup:

```bash
npm create @bryanhogan/web-starter@latest
```

The command downloads and runs the project generator; you do not need to clone this repository first. It asks for:

1. The directory in which to create the project
2. The site name, description, author, and optional production URL
3. Whether to install dependencies with npm
4. Whether to initialize a Git repository

When setup finishes, follow the commands shown in the terminal to enter the project directory and start Astro. Your site will local site using `npm run dev` be available at `http://localhost:4321`.

<details>

<summary>Command-line options and non-interactive setup (totally optional)</summary>

You can provide the destination directory in the command. For example, this creates `my-website` inside the current directory and accepts all default answers:

```bash
npm create @bryanhogan/web-starter@latest my-website -- --yes
```

Options placed after `--` are passed to the generator:

| Option | Effect |
| --- | --- |
| `--yes` | Skip the questions and use the defaults. |
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

### 2. Review your site details

The guided setup writes the basic information to `src/config.ts`.

You might want to add your social media profile links and other content such as a analytics link to the `config.ts` file. Review the navigation, social links, and social image settings before publishing.

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

There are many places where you can host your new static site for free, e.g. [Cloudflare](https://www.cloudflare.com/).

```bash
npm run build
npm run preview
```

</details>

## Commands

<details>
<summary>Commands for this project</summary>

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
<summary>About MDX support</summary>

### MDX support

The [Astro MDX integration](https://docs.astro.build/en/guides/integrations-guide/mdx/) lets you use Astro components inside Markdown-like pages.

To remove MDX support:

1. Convert or remove every `.mdx` page and blog post.
2. Run `npm uninstall @astrojs/mdx`.
3. Remove the `mdx()` integration from `astro.config.mjs`.

</details>


<details>
<summary>About the automatically generated blog social preview images</summary>

### The automatically generated blog social preview images

Each blog post also generates a 1200 × 630 social image at `dist/og/blog/<post-id>.png`. These files are build output rather than source assets, so they do not need to be added to `public/` or committed to Git.

</details>

<details>
<summary>Details on the CSS setup</summary>

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

### Project folder guide

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
