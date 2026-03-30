"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", accordionCard: "TV2qbA", header: "YRzkuA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "baseUnit": "8px", "accordionCard": "TV2qbA", "header": "YRzkuA" };
function getStyle(style) {
    return dictStyles[style];
}
;
