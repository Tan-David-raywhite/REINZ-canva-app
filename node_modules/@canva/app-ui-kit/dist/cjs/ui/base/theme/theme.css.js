"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { agentColorScheme: "var(--tk9EiQ)", themeDark: ":global(.dark)", themeLight: ":global(.light)", themed: ":global(.theme)" };
exports.default = styles;
exports.customProperties = { agentColorScheme: "--tk9EiQ" };
const dictStyles = { "agentColorScheme": "var(--tk9EiQ)", "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "themed": ":global(.theme)" };
function getStyle(style) {
    return dictStyles[style];
}
;
