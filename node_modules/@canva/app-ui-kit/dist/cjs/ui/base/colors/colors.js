"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get getContrastingBackgroundColor () {
        return getContrastingBackgroundColor;
    },
    get getContrastingForegroundColor () {
        return getContrastingForegroundColor;
    }
});
const _alpha_over = require('../../../base/color/alpha_over');
const _color = require('../../../base/color/color');
const _css_colors = require('../../../base/color/css_colors');
const _difference = require('../../../base/color/difference');
const _max_by = require('../../../base/max_by');
const _color1 = require('../tokens/primitive/color');
const DEFAULT_LIGHT = _color1.colorWhiteA10;
const DEFAULT_DARK = _color1.colorBlackA10;
const DEFAULT_CANDIDATES = [
    DEFAULT_LIGHT,
    DEFAULT_DARK
];
function getContrastingForegroundColor(backgroundColor, candidates = DEFAULT_CANDIDATES, algorithm = 'apca') {
    if (isUnitTestColorToken(candidates[0])) return candidates[0];
    const parsedBg = _css_colors.CssColors.fromString(backgroundColor);
    const highestContrastFg = (0, _max_by.maxBy)(candidates, (fgString)=>getContrast(algorithm, _css_colors.CssColors.fromString(fgString), parsedBg));
    return highestContrastFg ?? DEFAULT_DARK;
}
function getContrastingBackgroundColor(foregroundColor, candidates = DEFAULT_CANDIDATES, algorithm = 'apca') {
    if (isUnitTestColorToken(candidates[0])) return candidates[0];
    const parsedFg = _css_colors.CssColors.fromString(foregroundColor);
    const highestContrastBg = (0, _max_by.maxBy)(candidates, (bgString)=>getContrast(algorithm, parsedFg, _css_colors.CssColors.fromString(bgString)));
    return highestContrastBg ?? DEFAULT_LIGHT;
}
function getContrast(algorithm, parsedFg, parsedBg) {
    const opaqueBg = parsedBg instanceof _color.RgbaColor ? parsedBg.toRgb() : parsedBg;
    const blendedFg = parsedFg instanceof _color.RgbaColor ? (0, _alpha_over.alphaOver)(parsedFg, opaqueBg) : parsedFg;
    const getDifference = algorithm === 'wcag' ? _difference.Difference.wcagContrast : _difference.Difference.apcaContrast;
    return Math.abs(getDifference(blendedFg, opaqueBg));
}
const isUnitTestColorToken = (token)=>token != null && COLOR_TOKEN_NAME.test(token);
const COLOR_TOKEN_NAME = /^color[A-Z]/;
