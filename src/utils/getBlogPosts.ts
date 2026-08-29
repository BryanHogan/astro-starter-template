import { getCollection } from "astro:content";
import { SITE } from "../config";

const titleCollator = new Intl.Collator(SITE.locale);

/** Get blog posts in display order, including drafts only during development. */
export async function getBlogPosts() {
    const posts = await getCollection(
        "blog",
        ({ data }) => !import.meta.env.PROD || !data.draft,
    );

    return posts.sort((a, b) => {
        const dateDifference =
            b.data.pubDate.getTime() - a.data.pubDate.getTime();

        return dateDifference || titleCollator.compare(a.data.title, b.data.title);
    });
}
