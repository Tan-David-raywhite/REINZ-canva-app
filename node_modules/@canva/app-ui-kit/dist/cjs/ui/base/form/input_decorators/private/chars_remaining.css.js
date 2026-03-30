"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", charsRemaining: "ZsFfHw", noMargins: "XCIV7g", verticalMargins: "wLt6JQ", horizontalMargins: "xf_ICA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "baseUnit": "8px", "charsRemaining": "ZsFfHw", "noMargins": "XCIV7g", "verticalMargins": "wLt6JQ", "horizontalMargins": "xf_ICA" };
function getStyle(style) {
    return dictStyles[style];
}
;
