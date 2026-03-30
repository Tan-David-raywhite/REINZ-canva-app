"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA05: "#242C3D66", colorWhiteA05: "#FFFFFF66", outlineStroke: "var(--s2EMVg)", icon: "cb_YGw", svg: "N00prg", outline: "iBQU9w", glyph: "_TbWJw" };
exports.default = styles;
exports.customProperties = { outlineStroke: "--s2EMVg" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA05": "#242C3D66", "colorWhiteA05": "#FFFFFF66", "outlineStroke": "var(--s2EMVg)", "icon": "cb_YGw", "svg": "N00prg", "outline": "iBQU9w", "glyph": "_TbWJw" };
function getStyle(style) {
    return dictStyles[style];
}
;
