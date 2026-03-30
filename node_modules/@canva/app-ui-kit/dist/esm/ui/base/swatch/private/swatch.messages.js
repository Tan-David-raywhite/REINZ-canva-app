import { formatId, getString } from '../../i18n/strings';
export const SwatchMessages = {
    cmykInfo: (colorCmykValue) => formatId("+uGBtQ", [colorCmykValue], "CMYK: {0}"),
    colorTitleWithCmykInfo: (colorRgbValue, colorCmykInfo) => formatId("QaHsaQ", [colorRgbValue, colorCmykInfo], "{0} {1}"),
    colorSemiTransparentLabel: (colors) => formatId("kEiw0g", [colors], "{0}, transparent"),
    colorTransparentLabel: () => getString("1zy9jA", "No color"),
    colorLinearGradientLabel: (rotation, colors) => formatId("ba8EUg", [rotation, colors], "Linear gradient {0}°: {1}"),
    colorCircularRadialGradientLabel: (position, colors) => formatId("g4oDmQ", [position, colors], "Circular gradient at {0}: {1}"),
    colorWithTransparencyLabel: (color, transparency) => formatId("hLEWqg", [color, transparency], "{0} with {1} transparency"),
    colorRangeLabel: () => getString("9K/zwA", "Color range"),
    invalidColor: () => getString("DDfRlQ", "Invalid color"),
    deleteTooltip: () => getString("h5nBkw", "Delete color"),
    addColor: () => getString("78YFHw", "Add a new color"),
};
