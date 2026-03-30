function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA06: "#FFFFFF80", iconColor: "var(--R3SUow)", clearIcon: "vuhuDw" };
export default styles;
export const customProperties = { iconColor: "--R3SUow" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA06": "#FFFFFF80", "iconColor": "var(--R3SUow)", "clearIcon": "vuhuDw" };
export function getStyle(style) {
    return dictStyles[style];
}
;
