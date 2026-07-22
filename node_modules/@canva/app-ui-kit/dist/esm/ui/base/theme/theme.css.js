function Struct() { }
function Dict() { }
const styles = { agentColorScheme: "var(--tk9EiQ)", themeDark: ":global(.dark)", themeLight: ":global(.light)", themed: ":global(.theme)" };
export default styles;
export const customProperties = { agentColorScheme: "--tk9EiQ" };
const dictStyles = { "agentColorScheme": "var(--tk9EiQ)", "themeDark": ":global(.dark)", "themeLight": ":global(.light)", "themed": ":global(.theme)" };
export function getStyle(style) {
    return dictStyles[style];
}
;
