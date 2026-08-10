/** Site-wide config — the single source of truth for site-specific information. */
export const SITE = {
    /** Canonical origin, no trailing slash. */
    url: __SITE_URL_JSON__,

    /** Brand and default metadata. */
    name: __SITE_NAME_JSON__,
    title: __SITE_NAME_JSON__,
    description: __SITE_DESCRIPTION_JSON__,

    /** Person behind the site. */
    author: __SITE_AUTHOR_JSON__,

    /** BCP-47 language tag used for page and social metadata. */
    locale: "en-US",

    /** Browser UI color. Matches --color-accent-500. */
    themeColor: "#3171B2",

    /** First year for the footer copyright range. */
    startYear: __START_YEAR__,

    /** Default social sharing image. */
    ogImage: "/og-default.png",
    ogImageAlt: __OG_IMAGE_ALT_JSON__,

    header: {
        links: [
            { label: "Blog", href: "/blog" },
            { label: "About", href: "/about" },
            { label: "Contact", href: "/contact" },
        ],
    },

    /** Add profile URLs to display them in the footer and structured data. */
    social: [],

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
        utilityLinks: [],
    },

    /** Add an Umami website ID later to enable analytics. */
    analytics: {
        umamiId: "",
    },
} as const;
