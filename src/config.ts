/** Site-wide config — the single source of truth for site-specific info. Edit these to make the template your own. */
export const SITE = {
    /** Canonical origin, no trailing slash. Feeds astro.config `site`, so Astro.site derives from it. */
    url: "https://starter.bryanhogan.com",

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
    ogImage: "/og-default.png",
    ogImageAlt: "Astro Starter Template by Bryan Hogan",

    /** Header navigation. Add, remove, or reorder links without editing the header component. */
    header: {
        links: [
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },

    /** Social profiles. Leave `href` empty to hide a profile in the footer. */
    social: [
        {
            icon: "instagram",
            label: "Instagram",
            href: "https://instagram.com/bryanhoganme",
        },
        {
            icon: "threads",
            label: "Threads",
            href: "https://www.threads.net/@bryanhoganme",
        },
        {
            icon: "mastodon",
            label: "Mastodon",
            href: "https://mastodon.social/@BryanHogan",
        },
    ],

    /** Footer navigation. Add, remove, or reorder groups and links without editing the footer component. */
    footer: {
        linkGroups: [
            {
                label: "Explore",
                links: [
                    { label: "Home", href: "/" },
                    { label: "About", href: "/about" },
                    { label: "Blog", href: "/blog" },
                    { label: "Contact", href: "/contact" },
                ],
            },
            {
                label: "Resources",
                links: [
                    { label: "RSS Feed", href: "/rss.xml" },
                    { label: "Sitemap", href: "/sitemap-index.xml" },
                ],
            },
        ],
        utilityLinks: [
            {
                label: "GitHub Repository",
                href: "https://github.com/BryanHogan/astro-starter-template",
                external: true,
            },
            { label: "Privacy", href: "/privacy" },
        ],
    },

    /** Analytics. Leave `umamiId` empty to disable the umami script entirely. */
    analytics: { // To Do: Add Google Analytics and Matomo.
        umamiId: "",
    },
} as const;
