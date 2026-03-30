import type { DateObj, DateTimeObj } from '../../../date_time/utils/utils';
export declare const toUTCDateTimeObj: (dateStr: string | undefined, timezoneOffset: number) => DateTimeObj | undefined;
export declare const toDateObj: (dateStr: string | undefined) => DateObj | undefined;
export declare const toTimezoneDateTimeString: (date: DateTimeObj | undefined, timezoneOffset: number) => string | undefined;
export declare const toDateString: (date: DateObj | undefined) => string | undefined;
