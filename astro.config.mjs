// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import mdx from '@astrojs/mdx';
import { SITE } from './src/config';

// https://astro.build/config
export default defineConfig({
  site: SITE.url,
  trailingSlash: 'never',
  integrations: [
    sitemap(),
    mdx()
  ],
});