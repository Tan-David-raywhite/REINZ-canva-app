"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { reset: "BMOCzQ" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "reset": "BMOCzQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
