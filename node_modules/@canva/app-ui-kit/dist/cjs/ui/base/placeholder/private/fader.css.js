"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { defaultDurationMs: "100ms", slowDurationMs: "700ms", container: "DUDBPQ", exit: "oFR_Ag", exitActive: "S0zE2Q", enter: "SK4LUw", enterActive: "jg_SuQ", slow: "eueQpQ", expand: "qyOqcQ", expandFlex: "JIOUKA" };
exports.default = styles;
exports.customProperties = {};
const dictStyles = { "defaultDurationMs": "100ms", "slowDurationMs": "700ms", "container": "DUDBPQ", "exit": "oFR_Ag", "exitActive": "S0zE2Q", "enter": "SK4LUw", "enterActive": "jg_SuQ", "slow": "eueQpQ", "expand": "qyOqcQ", "expandFlex": "JIOUKA" };
function getStyle(style) {
    return dictStyles[style];
}
;
