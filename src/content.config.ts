import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        // The `[id].astro` route supports one URL segment, so posts stay flat.
        pattern: "*.{md,mdx}",
    }),
    schema: z
        .object({
            title: z.string().trim().min(1),
            description: z.string().trim().min(1),
            pubDate: z.coerce.date(),
            updateDate: z.coerce.date().optional(),
            draft: z.boolean().default(false),
        })
        .transform((data) => ({
            ...data,
            updateDate: data.updateDate ?? data.pubDate,
        })),
});

const docs = defineCollection({
    loader: glob({
        base: "./src/content/docs",
        // The `[id].astro` route supports one URL segment, so docs stay flat.
        pattern: "*.{md,mdx}",
    }),
    schema: z.object({
        title: z.string().trim().min(1),
        description: z.string().trim().min(1),
        /** Position in the docs list and previous/next navigation, lowest first. */
        order: z.number().int(),
        draft: z.boolean().default(false),
    }),
});

export const collections = { blog, docs };
