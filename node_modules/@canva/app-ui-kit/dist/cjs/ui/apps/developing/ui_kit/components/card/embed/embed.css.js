"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorActionOverlayFg: "var(--N8Oz5g)", colorUiOverlayBg: "var(--1z_vxQ)", loading: "sjxj_g", spinner: "MMd8Gg", thumbnailAutoWidth: "Qxkz7Q" };
exports.default = styles;
exports.customProperties = { colorActionOverlayFg: "--N8Oz5g", colorUiOverlayBg: "--1z_vxQ" };
const dictStyles = { "colorActionOverlayFg": "var(--N8Oz5g)", "colorUiOverlayBg": "var(--1z_vxQ)", "loading": "sjxj_g", "spinner": "MMd8Gg", "thumbnailAutoWidth": "Qxkz7Q" };
function getStyle(style) {
    return dictStyles[style];
}
;
