import sharp from "sharp";

export const ANDROID_ICON_SIZES = [192, 512] as const;
const FAVICON_PATH = "public/favicon.svg";

export async function renderTouchIcon(size: number): Promise<Response> {
    const padding = Math.round(size / 8);
    const artworkSize = size - padding * 2;
    const image = await sharp(FAVICON_PATH)
        .resize(artworkSize, artworkSize, { fit: "contain", background: "white" })
        .flatten({ background: "white" })
        .extend({ top: padding, right: padding, bottom: padding, left: padding, background: "white" })
        .png()
        .toBuffer();

    return new Response(new Uint8Array(image), {
        headers: { "Content-Type": "image/png" },
    });
}

export async function generateFaviconIco(): Promise<Buffer> {
    const sizes = [16, 32, 48];
    const frames = await Promise.all(sizes.map((size) =>
        sharp(FAVICON_PATH)
            .resize(size, size, { fit: "contain", background: "transparent" })
            .ensureAlpha()
            .png()
            .toBuffer()
    ));

    // An ICO starts with a 6-byte header and one 16-byte directory entry per frame.
    const entrySize = 16;
    const headerSize = 6;
    const directory = Buffer.alloc(headerSize + entrySize * frames.length);
    directory.writeUInt16LE(1, 2); // Icon resource type
    directory.writeUInt16LE(frames.length, 4);

    let frameOffset = directory.length;
    frames.forEach((frame, index) => {
        const entry = headerSize + entrySize * index;
        directory[entry] = sizes[index];
        directory[entry + 1] = sizes[index];
        directory.writeUInt16LE(1, entry + 4); // Color planes
        directory.writeUInt16LE(32, entry + 6); // Bits per pixel
        directory.writeUInt32LE(frame.length, entry + 8);
        directory.writeUInt32LE(frameOffset, entry + 12);
        frameOffset += frame.length;
    });
    return Buffer.concat([directory, ...frames]);
}
