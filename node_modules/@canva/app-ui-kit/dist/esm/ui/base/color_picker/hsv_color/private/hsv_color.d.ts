import { RgbaColor, RgbColor } from '../../../../../base/color/color';
export declare class HsvColor {
    readonly h: number;
    readonly s: number;
    readonly v: number;
    readonly alpha: number;
    constructor(h: number, s: number, v: number, alpha?: number);
    static fromHexString(hex: string, alpha?: number): HsvColor;
    with(channels: Partial<HsvColor>): HsvColor;
    matchHexString(target: string): HsvColor;
    toRgb(): RgbColor;
    toRgba(): RgbaColor;
    equals(that: HsvColor): boolean;
}
