"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { reference: "A628dw" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "reference": "A628dw" };
function getStyle(style) {
    return dictStyles[style];
}
;
