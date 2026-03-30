"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorActionOverlayFg: "var(--N8Oz5g)", colorUiOverlayBg: "var(--1z_vxQ)", loading: "jPT4ew", spinner: "_9BCGfQ", wrapper: "UPZ2Qw", wrapperLoading: "REzqMg" };
exports.default = styles;
exports.customProperties = { colorActionOverlayFg: "--N8Oz5g", colorUiOverlayBg: "--1z_vxQ" };
const dictStyles = { "colorActionOverlayFg": "var(--N8Oz5g)", "colorUiOverlayBg": "var(--1z_vxQ)", "loading": "jPT4ew", "spinner": "_9BCGfQ", "wrapper": "UPZ2Qw", "wrapperLoading": "REzqMg" };
function getStyle(style) {
    return dictStyles[style];
}
;
