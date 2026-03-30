"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { scrollPaddingTop: "var(--oZQU0Q, 0px)", scrollPaddingBottom: "var(--mBqY5A, 0px)", container: "bZOQfA", header: "ZxrqGQ", footer: "Y_V_gw" };
exports.default = styles;
exports.customProperties = { scrollPaddingTop: "--oZQU0Q", scrollPaddingBottom: "--mBqY5A" };
const dictStyles = { "scrollPaddingTop": "var(--oZQU0Q, 0px)", "scrollPaddingBottom": "var(--mBqY5A, 0px)", "container": "bZOQfA", "header": "ZxrqGQ", "footer": "Y_V_gw" };
function getStyle(style) {
    return dictStyles[style];
}
;
