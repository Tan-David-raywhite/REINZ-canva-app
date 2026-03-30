function Struct() { }
function Dict() { }
const styles = { themeDark: ":global(.dark)", themeLight: ":global(.light)", colorGrey02: "#E8EAED", colorGrey09: "#1D1F26", radiusElementRound: "var(--aiHVUg)", radiusElementSharp: "var(--D3shaw)", defaultFontStack: "\"Canva Sans\", \"Noto Sans Variable\", \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif", colorAvatarDefaultBackground: "var(--FzoXNQ)", avatar: "n8XGZg", square: "P3N3Pw" };
export default styles;
export const customProperties = { radiusElementRound: "--aiHVUg", radiusElementSharp: "--D3shaw", colorAvatarDefaultBackground: "--FzoXNQ" };
const dictStyles = { "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "colorGrey02": "#E8EAED", "colorGrey09": "#1D1F26", "radiusElementRound": "var(--aiHVUg)", "radiusElementSharp": "var(--D3shaw)", "defaultFontStack": "\"Canva Sans\", \"Noto Sans Variable\", \"Noto Sans\", -apple-system, BlinkMacSystemFont, \"Segoe UI\", Helvetica, Arial, sans-serif", "colorAvatarDefaultBackground": "var(--FzoXNQ)", "avatar": "n8XGZg", "square": "P3N3Pw" };
export function getStyle(style) {
    return dictStyles[style];
}
;
