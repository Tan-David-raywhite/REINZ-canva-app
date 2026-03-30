"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { masonry: "D_ZUcw", row: "FA8sBg", elements: "v1Egnw", footerNonExpandable: "adDeXg", footerExpandable: "xs085A", element: "qFtWQg", spacer: "XmRmug" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "masonry": "D_ZUcw", "row": "FA8sBg", "elements": "v1Egnw", "footerNonExpandable": "adDeXg", "footerExpandable": "xs085A", "element": "qFtWQg", "spacer": "XmRmug" };
function getStyle(style) {
    return dictStyles[style];
}
;
