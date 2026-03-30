function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA07: "#FFFFFFB2", colorYellow03: "#FDBD68", colorGrey: "var(--W3UCvw)", grey: "w2m0dg", gold: "KNAong" };
export default styles;
export const customProperties = { colorGrey: "--W3UCvw" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA07": "#FFFFFFB2", "colorYellow03": "#FDBD68", "colorGrey": "var(--W3UCvw)", "grey": "w2m0dg", "gold": "KNAong" };
export function getStyle(style) {
    return dictStyles[style];
}
;
