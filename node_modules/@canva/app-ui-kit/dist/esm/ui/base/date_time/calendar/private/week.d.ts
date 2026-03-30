import * as React from 'react';
export declare const DAYS_IN_WEEK: number;
export type CalendarWeekRenderedMonth = 'current' | 'prev' | 'next';
export type CalendarWeekProps = {
    children: React.ReactNode[]
    className?: string
    renderedMonth?: CalendarWeekRenderedMonth
};
export declare const CalendarWeek: React.ComponentType<CalendarWeekProps>;
