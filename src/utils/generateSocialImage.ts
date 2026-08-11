import sharp from "sharp";
import { resolve } from "node:path";

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
    fontSize: number;
    fontWeight: "normal" | "bold";
    width: number;
    height?: number;
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

// These match the neutral scale in src/styles/var.css.
const BACKGROUND_COLOR = "#1C1B1A";
const TITLE_COLOR = "#F2F0E5";
const DOMAIN_COLOR = "#B7B5AC";

// This matches --font-family in src/styles/var.css.
const FONT_FAMILY = "ui-sans-serif, Helvetica Neue, Helvetica, Arial";
const TITLE_FONT_SIZES = [88, 80, 72, 64, 56, 48, 40] as const;
const DOMAIN_FONT_SIZE = 32;

const escapePangoMarkup = (value: string) =>
    value
        .replaceAll("&", "&amp;")
        .replaceAll("<", "&lt;")
        .replaceAll(">", "&gt;");

const renderTextLayer = async ({
    text,
    color,
    fontSize,
    fontWeight,
    width,
    height,
}: TextLayerOptions): Promise<TextLayer> => {
    const data = await sharp({
        text: {
            text: `<span foreground="${color}" weight="${fontWeight}">${escapePangoMarkup(text)}</span>`,
            font: `${FONT_FAMILY} ${fontSize}`,
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

const renderTitleLayer = async (title: string): Promise<TextLayer> => {
    for (const fontSize of TITLE_FONT_SIZES) {
        const layer = await renderTextLayer({
            text: title,
            color: TITLE_COLOR,
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
        color: TITLE_COLOR,
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
    const [titleLayer, domainLayer, faviconLayer] = await Promise.all([
        renderTitleLayer(title),
        renderTextLayer({
            text: new URL(siteUrl).hostname,
            color: DOMAIN_COLOR,
            fontSize: DOMAIN_FONT_SIZE,
            fontWeight: "normal",
            width: TEXT_WIDTH - FAVICON_SIZE - FOOTER_GAP,
        }),
        sharp(resolve("public/favicon.svg"))
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
            background: BACKGROUND_COLOR,
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
