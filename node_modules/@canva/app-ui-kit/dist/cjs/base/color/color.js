"use strict"
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
    get HclColor () {
        return HclColor;
    },
    get HslColor () {
        return HslColor;
    },
    get LAB_CONSTANTS () {
        return LAB_CONSTANTS;
    },
    get LabColor () {
        return LabColor;
    },
    get RgbColor () {
        return RgbColor;
    },
    get RgbaColor () {
        return RgbaColor;
    },
    get XyzColor () {
        return XyzColor;
    }
});
const _preconditions = require('../preconditions');
const _css_colors = require("./css_colors");
const _normalize = require("./normalize");
class RgbColor {
    static fromCssString(s) {
        const color = _css_colors.CssColors.fromString(s);
        return color instanceof RgbColor ? color : color.toRgb();
    }
    static fromHexString(s) {
        return _css_colors.CssColors.fromHexString(s);
    }
    static fromRgbString(s) {
        return _css_colors.CssColors.fromRgbString(s);
    }
    toRgbaColor(alpha = 1) {
        return new RgbaColor(this.r, this.g, this.b, alpha);
    }
    toHexString() {
        return _css_colors.CssColors.toHexString(this);
    }
    toRgbString() {
        return _css_colors.CssColors.toRgbString(this);
    }
    constructor(r, g, b){
        this.r = r;
        this.g = g;
        this.b = b;
        _preconditions.Preconditions.checkArgument(0 <= r && r <= 255, 'invalid r: {}', r);
        _preconditions.Preconditions.checkArgument(0 <= g && g <= 255, 'invalid g: {}', g);
        _preconditions.Preconditions.checkArgument(0 <= b && b <= 255, 'invalid b: {}', b);
    }
}
class RgbaColor {
    static fromCssString(s) {
        const color = _css_colors.CssColors.fromString(s);
        return color instanceof RgbaColor ? color : color.toRgbaColor();
    }
    static fromRgbaString(s) {
        return _css_colors.CssColors.fromRgbaString(s);
    }
    toRgb() {
        return new RgbColor(this.r, this.g, this.b);
    }
    toRgbaString() {
        return _css_colors.CssColors.toRgbaString(this);
    }
    constructor(r, g, b, a){
        this.r = r;
        this.g = g;
        this.b = b;
        this.a = a;
        _preconditions.Preconditions.checkArgument(0 <= r && r <= 255, 'invalid r: {}', r);
        _preconditions.Preconditions.checkArgument(0 <= g && g <= 255, 'invalid g: {}', g);
        _preconditions.Preconditions.checkArgument(0 <= b && b <= 255, 'invalid b: {}', b);
        _preconditions.Preconditions.checkArgument(0 <= a && a <= 1, 'invalid a: {}', a);
    }
}
class LabColor {
    constructor(l, a, b){
        this.l = l;
        this.a = a;
        this.b = b;
        _preconditions.Preconditions.checkArgument(0 <= l && l <= 100, '{}', l);
    }
}
class HclColor {
    constructor(h, c, l){
        this.h = h;
        this.c = c;
        this.l = l;
        _preconditions.Preconditions.checkArgument(0 <= l && l <= 100, '{}', l);
        this.h = (0, _normalize.normalizeHue)(h);
    }
}
class XyzColor {
    constructor(x, y, z) {
        this.x = x;
        this.y = y;
        this.z = z;
    }
}
class HslColor {
    constructor(h, s, l){
        this.h = h;
        this.s = s;
        this.l = l;
        _preconditions.Preconditions.checkArgument(0 <= s && s <= 100, 'invalid s: {}', s);
        _preconditions.Preconditions.checkArgument(0 <= l && l <= 100, 'invalid l: {}', l);
        this.h = (0, _normalize.normalizeHue)(h);
    }
}
const LAB_CONSTANTS = Object.freeze({
    D50: new XyzColor(96.42, 100, 82.51),
    κ: 24389 / 27,
    ε: 216 / 24389
});
