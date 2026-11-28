import type { APIRoute } from "astro";
import { SITE } from "../config";
import { ANDROID_ICON_SIZES } from "../utils/favicon";

export const GET: APIRoute = () => Response.json({
    name: SITE.name,
    description: SITE.description,
    theme_color: SITE.themeColor,
    start_url: "/",
    display: "browser",
    icons: ANDROID_ICON_SIZES.map((size) => ({
        src: `/icons/icon-${size}.png`,
        sizes: `${size}x${size}`,
        type: "image/png",
        purpose: "any",
    })),
}, {
    headers: { "Content-Type": "application/manifest+json" },
});
