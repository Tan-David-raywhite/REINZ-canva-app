"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { normalJustifyContent: "Nuu2Ig", centerJustifyContent: "MYb60A", startJustifyContent: "TjbMBg", startFlexJustifyContent: "_WIyVQ", endJustifyContent: "Q8_z9Q", endFlexJustifyContent: "YgHDng", spaceBetweenJustifyContent: "_1lVsiA", stretchAlignItems: "XJKpHg", centerAlignItems: "FQ64gg", startAlignItems: "k3y7hg", startFlexAlignItems: "My5POw", endAlignItems: "YnRqTQ", endFlexAlignItems: "qF5pUA", stretchAlignSelf: "ZoItOA", centerAlignSelf: "F3q9DQ", startAlignSelf: "S_apYQ", startFlexAlignSelf: "j0D3Ew", endAlignSelf: "Q_CMqA", endFlexAlignSelf: "hL0dIg" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "normalJustifyContent": "Nuu2Ig", "centerJustifyContent": "MYb60A", "startJustifyContent": "TjbMBg", "startFlexJustifyContent": "_WIyVQ", "endJustifyContent": "Q8_z9Q", "endFlexJustifyContent": "YgHDng", "spaceBetweenJustifyContent": "_1lVsiA", "stretchAlignItems": "XJKpHg", "centerAlignItems": "FQ64gg", "startAlignItems": "k3y7hg", "startFlexAlignItems": "My5POw", "endAlignItems": "YnRqTQ", "endFlexAlignItems": "qF5pUA", "stretchAlignSelf": "ZoItOA", "centerAlignSelf": "F3q9DQ", "startAlignSelf": "S_apYQ", "startFlexAlignSelf": "j0D3Ew", "endAlignSelf": "Q_CMqA", "endFlexAlignSelf": "hL0dIg" };
function getStyle(style) {
    return dictStyles[style];
}
;
