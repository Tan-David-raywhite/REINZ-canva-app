"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA06: "#FFFFFF80", iconColor: "var(--pDEiUA)", clearIcon: "_6zunIw", clearableInput: "_3YOa7Q", backButton: "UJzTCA", clearButton: "Dip1qQ" };
exports.default = styles;
exports.customProperties = { iconColor: "--pDEiUA" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA06": "#FFFFFF80", "iconColor": "var(--pDEiUA)", "clearIcon": "_6zunIw", "clearableInput": "_3YOa7Q", "backButton": "UJzTCA", "clearButton": "Dip1qQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
