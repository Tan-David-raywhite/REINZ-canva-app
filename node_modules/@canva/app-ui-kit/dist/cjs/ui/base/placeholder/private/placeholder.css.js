"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorContentFg: "var(--VcZbvQ)", radiusElementRound: "var(--aiHVUg)", radiusElementStandard: "var(--0iDYqA)", animationDuration: "700ms", flashDelayDuration: "150ms", defaultOpacity: "var(--Xj4qXA)", pulseOpacity: "var(--CAzrpw)", base: "IwXXkw", svg: "PFoRsA", roundCorners: "CNL3VQ", animated: "_qImYg", pulse: "_5bz7wQ", circle: "RCTcJA", square: "KOdbkg", rectangle: "_CObZw", sharpRectangle: "JbJFjg _CObZw", textRectangle: "cg8IZQ _CObZw" };
exports.default = styles;
exports.customProperties = { colorContentFg: "--VcZbvQ", radiusElementRound: "--aiHVUg", radiusElementStandard: "--0iDYqA", defaultOpacity: "--Xj4qXA", pulseOpacity: "--CAzrpw" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorContentFg": "var(--VcZbvQ)", "radiusElementRound": "var(--aiHVUg)", "radiusElementStandard": "var(--0iDYqA)", "animationDuration": "700ms", "flashDelayDuration": "150ms", "defaultOpacity": "var(--Xj4qXA)", "pulseOpacity": "var(--CAzrpw)", "base": "IwXXkw", "svg": "PFoRsA", "roundCorners": "CNL3VQ", "animated": "_qImYg", "pulse": "_5bz7wQ", "circle": "RCTcJA", "square": "KOdbkg", "rectangle": "_CObZw", "sharpRectangle": "JbJFjg _CObZw", "textRectangle": "cg8IZQ _CObZw" };
function getStyle(style) {
    return dictStyles[style];
}
;
