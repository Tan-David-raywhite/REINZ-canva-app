import type { JSX } from 'react';
import type { TimeZone } from '../../../date_time/utils/utils';
export type TimezoneDecoratorProps = {
    locale?: string
    timezone?: TimeZone
};
export declare const TimezoneDecorator: ({ locale: localeProp, timezone: timezoneProp, }: TimezoneDecoratorProps) => JSX.Element | null;
