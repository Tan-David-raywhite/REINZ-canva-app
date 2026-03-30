function Struct() { }
function Dict() { }
const styles = { aboveLarge: "(min-width: 1200px)", aboveMedium: "(min-width: 900px)", aboveSmall: "(min-width: 600px)", belowLarge: "(max-width: 1199px)", belowMedium: "(max-width: 899px)", belowSmall: "(max-width: 599px)", hiddenBelowSmall: "wJbOHQ", hiddenBelowMedium: "Lvj8DA", hiddenBelowLarge: "HymTAA", hiddenAboveSmall: "Kfm_Qg", hiddenAboveMedium: "X3YvaQ", hiddenAboveLarge: "_0zD_tw" };
export default styles;
export const customProperties = {};
const dictStyles = { "aboveLarge": "(min-width: 1200px)", "aboveMedium": "(min-width: 900px)", "aboveSmall": "(min-width: 600px)", "belowLarge": "(max-width: 1199px)", "belowMedium": "(max-width: 899px)", "belowSmall": "(max-width: 599px)", "hiddenBelowSmall": "wJbOHQ", "hiddenBelowMedium": "Lvj8DA", "hiddenBelowLarge": "HymTAA", "hiddenAboveSmall": "Kfm_Qg", "hiddenAboveMedium": "X3YvaQ", "hiddenAboveLarge": "_0zD_tw" };
export function getStyle(style) {
    return dictStyles[style];
}
;
