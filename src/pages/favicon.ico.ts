import type { APIRoute } from "astro";
import { generateFaviconIco } from "../utils/favicon";

export const GET: APIRoute = async () =>
    new Response(new Uint8Array(await generateFaviconIco()), {
        headers: { "Content-Type": "image/vnd.microsoft.icon" },
    });
