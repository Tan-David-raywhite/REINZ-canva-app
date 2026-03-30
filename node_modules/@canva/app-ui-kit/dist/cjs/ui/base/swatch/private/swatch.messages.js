"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SwatchMessages = void 0;
const strings_1 = require('../../i18n/strings');
exports.SwatchMessages = {
    cmykInfo: (colorCmykValue) => (0, strings_1.formatId)("+uGBtQ", [colorCmykValue], "CMYK: {0}"),
    colorTitleWithCmykInfo: (colorRgbValue, colorCmykInfo) => (0, strings_1.formatId)("QaHsaQ", [colorRgbValue, colorCmykInfo], "{0} {1}"),
    colorSemiTransparentLabel: (colors) => (0, strings_1.formatId)("kEiw0g", [colors], "{0}, transparent"),
    colorTransparentLabel: () => (0, strings_1.getString)("1zy9jA", "No color"),
    colorLinearGradientLabel: (rotation, colors) => (0, strings_1.formatId)("ba8EUg", [rotation, colors], "Linear gradient {0}°: {1}"),
    colorCircularRadialGradientLabel: (position, colors) => (0, strings_1.formatId)("g4oDmQ", [position, colors], "Circular gradient at {0}: {1}"),
    colorWithTransparencyLabel: (color, transparency) => (0, strings_1.formatId)("hLEWqg", [color, transparency], "{0} with {1} transparency"),
    colorRangeLabel: () => (0, strings_1.getString)("9K/zwA", "Color range"),
    invalidColor: () => (0, strings_1.getString)("DDfRlQ", "Invalid color"),
    deleteTooltip: () => (0, strings_1.getString)("h5nBkw", "Delete color"),
    addColor: () => (0, strings_1.getString)("78YFHw", "Add a new color"),
};
