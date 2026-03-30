function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorBlackA06: "#1C213080", colorWhiteA06: "#FFFFFF80", iconColor: "var(--pDEiUA)", clearIcon: "_6zunIw", clearableInput: "_3YOa7Q", backButton: "UJzTCA", clearButton: "Dip1qQ" };
export default styles;
export const customProperties = { iconColor: "--pDEiUA" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorBlackA06": "#1C213080", "colorWhiteA06": "#FFFFFF80", "iconColor": "var(--pDEiUA)", "clearIcon": "_6zunIw", "clearableInput": "_3YOa7Q", "backButton": "UJzTCA", "clearButton": "Dip1qQ" };
export function getStyle(style) {
    return dictStyles[style];
}
;
