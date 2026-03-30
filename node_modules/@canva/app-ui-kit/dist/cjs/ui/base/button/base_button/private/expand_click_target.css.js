"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { minTouchableArea: "44px", expandClickTarget: "x42LDg", expandedClickTarget: "_509gkA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "minTouchableArea": "44px", "expandClickTarget": "x42LDg", "expandedClickTarget": "_509gkA" };
function getStyle(style) {
    return dictStyles[style];
}
;
