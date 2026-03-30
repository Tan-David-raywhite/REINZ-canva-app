"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { tabsHeight: "var(--8ESoXg, 100%)", tabs: "zvLDlA", fixedHeight: "cZc9AA" };
exports.default = styles;
exports.customProperties = { tabsHeight: "--8ESoXg" };
const dictStyles = { "tabsHeight": "var(--8ESoXg, 100%)", "tabs": "zvLDlA", "fixedHeight": "cZc9AA" };
function getStyle(style) {
    return dictStyles[style];
}
;
