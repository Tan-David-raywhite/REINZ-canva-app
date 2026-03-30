import * as React from 'react';
export type CalendarDayProps = {
    locale: string
    date: string
    current: boolean
    today: boolean
    past: boolean
    selected?: boolean
    includeInTabOrder?: boolean
    selectedInvalid?: boolean
    label?: string
    disabled?: boolean
    className?: string
    dataDate?: boolean
    onSelect?: (date: string) => void
    onDayRef?: (ref: HTMLElement | null) => void
};
export declare class CalendarDay extends React.PureComponent<CalendarDayProps> {
    private get label();
    private get dayNumber();
    private get dataDate();
    private get className();
    private getText;
    private readonly onClick;
    private getButton;
    render(): React.JSX.Element;
}
export declare const CalendarDayWithWrapper: ({ locale, date, current, today, past, selected, selectedInvalid, disabled, className, onSelect, onDayRef, includeInTabOrder, }: CalendarDayProps) => React.JSX.Element;
