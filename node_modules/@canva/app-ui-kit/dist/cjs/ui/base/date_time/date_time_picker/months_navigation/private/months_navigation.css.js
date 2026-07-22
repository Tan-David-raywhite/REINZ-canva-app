"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorContentFg: "var(--VcZbvQ)", baseUnit: "8px", baseUnitInRem: "calc(var(----lgQg, 0.1rem)*8)", fontWeight400: "400", buttonSize: "40px", monthsNavigation: "IOjJgQ", title: "L5QDMg", disabled: "niJxOg", prevMonth: "s56rWg", nextMonth: "V4YD0Q", reset: "W35ZqA", animationWrap: "jr60gA", hidden: "bdkHqQ", prevTitle: "tilIdQ", newTitle: "KISKlg", animate: "hUxxLQ" };
exports.default = styles;
exports.customProperties = { colorContentFg: "--VcZbvQ" };
const dictStyles = { "colorContentFg": "var(--VcZbvQ)", "baseUnit": "8px", "baseUnitInRem": "calc(var(----lgQg, 0.1rem)*8)", "fontWeight400": "400", "buttonSize": "40px", "monthsNavigation": "IOjJgQ", "title": "L5QDMg", "disabled": "niJxOg", "prevMonth": "s56rWg", "nextMonth": "V4YD0Q", "reset": "W35ZqA", "animationWrap": "jr60gA", "hidden": "bdkHqQ", "prevTitle": "tilIdQ", "newTitle": "KISKlg", "animate": "hUxxLQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
