import { Preconditions } from '../preconditions';
export function normalizeHex(hex) {
    Preconditions.checkArgument(/^#?[0-9a-fA-F]{6}$/.test(hex));
    if (!hex.startsWith('#')) hex = `#${hex}`;
    return hex.toLowerCase();
}
export function normalizeHue(h) {
    return h - Math.floor(h / 360) * 360;
}
