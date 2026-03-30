"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { container: "rhfZhA", hideOverflow: "zJBxUg" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "container": "rhfZhA", "hideOverflow": "zJBxUg" };
function getStyle(style) {
    return dictStyles[style];
}
;
