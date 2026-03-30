"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themePreloadModeClassic: ":global(.classic)" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "themePreloadModeClassic": ":global(.classic)" };
function getStyle(style) {
    return dictStyles[style];
}
;
