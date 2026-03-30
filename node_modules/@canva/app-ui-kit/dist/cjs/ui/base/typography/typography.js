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
    get Display () {
        return _typography.Display;
    },
    get InheritColor () {
        return _typography.InheritColor;
    },
    get Text () {
        return _typography.Text;
    },
    get Title () {
        return _typography.Title;
    },
    get useScaledFallbackFontStyles () {
        return _fallback_font_sizing.useScaledFallbackFontStyles;
    }
});
const _typography = require("./internal/typography");
const _fallback_font_sizing = require("./internal/fallback_font_sizing");
