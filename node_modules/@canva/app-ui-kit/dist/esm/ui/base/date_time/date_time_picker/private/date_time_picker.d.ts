import * as React from 'react';
import type { TimeZone } from '../../utils/utils';
export type DateTimePickerMode = 'datetime' | 'date';
export type DateTimePickerProps = {
    locale: string
    date?: string
    timezone?: TimeZone
    today?: string
    focusToday?: boolean
    showTodayButton?: boolean
    canSelectPastDates?: boolean
    maxSelectableDate?: string
    minSelectableDate?: string | 'today'
    timeInvalid?: boolean
    selectedDayInvalid?: boolean
    animate?: boolean
    clearable?: boolean
    onChange: (date?: string) => void
    mode?: DateTimePickerMode
};
export declare const DateTimePicker: React.ComponentType<DateTimePickerProps>;
