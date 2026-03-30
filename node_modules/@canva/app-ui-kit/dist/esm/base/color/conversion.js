import { Preconditions } from '../preconditions';
import { HclColor, HslColor, LAB_CONSTANTS, LabColor, RgbColor, XyzColor } from './color';
export class Conversion {
    static toLab(color) {
        if (color instanceof RgbColor) {
            const xyz = Conversion.rgbToXyz(color);
            return Conversion.xyzToLab(xyz);
        } else if (color instanceof XyzColor) return Conversion.xyzToLab(color);
        else if (color instanceof HclColor) return Conversion.hclToLab(color);
        else if (color instanceof HslColor) {
            const rgb = Conversion.hslToRgb(color);
            return Conversion.toLab(rgb);
        } else if (typeof color === 'string') {
            const rgb = Conversion.hexToRgb(color);
            const xyz = Conversion.rgbToXyz(rgb);
            return Conversion.xyzToLab(xyz);
        }
        return color;
    }
    static toRgb(color) {
        if (color instanceof XyzColor) return Conversion.xyzToRgb(color);
        else if (color instanceof LabColor) {
            const xyz = Conversion.labToXyz(color);
            return Conversion.xyzToRgb(xyz);
        } else if (color instanceof HclColor) {
            const lab = Conversion.hclToLab(color);
            const xyz = Conversion.labToXyz(lab);
            return Conversion.xyzToRgb(xyz);
        } else if (color instanceof HslColor) return Conversion.hslToRgb(color);
        else if (typeof color === 'string') return Conversion.hexToRgb(color);
        return color;
    }
    static toHcl(color) {
        if (color instanceof RgbColor) {
            const xyz = Conversion.rgbToXyz(color);
            const lab = Conversion.xyzToLab(xyz);
            return Conversion.labToHcl(lab);
        } else if (color instanceof LabColor) return Conversion.labToHcl(color);
        else if (color instanceof XyzColor) {
            const xyz = Conversion.xyzToLab(color);
            return Conversion.labToHcl(xyz);
        } else if (color instanceof HslColor) {
            const rgb = Conversion.hslToRgb(color);
            return Conversion.toHcl(rgb);
        } else if (typeof color === 'string') {
            const rgb = Conversion.hexToRgb(color);
            const xyz = Conversion.rgbToXyz(rgb);
            const lab = Conversion.xyzToLab(xyz);
            return Conversion.labToHcl(lab);
        }
        return color;
    }
    static toHsl(color) {
        if (color instanceof RgbColor) return Conversion.rgbToHsl(color);
        else if (color instanceof HclColor) {
            const rgb = Conversion.toRgb(color);
            return Conversion.rgbToHsl(rgb);
        } else if (color instanceof LabColor) {
            const rgb = Conversion.toRgb(color);
            return Conversion.rgbToHsl(rgb);
        } else if (color instanceof XyzColor) {
            const rgb = Conversion.toRgb(color);
            return Conversion.rgbToHsl(rgb);
        } else if (typeof color === 'string') {
            const rgb = Conversion.hexToRgb(color);
            return Conversion.rgbToHsl(rgb);
        }
        return color;
    }
    static toXyz(color) {
        if (color instanceof RgbColor) return Conversion.rgbToXyz(color);
        else if (color instanceof LabColor) return Conversion.labToXyz(color);
        else if (color instanceof HclColor) {
            const lab = Conversion.hclToLab(color);
            return Conversion.labToXyz(lab);
        } else if (color instanceof HslColor) {
            const rgb = Conversion.hslToRgb(color);
            return Conversion.toXyz(rgb);
        } else if (typeof color === 'string') {
            const rgb = Conversion.hexToRgb(color);
            return Conversion.rgbToXyz(rgb);
        }
        return color;
    }
    static toHex(color) {
        return Conversion.toRgb(color).toHexString();
    }
    static hslToRgb(color) {
        const [h, s, l] = [
            color.h / 360,
            color.s / 100,
            color.l / 100
        ];
        let r, g, b;
        if (s === 0) [r, g, b] = [
            l,
            l,
            l
        ];
        else {
            const saturated = tripletFromHue(h);
            const topBound = l < 0.5 ? l * (1 + s) : l + s - l * s;
            const bottomBound = 2 * l - topBound;
            [r, g, b] = [
                lerp(bottomBound, topBound, saturated[0]),
                lerp(bottomBound, topBound, saturated[1]),
                lerp(bottomBound, topBound, saturated[2])
            ];
        }
        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);
        return new RgbColor(r, g, b);
    }
    static rgbToHsl(color) {
        const [r, g, b] = [
            color.r / 255,
            color.g / 255,
            color.b / 255
        ];
        const min = Math.min(r, g, b);
        const max = Math.max(r, g, b);
        const range = max - min;
        const l = (min + max) / 2;
        let s;
        if (range === 0) s = 0;
        else if (l <= 0.5) s = (max - min) / (max + min);
        else s = (max - min) / (2 - max - min);
        let h;
        if (range === 0) h = 0;
        else if (max === r) h = (g - b) / range * 60;
        else if (max === g) h = (b - r) / range * 60 + 120;
        else h = (r - g) / range * 60 + 240;
        return new HslColor(h, s * 100, l * 100);
    }
    static hclToLab(color) {
        const h = color.h * Math.PI / 180;
        const a = Math.cos(h) * color.c;
        const b = Math.sin(h) * color.c;
        return new LabColor(color.l, a, b);
    }
    static labToHcl(color) {
        const { a, b } = color;
        const h = Math.atan2(b, a) * 180 / Math.PI;
        const c = Math.sqrt(a ** 2 + b ** 2);
        return new HclColor(h, c, color.l);
    }
    static labToXyz(color) {
        const { D50, κ, ε } = LAB_CONSTANTS;
        const { l, a, b } = color;
        const fy = (l + 16) / 116;
        const fx = fy + a / 500;
        const fz = fy - b / 200;
        let x = fx ** 3 > ε ? fx ** 3 : (116 * fx - 16) / κ;
        let y = l > κ * ε ? ((l + 16) / 116) ** 3 : l / κ;
        let z = fz ** 3 > ε ? fz ** 3 : (116 * fz - 16) / κ;
        x *= D50.x;
        y *= D50.y;
        z *= D50.z;
        return new XyzColor(x, y, z);
    }
    static xyzToLab(color) {
        const { D50, κ, ε } = LAB_CONSTANTS;
        let { x, y, z } = color;
        x /= D50.x;
        y /= D50.y;
        z /= D50.z;
        const f = (v)=>v > ε ? Math.cbrt(v) : (κ * v + 16) / 116;
        const fx = f(x);
        const fy = f(y);
        const fz = f(z);
        const l = 116 * fy - 16;
        const a = 500 * (fx - fy);
        const b = 200 * (fy - fz);
        return new LabColor(l, a, b);
    }
    static xyzToRgb(color) {
        const [x, y, z] = [
            color.x / 100,
            color.y / 100,
            color.z / 100
        ];
        let r = 3.1338561 * x - 1.6168667 * y - 0.4906146 * z;
        let g = -0.9787684 * x + 1.9161415 * y + 0.033454 * z;
        let b = 0.0719453 * x - 0.2289914 * y + 1.4052427 * z;
        const delinearize = (v)=>v <= 0.0031308 ? v * 12.92 : 1.055 * v ** (1 / 2.4) - 0.055;
        r = delinearize(r);
        g = delinearize(g);
        b = delinearize(b);
        r = Math.round(r * 255);
        g = Math.round(g * 255);
        b = Math.round(b * 255);
        const clamp = (v)=>Math.max(Math.min(v, 255), 0);
        r = clamp(r);
        g = clamp(g);
        b = clamp(b);
        return new RgbColor(r, g, b);
    }
    static rgbToXyz(color) {
        let [r, g, b] = [
            color.r / 255,
            color.g / 255,
            color.b / 255
        ];
        const linearize = (v)=>v <= 0.04045 ? v / 12.92 : ((v + 0.055) / 1.055) ** 2.4;
        r = linearize(r);
        g = linearize(g);
        b = linearize(b);
        const x = 0.4360747 * r + 0.3850649 * g + 0.1430804 * b;
        const y = 0.2225045 * r + 0.7168786 * g + 0.0606169 * b;
        const z = 0.0139322 * r + 0.0971045 * g + 0.7141733 * b;
        return new XyzColor(x * 100, y * 100, z * 100);
    }
    static hexToRgb(c) {
        Preconditions.checkArgument(/^#[0-9a-f]{6}$/.test(c), 'non-compliant hex code');
        return RgbColor.fromHexString(c);
    }
}
function lerp(a, b, mix) {
    return a + (b - a) * mix;
}
function tripletFromHue(hue) {
    hue = (hue + 1) % 1;
    const segmentProgress = hue * 6 % 1;
    if (hue < 1 / 6) return [
        1,
        segmentProgress,
        0
    ];
    else if (hue < 2 / 6) return [
        1 - segmentProgress,
        1,
        0
    ];
    else if (hue < 0.5) return [
        0,
        1,
        segmentProgress
    ];
    else if (hue < 4 / 6) return [
        0,
        1 - segmentProgress,
        1
    ];
    else if (hue < 5 / 6) return [
        segmentProgress,
        0,
        1
    ];
    else return [
        1,
        0,
        1 - segmentProgress
    ];
}
