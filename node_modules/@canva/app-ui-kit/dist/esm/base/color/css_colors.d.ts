import { RgbaColor, RgbColor } from './color';
export declare class CssColors {
    static fromString(s: string): RgbColor | RgbaColor;
    static fromShortHexString(s: string): RgbColor;
    static fromLongHexString(s: string): RgbaColor;
    static fromHexString(s: string): RgbColor;
    static fromRgbString(s: string): RgbColor;
    static fromRgbaString(s: string): RgbaColor;
    static fromHslString(str: string): RgbaColor;
    static toHexString(c: RgbColor): string;
    static toRgbString(c: RgbColor): string;
    static toRgbaString(c: RgbaColor): string;
}
