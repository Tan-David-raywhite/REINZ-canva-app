"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorActionOverlayFg: "var(--N8Oz5g)", colorUiOverlayBg: "var(--1z_vxQ)", loading: "_6w8mvA", spinner: "gVy5qQ", thumbnailAutoWidth: "Cmvptw" };
exports.default = styles;
exports.customProperties = { colorActionOverlayFg: "--N8Oz5g", colorUiOverlayBg: "--1z_vxQ" };
const dictStyles = { "colorActionOverlayFg": "var(--N8Oz5g)", "colorUiOverlayBg": "var(--1z_vxQ)", "loading": "_6w8mvA", "spinner": "gVy5qQ", "thumbnailAutoWidth": "Cmvptw" };
function getStyle(style) {
    return dictStyles[style];
}
;
