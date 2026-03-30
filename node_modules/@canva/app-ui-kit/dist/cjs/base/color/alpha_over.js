"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "alphaOver", {
    enumerable: true,
    get: function() {
        return alphaOver;
    }
});
const _color = require("./color");
function alphaOver(foreground, background) {
    const a1 = foreground.a;
    const a2 = background instanceof _color.RgbColor ? 1 : background.a;
    const a0 = a1 + a2 * (1 - a1);
    if (a0 === 0) return new _color.RgbaColor(0, 0, 0, 0);
    const over = (c1, c2)=>Math.round((c1 * a1 + c2 * a2 * (1 - a1)) / a0);
    const r0 = over(foreground.r, background.r);
    const g0 = over(foreground.g, background.g);
    const b0 = over(foreground.b, background.b);
    return background instanceof _color.RgbColor ? new _color.RgbColor(r0, g0, b0) : new _color.RgbaColor(r0, g0, b0, a0);
}
