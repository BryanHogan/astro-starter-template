import type { APIRoute, GetStaticPaths } from "astro";
import type { CollectionKey } from "astro:content";
import { SITE } from "../../../config";
import { collections } from "../../../content.config";
import { getEntries } from "../../../utils/getEntries";
import { generateSocialImage } from "../../../utils/generateSocialImage";

interface Props {
    title: string;
}

export const getStaticPaths = (async () => {
    const collectionKeys = Object.keys(collections) as CollectionKey[];
    const paths = await Promise.all(
        collectionKeys.map(async (collection) =>
            (await getEntries(collection)).map((entry) => ({
                params: { collection, id: entry.id },
                props: { title: entry.data.title } satisfies Props,
            })),
        ),
    );

    return paths.flat();
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
