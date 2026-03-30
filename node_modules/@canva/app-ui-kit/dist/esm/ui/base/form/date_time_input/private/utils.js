import { dateObjToDateString, fromTimezoneToUTC, fromUTCToTimezone, toDate, toDateObject, toISO, toUTCDateTimeObject } from '../../../date_time/utils/utils';
const MIN_YEAR = 0;
const MAX_YEAR = 9999;
const clampYear = (year)=>{
    return Math.min(Math.max(MIN_YEAR, year), MAX_YEAR);
};
export const toUTCDateTimeObj = (dateStr, timezoneOffset)=>{
    if (dateStr == null || dateStr === '') return;
    const date = toDate(dateStr);
    date.setUTCFullYear(clampYear(date.getUTCFullYear()));
    return toUTCDateTimeObject(fromTimezoneToUTC(date, timezoneOffset));
};
export const toDateObj = (dateStr)=>{
    if (dateStr == null || dateStr === '') return;
    const date = toDateObject(dateStr);
    return date != null ? {
        ...date,
        year: clampYear(date.year)
    } : undefined;
};
export const toTimezoneDateTimeString = (date, timezoneOffset)=>{
    if (date == null) return;
    const clampedDate = {
        ...date,
        year: clampYear(date.year)
    };
    return toISO(fromUTCToTimezone(clampedDate, timezoneOffset));
};
export const toDateString = (date)=>{
    if (date == null) return;
    const clampedDate = {
        ...date,
        year: clampYear(date.year)
    };
    return dateObjToDateString(clampedDate);
};
