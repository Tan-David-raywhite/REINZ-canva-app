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
    get fixPrecisionError () {
        return fixPrecisionError;
    },
    get generateSwatchLabel () {
        return generateSwatchLabel;
    },
    get getSwatchName () {
        return getSwatchName;
    },
    get getValidGradientString () {
        return getValidGradientString;
    },
    get isFillObject () {
        return isFillObject;
    },
    get linearGradientLine () {
        return linearGradientLine;
    },
    get normalizeValue () {
        return normalizeValue;
    },
    get radialGradientRadius () {
        return radialGradientRadius;
    },
    get toStripePosition () {
        return toStripePosition;
    },
    get toStripeWidth () {
        return toStripeWidth;
    },
    get toVerticalStripeBox () {
        return toVerticalStripeBox;
    },
    get useContrastingColors () {
        return useContrastingColors;
    }
});
const _color = require('../../../../base/color/color');
const _conversion = require('../../../../base/color/conversion');
const _css_colors = require('../../../../base/color/css_colors');
const _preconditions = require('../../../../base/preconditions');
const _unique = require('../../../../base/unique');
const _escape_hatch = require('../../theme/escape_hatch');
const _swatchmessages = require("./swatch.messages");
function isFillObject(color) {
    if (typeof color === 'object' && color != null && 'type' in color) return color.type === 'linear' || color.type === 'radial';
    return false;
}
const toStripePosition = (index, totalStripes)=>{
    const stripePercentage = totalStripes > 0 ? 100 / totalStripes : 0;
    const positionPercentage = index * stripePercentage;
    return `${positionPercentage.toFixed(2)}%`;
};
const toStripeWidth = (width, listSize)=>{
    const swatchWidth = width > 0 ? width : 0;
    const stripeWidth = listSize > 0 ? swatchWidth / listSize : swatchWidth;
    return `${Math.ceil(stripeWidth)}px`;
};
const isGradient = (color)=>/gradient/i.test(color);
const getValidGradientString = (color)=>isGradient(color) ? '' : `linear-gradient(to right, ${color}, ${color})`;
const normalizeValue = (v)=>{
    return v.toFixed(3).replace(/\.?0*$/, '');
};
const convertToPercentage = (n)=>{
    return n <= 1 ? `${normalizeValue(n * 100)}%` : `${n}%`;
};
const convertColorToHex = (color)=>{
    const { r, g, b } = _css_colors.CssColors.fromString(color);
    return _conversion.Conversion.toHex(new _color.RgbColor(r, g, b));
};
const generateGradientLabel = (color)=>{
    const stops = color.stops.map((c)=>c.transparency ? _swatchmessages.SwatchMessages.colorWithTransparencyLabel(convertColorToHex(c.color), convertToPercentage(c.transparency)) : convertColorToHex(c.color)).join(`, `);
    switch(color.type){
        case 'linear':
            return _swatchmessages.SwatchMessages.colorLinearGradientLabel(color.rotation, stops);
        case 'radial':
            {
                const { center: { top: y, left: x } } = color;
                return _swatchmessages.SwatchMessages.colorCircularRadialGradientLabel(`${convertToPercentage(x)} ${convertToPercentage(y)}`, stops);
            }
        default:
            throw new _preconditions.UnreachableError(color);
    }
};
const generateSwatchLabel = ({ areAllColorsTransparent, colors, rgbToCmyk, fill, isAtleastOneColorTransparent, areNoColorsApplied })=>{
    if (areAllColorsTransparent || areNoColorsApplied) return _swatchmessages.SwatchMessages.colorTransparentLabel();
    if (Array.isArray(colors) && colors.length === 1 && typeof colors[0] === 'string') return getColorTooltipLabel(colors[0], rgbToCmyk);
    if (Array.isArray(fill)) {
        const generatedLabel = fill.map((color)=>{
            if (typeof color === 'string') return getColorTooltipLabel(color);
            if (color == null) return undefined;
            if (isFillObject(color)) return generateGradientLabel(color);
            return undefined;
        }).filter(Boolean).join(', ');
        return isAtleastOneColorTransparent ? _swatchmessages.SwatchMessages.colorSemiTransparentLabel(generatedLabel) : generatedLabel || _swatchmessages.SwatchMessages.invalidColor();
    }
    return _swatchmessages.SwatchMessages.invalidColor();
};
const RGBA_RE = /^rgba\((\d+),\s*(\d+),\s*(\d+),\s*([0-9]*\.?[0-9]+)\)$/;
const getColorTooltipLabel = (color, rgbToCmyk)=>{
    const cmyk = rgbToCmyk?.get(color)?.split(',').join(', ');
    const cmykMessage = cmyk && _swatchmessages.SwatchMessages.cmykInfo(cmyk);
    if (cmykMessage) return _swatchmessages.SwatchMessages.colorTitleWithCmykInfo(color, cmykMessage);
    else if (color === 'circularSpectrum' || color === 'linearSpectrum') return _swatchmessages.SwatchMessages.colorRangeLabel();
    else if (color.match(RGBA_RE)) {
        const { a } = _css_colors.CssColors.fromRgbaString(color);
        const transparency = 1 - a;
        if (transparency > 0) return _swatchmessages.SwatchMessages.colorWithTransparencyLabel(convertColorToHex(color), convertToPercentage(transparency));
        return convertColorToHex(color);
    }
    try {
        return convertColorToHex(color);
    } catch  {
        return color;
    }
};
const getSwatchName = (colors, colorNames)=>{
    if (colorNames == null || colors == null || colors.length > 1 || colors[0] == null) return;
    const color = colors[0];
    if (typeof color === 'string') return colorNames.get(color);
    for (const [key, name] of colorNames.entries()){
        if (isFillObject(key) && fillObjectEquals(key, color)) return name;
    }
    return undefined;
};
function useContrastingColors(colors, shouldContrastColor) {
    const colorList = colors === 'circularSpectrum' || colors === 'linearSpectrum' ? [
        colors
    ] : colors;
    const uniqueColors = (0, _unique.unique)(colorList);
    const themeColor = (0, _escape_hatch.useThemedMedia)({
        value: {
            light: '#ffffff',
            dark: '#000000'
        }
    });
    const nonContrastColor = themeColor || {
        value: '#ffffff'
    };
    let themeColors;
    if (nonContrastColor.value === '#ffffff') themeColors = [
        '#ffffff',
        'white',
        '#fff'
    ];
    else themeColors = [
        '#000000',
        'black',
        '#000'
    ];
    const uniqueColor = Array.isArray(uniqueColors) && uniqueColors.length === 1 && typeof uniqueColors[0] === 'string' ? uniqueColors[0] : null;
    if (shouldContrastColor && uniqueColor && themeColors.includes(uniqueColor))
    return 'circularSpectrum';
    return uniqueColors;
}
const degreesToRadians = (a)=>a * Math.PI / 180;
function linearGradientLine({ box: { top, left, height, width }, rotation }) {
    const rad = degreesToRadians(rotation);
    const length = Math.abs(width * Math.sin(rad)) + Math.abs(height * Math.cos(rad));
    const center = {
        x: left + width / 2,
        y: top + height / 2
    };
    const yDiff = Math.sin(rad - Math.PI / 2) * length / 2;
    const xDiff = Math.cos(rad - Math.PI / 2) * length / 2;
    return {
        length,
        center,
        start: {
            x: center.x - xDiff,
            y: center.y - yDiff
        },
        end: {
            x: center.x + xDiff,
            y: center.y + yDiff
        }
    };
}
function radialGradientRadius({ box, center }) {
    const distX = Math.max(center.left, 1 - center.left) * box.width;
    const distY = Math.max(center.top, 1 - center.top) * box.height;
    return Math.sqrt(distX * distX + distY * distY);
}
function toVerticalStripeBox(container, numStripes, index) {
    const { top, height } = container;
    const width = container.width / numStripes;
    const left = width * index;
    return {
        top,
        left,
        height,
        width
    };
}
function fixPrecisionError(p) {
    const rounded = Math.round(p * 1000) / 1000;
    return Math.abs(p - rounded) < 1e-10 ? rounded : p;
}
function fillObjectEquals(f1, f2) {
    if (f1.type !== f2.type) return false;
    if (f1.type === 'linear' && f2.type === 'linear' && fixPrecisionError(f1.rotation) !== fixPrecisionError(f2.rotation)) return false;
    if (f1.type === 'radial' && f2.type === 'radial' && (fixPrecisionError(f1.center.top) !== fixPrecisionError(f2.center.top) || fixPrecisionError(f1.center.left) !== fixPrecisionError(f2.center.left))) return false;
    if (f1.stops.length !== f2.stops.length) return false;
    const [sortedStops1, sortedStops2] = [
        f1,
        f2
    ].map((f)=>({
            stops: [
                ...f.stops
            ].sort((a, b)=>a.position - b.position)
        }));
    return sortedStops1.stops.every((stop1, i)=>{
        const stop2 = sortedStops2.stops[i];
        return stop1.color === stop2.color && fixPrecisionError(stop1.position) === fixPrecisionError(stop2.position) && (stop1.transparency === stop2.transparency || stop1.transparency != null && stop2.transparency != null && fixPrecisionError(stop1.transparency) === fixPrecisionError(stop2.transparency));
    });
}
