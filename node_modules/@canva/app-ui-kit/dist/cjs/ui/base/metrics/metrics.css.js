"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { smallBreakpoint: "600px", mediumBreakpoint: "900px", largeBreakpoint: "1200px", xLargeBreakpoint: "1650px", aboveSmall: "(min-width: 600px)", aboveMedium: "(min-width: 900px)", aboveLarge: "(min-width: 1200px)", aboveXLarge: "(min-width: 1650px)", belowSmall: "(max-width: 599px)", belowMedium: "(max-width: 899px)", belowLarge: "(max-width: 1199px)", belowXLarge: "(max-width: 1649px)", smallUp: "(min-width: 600px)", mediumUp: "(min-width: 900px)", largeUp: "(min-width: 1200px)", xLargeUp: "(min-width: 1650px)", touchRadius: "20px", minTouchableArea: "44px", pxInRem: "var(----lgQg, 0.1rem)" };
exports.default = styles;
exports.customProperties = { pxInRem: "----lgQg" };
const dictStyles = { "smallBreakpoint": "600px", "mediumBreakpoint": "900px", "largeBreakpoint": "1200px", "xLargeBreakpoint": "1650px", "aboveSmall": "(min-width: 600px)", "aboveMedium": "(min-width: 900px)", "aboveLarge": "(min-width: 1200px)", "aboveXLarge": "(min-width: 1650px)", "belowSmall": "(max-width: 599px)", "belowMedium": "(max-width: 899px)", "belowLarge": "(max-width: 1199px)", "belowXLarge": "(max-width: 1649px)", "smallUp": "(min-width: 600px)", "mediumUp": "(min-width: 900px)", "largeUp": "(min-width: 1200px)", "xLargeUp": "(min-width: 1650px)", "touchRadius": "20px", "minTouchableArea": "44px", "pxInRem": "var(----lgQg, 0.1rem)" };
function getStyle(style) {
    return dictStyles[style];
}
;
