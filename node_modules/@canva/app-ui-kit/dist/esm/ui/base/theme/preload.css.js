function Struct() { }
function Dict() { }
const styles = { themePreloadModeClassic: ":global(.classic)" };
export default styles;
export const customProperties = {};
const dictStyles = { "themePreloadModeClassic": ":global(.classic)" };
export function getStyle(style) {
    return dictStyles[style];
}
;
