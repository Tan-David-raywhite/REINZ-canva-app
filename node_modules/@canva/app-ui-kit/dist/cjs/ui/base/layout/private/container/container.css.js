"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", container: "_99GB9Q", medium: "hMc6MQ", large: "rzX2Ng", fullHeight: "XIyMlA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "baseUnit": "8px", "container": "_99GB9Q", "medium": "hMc6MQ", "large": "rzX2Ng", "fullHeight": "XIyMlA" };
function getStyle(style) {
    return dictStyles[style];
}
;
