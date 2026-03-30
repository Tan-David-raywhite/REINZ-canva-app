import { Preconditions } from '../preconditions';
import { Conversion } from './conversion';
import { Lightness } from './lightness';
import { normalizeHue } from './normalize';
export class Difference {
    static de2000(color1, color2, kL = 1, kC = 1, kH = 1) {
        Preconditions.checkArgument(kL > 0);
        Preconditions.checkArgument(kC > 0);
        Preconditions.checkArgument(kH > 0);
        const { l: l1, a: a1, b: b1 } = Conversion.toLab(color1);
        const { l: l2, a: a2, b: b2 } = Conversion.toLab(color2);
        const lBarPrime = (l1 + l2) / 2;
        const c1 = Math.hypot(a1, b1);
        const c2 = Math.hypot(a2, b2);
        const cBar = (c1 + c2) / 2;
        const g = 0.5 * (1 - Math.sqrt(cBar ** 7 / (cBar ** 7 + 25 ** 7)));
        const a1Prime = a1 * (1 + g);
        const a2Prime = a2 * (1 + g);
        const c1Prime = Math.hypot(a1Prime, b1);
        const c2Prime = Math.hypot(a2Prime, b2);
        const cBarPrime = (c1Prime + c2Prime) / 2;
        const h1Prime = normalizeHue(radiansToDegrees(Math.atan2(b1, a1Prime)));
        const h2Prime = normalizeHue(radiansToDegrees(Math.atan2(b2, a2Prime)));
        const hBarPrime = Math.abs(h1Prime - h2Prime) > 180 ? (h1Prime + h2Prime + 360) / 2 : (h1Prime + h2Prime) / 2;
        const t = 1 - 0.17 * Math.cos(degreesToRadians(hBarPrime - 30)) + 0.24 * Math.cos(degreesToRadians(2 * hBarPrime)) + 0.32 * Math.cos(degreesToRadians(3 * hBarPrime + 6)) - 0.2 * Math.cos(degreesToRadians(4 * hBarPrime - 63));
        const ΔhPrime = Math.abs(h2Prime - h1Prime) <= 180 ? h2Prime - h1Prime : h2Prime <= h1Prime ? h2Prime - h1Prime + 360 : h2Prime - h1Prime - 360;
        const ΔLPrime = l2 - l1;
        const ΔCPrime = c2Prime - c1Prime;
        const ΔHPrime = 2 * Math.sqrt(c1Prime * c2Prime) * Math.sin(degreesToRadians(ΔhPrime / 2));
        const sL = 1 + 0.015 * (lBarPrime - 50) ** 2 / Math.sqrt(20 + (lBarPrime - 50) ** 2);
        const sC = 1 + 0.045 * cBarPrime;
        const sH = 1 + 0.015 * cBarPrime * t;
        const Δθ = 30 * Math.exp(-1 * ((hBarPrime - 275) / 25) ** 2);
        const rC = 2 * Math.sqrt(cBarPrime ** 7 / (cBarPrime ** 7 + 25 ** 7));
        const rT = -rC * Math.sin(degreesToRadians(2 * Δθ));
        return Math.sqrt((ΔLPrime / (kL * sL)) ** 2 + (ΔCPrime / (kC * sC)) ** 2 + (ΔHPrime / (kH * sH)) ** 2 + ΔCPrime / (kC * sC) * (ΔHPrime / (kH * sH)) * rT);
    }
    static wcagContrast(c1, c2) {
        const l1 = Lightness.relativeLuminance(c1);
        const l2 = Lightness.relativeLuminance(c2);
        return l1 > l2 ? (l1 + 0.05) / (l2 + 0.05) : (l2 + 0.05) / (l1 + 0.05);
    }
    static apcaContrast(foreground, background) {
        const luminanceForApca = (color)=>{
            const gamma = 2.4;
            const { r, g, b } = Conversion.toRgb(color);
            const gammaCorrection = (x)=>Math.pow(x / 255.0, gamma);
            const rWeight = 0.2126729;
            const gWeight = 0.7151522;
            const bWeight = 0.072175;
            return rWeight * gammaCorrection(r) + gWeight * gammaCorrection(g) + bWeight * gammaCorrection(b);
        };
        const positivePolarityBackgroundContrastExponent = 0.56;
        const positivePolarityForegroundContrastExponent = 0.57;
        const negativePolarityForegroundContrastExponent = 0.62;
        const negativePolarityBackgroundContrastExponent = 0.65;
        const blackLuminanceThreshold = 0.022;
        const contrastMin = 0.001;
        const deltaLuminanceMin = 0.0005;
        const contrastScaleFactor = 1.14;
        const contrastOffset = 0.027;
        const luminanceSoftClampExponent = 1.414;
        let foregroundLuminance = luminanceForApca(foreground);
        let backgroundLuminance = luminanceForApca(background);
        if (foregroundLuminance <= blackLuminanceThreshold) foregroundLuminance += Math.pow(blackLuminanceThreshold - foregroundLuminance, luminanceSoftClampExponent);
        if (backgroundLuminance <= blackLuminanceThreshold) backgroundLuminance += Math.pow(blackLuminanceThreshold - backgroundLuminance, luminanceSoftClampExponent);
        if (Math.abs(backgroundLuminance - foregroundLuminance) < deltaLuminanceMin)
            return 0.0;
        let contrast;
        if (backgroundLuminance > foregroundLuminance) {
            contrast = (Math.pow(backgroundLuminance, positivePolarityBackgroundContrastExponent) - Math.pow(foregroundLuminance, positivePolarityForegroundContrastExponent)) * contrastScaleFactor;
            contrast = contrast < contrastMin ? 0.0 : contrast - contrastOffset;
        } else {
            contrast = (Math.pow(backgroundLuminance, negativePolarityBackgroundContrastExponent) - Math.pow(foregroundLuminance, negativePolarityForegroundContrastExponent)) * contrastScaleFactor;
            contrast = contrast > -contrastMin ? 0.0 : contrast + contrastOffset;
        }
        return contrast * 100.0;
    }
}
function degreesToRadians(a) {
    return a * Math.PI / 180;
}
function radiansToDegrees(a) {
    return a * 180 / Math.PI;
}
