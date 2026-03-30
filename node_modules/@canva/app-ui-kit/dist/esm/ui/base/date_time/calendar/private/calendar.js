import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Preconditions } from '../../../../../base/preconditions';
import classNames from 'classnames';
import * as React from 'react';
import { checkMonth, compareDates, compareDays, compareMonthAndYear, dayOfWeekStartOfMonth, isEqualDates, key, monthDays, nextMonth, numberOfCompleteWeeks, prevMonth, toISO, toLocalDateTimeObject, toUTCDateTimeObject } from '../../utils/utils';
import styles from './calendar.css';
import { CalendarDayWithWrapper } from './day';
import { CalendarDaysOfWeekLabels } from './days_week_labels';
import { CalendarWeek as DefaultCalendarWeek, DAYS_IN_WEEK } from './week';
const WEEKS_IN_CALENDAR = 6;
const DAYS_IN_CALENDAR = DAYS_IN_WEEK * WEEKS_IN_CALENDAR;
export class Calendar extends React.PureComponent {
    componentDidMount() {
        if (this.props.autoFocus) this.focusedDayRef?.focus();
    }
    componentDidUpdate(prevProps) {
        if (this.props.autoFocus) this.focusedDayRef?.focus();
        if (!this.props.animate) return;
        if (prevProps.month !== this.props.month || prevProps.year !== this.props.year) {
            this.previousMonthYear = {
                month: this.props.month,
                year: this.props.year
            };
            setTimeout(()=>{
                requestAnimationFrame(()=>{
                    if (this.animatedRef) this.animatedRef.classList.add(styles.animate);
                });
            }, 0);
        }
    }
    get today() {
        return Preconditions.checkExists(this.props.today);
    }
    isToday(date) {
        return isEqualDates(date, this.today);
    }
    isSelectedDate(date) {
        const { selected } = this.props;
        if (!selected) return false;
        const dates = Array.isArray(selected) ? selected : [
            selected
        ];
        return dates.some((selectedDate)=>isEqualDates(date, selectedDate));
    }
    isFocusedDate(date) {
        return !!(this.props.focused && isEqualDates(date, this.props.focused));
    }
    isIncludedInTabOrderDate(date) {
        return !!(this.props.includedInTabOrder && isEqualDates(date, this.props.includedInTabOrder));
    }
    isDisabledDate(date) {
        const { canSelectPastDates, minSelectableDate, maxSelectableDate } = this.props;
        if ((!canSelectPastDates || minSelectableDate === 'today') && this.isPastDate(date)) return true;
        if (!!minSelectableDate && minSelectableDate !== 'today' && compareDates(date, minSelectableDate) < 0) return true;
        if (maxSelectableDate) return compareDates(date, maxSelectableDate) > 0;
        return false;
    }
    isPastDate(date) {
        return compareDays(date, this.today) < 0;
    }
    isCurrentMonth(date, month) {
        return checkMonth(date, month);
    }
    compareWithPrevious() {
        const { month, year } = this.props;
        return compareMonthAndYear(this.previousMonthYear, {
            month,
            year
        });
    }
    getPreviousWeeksNumber() {
        const comparedWithPrevious = this.compareWithPrevious();
        if (comparedWithPrevious < 0) return numberOfCompleteWeeks(this.previousMonthYear);
        if (comparedWithPrevious > 0) return numberOfCompleteWeeks({
            month: this.props.month,
            year: this.props.year
        });
        return 0;
    }
    getDates({ month, year }) {
        const dates = [];
        dates.push(...monthDays({
            month,
            year
        }));
        const firstDayIndex = dayOfWeekStartOfMonth({
            month,
            year
        });
        if (firstDayIndex > 0) dates.unshift(...monthDays(prevMonth({
            month,
            year
        }), -firstDayIndex));
        if (dates.length < DAYS_IN_CALENDAR) dates.push(...monthDays(nextMonth({
            month,
            year
        }), DAYS_IN_CALENDAR - dates.length));
        return dates;
    }
    splitToWeeks(days) {
        return days.reduce((weeks, day)=>{
            if (!weeks[weeks.length - 1] || weeks[weeks.length - 1].length >= DAYS_IN_WEEK) weeks.push([]);
            weeks[weeks.length - 1].push(day);
            return weeks;
        }, []);
    }
    renderAnimatedDays() {
        const { month, year } = this.props;
        const comparedWithPrevious = this.compareWithPrevious();
        const previousWeeksNumber = this.getPreviousWeeksNumber();
        const previousMonthWeeks = comparedWithPrevious < 0 && previousWeeksNumber ? {
            count: previousWeeksNumber
        } : undefined;
        const nextMonthWeeks = comparedWithPrevious > 0 && previousWeeksNumber ? {
            count: previousWeeksNumber,
            offset: 6 - previousWeeksNumber
        } : undefined;
        return _jsx("div", {
            className: styles.animationWrap,
            children: _jsxs("div", {
                className: classNames(styles.animationScroll, {
                    [styles.animateToPrevious]: comparedWithPrevious < 0,
                    [styles.animateToNext]: comparedWithPrevious > 0,
                    [styles.weeks4]: previousWeeksNumber === 4,
                    [styles.weeks5]: previousWeeksNumber === 5
                }),
                ref: this.onAnimationScrollRef,
                children: [
                    previousMonthWeeks && _jsx("div", {
                        className: styles.previousMonth,
                        children: this.renderDays(this.previousMonthYear, previousMonthWeeks, 'prev')
                    }),
                    this.renderDays({
                        month,
                        year
                    }, undefined, 'current'),
                    nextMonthWeeks && _jsx("div", {
                        className: styles.nextMonth,
                        children: this.renderDays(this.previousMonthYear, nextMonthWeeks, 'next')
                    })
                ]
            })
        }, `days${month}-${year}`);
    }
    renderDays(monthYear, weeksChunk, renderedMonth) {
        let weeks = this.splitToWeeks(this.getDates(monthYear));
        if (weeksChunk) {
            const offset = weeksChunk.offset || 0;
            weeks = weeks.slice(offset, offset + weeksChunk.count);
        }
        const Week = Preconditions.checkExists(this.props.CalendarWeek);
        return weeks.map((week)=>_jsx(Week, {
                renderedMonth: renderedMonth,
                children: week.map((day)=>this.renderDay(toISO(day), monthYear, renderedMonth === 'current'))
            }, key(week[0], 'week')));
    }
    renderDay(date, { month }, active = true) {
        const current = this.isCurrentMonth(date, month);
        const { locale, onSelect, selectedInvalid } = this.props;
        const isSelected = this.isSelectedDate(date);
        const isFocused = this.isFocusedDate(date);
        const onSelectedDayRef = isSelected && active ? this.onSelectedDayRef : undefined;
        const onFocusedDayRef = isFocused ? this.onFocusedDayRef : undefined;
        const onDayRef = onSelectedDayRef || onFocusedDayRef ? (ref)=>{
            onSelectedDayRef?.(ref);
            onFocusedDayRef?.(ref);
        } : undefined;
        const Day = Preconditions.checkExists(this.props.CalendarDay);
        return _jsx(Day, {
            locale: locale,
            date: date,
            current: current,
            today: this.isToday(date),
            past: this.isPastDate(date),
            selected: isSelected,
            selectedInvalid: selectedInvalid,
            disabled: this.isDisabledDate(date),
            onSelect: active && onSelect ? this.onSelect : undefined,
            onDayRef: onDayRef,
            includeInTabOrder: this.isIncludedInTabOrderDate(date)
        }, key(date, 'day'));
    }
    render() {
        const { month, year, className, DaysOfWeekLabels = CalendarDaysOfWeekLabels } = this.props;
        return _jsxs("div", {
            className: classNames(styles.calendar, className),
            role: "grid",
            "aria-label": this.props.ariaLabelledBy ? undefined : this.props.ariaLabel,
            "aria-labelledby": this.props.ariaLabelledBy,
            "aria-describedby": this.props.ariaDescribedBy,
            children: [
                DaysOfWeekLabels && _jsx(DaysOfWeekLabels, {
                    locale: this.props.locale
                }),
                _jsx("div", {
                    className: styles.days,
                    children: this.props.animate ? this.renderAnimatedDays() : this.renderDays({
                        month,
                        year
                    }, undefined, 'current')
                })
            ]
        });
    }
    constructor(...args){
        super(...args), this.previousMonthYear = {
            month: this.props.month,
            year: this.props.year
        }, this.onAnimationScrollRef = (ref)=>{
            this.animatedRef = ref;
        }, this.onSelectedDayRef = (ref)=>{
            this.selectedDayRef = ref;
        }, this.onFocusedDayRef = (ref)=>{
            this.focusedDayRef = ref;
        }, this.onSelect = (date)=>{
            this.props.onSelect?.(toUTCDateTimeObject(date));
        };
    }
}
Calendar.defaultProps = {
    autoFocus: true,
    today: toLocalDateTimeObject(new Date()),
    CalendarDay: CalendarDayWithWrapper,
    CalendarWeek: DefaultCalendarWeek,
    DaysOfWeekLabels: CalendarDaysOfWeekLabels
};
