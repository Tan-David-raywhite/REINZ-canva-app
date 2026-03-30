import * as React from 'react';
import type { DateTimeObject, DateType, Month } from '../../utils/utils';
import type { CalendarDayProps } from './day';
import type { CalendarDaysOfWeekLabelsProps } from './days_week_labels';
import type { CalendarWeekProps } from './week';
export type CalendarProps = {
    ariaLabel?: string
    ariaLabelledBy?: string
    ariaDescribedBy?: string
    locale: string
    month: Month
    year: number
    animate?: boolean
    autoFocus?: boolean
    today?: DateTimeObject
    selected?: DateTimeObject | [DateTimeObject, DateTimeObject]
    focused?: DateTimeObject
    includedInTabOrder?: DateTimeObject
    selectedInvalid?: boolean
    canSelectPastDates?: boolean
    className?: string
    onSelect?: (date: DateTimeObject) => void
    minSelectableDate?: DateType | 'today'
    maxSelectableDate?: DateType
    CalendarDay?: React.ComponentType<CalendarDayProps>
    CalendarWeek?: React.ComponentType<CalendarWeekProps>
    DaysOfWeekLabels?: React.ComponentType<CalendarDaysOfWeekLabelsProps> | null
};
export declare class Calendar extends React.PureComponent<CalendarProps> {
    private previousMonthYear;
    private animatedRef?;
    private selectedDayRef?;
    private focusedDayRef?;
    static readonly defaultProps: Partial<CalendarProps>;
    componentDidMount(): void;
    componentDidUpdate(prevProps: Readonly<CalendarProps>): void;
    private readonly onAnimationScrollRef;
    private readonly onSelectedDayRef;
    private readonly onFocusedDayRef;
    private readonly onSelect;
    private get today();
    private isToday;
    private isSelectedDate;
    private isFocusedDate;
    private isIncludedInTabOrderDate;
    private isDisabledDate;
    private isPastDate;
    private isCurrentMonth;
    private compareWithPrevious;
    private getPreviousWeeksNumber;
    private getDates;
    private splitToWeeks;
    renderAnimatedDays(): React.JSX.Element;
    private renderDays;
    private renderDay;
    render(): React.JSX.Element;
}
