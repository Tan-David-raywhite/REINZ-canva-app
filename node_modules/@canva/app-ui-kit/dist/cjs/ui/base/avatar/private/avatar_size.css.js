"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { avatarSize: "var(--k9SmeA)", sizedContainer: "kP_RVg", internalSizedContainer: "gpYRPA kP_RVg" };
exports.default = styles;
exports.customProperties = { avatarSize: "--k9SmeA" };
const dictStyles = { "avatarSize": "var(--k9SmeA)", "sizedContainer": "kP_RVg", "internalSizedContainer": "gpYRPA kP_RVg" };
function getStyle(style) {
    return dictStyles[style];
}
;
