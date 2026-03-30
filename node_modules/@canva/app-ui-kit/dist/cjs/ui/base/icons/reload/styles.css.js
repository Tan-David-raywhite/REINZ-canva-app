"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { replayIcon: "E3Eshw", restoreIcon: "L31RsA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "replayIcon": "E3Eshw", "restoreIcon": "L31RsA" };
function getStyle(style) {
    return dictStyles[style];
}
;
