import { HslColor, RgbaColor, RgbColor } from './color';
import { Conversion } from './conversion';
export class CssColors {
    static fromString(s) {
        if (isValidLongHex(s)) return CssColors.fromLongHexString(s);
        else if (isValidHex(s)) return CssColors.fromHexString(s);
        else if (isValidShortHexString(s)) return CssColors.fromShortHexString(s);
        else if (s.match(RGB_RE)) return CssColors.fromRgbString(s);
        else if (s.match(RGBA_RE)) return CssColors.fromRgbaString(s);
        else if (s.match(HSL_RE)) return CssColors.fromHslString(s);
        else throw new Error(`unrecognized color: ${s}`);
    }
    static fromShortHexString(s) {
        if (!isValidShortHexString(s)) throw new Error(`invalid hexadecimal triplet color: ${s}`);
        const value = parseInt(s.length === 4 ? s.slice(1) : s, 16);
        const r = value >> 8;
        const g = value >> 4 & 0xf;
        const b = value & 0xf;
        return new RgbColor(r * 0x11, g * 0x11, b * 0x11);
    }
    static fromLongHexString(s) {
        if (!isValidLongHex(s)) throw new Error(`invalid hexadecimal color: ${s}`);
        const regularHexString = s.length === 9 ? s.slice(1, 7) : s.slice(0, 6);
        const alphaHexString = s.length === 9 ? s.slice(7) : s.slice(6);
        const rgbColor = CssColors.fromHexString(regularHexString);
        const a = parseInt(alphaHexString, 16) / 255;
        return new RgbaColor(rgbColor.r, rgbColor.g, rgbColor.b, a);
    }
    static fromHexString(s) {
        if (!isValidHex(s)) throw new Error(`invalid hexadecimal color: ${s}`);
        const value = parseInt(s.length === 7 ? s.slice(1) : s, 16);
        const r = value >> 16;
        const g = value >> 8 & 0xff;
        const b = value & 0xff;
        return new RgbColor(r, g, b);
    }
    static fromRgbString(s) {
        const match = RGB_RE.exec(s);
        if (!match) throw new Error(`invalid rgb color: ${s}`);
        return new RgbColor(+match[1], +match[2], +match[3]);
    }
    static fromRgbaString(s) {
        const match = RGBA_RE.exec(s);
        if (!match) throw new Error(`invalid rgba color: ${s}`);
        return new RgbaColor(+match[1], +match[2], +match[3], +match[4]);
    }
    static fromHslString(str) {
        const matches = str.match(HSL_RE);
        if (!matches) throw new Error(`invalid hsla color: ${str}`);
        const h = parseFloat(matches[1]);
        const s = parseFloat(matches[2]);
        const l = parseFloat(matches[3]);
        const a = matches[4] ? parseFloat(matches[4]) : 1;
        return Conversion.toRgb(new HslColor(h, s, l)).toRgbaColor(a);
    }
    static toHexString(c) {
        return `#${toHex(Math.round(c.r))}${toHex(Math.round(c.g))}${toHex(Math.round(c.b))}`;
    }
    static toRgbString(c) {
        return `rgb(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)})`;
    }
    static toRgbaString(c) {
        return `rgba(${Math.round(c.r)},${Math.round(c.g)},${Math.round(c.b)},${c.a})`;
    }
}
const RGB_RE = /^rgb\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*\)$/;
const RGBA_RE = /^rgba\(\s*(\d+)\s*,\s*(\d+)\s*,\s*(\d+)\s*,\s*([0-9]*\.?[0-9]+)\s*\)$/;
const HSL_RE = /^hsla?\(\s*(\d{1,3})\s*[ ,]\s*(\d{1,3})%\s*[ ,]\s*(\d{1,3})%(?:\s*[/,]\s*([0-9]*\.?[0-9]+))?\s*\)$/;
function toHex(n) {
    return (0x100 + n).toString(16).slice(-2);
}
function isValidLongHex(s) {
    if (s.length === 9 && s.charCodeAt(0) === 35) s = s.slice(1);
    else if (s.length !== 8) return false;
    for(let i = 0; i < 8; i++){
        const c = s.charCodeAt(i);
        if (!isValidHexChar(c)) return false;
    }
    return true;
}
function isValidHex(s) {
    if (s.length === 7 && s.charCodeAt(0) === 35) s = s.slice(1);
    else if (s.length !== 6) return false;
    for(let i = 0; i < 6; i++){
        const c = s.charCodeAt(i);
        if (!isValidHexChar(c)) return false;
    }
    return true;
}
function isValidShortHexString(s) {
    if (s.length === 4 && s.charCodeAt(0) === 35) s = s.slice(1);
    else if (s.length !== 3) return false;
    for(let i = 0; i < 3; i++){
        const c = s.charCodeAt(i);
        if (!isValidHexChar(c)) return false;
    }
    return true;
}
function isValidHexChar(c) {
    return (c >= 48 && c <= 57 || c >= 65 && c <= 70 || c >= 97 && c <= 102);
}
