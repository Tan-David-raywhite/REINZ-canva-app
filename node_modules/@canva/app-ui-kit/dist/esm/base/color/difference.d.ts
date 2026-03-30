import type { Color } from './color';
export declare class Difference {
    static de2000(color1: Color, color2: Color, kL?: number, kC?: number, kH?: number): number;
    static wcagContrast(c1: Color, c2: Color): number;
    static apcaContrast(foreground: Color, background: Color): number;
}
