"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { carouselContainer: "jpmDSA", spacer: "o0qdKw" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "carouselContainer": "jpmDSA", "spacer": "o0qdKw" };
function getStyle(style) {
    return dictStyles[style];
}
;
