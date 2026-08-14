import { readFile } from "node:fs/promises";
import { resolve } from "node:path";
import sharp from "sharp";

interface SocialImageOptions {
    title: string;
    siteUrl: string;
}

interface TextLayer {
    data: Buffer;
    width: number;
    height: number;
}

interface TextLayerOptions {
    text: string;
    color: string;
    fontFamily: string;
    fontSize: number;
    fontWeight: "normal" | "bold";
    width: number;
    height?: number;
}

interface SocialImageStyles {
    backgroundColor: string;
    titleColor: string;
    domainColor: string;
    fontFamily: string;
}

const IMAGE_WIDTH = 1200;
const IMAGE_HEIGHT = 630;
const HORIZONTAL_PADDING = 96;
const TEXT_WIDTH = IMAGE_WIDTH - HORIZONTAL_PADDING * 2;
const TITLE_REGION_TOP = 88;
const TITLE_REGION_HEIGHT = 348;
const DOMAIN_TOP = 490;
const FAVICON_SIZE = 48;
const FOOTER_GAP = 16;
const TITLE_FONT_SIZES = [88, 80, 72, 64, 56, 48, 40] as const;
const DOMAIN_FONT_SIZE = 32;
const VARIABLES_PATH = resolve("src/styles/var.css");
const FAVICON_PATH = resolve("public/favicon.svg");

const resolveCustomProperty = (
    name: string,
    properties: Map<string, string>,
    resolving = new Set<string>(),
): string => {
    if (resolving.has(name)) {
        throw new Error(`Circular CSS custom-property reference: ${name}`);
    }

    const value = properties.get(name);

    if (value === undefined) {
        throw new Error(`Missing CSS custom property: ${name}`);
    }

    const nextResolving = new Set(resolving).add(name);

    // This intentionally supports only exact var(--token) references; CSS fallbacks or whitespace inside var() remain unresolved and can make Sharp/Pango reject the value during social-image generation.
    return value.replace(/var\((--[\w-]+)\)/g, (_, referencedName: string) =>
        resolveCustomProperty(referencedName, properties, nextResolving),
    );
};

const loadSocialImageStyles = async (): Promise<SocialImageStyles> => {
    const css = await readFile(VARIABLES_PATH, "utf8");
    const rootBlock = css.match(/:root\s*\{([\s\S]*?)^\s*\}/m)?.[1];

    if (rootBlock === undefined) {
        throw new Error("Could not find the :root block in src/styles/var.css.");
    }

    const properties = new Map<string, string>();

    for (const match of rootBlock.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)) {
        properties.set(match[1], match[2].trim());
    }

    return {
        backgroundColor: resolveCustomProperty("--color-background", properties),
        titleColor: resolveCustomProperty("--color-text", properties),
        domainColor: resolveCustomProperty("--color-text-subtle", properties),
        // Pango accepts the same family list but does not need CSS quotation marks.
        fontFamily: resolveCustomProperty("--font-family", properties).replace(
            /["']/g,
            "",
        ),
    };
};

let socialImageStylesPromise: Promise<SocialImageStyles> | undefined;

const getSocialImageStyles = () => {
    socialImageStylesPromise ??= loadSocialImageStyles();

    return socialImageStylesPromise;
};

const escapePangoMarkup = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const renderTextLayer = async ({
    text,
    color,
    fontFamily,
    fontSize,
    fontWeight,
    width,
    height,
}: TextLayerOptions): Promise<TextLayer> => {
    const data = await sharp({
        text: {
            text: `<span foreground="${color}" weight="${fontWeight}">${escapePangoMarkup(text)}</span>`,
            font: `${fontFamily} ${fontSize}`,
            width,
            ...(height === undefined ? {} : { height }),
            align: "left",
            wrap: "word-char",
            rgba: true,
            dpi: 72,
        },
    })
        .png()
        .toBuffer();

    const metadata = await sharp(data).metadata();

    if (metadata.width === undefined || metadata.height === undefined) {
        throw new Error("Sharp did not return dimensions for a social-image text layer.");
    }

    return {
        data,
        width: metadata.width,
        height: metadata.height,
    };
};

const renderTitleLayer = async (
    title: string,
    styles: SocialImageStyles,
): Promise<TextLayer> => {
    for (const fontSize of TITLE_FONT_SIZES) {
        const layer = await renderTextLayer({
            text: title,
            color: styles.titleColor,
            fontFamily: styles.fontFamily,
            fontSize,
            fontWeight: "bold",
            width: TEXT_WIDTH,
        });

        if (layer.height <= TITLE_REGION_HEIGHT) {
            return layer;
        }
    }

    // Extremely long titles get a final auto-fit pass so they cannot overflow.
    return renderTextLayer({
        text: title,
        color: styles.titleColor,
        fontFamily: styles.fontFamily,
        fontSize: TITLE_FONT_SIZES.at(-1) ?? 40,
        fontWeight: "bold",
        width: TEXT_WIDTH,
        height: TITLE_REGION_HEIGHT,
    });
};

/** Generate the 1200 x 630 PNG used when a blog post is shared. */
export const generateSocialImage = async ({
    title,
    siteUrl,
}: SocialImageOptions): Promise<Buffer> => {
    const styles = await getSocialImageStyles();
    const [titleLayer, domainLayer, faviconLayer] = await Promise.all([
        renderTitleLayer(title, styles),
        renderTextLayer({
            text: new URL(siteUrl).hostname,
            color: styles.domainColor,
            fontFamily: styles.fontFamily,
            fontSize: DOMAIN_FONT_SIZE,
            fontWeight: "normal",
            width: TEXT_WIDTH - FAVICON_SIZE - FOOTER_GAP,
        }),
        sharp(FAVICON_PATH)
            .resize(FAVICON_SIZE, FAVICON_SIZE)
            .png()
            .toBuffer(),
    ]);

    const titleTop =
        TITLE_REGION_TOP +
        Math.max(0, Math.floor((TITLE_REGION_HEIGHT - titleLayer.height) / 2));
    const footerHeight = Math.max(FAVICON_SIZE, domainLayer.height);

    return sharp({
        create: {
            width: IMAGE_WIDTH,
            height: IMAGE_HEIGHT,
            channels: 4,
            background: styles.backgroundColor,
        },
    })
        .composite([
            {
                input: titleLayer.data,
                top: titleTop,
                left: HORIZONTAL_PADDING,
            },
            {
                input: faviconLayer,
                top: DOMAIN_TOP + Math.floor((footerHeight - FAVICON_SIZE) / 2),
                left: HORIZONTAL_PADDING,
            },
            {
                input: domainLayer.data,
                top: DOMAIN_TOP + Math.floor((footerHeight - domainLayer.height) / 2),
                left: HORIZONTAL_PADDING + FAVICON_SIZE + FOOTER_GAP,
            },
        ])
        .png()
        .toBuffer();
};
