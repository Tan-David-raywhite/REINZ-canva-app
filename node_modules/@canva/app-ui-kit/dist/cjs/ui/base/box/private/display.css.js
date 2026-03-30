"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { largeUp: "(min-width: 1200px)", mediumUp: "(min-width: 900px)", smallUp: "(min-width: 600px)", xLargeUp: "(min-width: 1650px)", internalDisplay: "var(--SxQ6Sw)", defaultDisplay: "var(--s_rwAw)", smallUpDisplay: "var(--zOX1XQ)", mediumUpDisplay: "var(--as7hUg)", largeUpDisplay: "var(--kXeS7A)", xLargeUpDisplay: "var(--VZZcaw)", hasDisplay: "_6Mu4Ow" };
exports.default = styles;
exports.customProperties = { internalDisplay: "--SxQ6Sw", defaultDisplay: "--s_rwAw", smallUpDisplay: "--zOX1XQ", mediumUpDisplay: "--as7hUg", largeUpDisplay: "--kXeS7A", xLargeUpDisplay: "--VZZcaw" };
const dictStyles = { "largeUp": "(min-width: 1200px)", "mediumUp": "(min-width: 900px)", "smallUp": "(min-width: 600px)", "xLargeUp": "(min-width: 1650px)", "internalDisplay": "var(--SxQ6Sw)", "defaultDisplay": "var(--s_rwAw)", "smallUpDisplay": "var(--zOX1XQ)", "mediumUpDisplay": "var(--as7hUg)", "largeUpDisplay": "var(--kXeS7A)", "xLargeUpDisplay": "var(--VZZcaw)", "hasDisplay": "_6Mu4Ow" };
function getStyle(style) {
    return dictStyles[style];
}
;
