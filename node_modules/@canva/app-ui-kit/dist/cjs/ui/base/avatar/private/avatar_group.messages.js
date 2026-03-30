"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AvatarGroupMessages = void 0;
const strings_1 = require('../../i18n/strings');
exports.AvatarGroupMessages = {
    more: (count) => (0, strings_1.formatId)("/qdtgA", [count], "{0} more"),
    unknownMore: () => (0, strings_1.getString)("NcuW/A", "More"),
};
