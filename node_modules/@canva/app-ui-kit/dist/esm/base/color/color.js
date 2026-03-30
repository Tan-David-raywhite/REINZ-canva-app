import { Preconditions } from '../preconditions';
import { CssColors } from './css_colors';
import { normalizeHue } from './normalize';
export class RgbColor {
    static fromCssString(s) {
        const color = CssColors.fromString(s);
        return color instanceof RgbColor ? color : color.toRgb();
    }
    static fromHexString(s) {
        return CssColors.fromHexString(s);
    }
    static fromRgbString(s) {
        return CssColors.fromRgbString(s);
    }
    toRgbaColor(alpha = 1) {
        return new RgbaColor(this.r, this.g, this.b, alpha);
    }
    toHexString() {
        return CssColors.toHexString(this);
    }
    toRgbString() {
        return CssColors.toRgbString(this);
    }
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
        Preconditions.checkArgument(0 <= r && r <= 255, 'invalid r: {}', r);
        Preconditions.checkArgument(0 <= g && g <= 255, 'invalid g: {}', g);
        Preconditions.checkArgument(0 <= b && b <= 255, 'invalid b: {}', b);
    }
}
export class RgbaColor {
    static fromCssString(s) {
        const color = CssColors.fromString(s);
        return color instanceof RgbaColor ? color : color.toRgbaColor();
    }
    static fromRgbaString(s) {
        return CssColors.fromRgbaString(s);
    }
    toRgb() {
        return new RgbColor(this.r, this.g, this.b);
    }
    toRgbaString() {
        return CssColors.toRgbaString(this);
    }
    constructor(r, g, b, a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        Preconditions.checkArgument(0 <= r && r <= 255, 'invalid r: {}', r);
        Preconditions.checkArgument(0 <= g && g <= 255, 'invalid g: {}', g);
        Preconditions.checkArgument(0 <= b && b <= 255, 'invalid b: {}', b);
        Preconditions.checkArgument(0 <= a && a <= 1, 'invalid a: {}', a);
    }
}
export class LabColor {
    constructor(l, a, b){
        this.l = l;
        this.a = a;
        this.b = b;
        Preconditions.checkArgument(0 <= l && l <= 100, '{}', l);
    }
}
export class HclColor {
    constructor(h, c, l){
        this.h = h;
        this.c = c;
        this.l = l;
        Preconditions.checkArgument(0 <= l && l <= 100, '{}', l);
        this.h = normalizeHue(h);
    }
}
export class XyzColor {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
export class HslColor {
    constructor(h, s, l){
        this.h = h;
        this.s = s;
        this.l = l;
        Preconditions.checkArgument(0 <= s && s <= 100, 'invalid s: {}', s);
        Preconditions.checkArgument(0 <= l && l <= 100, 'invalid l: {}', l);
        this.h = normalizeHue(h);
    }
}
export const LAB_CONSTANTS = Object.freeze({
    D50: new XyzColor(96.42, 100, 82.51),
    κ: 24389 / 27,
    ε: 216 / 24389
});
