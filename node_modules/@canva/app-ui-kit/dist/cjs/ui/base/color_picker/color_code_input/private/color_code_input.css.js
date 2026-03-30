"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorControlBorder: "var(--igdHlg)", colorUiBorder: "var(--enMi_w)", colorUiBorderFocused: "var(--4DkvNQ)", baseUnit: "8px", radiusElementSharp: "var(--D3shaw)", radiusElementStandard: "var(--0iDYqA)", inputWrapper: "elddFw", hexFocused: "z0ADpg", input: "wo59Ug", divider: "_63zRdg", numInputWrapper: "p8OTEQ", alphaFocused: "QsHqCg", numInput: "_2dqVvg" };
exports.default = styles;
exports.customProperties = { colorControlBorder: "--igdHlg", colorUiBorder: "--enMi_w", colorUiBorderFocused: "--4DkvNQ", radiusElementSharp: "--D3shaw", radiusElementStandard: "--0iDYqA" };
const dictStyles = { "colorControlBorder": "var(--igdHlg)", "colorUiBorder": "var(--enMi_w)", "colorUiBorderFocused": "var(--4DkvNQ)", "baseUnit": "8px", "radiusElementSharp": "var(--D3shaw)", "radiusElementStandard": "var(--0iDYqA)", "inputWrapper": "elddFw", "hexFocused": "z0ADpg", "input": "wo59Ug", "divider": "_63zRdg", "numInputWrapper": "p8OTEQ", "alphaFocused": "QsHqCg", "numInput": "_2dqVvg" };
function getStyle(style) {
    return dictStyles[style];
}
;
