"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", animationDuration: "300ms", animationEasing: "ease-in-out", slideWidth: "40px", animating: "RC_ePA", beforeActive: "NXNXww", afterActive: "LFTuaQ", panel: "huiuBw", active: "Xi1owQ", animate: "_VyunA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "baseUnit": "8px", "animationDuration": "300ms", "animationEasing": "ease-in-out", "slideWidth": "40px", "animating": "RC_ePA", "beforeActive": "NXNXww", "afterActive": "LFTuaQ", "panel": "huiuBw", "active": "Xi1owQ", "animate": "_VyunA" };
function getStyle(style) {
    return dictStyles[style];
}
;
