"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { inputPaddingXLarge: "16px", inputPaddingXMedium: "12px", withSpinButtons: "_8uu63A", startWrapper: "o1S9tg", medium: "e9Ypag", large: "xmNzBg", endWrapper: "friJuw" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "inputPaddingXLarge": "16px", "inputPaddingXMedium": "12px", "withSpinButtons": "_8uu63A", "startWrapper": "o1S9tg", "medium": "e9Ypag", "large": "xmNzBg", "endWrapper": "friJuw" };
function getStyle(style) {
    return dictStyles[style];
}
;
