"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { checkboxGroup: "KoBgRg" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "checkboxGroup": "KoBgRg" };
function getStyle(style) {
    return dictStyles[style];
}
;
