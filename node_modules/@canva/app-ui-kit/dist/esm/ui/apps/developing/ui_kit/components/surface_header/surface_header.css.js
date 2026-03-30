function Struct() { }
function Dict() { }
const styles = { baseUnit: "8px", legacy: "cn6v_g" };
export default styles;
export const customProperties = {};
const dictStyles = { "baseUnit": "8px", "legacy": "cn6v_g" };
export function getStyle(style) {
    return dictStyles[style];
}
;
