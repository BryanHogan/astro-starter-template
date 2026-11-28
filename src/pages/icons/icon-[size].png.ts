import type { APIRoute, GetStaticPaths } from "astro";
import { ANDROID_ICON_SIZES, renderTouchIcon } from "../../utils/favicon";

export const getStaticPaths = (() =>
    ANDROID_ICON_SIZES.map((size) => ({
        params: { size: String(size) },
        props: { size },
    }))
) satisfies GetStaticPaths;

export const GET: APIRoute = ({ props }) => renderTouchIcon(props.size);
