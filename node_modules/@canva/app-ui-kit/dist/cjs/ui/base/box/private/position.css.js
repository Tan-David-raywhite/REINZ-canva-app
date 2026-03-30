"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { relativePosition: "bu_JgA", absolutePosition: "_5DYjkQ", stickyPosition: "TwIyqg", inset0: "_4WqHSA", start0: "ZmEN8g", end0: "HwOMuA", top0: "EPf9bw", bottom0: "_5BaZ9A" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "relativePosition": "bu_JgA", "absolutePosition": "_5DYjkQ", "stickyPosition": "TwIyqg", "inset0": "_4WqHSA", "start0": "ZmEN8g", "end0": "HwOMuA", "top0": "EPf9bw", "bottom0": "_5BaZ9A" };
function getStyle(style) {
    return dictStyles[style];
}
;
