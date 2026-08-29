import rss from "@astrojs/rss";
import { SITE } from "../config";
import { getBlogPosts } from "../utils/getBlogPosts";

export async function GET() {
    const posts = await getBlogPosts();

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
