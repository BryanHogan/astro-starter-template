import rss from "@astrojs/rss";
import { getCollection } from "astro:content";
import { SITE } from "../config";

export async function GET() {
    const titleCollator = new Intl.Collator(SITE.locale);
    const posts = (await getCollection("blog")).sort((a, b) => {
        const dateDifference =
            b.data.pubDate.getTime() - a.data.pubDate.getTime();

        return dateDifference || titleCollator.compare(a.data.title, b.data.title);
    });

    return rss({
        title: `${SITE.name} Blog`,
        description: SITE.description,
        site: SITE.url,
        trailingSlash: false,
        customData: `<language>${SITE.locale}</language>`,
        items: posts.map((post) => ({
            title: post.data.title,
            description: post.data.description,
            pubDate: post.data.pubDate,
            link: `/blog/${post.id}`,
        })),
    });
}
