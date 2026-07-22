"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.customProperties = void 0;
exports.getStyle = getStyle;
function Struct() { }
function Dict() { }
const styles = { space100: "8px", progressBarEndColumnWidth: "var(--fWBHfQ, 0px)", container: "RN70Cg", withEnd: "_6Sru4Q", labelCell: "OsIfkg", indicatorCell: "ie2l2Q", descriptionCell: "UYCsxg", endCell: "d3nOZg", endSlot: "dATfgg" };
exports.default = styles;
exports.customProperties = { progressBarEndColumnWidth: "--fWBHfQ" };
const dictStyles = { "space100": "8px", "progressBarEndColumnWidth": "var(--fWBHfQ, 0px)", "container": "RN70Cg", "withEnd": "_6Sru4Q", "labelCell": "OsIfkg", "indicatorCell": "ie2l2Q", "descriptionCell": "UYCsxg", "endCell": "d3nOZg", "endSlot": "dATfgg" };
function getStyle(style) {
    return dictStyles[style];
}
;
