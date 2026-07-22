"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.BaseSelectMessages = void 0;
const strings_1 = require('../../../i18n/strings');
exports.BaseSelectMessages = {
    defaultPlaceholder: () => (0, strings_1.getString)("dKQxwg", "Select an option"),
    defaultEmptyMessage: () => (0, strings_1.getString)("a8/eEQ", "No options available"),
    noResultsFor: (query) => (0, strings_1.formatId)("I1Bdwg", [query], "No results for ‘{0}’"),
    tryAnotherTerm: () => (0, strings_1.getString)("0ezA2g", "Try another term"),
    defaultDisabledMessage: () => (0, strings_1.getString)("WKZ41A", "Selection unavailable"),
    defaultNoSelectionMessage: () => (0, strings_1.getString)("d2lFtQ", "No options selected"),
    defaultSearchInputLabel: () => (0, strings_1.getString)("4WSBDw", "Search options"),
    selectAll: () => (0, strings_1.getString)("9im6ug", "Select all"),
    hiddenOptions: (numberOfHiddenOptions) => (0, strings_1.formatId)("JqZKDA", [numberOfHiddenOptions], "+{0}"),
    done: () => (0, strings_1.getString)("YdOIEg", "Done"),
};
