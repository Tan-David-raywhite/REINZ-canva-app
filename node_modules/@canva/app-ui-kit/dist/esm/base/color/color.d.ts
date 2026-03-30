export type Color = RgbColor | XyzColor | LabColor | HclColor | HslColor | string;
export declare class RgbColor {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    constructor(r: number, g: number, b: number);
    static fromCssString(s: string): RgbColor;
    static fromHexString(s: string): RgbColor;
    static fromRgbString(s: string): RgbColor;
    toRgbaColor(alpha?: number): RgbaColor;
    toHexString(): string;
    toRgbString(): string;
}
export declare class RgbaColor {
    readonly r: number;
    readonly g: number;
    readonly b: number;
    readonly a: number;
    constructor(r: number, g: number, b: number, a: number);
    static fromCssString(s: string): RgbaColor;
    static fromRgbaString(s: string): RgbaColor;
    toRgb(): RgbColor;
    toRgbaString(): string;
}
export declare class LabColor {
    readonly l: number;
    readonly a: number;
    readonly b: number;
    constructor(l: number, a: number, b: number);
}
export declare class HclColor {
    readonly h: number;
    readonly c: number;
    readonly l: number;
    constructor(h: number, c: number, l: number);
}
export declare class XyzColor {
    readonly x: number;
    readonly y: number;
    readonly z: number;
    constructor(x: number, y: number, z: number);
}
export declare class HslColor {
    readonly h: number;
    readonly s: number;
    readonly l: number;
    constructor(h: number, s: number, l: number);
}
export declare const LAB_CONSTANTS: Readonly<{
    D50: XyzColor;
    κ: number;
    ε: number;
}>;
