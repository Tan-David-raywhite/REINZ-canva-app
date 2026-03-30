"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA06: "#FFFFFF80", iconColor: "var(--R3SUow)", clearIcon: "vuhuDw" };
exports.default = styles;
exports.customProperties = { iconColor: "--R3SUow" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA06": "#FFFFFF80", "iconColor": "var(--R3SUow)", "clearIcon": "vuhuDw" };
function getStyle(style) {
    return dictStyles[style];
}
;
