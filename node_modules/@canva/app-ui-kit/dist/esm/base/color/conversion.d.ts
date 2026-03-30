import type { Color } from './color';
import { HclColor, HslColor, LabColor, RgbColor, XyzColor } from './color';
export declare class Conversion {
    static toLab(color: Color): LabColor;
    static toRgb(color: Color): RgbColor;
    static toHcl(color: Color): HclColor;
    static toHsl(color: Color): HslColor;
    static toXyz(color: Color): XyzColor;
    static toHex(color: Color): string;
    private static hslToRgb;
    private static rgbToHsl;
    private static hclToLab;
    private static labToHcl;
    private static labToXyz;
    private static xyzToLab;
    private static xyzToRgb;
    private static rgbToXyz;
    private static hexToRgb;
}
