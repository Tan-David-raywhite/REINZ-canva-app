import { alphaOver } from '../../../base/color/alpha_over';
import { RgbaColor } from '../../../base/color/color';
import { CssColors } from '../../../base/color/css_colors';
import { Difference } from '../../../base/color/difference';
import { maxBy } from '../../../base/max_by';
import { colorBlackA10, colorWhiteA10 } from '../tokens/primitive/color';
const DEFAULT_LIGHT = colorWhiteA10;
const DEFAULT_DARK = colorBlackA10;
const DEFAULT_CANDIDATES = [
    DEFAULT_LIGHT,
    DEFAULT_DARK
];
export function getContrastingForegroundColor(backgroundColor, candidates = DEFAULT_CANDIDATES, algorithm = 'apca') {
    if (isUnitTestColorToken(candidates[0])) return candidates[0];
    const parsedBg = CssColors.fromString(backgroundColor);
    const highestContrastFg = maxBy(candidates, (fgString)=>getContrast(algorithm, CssColors.fromString(fgString), parsedBg));
    return highestContrastFg ?? DEFAULT_DARK;
}
export function getContrastingBackgroundColor(foregroundColor, candidates = DEFAULT_CANDIDATES, algorithm = 'apca') {
    if (isUnitTestColorToken(candidates[0])) return candidates[0];
    const parsedFg = CssColors.fromString(foregroundColor);
    const highestContrastBg = maxBy(candidates, (bgString)=>getContrast(algorithm, parsedFg, CssColors.fromString(bgString)));
    return highestContrastBg ?? DEFAULT_LIGHT;
}
function getContrast(algorithm, parsedFg, parsedBg) {
    const opaqueBg = parsedBg instanceof RgbaColor ? parsedBg.toRgb() : parsedBg;
    const blendedFg = parsedFg instanceof RgbaColor ? alphaOver(parsedFg, opaqueBg) : parsedFg;
    const getDifference = algorithm === 'wcag' ? Difference.wcagContrast : Difference.apcaContrast;
    return Math.abs(getDifference(blendedFg, opaqueBg));
}
const isUnitTestColorToken = (token)=>token != null && COLOR_TOKEN_NAME.test(token);
const COLOR_TOKEN_NAME = /^color[A-Z]/;
