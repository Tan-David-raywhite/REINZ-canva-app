import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { UnreachableError } from '../../../../../base/preconditions';
import { useStableFunction } from '../../../../../base/react/stable_function';
import * as React from 'react';
import { ScreenReaderContent } from '../../../a11y/screen_reader_content/screen_reader_content';
import { Button } from '../../../button/button';
import { Calendar } from '../../calendar/calendar';
import { MonthsNavigation } from '../months_navigation/months_navigation';
import { addDays, addMonths, addYears, compareDates, compareMonthAndYear, dayOfWeek, fromUTCToTimezone, getTimezoneOffset, toUTCDateTimeObject } from '../../utils/utils';
import { TimeInput } from '../../../form/time_input/time_input';
import { shift, useKeyCombinationHandler } from '../../../key_combinations/key_combinations';
import { Column, Columns, Spacer } from '../../../layout/layout';
import styles from './date_time_picker.css';
import { DateTimePickerMessages } from './date_time_picker.messages';
import { useDateTimePickerState } from './state';
export const DateTimePicker = function DateTimePicker({ locale, date, timezone, today, focusToday, showTodayButton = true, canSelectPastDates, maxSelectableDate, minSelectableDate, timeInvalid, selectedDayInvalid, animate = false, clearable = true, onChange, mode = 'datetime' }) {
    const state = useDateTimePickerState({
        date,
        locale,
        today,
        defaultTimezone: timezone,
        focusToday
    });
    const parsedDate = React.useMemo(()=>{
        if (date == null) return undefined;
        return toUTCDateTimeObject(fromUTCToTimezone(date, timezone ? timezone.offset : getTimezoneOffset(date)));
    }, [
        date,
        timezone
    ]);
    const getNavigationDisabled = React.useCallback((displayDate)=>{
        let disabledNav;
        if ((!canSelectPastDates || minSelectableDate === 'today') && compareMonthAndYear(displayDate, state.todayInTimezone) <= 0) disabledNav = 'prev';
        if (minSelectableDate && minSelectableDate !== 'today' && compareMonthAndYear(displayDate, minSelectableDate) <= 0) disabledNav = 'prev';
        if (maxSelectableDate && compareMonthAndYear(displayDate, maxSelectableDate) >= 0) disabledNav = disabledNav === 'prev' ? 'both' : 'next';
        return disabledNav;
    }, [
        canSelectPastDates,
        minSelectableDate,
        maxSelectableDate,
        state.todayInTimezone
    ]);
    const navigationDisabled = React.useMemo(()=>getNavigationDisabled(state.dateInTimezone), [
        getNavigationDisabled,
        state.dateInTimezone
    ]);
    const moveFocus = useStableFunction((delta, deltaType, fromDate)=>{
        const currentDate = fromDate ?? state.focusedDateInTimezone ?? state.dateInTimezone;
        let newDate = currentDate;
        switch(deltaType){
            case 'day':
                newDate = addDays(currentDate, delta);
                break;
            case 'month':
                newDate = addMonths(currentDate, delta);
                break;
            case 'year':
                newDate = addYears(currentDate, delta);
                break;
            default:
                throw new UnreachableError(deltaType);
        }
        if ((!canSelectPastDates || minSelectableDate === 'today') && compareDates(newDate, state.todayInTimezone) < 0) newDate = state.todayInTimezone;
        if (minSelectableDate && minSelectableDate !== 'today' && compareDates(newDate, minSelectableDate) < 0) newDate = minSelectableDate;
        if (maxSelectableDate && compareDates(newDate, maxSelectableDate) > 0) newDate = maxSelectableDate;
        state.updateFocusedDate(toUTCDateTimeObject(newDate));
    });
    const moveFocusToStartOfWeek = useStableFunction(()=>{
        const currentDate = state.focusedDateInTimezone ?? state.dateInTimezone;
        const currentDayOfWeek = dayOfWeek(currentDate);
        if (currentDayOfWeek > 0) moveFocus(-currentDayOfWeek, 'day');
    });
    const moveFocusToEndOfWeek = useStableFunction(()=>{
        const currentDate = state.focusedDateInTimezone ?? state.dateInTimezone;
        const currentDayOfWeek = dayOfWeek(currentDate);
        if (currentDayOfWeek < 6) moveFocus(6 - currentDayOfWeek, 'day');
    });
    const onChangeMonth = useStableFunction((dateObj)=>{
        state.unsetFocusedDate();
        state.updateDate(dateObj);
        const navDisabled = getNavigationDisabled(dateObj);
        if (navDisabled != null) {
            state.updateFocusedDate(dateObj);
            moveFocus(0, 'day', dateObj);
        }
    });
    const onSelectDay = useStableFunction((dateObj)=>{
        const newUtcDate = state.dateToUtc(dateObj);
        state.updateDate(dateObj, {
            updateFocus: true
        });
        onChange(newUtcDate);
    });
    const selectToday = useStableFunction(()=>{
        const newUtcDate = state.dateToUtc(state.todayInTimezone);
        state.updateDate(state.todayInTimezone, {
            updateFocus: true
        });
        onChange(newUtcDate);
    });
    const clearSelectedDay = useStableFunction(()=>{
        state.unsetFocusedDate();
        onChange(undefined);
    });
    const onChangeTime = useStableFunction((timeValue)=>{
        const timeMs = timeValue ?? 0;
        const newUtcDate = state.timeToUtc(timeMs);
        state.unsetFocusedDate();
        state.updateTime(timeMs);
        onChange(newUtcDate);
    });
    const keyMap = React.useMemo(()=>[
            [
                'ArrowRight',
                (event)=>{
                    event.preventDefault();
                    moveFocus(1, 'day');
                }
            ],
            [
                'ArrowLeft',
                (event)=>{
                    event.preventDefault();
                    moveFocus(-1, 'day');
                }
            ],
            [
                'ArrowDown',
                (event)=>{
                    event.preventDefault();
                    moveFocus(7, 'day');
                }
            ],
            [
                'ArrowUp',
                (event)=>{
                    event.preventDefault();
                    moveFocus(-7, 'day');
                }
            ],
            [
                'Home',
                (event)=>{
                    event.preventDefault();
                    moveFocusToStartOfWeek();
                }
            ],
            [
                'End',
                (event)=>{
                    event.preventDefault();
                    moveFocusToEndOfWeek();
                }
            ],
            [
                'PageUp',
                (event)=>{
                    event.preventDefault();
                    moveFocus(-1, 'month');
                }
            ],
            [
                'PageDown',
                (event)=>{
                    event.preventDefault();
                    moveFocus(1, 'month');
                }
            ],
            [
                shift('PageUp'),
                (event)=>{
                    event.preventDefault();
                    moveFocus(-1, 'year');
                }
            ],
            [
                shift('PageDown'),
                (event)=>{
                    event.preventDefault();
                    moveFocus(1, 'year');
                }
            ]
        ], [
        moveFocus,
        moveFocusToStartOfWeek,
        moveFocusToEndOfWeek
    ]);
    const { ref: keyRef } = useKeyCombinationHandler(keyMap, {
        handleInputs: false
    });
    const calendarLabelId = React.useId();
    const calendarDescriptionId = React.useId();
    const columnAlignment = clearable && showTodayButton ? 'spaceBetween' : clearable ? 'start' : 'end';
    return _jsxs("div", {
        className: styles.dateTimePicker,
        children: [
            _jsx(MonthsNavigation, {
                locale: locale,
                month: state.month,
                year: state.year,
                today: state.todayInTimezone,
                disabled: navigationDisabled,
                animate: animate,
                onChange: onChangeMonth,
                titleId: calendarLabelId
            }),
            _jsxs("div", {
                ref: keyRef,
                children: [
                    _jsx(ScreenReaderContent, {
                        id: calendarDescriptionId,
                        children: DateTimePickerMessages.calendarDescription()
                    }),
                    _jsx(Calendar, {
                        locale: locale,
                        month: state.month,
                        year: state.year,
                        animate: animate,
                        today: state.todayInTimezone,
                        selected: parsedDate,
                        focused: state.focusedDateInTimezone,
                        includedInTabOrder: state.focusedDateInTimezone ?? state.dateInTimezone ?? state.todayInTimezone,
                        selectedInvalid: selectedDayInvalid,
                        canSelectPastDates: canSelectPastDates,
                        minSelectableDate: minSelectableDate,
                        maxSelectableDate: maxSelectableDate,
                        onSelect: onSelectDay,
                        ariaLabelledBy: calendarLabelId,
                        ariaDescribedBy: calendarDescriptionId
                    })
                ]
            }),
            mode === 'datetime' && _jsxs(_Fragment, {
                children: [
                    _jsx(Spacer, {
                        direction: "vertical",
                        size: "2u"
                    }),
                    _jsx(TimeInput, {
                        value: state.time,
                        error: timeInvalid,
                        onChange: onChangeTime,
                        ariaLabel: DateTimePickerMessages.timePickerLabel(),
                        timezone: state.timezone,
                        locale: locale
                    })
                ]
            }),
            (clearable || showTodayButton) && _jsxs(_Fragment, {
                children: [
                    _jsx(Spacer, {
                        direction: "vertical",
                        size: "1.5u"
                    }),
                    _jsxs(Columns, {
                        alignY: "start",
                        spacing: "0",
                        align: columnAlignment,
                        children: [
                            clearable && _jsx(Column, {
                                width: "content",
                                children: _jsx(Button, {
                                    variant: "tertiary",
                                    onClick: clearSelectedDay,
                                    children: DateTimePickerMessages.clearLabel()
                                })
                            }),
                            showTodayButton && _jsx(Column, {
                                width: "content",
                                children: _jsx(Button, {
                                    variant: "tertiary",
                                    onClick: selectToday,
                                    children: DateTimePickerMessages.todayLabel()
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
