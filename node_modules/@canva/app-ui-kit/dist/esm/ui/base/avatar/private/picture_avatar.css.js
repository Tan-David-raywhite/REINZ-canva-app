function Struct() { }
function Dict() { }
const styles = { colorUiBorder: "var(--enMi_w)", backgroundColor: "var(--RFzAdw)", borderColor: "var(--RKyZlA)", avatarBorderWidth: "2px", background: "_1a2UHw", border: "JwH6AA", defaultBorder: "QJpRHw" };
export default styles;
export const customProperties = { colorUiBorder: "--enMi_w", backgroundColor: "--RFzAdw", borderColor: "--RKyZlA" };
const dictStyles = { "colorUiBorder": "var(--enMi_w)", "backgroundColor": "var(--RFzAdw)", "borderColor": "var(--RKyZlA)", "avatarBorderWidth": "2px", "background": "_1a2UHw", "border": "JwH6AA", "defaultBorder": "QJpRHw" };
export function getStyle(style) {
    return dictStyles[style];
}
;
