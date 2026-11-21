# StarStarter for Astro

The official generator for [StarStarter](https://starter.bryanhogan.com/), a free Astro starter template for fast, accessible websites you fully control. Create a configured StarStarter site with one command:

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
accessible components, and a token-based CSS design system. The template
guides and site showcase from the StarStarter website are left out, so you
start with a clean site of your own.

## Documentation

- [StarStarter website](https://starter.bryanhogan.com/)
- [Docs](https://starter.bryanhogan.com/docs)
- [GitHub repository](https://github.com/BryanHogan/astro-starter-template)

## Requirements

- Node.js 22.12.0 or newer
- npm

## License

MIT