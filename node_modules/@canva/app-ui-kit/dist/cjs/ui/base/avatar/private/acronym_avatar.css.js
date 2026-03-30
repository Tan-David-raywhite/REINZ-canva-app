"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { avatarSize: "var(--k9SmeA)", radiusElementRound: "var(--aiHVUg)", radiusElementSharp: "var(--D3shaw)", avatarTextColor: "var(--pDK9Gw)", container: "VaW8_A", square: "cUFFRA", circle: "yCT70Q", withStroke: "_2LVP_g" };
exports.default = styles;
exports.customProperties = { avatarSize: "--k9SmeA", radiusElementRound: "--aiHVUg", radiusElementSharp: "--D3shaw", avatarTextColor: "--pDK9Gw" };
const dictStyles = { "avatarSize": "var(--k9SmeA)", "radiusElementRound": "var(--aiHVUg)", "radiusElementSharp": "var(--D3shaw)", "avatarTextColor": "var(--pDK9Gw)", "container": "VaW8_A", "square": "cUFFRA", "circle": "yCT70Q", "withStroke": "_2LVP_g" };
function getStyle(style) {
    return dictStyles[style];
}
;
