"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { layerMarker: "NoN2AA", layerRoot: "_5_MXiw", layerContent: "cD74fQ" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "layerMarker": "NoN2AA", "layerRoot": "_5_MXiw", "layerContent": "cD74fQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
