"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { backdrop: "lRiAhg", blockInsidePointerEvents: "IRiUGg" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "backdrop": "lRiAhg", "blockInsidePointerEvents": "IRiUGg" };
function getStyle(style) {
    return dictStyles[style];
}
;
