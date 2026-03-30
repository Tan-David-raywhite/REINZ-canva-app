"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.NumberAbbreviationMessages = void 0;
const strings_1 = require('../i18n/strings');
exports.NumberAbbreviationMessages = {
    thousands: (formattedNumber) => (0, strings_1.formatId)("BQkOCQ", [formattedNumber], "{0}K"),
    tenThousands: (formattedNumber) => (0, strings_1.formatId)("7KQN4Q", [formattedNumber], "{0}K"),
    hundredThousands: (formattedNumber) => (0, strings_1.formatId)("k99f+Q", [formattedNumber], "{0}K"),
    millions: (formattedNumber) => (0, strings_1.formatId)("A/yo4g", [formattedNumber], "{0}M"),
    tenMillions: (formattedNumber) => (0, strings_1.formatId)("UY/ePA", [formattedNumber], "{0}M"),
    hundredMillions: (formattedNumber) => (0, strings_1.formatId)("VD4ycQ", [formattedNumber], "{0}M"),
    billions: (formattedNumber) => (0, strings_1.formatId)("B9m98A", [formattedNumber], "{0}B"),
};
