"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { colorLinkCriticalFg: "var(--FOH6ww)", colorLinkCriticalFgHovered: "var(--jyDisg)", colorLinkCriticalFgPressed: "var(--QclmLg)", colorLinkFg: "var(--8jnd6g)", colorLinkFgDisabled: "var(--jDAtXQ)", colorLinkFgHovered: "var(---2QwGw)", colorLinkFgPressed: "var(--KgLrHA)", fontWeight600: "600", space050: "4px", linkColorInternal: "var(--Y5muMw)", linkColor: "var(--ZGnFiQ, var(--Y5muMw))", link: "Ej7lEg", regular: "WkdUeQ", semiBold: "lROewQ", subtle: "_200NbQ", muted: "Pjs_rA", critical: "_6MeQcQ", htmlMessageRegularLink: "iRRpzw", htmlMessageSemiBoldLink: "q57IQQ", htmlMessageSubtleLink: "_1hWAA", htmlMessageMutedLink: "skMA1A", htmlMessageCriticalLink: "BHs_rA", hoverSupported: "_3bC2IQ", disabled: "_6SenXQ", unstyled: "pTsp_A", htmlMessageUnstyledLink: "uYt64w", inheritColor: "hGfU2Q", openInNewIcon: "b_Y0Sw", noSelect: "V5YmAg" };
exports.default = styles;
exports.customProperties = { colorLinkCriticalFg: "--FOH6ww", colorLinkCriticalFgHovered: "--jyDisg", colorLinkCriticalFgPressed: "--QclmLg", colorLinkFg: "--8jnd6g", colorLinkFgDisabled: "--jDAtXQ", colorLinkFgHovered: "---2QwGw", colorLinkFgPressed: "--KgLrHA", linkColorInternal: "--Y5muMw", linkColor: "--ZGnFiQ" };
const dictStyles = { "colorLinkCriticalFg": "var(--FOH6ww)", "colorLinkCriticalFgHovered": "var(--jyDisg)", "colorLinkCriticalFgPressed": "var(--QclmLg)", "colorLinkFg": "var(--8jnd6g)", "colorLinkFgDisabled": "var(--jDAtXQ)", "colorLinkFgHovered": "var(---2QwGw)", "colorLinkFgPressed": "var(--KgLrHA)", "fontWeight600": "600", "space050": "4px", "linkColorInternal": "var(--Y5muMw)", "linkColor": "var(--ZGnFiQ, var(--Y5muMw))", "link": "Ej7lEg", "regular": "WkdUeQ", "semiBold": "lROewQ", "subtle": "_200NbQ", "muted": "Pjs_rA", "critical": "_6MeQcQ", "htmlMessageRegularLink": "iRRpzw", "htmlMessageSemiBoldLink": "q57IQQ", "htmlMessageSubtleLink": "_1hWAA", "htmlMessageMutedLink": "skMA1A", "htmlMessageCriticalLink": "BHs_rA", "hoverSupported": "_3bC2IQ", "disabled": "_6SenXQ", "unstyled": "pTsp_A", "htmlMessageUnstyledLink": "uYt64w", "inheritColor": "hGfU2Q", "openInNewIcon": "b_Y0Sw", "noSelect": "V5YmAg" };
function getStyle(style) {
    return dictStyles[style];
}
;
