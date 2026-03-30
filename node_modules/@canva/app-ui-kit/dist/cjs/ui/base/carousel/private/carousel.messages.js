"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CarouselMessages = void 0;
const strings_1 = require('../../i18n/strings');
exports.CarouselMessages = {
    skipToEnd: () => (0, strings_1.getString)("m8gVcA", "Skip to end of list"),
    skipToStart: () => (0, strings_1.getString)("XiRPqg", "Skip to start of list"),
    skipToNamedListEnd: (carouselName) => (0, strings_1.formatId)("70xSVA", [carouselName], "Skip to end of “{0}” list"),
    skipToNamedListStart: (carouselName) => (0, strings_1.formatId)("EtH2Sg", [carouselName], "Skip to start of “{0}” list"),
    listEnd: () => (0, strings_1.getString)("zBSOaw", "End of list"),
    listStart: () => (0, strings_1.getString)("maTNiA", "Start of list"),
    namedListEnd: (carouselName) => (0, strings_1.formatId)("RK5cHQ", [carouselName], "End of list: {0}"),
    namedListStart: (carouselName) => (0, strings_1.formatId)("LckcsA", [carouselName], "Start of list: {0}"),
};
