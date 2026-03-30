"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { largeUp: "(min-width: 1200px)", mediumUp: "(min-width: 900px)", smallUp: "(min-width: 600px)", xLargeUp: "(min-width: 1650px)", internalSize: "var(--_0I23A)", size: "var(--FnDW1g)", smallUpSize: "var(--wVd3QA)", mediumUpSize: "var(--av-YnA)", largeUpSize: "var(--Gwh4IA)", xLargeUpSize: "var(--F5plrA)", spacer: "_8aVEnQ", horizontal: "jNvgTA", vertical: "fI4kiw" };
exports.default = styles;
exports.customProperties = { internalSize: "--_0I23A", size: "--FnDW1g", smallUpSize: "--wVd3QA", mediumUpSize: "--av-YnA", largeUpSize: "--Gwh4IA", xLargeUpSize: "--F5plrA" };
const dictStyles = { "largeUp": "(min-width: 1200px)", "mediumUp": "(min-width: 900px)", "smallUp": "(min-width: 600px)", "xLargeUp": "(min-width: 1650px)", "internalSize": "var(--_0I23A)", "size": "var(--FnDW1g)", "smallUpSize": "var(--wVd3QA)", "mediumUpSize": "var(--av-YnA)", "largeUpSize": "var(--Gwh4IA)", "xLargeUpSize": "var(--F5plrA)", "spacer": "_8aVEnQ", "horizontal": "jNvgTA", "vertical": "fI4kiw" };
function getStyle(style) {
    return dictStyles[style];
}
;
