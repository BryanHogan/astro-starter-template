import type { APIRoute, GetStaticPaths } from "astro";
import { SITE } from "../../../config";
import { getBlogPosts } from "../../../utils/getBlogPosts";
import { generateSocialImage } from "../../../utils/generateSocialImage";

interface Props {
    title: string;
}

export const getStaticPaths = (async () => {
    const posts = await getBlogPosts();

    return posts.map((post) => ({
        params: { id: post.id },
        props: { title: post.data.title } satisfies Props,
    }));
}) satisfies GetStaticPaths;

export const GET = (async ({ props }) => {
    const { title } = props as Props;
    const image = await generateSocialImage({
        title,
        siteUrl: SITE.url,
    });

    return new Response(new Uint8Array(image), {
        headers: {
            "Content-Type": "image/png",
        },
    });
}) satisfies APIRoute;
