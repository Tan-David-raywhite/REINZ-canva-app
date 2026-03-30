"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorControlBorder: "var(--igdHlg)", colorControlBorderDisabled: "var(--TCEPKw)", colorControlBorderFocused: "var(--uHakiw)", colorControlBorderHovered: "var(--_kLulA)", borderWidth: "1px", selectedBorderWidth: "2px", radioGroup: "I1G_9w", buttonItem: "fjZtOQ", buttonItemActive: "EL5Ejg" };
exports.default = styles;
exports.customProperties = { colorControlBorder: "--igdHlg", colorControlBorderDisabled: "--TCEPKw", colorControlBorderFocused: "--uHakiw", colorControlBorderHovered: "--_kLulA" };
const dictStyles = { "colorControlBorder": "var(--igdHlg)", "colorControlBorderDisabled": "var(--TCEPKw)", "colorControlBorderFocused": "var(--uHakiw)", "colorControlBorderHovered": "var(--_kLulA)", "borderWidth": "1px", "selectedBorderWidth": "2px", "radioGroup": "I1G_9w", "buttonItem": "fjZtOQ", "buttonItemActive": "EL5Ejg" };
function getStyle(style) {
    return dictStyles[style];
}
;
