"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { handleDiameter: "18px", handleSwatchDiameter: "10px", colorUiBorderFocused: "var(--4DkvNQ)", baseUnit: "8px", colorBlackA10: "#0F1015", colorWhiteA10: "#FFFFFF", radiusElementStandard: "var(--0iDYqA)", handleOverflow: "4px", handleCenterDistance: "5px", currentHue: "var(--0ofBig, 0)", hueBackground: "hsl(var(--0ofBig, 0), 100%, 50%)", root: "_3CwDSg", hideOutline: "M0pFlQ", handle: "DYNtEA" };
exports.default = styles;
exports.customProperties = { colorUiBorderFocused: "--4DkvNQ", radiusElementStandard: "--0iDYqA", currentHue: "--0ofBig" };
const dictStyles = { "handleDiameter": "18px", "handleSwatchDiameter": "10px", "colorUiBorderFocused": "var(--4DkvNQ)", "baseUnit": "8px", "colorBlackA10": "#0F1015", "colorWhiteA10": "#FFFFFF", "radiusElementStandard": "var(--0iDYqA)", "handleOverflow": "4px", "handleCenterDistance": "5px", "currentHue": "var(--0ofBig, 0)", "hueBackground": "hsl(var(--0ofBig, 0), 100%, 50%)", "root": "_3CwDSg", "hideOutline": "M0pFlQ", "handle": "DYNtEA" };
function getStyle(style) {
    return dictStyles[style];
}
;
