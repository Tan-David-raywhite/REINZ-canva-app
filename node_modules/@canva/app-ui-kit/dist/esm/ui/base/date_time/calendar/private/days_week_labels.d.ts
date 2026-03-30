import * as React from 'react';
export type CalendarDaysOfWeekLabelsProps = {
    locale: string
    className?: string
    DayOfWeekLabel?: React.ComponentType<CalendarDayOfWeekLabelProps>
    startingDate?: Date
};
export declare const CalendarDaysOfWeekLabels: React.ComponentType<CalendarDaysOfWeekLabelsProps>;
export type CalendarDayOfWeekLabelProps = {
    weekDayDate: string
    name: string
    label: string
    className?: string
};
export declare const CalendarDayOfWeekLabel: React.ComponentType<CalendarDayOfWeekLabelProps>;
