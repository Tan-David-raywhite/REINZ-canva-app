"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { videoWrapper: "ACLUKA", image: "cDIK1A", video: "FtwUWA", videoAsOverlay: "Mfh7dg" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "videoWrapper": "ACLUKA", "image": "cDIK1A", "video": "FtwUWA", "videoAsOverlay": "Mfh7dg" };
function getStyle(style) {
    return dictStyles[style];
}
;
