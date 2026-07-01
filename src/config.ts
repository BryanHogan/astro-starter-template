/**
 * Site-wide configuration — the single source of truth for site-specific
 * information. Change these values to make the template your own; every
 * component and layout reads from here.
 */
export const SITE = {
    /** Canonical origin, no trailing slash. Feeds astro.config `site`, so
     *  `Astro.site` (used for canonical/OG URLs) derives from this value. */
    url: "https://example.com",

    /** Brand/site name — og:site_name, WebSite JSON-LD, footer. */
    name: "Site name",

    /** Default title/description, used as fallbacks and in site-wide JSON-LD. */
    title: "Default title",
    description: "Default description.",

    /** Person behind the site — meta author, footer, JSON-LD author/publisher. */
    author: "Author name",

    /** BCP-47 language tag — used directly for <html lang>; converted to the
     *  language_TERRITORY form (e.g. en_US) for og:locale. */
    locale: "en-US",

    /** Browser UI color — <meta name="theme-color">. Matches --color-accent-500. */
    themeColor: "#3171B2",

    /** Shown in <meta name="copyright"> (footer uses `author` + year range). */
    copyright: "Author name",

    /** First year for the footer © range. */
    startYear: 2025,

    /** Default social share image (place the file in public/) and its alt text. */
    ogImage: "/og-default.png",
    ogImageAlt: "Social preview image for this site",

    /** Social profile URLs. Leave a value empty to hide that icon in the footer. */
    social: {
        instagram: "",
        threads: "",
        mastodon: "",
    },

    /** Analytics. Leave `umamiId` empty to disable the umami script entirely. */
    analytics: {
        umamiId: "",
    },
} as const;
