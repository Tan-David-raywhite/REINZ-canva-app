"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorUiBorder: "var(--enMi_w)", backgroundColor: "var(--RFzAdw)", borderColor: "var(--RKyZlA)", avatarBorderWidth: "2px", background: "_1a2UHw", border: "JwH6AA", defaultBorder: "QJpRHw" };
exports.default = styles;
exports.customProperties = { colorUiBorder: "--enMi_w", backgroundColor: "--RFzAdw", borderColor: "--RKyZlA" };
const dictStyles = { "colorUiBorder": "var(--enMi_w)", "backgroundColor": "var(--RFzAdw)", "borderColor": "var(--RKyZlA)", "avatarBorderWidth": "2px", "background": "_1a2UHw", "border": "JwH6AA", "defaultBorder": "QJpRHw" };
function getStyle(style) {
    return dictStyles[style];
}
;
