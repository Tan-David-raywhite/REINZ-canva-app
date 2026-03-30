"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { hoverTransition: "0.15s ease-in-out", colorActionTertiaryBgHovered: "var(--ntzWpQ)", colorContentFg: "var(--VcZbvQ)", colorContentSubtleFg: "var(--UpESEg)", baseUnit: "8px", baseUnitInRem: "calc(var(----lgQg, 0.1rem)*8)", tabListBleedX: "var(--vBf_uQ, 0)", wrapper: "_1SQJnw", button: "Mg_hUw", buttonInner: "Nb4PHw", active: "uNYqug", animate: "_9VqNLw", hoverSupported: "k_q5xQ", contentWrapper: "E_B0Sw", content: "_4GI03Q", boldContent: "D5YrIA", text: "DR4pTQ" };
exports.default = styles;
exports.customProperties = { colorActionTertiaryBgHovered: "--ntzWpQ", colorContentFg: "--VcZbvQ", colorContentSubtleFg: "--UpESEg", tabListBleedX: "--vBf_uQ" };
const dictStyles = { "hoverTransition": "0.15s ease-in-out", "colorActionTertiaryBgHovered": "var(--ntzWpQ)", "colorContentFg": "var(--VcZbvQ)", "colorContentSubtleFg": "var(--UpESEg)", "baseUnit": "8px", "baseUnitInRem": "calc(var(----lgQg, 0.1rem)*8)", "tabListBleedX": "var(--vBf_uQ, 0)", "wrapper": "_1SQJnw", "button": "Mg_hUw", "buttonInner": "Nb4PHw", "active": "uNYqug", "animate": "_9VqNLw", "hoverSupported": "k_q5xQ", "contentWrapper": "E_B0Sw", "content": "_4GI03Q", "boldContent": "D5YrIA", "text": "DR4pTQ" };
function getStyle(style) {
    return dictStyles[style];
}
;
