"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.InputDecoratorsMessages = void 0;
const strings_1 = require('../../../i18n/strings');
exports.InputDecoratorsMessages = {
    charsUsed: (charsUsed, maxChars) => (0, strings_1.formatId)("n89B7A", [charsUsed, maxChars], "{0, number} out of {1, number} characters used"),
    wordsUsed: (wordsUsed, maxWords) => (0, strings_1.formatId)("pBrsaw", [wordsUsed, maxWords], "{0, number} out of {1, number} words used"),
    clear: () => (0, strings_1.getString)("nTW0FQ", "Clear"),
    copy: () => (0, strings_1.getString)("URnvFw", "Copy"),
    copied: () => (0, strings_1.getString)("eD7PPw", "Copied!"),
    showPassword: () => (0, strings_1.getString)("DA8d4w", "Show"),
    hidePassword: () => (0, strings_1.getString)("TxrGbw", "Hide"),
};
