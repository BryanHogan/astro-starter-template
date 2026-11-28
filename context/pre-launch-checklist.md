# Before you publish your site

After the npm setup, go through this checklist in your new project.

## Site details

- [ ] Check the site name, description, author, and language in `src/config.ts`. Set `SITE.url` to your production URL if it still says `https://example.com`.
- [ ] Replace `public/favicon.svg` with your logo. The build creates `favicon.ico` and the mobile icons from it.
- [ ] Replace `public/og-default.png` with your 1200 × 630 sharing image. Describe it in `SITE.ogImageAlt`.

## Pages and links

- [ ] Edit `src/pages/index.mdx`. Replace the setup instructions and Seoul photo, update the image alt text, and point the buttons to your pages. Check the page title and description at the top of the file.
- [ ] Write your About page and add a way to reach you on the Contact page.
- [ ] Update the Privacy page to describe the services you use. If you use Umami, add your website ID in `SITE.analytics.umamiId`.
- [ ] Edit or remove `src/content/blog/welcome.mdx`. Set `draft: true` on unfinished posts and write your bio in `src/content/author.md`.
- [ ] Update the header, footer, and social links in `src/config.ts` to match the pages and profiles you want to share.

## Final check

- [ ] Check the home page on a narrow and a wide screen. Try the navigation and contact links, and check that `/rss.xml` and `/sitemap-index.xml` use your production domain.
- [ ] Set your host’s build command to `npm run build` and its publish directory to `dist/`.