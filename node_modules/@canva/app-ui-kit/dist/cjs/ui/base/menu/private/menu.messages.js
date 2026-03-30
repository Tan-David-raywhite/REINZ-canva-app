"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.MenuMessages = void 0;
const strings_1 = require('../../i18n/strings');
exports.MenuMessages = {
    expandMenu: (menuLabel) => (0, strings_1.formatId)("srR1Ww", [menuLabel], "Expand “{0}”"),
    collapseMenu: (menuLabel) => (0, strings_1.formatId)("uGpI5w", [menuLabel], "Collapse “{0}”"),
};
