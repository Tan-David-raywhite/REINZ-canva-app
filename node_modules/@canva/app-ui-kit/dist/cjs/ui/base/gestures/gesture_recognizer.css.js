"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { gestureElement: "_682gpw", textSelectDisabled: "_7vS1Yw" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "gestureElement": "_682gpw", "textSelectDisabled": "_7vS1Yw" };
function getStyle(style) {
    return dictStyles[style];
}
;
