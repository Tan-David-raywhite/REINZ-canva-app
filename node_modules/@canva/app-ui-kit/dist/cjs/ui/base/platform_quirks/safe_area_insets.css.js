"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { safeAreaInsetTop: "var(--safe-area-inset-top)", safeAreaInsetBottom: "var(--safe-area-inset-bottom)", safeAreaInsetLeft: "var(--safe-area-inset-left)", safeAreaInsetRight: "var(--safe-area-inset-right)" };
exports.default = styles;
exports.customProperties = { safeAreaInsetTop: "--safe-area-inset-top", safeAreaInsetBottom: "--safe-area-inset-bottom", safeAreaInsetLeft: "--safe-area-inset-left", safeAreaInsetRight: "--safe-area-inset-right" };
const dictStyles = { "safeAreaInsetTop": "var(--safe-area-inset-top)", "safeAreaInsetBottom": "var(--safe-area-inset-bottom)", "safeAreaInsetLeft": "var(--safe-area-inset-left)", "safeAreaInsetRight": "var(--safe-area-inset-right)" };
function getStyle(style) {
    return dictStyles[style];
}
;
