"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateTimePicker", {
    enumerable: true,
    get: function() {
        return DateTimePicker;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../base/preconditions');
const _stable_function = require('../../../../../base/react/stable_function');
const _react = _interop_require_wildcard(require("react"));
const _screen_reader_content = require('../../../a11y/screen_reader_content/screen_reader_content');
const _button = require('../../../button/button');
const _calendar = require('../../calendar/calendar');
const _months_navigation = require('../months_navigation/months_navigation');
const _utils = require('../../utils/utils');
const _time_input = require('../../../form/time_input/time_input');
const _key_combinations = require('../../../key_combinations/key_combinations');
const _layout = require('../../../layout/layout');
const _date_time_pickercss = _interop_require_default(require("./date_time_picker.css"));
const _date_time_pickermessages = require("./date_time_picker.messages");
const _state = require("./state");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const DateTimePicker = function DateTimePicker({ locale, date, timezone, today, focusToday, showTodayButton = true, canSelectPastDates, maxSelectableDate, minSelectableDate, timeInvalid, selectedDayInvalid, animate = false, clearable = true, onChange, mode = 'datetime' }) {
    const state = (0, _state.useDateTimePickerState)({
        date,
        locale,
        today,
        defaultTimezone: timezone,
        focusToday
    });
    const parsedDate = _react.useMemo(()=>{
        if (date == null) return undefined;
        return (0, _utils.toUTCDateTimeObject)((0, _utils.fromUTCToTimezone)(date, timezone ? timezone.offset : (0, _utils.getTimezoneOffset)(date)));
    }, [
        date,
        timezone
    ]);
    const getNavigationDisabled = _react.useCallback((displayDate)=>{
        let disabledNav;
        if ((!canSelectPastDates || minSelectableDate === 'today') && (0, _utils.compareMonthAndYear)(displayDate, state.todayInTimezone) <= 0) disabledNav = 'prev';
        if (minSelectableDate && minSelectableDate !== 'today' && (0, _utils.compareMonthAndYear)(displayDate, minSelectableDate) <= 0) disabledNav = 'prev';
        if (maxSelectableDate && (0, _utils.compareMonthAndYear)(displayDate, maxSelectableDate) >= 0) disabledNav = disabledNav === 'prev' ? 'both' : 'next';
        return disabledNav;
    }, [
        canSelectPastDates,
        minSelectableDate,
        maxSelectableDate,
        state.todayInTimezone
    ]);
    const navigationDisabled = _react.useMemo(()=>getNavigationDisabled(state.dateInTimezone), [
        getNavigationDisabled,
        state.dateInTimezone
    ]);
    const moveFocus = (0, _stable_function.useStableFunction)((delta, deltaType, fromDate)=>{
        const currentDate = fromDate ?? state.focusedDateInTimezone ?? state.dateInTimezone;
        let newDate = currentDate;
        switch(deltaType){
            case 'day':
                newDate = (0, _utils.addDays)(currentDate, delta);
                break;
            case 'month':
                newDate = (0, _utils.addMonths)(currentDate, delta);
                break;
            case 'year':
                newDate = (0, _utils.addYears)(currentDate, delta);
                break;
            default:
                throw new _preconditions.UnreachableError(deltaType);
        }
        if ((!canSelectPastDates || minSelectableDate === 'today') && (0, _utils.compareDates)(newDate, state.todayInTimezone) < 0) newDate = state.todayInTimezone;
        if (minSelectableDate && minSelectableDate !== 'today' && (0, _utils.compareDates)(newDate, minSelectableDate) < 0) newDate = minSelectableDate;
        if (maxSelectableDate && (0, _utils.compareDates)(newDate, maxSelectableDate) > 0) newDate = maxSelectableDate;
        state.updateFocusedDate((0, _utils.toUTCDateTimeObject)(newDate));
    });
    const moveFocusToStartOfWeek = (0, _stable_function.useStableFunction)(()=>{
        const currentDate = state.focusedDateInTimezone ?? state.dateInTimezone;
        const currentDayOfWeek = (0, _utils.dayOfWeek)(currentDate);
        if (currentDayOfWeek > 0) moveFocus(-currentDayOfWeek, 'day');
    });
    const moveFocusToEndOfWeek = (0, _stable_function.useStableFunction)(()=>{
        const currentDate = state.focusedDateInTimezone ?? state.dateInTimezone;
        const currentDayOfWeek = (0, _utils.dayOfWeek)(currentDate);
        if (currentDayOfWeek < 6) moveFocus(6 - currentDayOfWeek, 'day');
    });
    const onChangeMonth = (0, _stable_function.useStableFunction)((dateObj)=>{
        state.unsetFocusedDate();
        state.updateDate(dateObj);
        const navDisabled = getNavigationDisabled(dateObj);
        if (navDisabled != null) {
            state.updateFocusedDate(dateObj);
            moveFocus(0, 'day', dateObj);
        }
    });
    const onSelectDay = (0, _stable_function.useStableFunction)((dateObj)=>{
        const newUtcDate = state.dateToUtc(dateObj);
        state.updateDate(dateObj, {
            updateFocus: true
        });
        onChange(newUtcDate);
    });
    const selectToday = (0, _stable_function.useStableFunction)(()=>{
        const newUtcDate = state.dateToUtc(state.todayInTimezone);
        state.updateDate(state.todayInTimezone, {
            updateFocus: true
        });
        onChange(newUtcDate);
    });
    const clearSelectedDay = (0, _stable_function.useStableFunction)(()=>{
        state.unsetFocusedDate();
        onChange(undefined);
    });
    const onChangeTime = (0, _stable_function.useStableFunction)((timeValue)=>{
        const timeMs = timeValue ?? 0;
        const newUtcDate = state.timeToUtc(timeMs);
        state.unsetFocusedDate();
        state.updateTime(timeMs);
        onChange(newUtcDate);
    });
    const keyMap = _react.useMemo(()=>[
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
                (0, _key_combinations.shift)('PageUp'),
                (event)=>{
                    event.preventDefault();
                    moveFocus(-1, 'year');
                }
            ],
            [
                (0, _key_combinations.shift)('PageDown'),
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
    const { ref: keyRef } = (0, _key_combinations.useKeyCombinationHandler)(keyMap, {
        handleInputs: false
    });
    const calendarLabelId = _react.useId();
    const calendarDescriptionId = _react.useId();
    const columnAlignment = clearable && showTodayButton ? 'spaceBetween' : clearable ? 'start' : 'end';
    return (0, _jsxruntime.jsxs)("div", {
        className: _date_time_pickercss.default.dateTimePicker,
        children: [
            (0, _jsxruntime.jsx)(_months_navigation.MonthsNavigation, {
                locale: locale,
                month: state.month,
                year: state.year,
                today: state.todayInTimezone,
                disabled: navigationDisabled,
                animate: animate,
                onChange: onChangeMonth,
                titleId: calendarLabelId
            }),
            (0, _jsxruntime.jsxs)("div", {
                ref: keyRef,
                children: [
                    (0, _jsxruntime.jsx)(_screen_reader_content.ScreenReaderContent, {
                        id: calendarDescriptionId,
                        children: _date_time_pickermessages.DateTimePickerMessages.calendarDescription()
                    }),
                    (0, _jsxruntime.jsx)(_calendar.Calendar, {
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
            mode === 'datetime' && (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    (0, _jsxruntime.jsx)(_layout.Spacer, {
                        direction: "vertical",
                        size: "2u"
                    }),
                    (0, _jsxruntime.jsx)(_time_input.TimeInput, {
                        value: state.time,
                        error: timeInvalid,
                        onChange: onChangeTime,
                        ariaLabel: _date_time_pickermessages.DateTimePickerMessages.timePickerLabel(),
                        timezone: state.timezone,
                        locale: locale
                    })
                ]
            }),
            (clearable || showTodayButton) && (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
                children: [
                    (0, _jsxruntime.jsx)(_layout.Spacer, {
                        direction: "vertical",
                        size: "1.5u"
                    }),
                    (0, _jsxruntime.jsxs)(_layout.Columns, {
                        alignY: "start",
                        spacing: "0",
                        align: columnAlignment,
                        children: [
                            clearable && (0, _jsxruntime.jsx)(_layout.Column, {
                                width: "content",
                                children: (0, _jsxruntime.jsx)(_button.Button, {
                                    variant: "tertiary",
                                    onClick: clearSelectedDay,
                                    children: _date_time_pickermessages.DateTimePickerMessages.clearLabel()
                                })
                            }),
                            showTodayButton && (0, _jsxruntime.jsx)(_layout.Column, {
                                width: "content",
                                children: (0, _jsxruntime.jsx)(_button.Button, {
                                    variant: "tertiary",
                                    onClick: selectToday,
                                    children: _date_time_pickermessages.DateTimePickerMessages.todayLabel()
                                })
                            })
                        ]
                    })
                ]
            })
        ]
    });
};
