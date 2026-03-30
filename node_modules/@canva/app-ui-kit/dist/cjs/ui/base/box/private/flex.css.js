"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { largeUp: "(min-width: 1200px)", mediumUp: "(min-width: 900px)", smallUp: "(min-width: 600px)", xLargeUp: "(min-width: 1650px)", internalFlexDirection: "var(--zyHMJw)", flexDirection: "var(--YRbscg)", smallUpFlexDirection: "var(--wRJ75A)", mediumUpFlexDirection: "var(--TMclnQ)", largeUpFlexDirection: "var(--OFo3eA)", xLargeUpFlexDirection: "var(--dnYgsA)", hasFlexDirection: "uN3EIA", noWrap: "dVqu4w", wrap: "pveEpQ", flexItemInitial: "xIj74g", flexItemAuto: "hu5DGQ", flexItemNone: "_6O8ZXw" };
exports.default = styles;
exports.customProperties = { internalFlexDirection: "--zyHMJw", flexDirection: "--YRbscg", smallUpFlexDirection: "--wRJ75A", mediumUpFlexDirection: "--TMclnQ", largeUpFlexDirection: "--OFo3eA", xLargeUpFlexDirection: "--dnYgsA" };
const dictStyles = { "largeUp": "(min-width: 1200px)", "mediumUp": "(min-width: 900px)", "smallUp": "(min-width: 600px)", "xLargeUp": "(min-width: 1650px)", "internalFlexDirection": "var(--zyHMJw)", "flexDirection": "var(--YRbscg)", "smallUpFlexDirection": "var(--wRJ75A)", "mediumUpFlexDirection": "var(--TMclnQ)", "largeUpFlexDirection": "var(--OFo3eA)", "xLargeUpFlexDirection": "var(--dnYgsA)", "hasFlexDirection": "uN3EIA", "noWrap": "dVqu4w", "wrap": "pveEpQ", "flexItemInitial": "xIj74g", "flexItemAuto": "hu5DGQ", "flexItemNone": "_6O8ZXw" };
function getStyle(style) {
    return dictStyles[style];
}
;
