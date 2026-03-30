import { formatId, getString } from '../../../i18n/strings';
export const PillInputMessages = {
    removeAll: () => getString("BBteTQ", "Remove all"),
    itemsCleared: () => getString("BA36oA", "All items removed."),
    itemsRemoved: (items) => formatId("o07knA", [items], "{0} removed."),
    itemsAdded: (items) => formatId("ubkayw", [items], "{0} added."),
    itemsExists: (items, count) => formatId("roVfsg", [items, count], "{0} already {1, plural, one {exists} other {exist}}."),
    itemsSeparator: () => getString("EWHJbQ", ", "),
};
