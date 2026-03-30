"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", legacy: "cn6v_g" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "baseUnit": "8px", "legacy": "cn6v_g" };
function getStyle(style) {
    return dictStyles[style];
}
;
