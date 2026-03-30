"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorContentCriticalFg: "var(--NRkSiw)", colorContentInfoFg: "var(--gdRMVA)", colorContentPositiveFg: "var(--vCqPYw)", colorContentSubtleFg: "var(--UpESEg)", colorContentWarnFg: "var(--cVPmKw)", space050: "4px", space200: "16px", textSmall: "JYIidw", description: "IQc2Eg JYIidw", list: "Jn7StA", listItem: "_26G_g", neutral: "lI5anQ", positive: "yrBuJw", info: "U6GIlw", warn: "mWpBYQ", critical: "pMfX1Q" };
exports.default = styles;
exports.customProperties = { colorContentCriticalFg: "--NRkSiw", colorContentInfoFg: "--gdRMVA", colorContentPositiveFg: "--vCqPYw", colorContentSubtleFg: "--UpESEg", colorContentWarnFg: "--cVPmKw" };
const dictStyles = { "colorContentCriticalFg": "var(--NRkSiw)", "colorContentInfoFg": "var(--gdRMVA)", "colorContentPositiveFg": "var(--vCqPYw)", "colorContentSubtleFg": "var(--UpESEg)", "colorContentWarnFg": "var(--cVPmKw)", "space050": "4px", "space200": "16px", "textSmall": "JYIidw", "description": "IQc2Eg JYIidw", "list": "Jn7StA", "listItem": "_26G_g", "neutral": "lI5anQ", "positive": "yrBuJw", "info": "U6GIlw", "warn": "mWpBYQ", "critical": "pMfX1Q" };
function getStyle(style) {
    return dictStyles[style];
}
;
