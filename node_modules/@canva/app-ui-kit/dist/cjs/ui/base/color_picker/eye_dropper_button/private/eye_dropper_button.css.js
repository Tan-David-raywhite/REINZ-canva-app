"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorControlBorder: "var(--igdHlg)", colorUiBorderFocused: "var(--4DkvNQ)", baseUnit: "8px", eyedropperButtonCircle: "_7XBcAQ", eyedropperButton: "a4FaPg" };
exports.default = styles;
exports.customProperties = { colorControlBorder: "--igdHlg", colorUiBorderFocused: "--4DkvNQ" };
const dictStyles = { "colorControlBorder": "var(--igdHlg)", "colorUiBorderFocused": "var(--4DkvNQ)", "baseUnit": "8px", "eyedropperButtonCircle": "_7XBcAQ", "eyedropperButton": "a4FaPg" };
function getStyle(style) {
    return dictStyles[style];
}
;
