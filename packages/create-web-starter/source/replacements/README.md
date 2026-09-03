# __SITE_NAME_MARKDOWN__

__SITE_DESCRIPTION_MARKDOWN__

This Astro website was generated with [Bryan Web Starter](https://starter.bryanhogan.com/).

## First run

```bash
npm install
npm run dev
```

Before publishing, review `src/config.ts` and replace the placeholder production URL if you left the setup answer blank. Add your navigation, social profiles, contact details, favicon, and default social sharing image. Blog posts generate title-based social images automatically during the build. `AGENTS.md` and `CLAUDE.md` are included for AI coding tools.

## Commands

| Command | Purpose |
| --- | --- |
| `npm run dev` | Start the local development server. |
| `npm run build` | Create the production site in `dist/`. |
| `npm run preview` | Preview the production build. |
| `npm run astro -- <command>` | Run an Astro CLI command. |

## Content

- Add pages to `src/pages/`.
- Add blog posts to `src/content/blog/`.
- Add processed images to `src/assets/images/`.
- Add static assets to `public/`.
- Change site details and navigation in `src/config.ts`.

Blog posts require `title`, `description`, and `pubDate` in their frontmatter. You can also set `updateDate`, which defaults to `pubDate`, or set `draft: true` to keep a post available during development but exclude its page, listing entry, RSS entry, and social image from production builds.

Generated blog social images are written to `dist/og/blog/` during a production build. Keep `public/og-default.png` as the fallback image for regular pages.

## License

MIT
