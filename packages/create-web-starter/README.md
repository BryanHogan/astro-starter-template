# @bryanhogan/create-web-starter

Create a configured Astro website using Bryan Web Starter.

```bash
npm create @bryanhogan/web-starter@latest
```

The interactive setup asks for the project directory, site name, description,
author, and an optional production URL. Leaving the URL blank uses
`https://example.com` as a placeholder. The generator can also install
dependencies and initialize Git. It always includes `AGENTS.md` and
`CLAUDE.md` for AI coding tools.

## Non-interactive usage

```bash
npm create @bryanhogan/web-starter@latest my-website -- --yes
```

Available flags:

- `--yes`, `-y` accepts the defaults and skips all prompts.
- `--no-install` skips `npm install`.
- `--no-git` skips Git initialization.
- `--help`, `-h` displays usage information.
- `--version`, `-v` displays the generator version.

The generated website includes Astro, MDX pages, a blog with optional update
dates and production-safe drafts, RSS, sitemap support, SEO metadata,
accessible components, and a token-based CSS design system.

## Requirements

- Node.js 22.12.0 or newer
- npm

## Publishing

From the repository root:

```bash
npm run pack:generator:dry-run
npm version patch --workspace @bryanhogan/create-web-starter
npm publish --workspace @bryanhogan/create-web-starter
```

Publishing requires an npm account with the required two-factor authentication.

## License

MIT
