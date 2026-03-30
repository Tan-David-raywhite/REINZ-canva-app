"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DurationMessages = void 0;
const strings_1 = require('../../../i18n/strings');
exports.DurationMessages = {
    yearsAbbreviation: (year) => (0, strings_1.formatId)("sZGrGw", [year], "{0, plural, one {#y} other {#y}}"),
    weeksAbbreviation: (weeks) => (0, strings_1.formatId)("ZgfQqA", [weeks], "{0, plural, one {#w} other {#w}}"),
    daysAbbreviation: (days) => (0, strings_1.formatId)("d6wLsw", [days], "{0, plural, one {#d} other {#d}}"),
    hoursAbbreviation: (hours) => (0, strings_1.formatId)("HKdgkQ", [hours], "{0, plural, one {#h} other {#h}}"),
    minutesAbbreviation: (minutes) => (0, strings_1.formatId)("2U3qiA", [minutes], "{0, plural, one {#m} other {#m}}"),
    secondsAbbreviation: (seconds) => (0, strings_1.formatId)("iRng9Q", [seconds], "{0, plural, one {#s} other {#s}}"),
    secondsStringAbbreviation: (seconds) => (0, strings_1.formatId)("uF3SPA", [seconds], "{0}s"),
    weeksVerbose: (weeks) => (0, strings_1.formatId)("equ0jQ", [weeks], "{0, plural, one {# week} other {# weeks}}"),
    daysVerbose: (days) => (0, strings_1.formatId)("23tVoQ", [days], "{0, plural, one {# day} other {# days}}"),
    hoursVerbose: (hours) => (0, strings_1.formatId)("/e3d/g", [hours], "{0, plural, one {# hour} other {# hours}}"),
    minutesVerbose: (minutes) => (0, strings_1.formatId)("dRxxIA", [minutes], "{0, plural, one {# minute} other {# minutes}}"),
    secondsVerbose: (seconds) => (0, strings_1.formatId)("yt8c2Q", [seconds], "{0, plural, one {# second} other {# seconds}}"),
};
