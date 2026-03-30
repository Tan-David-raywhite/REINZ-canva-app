"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { disablePointerEvents: "nEXsoQ", enablePointerEvents: "C5FCpQ", badgeContainer: "SyPwYg", badge: "_582BSQ" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "disablePointerEvents": "nEXsoQ", "enablePointerEvents": "C5FCpQ", "badgeContainer": "SyPwYg", "badge": "_582BSQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
