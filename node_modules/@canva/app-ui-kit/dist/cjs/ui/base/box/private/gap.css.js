"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { largeUp: "(min-width: 1200px)", mediumUp: "(min-width: 900px)", smallUp: "(min-width: 600px)", xLargeUp: "(min-width: 1650px)", internalGap: "var(--bOb18g)", gap: "var(--5wdutQ)", internalRowGap: "var(--jjCsEw)", rowGap: "var(--9qztCw)", internalColumnGap: "var(--wYLrmQ)", columnGap: "var(--0pkb8w)", smallUpGap: "var(--3zBMXw)", smallUpRowGap: "var(--MccI2w)", smallUpColumnGap: "var(--_3obvQ)", mediumUpGap: "var(--O18aWQ)", mediumUpRowGap: "var(--z6zA8A)", mediumUpColumnGap: "var(--74_RNQ)", largeUpGap: "var(--ty4yNw)", largeUpRowGap: "var(---TQGQw)", largeUpColumnGap: "var(--QlLhPw)", xLargeUpGap: "var(--HcAxoA)", xLargeUpRowGap: "var(--bFUTew)", xLargeUpColumnGap: "var(--G8o01A)", hasGap: "rxu2yw" };
exports.default = styles;
exports.customProperties = { internalGap: "--bOb18g", gap: "--5wdutQ", internalRowGap: "--jjCsEw", rowGap: "--9qztCw", internalColumnGap: "--wYLrmQ", columnGap: "--0pkb8w", smallUpGap: "--3zBMXw", smallUpRowGap: "--MccI2w", smallUpColumnGap: "--_3obvQ", mediumUpGap: "--O18aWQ", mediumUpRowGap: "--z6zA8A", mediumUpColumnGap: "--74_RNQ", largeUpGap: "--ty4yNw", largeUpRowGap: "---TQGQw", largeUpColumnGap: "--QlLhPw", xLargeUpGap: "--HcAxoA", xLargeUpRowGap: "--bFUTew", xLargeUpColumnGap: "--G8o01A" };
const dictStyles = { "largeUp": "(min-width: 1200px)", "mediumUp": "(min-width: 900px)", "smallUp": "(min-width: 600px)", "xLargeUp": "(min-width: 1650px)", "internalGap": "var(--bOb18g)", "gap": "var(--5wdutQ)", "internalRowGap": "var(--jjCsEw)", "rowGap": "var(--9qztCw)", "internalColumnGap": "var(--wYLrmQ)", "columnGap": "var(--0pkb8w)", "smallUpGap": "var(--3zBMXw)", "smallUpRowGap": "var(--MccI2w)", "smallUpColumnGap": "var(--_3obvQ)", "mediumUpGap": "var(--O18aWQ)", "mediumUpRowGap": "var(--z6zA8A)", "mediumUpColumnGap": "var(--74_RNQ)", "largeUpGap": "var(--ty4yNw)", "largeUpRowGap": "var(---TQGQw)", "largeUpColumnGap": "var(--QlLhPw)", "xLargeUpGap": "var(--HcAxoA)", "xLargeUpRowGap": "var(--bFUTew)", "xLargeUpColumnGap": "var(--G8o01A)", "hasGap": "rxu2yw" };
function getStyle(style) {
    return dictStyles[style];
}
;
