import { formatId } from '../../../i18n/strings';
export const DurationMessages = {
    yearsAbbreviation: (year) => formatId("sZGrGw", [year], "{0, plural, one {#y} other {#y}}"),
    weeksAbbreviation: (weeks) => formatId("ZgfQqA", [weeks], "{0, plural, one {#w} other {#w}}"),
    daysAbbreviation: (days) => formatId("d6wLsw", [days], "{0, plural, one {#d} other {#d}}"),
    hoursAbbreviation: (hours) => formatId("HKdgkQ", [hours], "{0, plural, one {#h} other {#h}}"),
    minutesAbbreviation: (minutes) => formatId("2U3qiA", [minutes], "{0, plural, one {#m} other {#m}}"),
    secondsAbbreviation: (seconds) => formatId("iRng9Q", [seconds], "{0, plural, one {#s} other {#s}}"),
    secondsStringAbbreviation: (seconds) => formatId("uF3SPA", [seconds], "{0}s"),
    weeksVerbose: (weeks) => formatId("equ0jQ", [weeks], "{0, plural, one {# week} other {# weeks}}"),
    daysVerbose: (days) => formatId("23tVoQ", [days], "{0, plural, one {# day} other {# days}}"),
    hoursVerbose: (hours) => formatId("/e3d/g", [hours], "{0, plural, one {# hour} other {# hours}}"),
    minutesVerbose: (minutes) => formatId("dRxxIA", [minutes], "{0, plural, one {# minute} other {# minutes}}"),
    secondsVerbose: (seconds) => formatId("yt8c2Q", [seconds], "{0, plural, one {# second} other {# seconds}}"),
};
