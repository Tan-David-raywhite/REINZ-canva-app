"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", elevationSurfaceFloatingBg: "var(--Ps9yUA)", colorBlackA01: "#404F6D0F", arrowBorderColor: "var(--VsFRFg)", arrowInset: "var(--ZCxrqQ)", wrapper: "IGcqRA", arrow: "hKrj5w", horizontal: "B_U2GQ", shadow: "FXahWA", content: "GnpaiQ", border: "l7doMw" };
exports.default = styles;
exports.customProperties = { elevationSurfaceFloatingBg: "--Ps9yUA", arrowBorderColor: "--VsFRFg", arrowInset: "--ZCxrqQ" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "elevationSurfaceFloatingBg": "var(--Ps9yUA)", "colorBlackA01": "#404F6D0F", "arrowBorderColor": "var(--VsFRFg)", "arrowInset": "var(--ZCxrqQ)", "wrapper": "IGcqRA", "arrow": "hKrj5w", "horizontal": "B_U2GQ", "shadow": "FXahWA", "content": "GnpaiQ", "border": "l7doMw" };
function getStyle(style) {
    return dictStyles[style];
}
;
