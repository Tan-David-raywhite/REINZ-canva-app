import { RgbaColor, RgbColor } from './color';
export function alphaOver(foreground, background) {
    const a1 = foreground.a;
    const a2 = background instanceof RgbColor ? 1 : background.a;
    const a0 = a1 + a2 * (1 - a1);
    if (a0 === 0) return new RgbaColor(0, 0, 0, 0);
    const over = (c1, c2)=>Math.round((c1 * a1 + c2 * a2 * (1 - a1)) / a0);
    const r0 = over(foreground.r, background.r);
    const g0 = over(foreground.g, background.g);
    const b0 = over(foreground.b, background.b);
    return background instanceof RgbColor ? new RgbColor(r0, g0, b0) : new RgbaColor(r0, g0, b0, a0);
}
