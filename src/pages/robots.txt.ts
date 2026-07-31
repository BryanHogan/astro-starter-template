import type { APIRoute } from "astro";

import { SITE } from "../config";

const robotsTxt = `User-agent: *
Allow: /

Sitemap: ${new URL("/sitemap-index.xml", SITE.url).href}
`;

export const GET: APIRoute = () =>
    new Response(robotsTxt, {
        headers: {
            "Content-Type": "text/plain; charset=utf-8",
        },
    });
