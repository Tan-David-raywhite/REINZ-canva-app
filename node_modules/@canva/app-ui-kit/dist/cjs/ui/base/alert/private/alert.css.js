"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { space050: "4px", space100: "8px", alert: "bZlJMA", close: "lRtCyw", small: "aMUpPw" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "space050": "4px", "space100": "8px", "alert": "bZlJMA", "close": "lRtCyw", "small": "aMUpPw" };
function getStyle(style) {
    return dictStyles[style];
}
;
