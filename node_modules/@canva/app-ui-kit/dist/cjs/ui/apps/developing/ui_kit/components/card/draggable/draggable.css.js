"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { dragging: "_YIHeQ" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "dragging": "_YIHeQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
