"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { dateTimeInput: "_4K6Grg", clipNativeControls: "csHe_g" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "dateTimeInput": "_4K6Grg", "clipNativeControls": "csHe_g" };
function getStyle(style) {
    return dictStyles[style];
}
;
