"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorContentFg: "var(--VcZbvQ)", colorContentSubtlestFg: "var(--PRQgyw)", colorControlSelectedBorder: "var(--WcghmA)", baseUnit: "8px", animationDuration: "300ms", animationEasing: "ease-in-out", spacing: "var(--NskXVw, 0px)", bleedX: "var(--cQVGYw, 0px)", underlineX: "var(--4N5IuA, 8px)", underlineHeight: "3px", underlineWidth: "var(--IuauUQ, 0px)", fadeOffset: "24px", fadeWidth: "40px", bleed: "PznWrA", scrollContainer: "GWJNnw", prevScrollable: "OmoEvw", tablist: "cdPXSw Z1Thkw", nextScrollable: "ntA3sw", scrollPrevButton: "p0f1_w", scrollNextButton: "_0DA3uA", animate: "zbprQQ", visible: "ruqCcA", hideScrollbar: "Z1Thkw", alignCenter: "hVVpNg", alignEnd: "e6ZyGQ", stretch: "WBv1gQ", underline: "hc1JNg" };
exports.default = styles;
exports.customProperties = { colorContentFg: "--VcZbvQ", colorContentSubtlestFg: "--PRQgyw", colorControlSelectedBorder: "--WcghmA", spacing: "--NskXVw", bleedX: "--cQVGYw", underlineX: "--4N5IuA", underlineWidth: "--IuauUQ" };
const dictStyles = { "colorContentFg": "var(--VcZbvQ)", "colorContentSubtlestFg": "var(--PRQgyw)", "colorControlSelectedBorder": "var(--WcghmA)", "baseUnit": "8px", "animationDuration": "300ms", "animationEasing": "ease-in-out", "spacing": "var(--NskXVw, 0px)", "bleedX": "var(--cQVGYw, 0px)", "underlineX": "var(--4N5IuA, 8px)", "underlineHeight": "3px", "underlineWidth": "var(--IuauUQ, 0px)", "fadeOffset": "24px", "fadeWidth": "40px", "bleed": "PznWrA", "scrollContainer": "GWJNnw", "prevScrollable": "OmoEvw", "tablist": "cdPXSw Z1Thkw", "nextScrollable": "ntA3sw", "scrollPrevButton": "p0f1_w", "scrollNextButton": "_0DA3uA", "animate": "zbprQQ", "visible": "ruqCcA", "hideScrollbar": "Z1Thkw", "alignCenter": "hVVpNg", "alignEnd": "e6ZyGQ", "stretch": "WBv1gQ", "underline": "hc1JNg" };
function getStyle(style) {
    return dictStyles[style];
}
;
