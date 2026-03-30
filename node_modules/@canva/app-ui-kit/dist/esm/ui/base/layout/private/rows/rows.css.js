function Struct() { }
function Dict() { }
const styles = { largeUp: "(min-width: 1200px)", mediumUp: "(min-width: 900px)", smallUp: "(min-width: 600px)", xLargeUp: "(min-width: 1650px)", internalSpacing: "var(--B5MwdA)", spacing: "var(--NZu1Zw)", internalAlign: "var(--lbR7PA)", align: "var(--okeDpw)", smallUpSpacing: "var(--yjD9-g)", smallUpAlign: "var(--Wdux6Q)", mediumUpSpacing: "var(--p9uXxg)", mediumUpAlign: "var(--XmSfTQ)", largeUpSpacing: "var(--5eb_tQ)", largeUpAlign: "var(--70FeaQ)", xLargeUpSpacing: "var(--BaEeNQ)", xLargeUpAlign: "var(--TabT5g)", rows: "jv_R6g" };
export default styles;
export const customProperties = { internalSpacing: "--B5MwdA", spacing: "--NZu1Zw", internalAlign: "--lbR7PA", align: "--okeDpw", smallUpSpacing: "--yjD9-g", smallUpAlign: "--Wdux6Q", mediumUpSpacing: "--p9uXxg", mediumUpAlign: "--XmSfTQ", largeUpSpacing: "--5eb_tQ", largeUpAlign: "--70FeaQ", xLargeUpSpacing: "--BaEeNQ", xLargeUpAlign: "--TabT5g" };
const dictStyles = { "largeUp": "(min-width: 1200px)", "mediumUp": "(min-width: 900px)", "smallUp": "(min-width: 600px)", "xLargeUp": "(min-width: 1650px)", "internalSpacing": "var(--B5MwdA)", "spacing": "var(--NZu1Zw)", "internalAlign": "var(--lbR7PA)", "align": "var(--okeDpw)", "smallUpSpacing": "var(--yjD9-g)", "smallUpAlign": "var(--Wdux6Q)", "mediumUpSpacing": "var(--p9uXxg)", "mediumUpAlign": "var(--XmSfTQ)", "largeUpSpacing": "var(--5eb_tQ)", "largeUpAlign": "var(--70FeaQ)", "xLargeUpSpacing": "var(--BaEeNQ)", "xLargeUpAlign": "var(--TabT5g)", "rows": "jv_R6g" };
export function getStyle(style) {
    return dictStyles[style];
}
;
