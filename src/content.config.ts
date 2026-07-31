import { defineCollection } from "astro:content";
import { glob } from "astro/loaders";
import { z } from "astro/zod";

const blog = defineCollection({
    loader: glob({
        base: "./src/content/blog",
        // The `[id].astro` route supports one URL segment, so posts stay flat.
        pattern: "*.{md,mdx}",
    }),
    schema: z.object({
        title: z.string().trim().min(1),
        description: z.string().trim().min(1),
        pubDate: z.coerce.date(),
    }),
});

export const collections = { blog };
