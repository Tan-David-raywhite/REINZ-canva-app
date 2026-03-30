"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { daySize: "calc(var(----lgQg, 0.1rem)*8*5)", colorContentPlaceholderFg: "var(--TJtBjA)", textSmall: "JYIidw", daysOfWeek: "WUkZ_A", dayWeek: "y1af7g JYIidw" };
exports.default = styles;
exports.customProperties = { colorContentPlaceholderFg: "--TJtBjA" };
const dictStyles = { "daySize": "calc(var(----lgQg, 0.1rem)*8*5)", "colorContentPlaceholderFg": "var(--TJtBjA)", "textSmall": "JYIidw", "daysOfWeek": "WUkZ_A", "dayWeek": "y1af7g JYIidw" };
function getStyle(style) {
    return dictStyles[style];
}
;
