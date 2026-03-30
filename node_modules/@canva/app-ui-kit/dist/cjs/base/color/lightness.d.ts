import type { Color } from './color';
export declare class Lightness {
    private constructor();
    static relativeLuminance(color: Color): number;
    static relativeLuminanceToLightness(Y: number): number;
}
