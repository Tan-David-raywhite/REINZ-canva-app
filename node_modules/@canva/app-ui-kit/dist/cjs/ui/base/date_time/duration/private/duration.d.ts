import { Duration as TimeDuration } from '../../../../../base/time/duration';
import * as React from 'react';
export type DurationFormat = 'short' | 'medium' | 'detailed' | 'abbreviated' | 'shortAbbreviated' | 'verbose' | 'detailedVerbose';
type DurationPropsBase = {
    format?: DurationFormat
    className?: string
    ariaLabel?: string
};
export type DurationProps = DurationPropsBase & ({
    seconds: number
    value?: never;
} | {
    seconds?: never;
    value: TimeDuration
});
export declare const Duration: React.ComponentType<DurationProps>;
export declare function formatDuration(secondsOrDuration: number | TimeDuration, format?: DurationFormat): string;
export {};
