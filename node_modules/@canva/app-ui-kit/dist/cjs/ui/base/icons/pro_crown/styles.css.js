"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA07: "#FFFFFFB2", colorYellow03: "#FDBD68", colorGrey: "var(--W3UCvw)", grey: "w2m0dg", gold: "KNAong" };
exports.default = styles;
exports.customProperties = { colorGrey: "--W3UCvw" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA07": "#FFFFFFB2", "colorYellow03": "#FDBD68", "colorGrey": "var(--W3UCvw)", "grey": "w2m0dg", "gold": "KNAong" };
function getStyle(style) {
    return dictStyles[style];
}
;
