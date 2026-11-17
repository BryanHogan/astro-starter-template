import {
    getCollection,
    type CollectionEntry,
    type CollectionKey,
} from "astro:content";
import { SITE } from "../config";

const titleCollator = new Intl.Collator(SITE.locale);

/** Get a collection's entries in display order, including drafts only during development. */
export async function getEntries<C extends CollectionKey>(collection: C) {
    const entries: CollectionEntry<C>[] = await getCollection(
        collection,
        ({ data }) => !import.meta.env.PROD || !data.draft,
    );

    return entries.sort(compareEntries);
}

/** Entries with `order` sort ascending, entries with `pubDate` newest first, then by title. */
function compareEntries(
    a: CollectionEntry<CollectionKey>,
    b: CollectionEntry<CollectionKey>,
) {
    return (
        getOrder(a) - getOrder(b) ||
        getPublishedTime(b) - getPublishedTime(a) ||
        titleCollator.compare(a.data.title, b.data.title)
    );
}

function getOrder({ data }: CollectionEntry<CollectionKey>) {
    return "order" in data && typeof data.order === "number" ? data.order : 0;
}

function getPublishedTime({ data }: CollectionEntry<CollectionKey>) {
    return "pubDate" in data && data.pubDate instanceof Date
        ? data.pubDate.getTime()
        : 0;
}
