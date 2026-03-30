"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorContentSubtleFg: "var(--UpESEg)", indicator: "JtE88A" };
exports.default = styles;
exports.customProperties = { colorContentSubtleFg: "--UpESEg" };
const dictStyles = { "colorContentSubtleFg": "var(--UpESEg)", "indicator": "JtE88A" };
function getStyle(style) {
    return dictStyles[style];
}
;
