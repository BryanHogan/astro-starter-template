/** Site-wide config — the single source of truth for site-specific info. Edit these to make the template your own. */
export const SITE = {
    /** Canonical origin, no trailing slash. Feeds astro.config `site`, so Astro.site derives from it. */
    url: "https://starter.bryanhogan.me",

    /** Brand/site name — og:site_name, WebSite JSON-LD, footer. */
    name: "Astro Starter Template",

    /** Default title/description — used as fallbacks and in site-wide JSON-LD. */
    title: "Astro Starter Template",
    description: "A lightweight, accessible Astro starter template with a simple color system, SEO-ready head, and sensible defaults.",

    /** Person behind the site — meta author + copyright, footer, JSON-LD author/publisher. */
    author: "Bryan Hogan",

    /** BCP-47 language tag — used for <html lang>; converted to en_US form for og:locale. */
    locale: "en-US",

    /** Browser UI color — <meta name="theme-color">. Matches --color-accent-500. */
    themeColor: "#3171B2",

    /** First year for the footer © range. */
    startYear: 2025,

    /** Default social share image (place the file in public/) and its alt text. */
    ogImage: "/og-default.png", // To Do: Generate this automatically.
    ogImageAlt: "Astro Starter Template by Bryan Hogan", // To Do: Generate this automatically.

    /** Social profile URLs. Leave a value empty to hide that icon in the footer. */
    social: {
        instagram: "",
        threads: "",
        mastodon: "",
    },

    /** Analytics. Leave `umamiId` empty to disable the umami script entirely. */
    analytics: { // To Do: Add Google Analytics and Matomo.
        umamiId: "",
    },
} as const;
