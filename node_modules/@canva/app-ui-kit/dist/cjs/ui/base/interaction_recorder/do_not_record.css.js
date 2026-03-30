"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { doNotRecord: "f4qJng fs-hide" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "doNotRecord": "f4qJng fs-hide" };
function getStyle(style) {
    return dictStyles[style];
}
;
