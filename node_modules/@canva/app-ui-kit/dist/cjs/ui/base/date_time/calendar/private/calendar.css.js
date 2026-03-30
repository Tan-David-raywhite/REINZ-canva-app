"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { daySize: "calc(var(----lgQg, 0.1rem)*8*5)", baseUnit: "8px", focusOutlineSize: "2px", calendar: "LwJ44g", dayWrapper: "_9fDnhw", animationWrap: "G_PaiQ", animationScroll: "CVy8EQ", previousMonth: "vLVe2A", nextMonth: "iwU2Sw", animateToPrevious: "gynTEQ", weeks4: "ZD4ZUw", weeks5: "tnt3hA", animateToNext: "dS1TGw", animate: "cuDr1g", days: "Ja8pnQ" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "daySize": "calc(var(----lgQg, 0.1rem)*8*5)", "baseUnit": "8px", "focusOutlineSize": "2px", "calendar": "LwJ44g", "dayWrapper": "_9fDnhw", "animationWrap": "G_PaiQ", "animationScroll": "CVy8EQ", "previousMonth": "vLVe2A", "nextMonth": "iwU2Sw", "animateToPrevious": "gynTEQ", "weeks4": "ZD4ZUw", "weeks5": "tnt3hA", "animateToNext": "dS1TGw", "animate": "cuDr1g", "days": "Ja8pnQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
