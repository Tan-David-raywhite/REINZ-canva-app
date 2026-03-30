"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { week: "q_891g" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "week": "q_891g" };
function getStyle(style) {
    return dictStyles[style];
}
;
