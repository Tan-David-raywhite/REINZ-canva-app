"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.PillInputMessages = void 0;
const strings_1 = require('../../../i18n/strings');
exports.PillInputMessages = {
    removeAll: () => (0, strings_1.getString)("BBteTQ", "Remove all"),
    itemsCleared: () => (0, strings_1.getString)("BA36oA", "All items removed."),
    itemsRemoved: (items) => (0, strings_1.formatId)("o07knA", [items], "{0} removed."),
    itemsAdded: (items) => (0, strings_1.formatId)("ubkayw", [items], "{0} added."),
    itemsExists: (items, count) => (0, strings_1.formatId)("roVfsg", [items, count], "{0} already {1, plural, one {exists} other {exist}}."),
    itemsSeparator: () => (0, strings_1.getString)("EWHJbQ", ", "),
};
