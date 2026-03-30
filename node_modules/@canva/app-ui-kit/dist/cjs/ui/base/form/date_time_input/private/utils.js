"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get toDateObj () {
        return toDateObj;
    },
    get toDateString () {
        return toDateString;
    },
    get toTimezoneDateTimeString () {
        return toTimezoneDateTimeString;
    },
    get toUTCDateTimeObj () {
        return toUTCDateTimeObj;
    }
});
const _utils = require('../../../date_time/utils/utils');
const MIN_YEAR = 0;
const MAX_YEAR = 9999;
const clampYear = (year)=>{
    return Math.min(Math.max(MIN_YEAR, year), MAX_YEAR);
};
const toUTCDateTimeObj = (dateStr, timezoneOffset)=>{
    if (dateStr == null || dateStr === '') return;
    const date = (0, _utils.toDate)(dateStr);
    date.setUTCFullYear(clampYear(date.getUTCFullYear()));
    return (0, _utils.toUTCDateTimeObject)((0, _utils.fromTimezoneToUTC)(date, timezoneOffset));
};
const toDateObj = (dateStr)=>{
    if (dateStr == null || dateStr === '') return;
    const date = (0, _utils.toDateObject)(dateStr);
    return date != null ? {
        ...date,
        year: clampYear(date.year)
    } : undefined;
};
const toTimezoneDateTimeString = (date, timezoneOffset)=>{
    if (date == null) return;
    const clampedDate = {
        ...date,
        year: clampYear(date.year)
    };
    return (0, _utils.toISO)((0, _utils.fromUTCToTimezone)(clampedDate, timezoneOffset));
};
const toDateString = (date)=>{
    if (date == null) return;
    const clampedDate = {
        ...date,
        year: clampYear(date.year)
    };
    return (0, _utils.dateObjToDateString)(clampedDate);
};
