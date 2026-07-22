import { formatId, getString } from '../../../i18n/strings';
export const BaseSelectMessages = {
    defaultPlaceholder: () => getString("dKQxwg", "Select an option"),
    defaultEmptyMessage: () => getString("a8/eEQ", "No options available"),
    noResultsFor: (query) => formatId("I1Bdwg", [query], "No results for ‘{0}’"),
    tryAnotherTerm: () => getString("0ezA2g", "Try another term"),
    defaultDisabledMessage: () => getString("WKZ41A", "Selection unavailable"),
    defaultNoSelectionMessage: () => getString("d2lFtQ", "No options selected"),
    defaultSearchInputLabel: () => getString("4WSBDw", "Search options"),
    selectAll: () => getString("9im6ug", "Select all"),
    hiddenOptions: (numberOfHiddenOptions) => formatId("JqZKDA", [numberOfHiddenOptions], "+{0}"),
    done: () => getString("YdOIEg", "Done"),
};
