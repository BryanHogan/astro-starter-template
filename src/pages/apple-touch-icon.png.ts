import type { APIRoute } from "astro";
import { renderTouchIcon } from "../utils/favicon";

export const GET: APIRoute = () => renderTouchIcon(180);
