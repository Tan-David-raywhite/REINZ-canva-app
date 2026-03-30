"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Lightness", {
    enumerable: true,
    get: function() {
        return Lightness;
    }
});
const _color = require("./color");
const _conversion = require("./conversion");
class Lightness {
    static relativeLuminance(color) {
        let { r, g, b } = _conversion.Conversion.toRgb(color);
        const toLinear = (x)=>x <= 0.03928 ? x / 12.92 : ((x + 0.055) / 1.055) ** 2.4;
        r /= 255;
        g /= 255;
        b /= 255;
        return 0.2126 * toLinear(r) + 0.7152 * toLinear(g) + 0.0722 * toLinear(b);
    }
    static relativeLuminanceToLightness(Y) {
        const { κ, ε } = _color.LAB_CONSTANTS;
        return Y <= ε ? κ * Y : 116 * Math.cbrt(Y) - 16;
    }
    constructor(){}
}
