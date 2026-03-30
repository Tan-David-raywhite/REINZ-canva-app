"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { scrollContainer: "_4Qhg6w", vertical: "_3d4diw", horizontal: "XcSaRA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "scrollContainer": "_4Qhg6w", "vertical": "_3d4diw", "horizontal": "XcSaRA" };
function getStyle(style) {
    return dictStyles[style];
}
;
