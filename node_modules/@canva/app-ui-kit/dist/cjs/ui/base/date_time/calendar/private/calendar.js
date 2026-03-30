"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Calendar", {
    enumerable: true,
    get: function() {
        return Calendar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../base/preconditions');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _utils = require('../../utils/utils');
const _calendarcss = _interop_require_default(require("./calendar.css"));
const _day = require("./day");
const _days_week_labels = require("./days_week_labels");
const _week = require("./week");
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
const WEEKS_IN_CALENDAR = 6;
const DAYS_IN_CALENDAR = _week.DAYS_IN_WEEK * WEEKS_IN_CALENDAR;
class Calendar extends _react.PureComponent {
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
                    if (this.animatedRef) this.animatedRef.classList.add(_calendarcss.default.animate);
                });
            }, 0);
        }
    }
    get today() {
        return _preconditions.Preconditions.checkExists(this.props.today);
    }
    isToday(date) {
        return (0, _utils.isEqualDates)(date, this.today);
    }
    isSelectedDate(date) {
        const { selected } = this.props;
        if (!selected) return false;
        const dates = Array.isArray(selected) ? selected : [
            selected
        ];
        return dates.some((selectedDate)=>(0, _utils.isEqualDates)(date, selectedDate));
    }
    isFocusedDate(date) {
        return !!(this.props.focused && (0, _utils.isEqualDates)(date, this.props.focused));
    }
    isIncludedInTabOrderDate(date) {
        return !!(this.props.includedInTabOrder && (0, _utils.isEqualDates)(date, this.props.includedInTabOrder));
    }
    isDisabledDate(date) {
        const { canSelectPastDates, minSelectableDate, maxSelectableDate } = this.props;
        if ((!canSelectPastDates || minSelectableDate === 'today') && this.isPastDate(date)) return true;
        if (!!minSelectableDate && minSelectableDate !== 'today' && (0, _utils.compareDates)(date, minSelectableDate) < 0) return true;
        if (maxSelectableDate) return (0, _utils.compareDates)(date, maxSelectableDate) > 0;
        return false;
    }
    isPastDate(date) {
        return (0, _utils.compareDays)(date, this.today) < 0;
    }
    isCurrentMonth(date, month) {
        return (0, _utils.checkMonth)(date, month);
    }
    compareWithPrevious() {
        const { month, year } = this.props;
        return (0, _utils.compareMonthAndYear)(this.previousMonthYear, {
            month,
            year
        });
    }
    getPreviousWeeksNumber() {
        const comparedWithPrevious = this.compareWithPrevious();
        if (comparedWithPrevious < 0) return (0, _utils.numberOfCompleteWeeks)(this.previousMonthYear);
        if (comparedWithPrevious > 0) return (0, _utils.numberOfCompleteWeeks)({
            month: this.props.month,
            year: this.props.year
        });
        return 0;
    }
    getDates({ month, year }) {
        const dates = [];
        dates.push(...(0, _utils.monthDays)({
            month,
            year
        }));
        const firstDayIndex = (0, _utils.dayOfWeekStartOfMonth)({
            month,
            year
        });
        if (firstDayIndex > 0) dates.unshift(...(0, _utils.monthDays)((0, _utils.prevMonth)({
            month,
            year
        }), -firstDayIndex));
        if (dates.length < DAYS_IN_CALENDAR) dates.push(...(0, _utils.monthDays)((0, _utils.nextMonth)({
            month,
            year
        }), DAYS_IN_CALENDAR - dates.length));
        return dates;
    }
    splitToWeeks(days) {
        return days.reduce((weeks, day)=>{
            if (!weeks[weeks.length - 1] || weeks[weeks.length - 1].length >= _week.DAYS_IN_WEEK) weeks.push([]);
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
        return (0, _jsxruntime.jsx)("div", {
            className: _calendarcss.default.animationWrap,
            children: (0, _jsxruntime.jsxs)("div", {
                className: (0, _classnames.default)(_calendarcss.default.animationScroll, {
                    [_calendarcss.default.animateToPrevious]: comparedWithPrevious < 0,
                    [_calendarcss.default.animateToNext]: comparedWithPrevious > 0,
                    [_calendarcss.default.weeks4]: previousWeeksNumber === 4,
                    [_calendarcss.default.weeks5]: previousWeeksNumber === 5
                }),
                ref: this.onAnimationScrollRef,
                children: [
                    previousMonthWeeks && (0, _jsxruntime.jsx)("div", {
                        className: _calendarcss.default.previousMonth,
                        children: this.renderDays(this.previousMonthYear, previousMonthWeeks, 'prev')
                    }),
                    this.renderDays({
                        month,
                        year
                    }, undefined, 'current'),
                    nextMonthWeeks && (0, _jsxruntime.jsx)("div", {
                        className: _calendarcss.default.nextMonth,
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
        const Week = _preconditions.Preconditions.checkExists(this.props.CalendarWeek);
        return weeks.map((week)=>(0, _jsxruntime.jsx)(Week, {
                renderedMonth: renderedMonth,
                children: week.map((day)=>this.renderDay((0, _utils.toISO)(day), monthYear, renderedMonth === 'current'))
            }, (0, _utils.key)(week[0], 'week')));
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
        const Day = _preconditions.Preconditions.checkExists(this.props.CalendarDay);
        return (0, _jsxruntime.jsx)(Day, {
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
        }, (0, _utils.key)(date, 'day'));
    }
    render() {
        const { month, year, className, DaysOfWeekLabels = _days_week_labels.CalendarDaysOfWeekLabels } = this.props;
        return (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)(_calendarcss.default.calendar, className),
            role: "grid",
            "aria-label": this.props.ariaLabelledBy ? undefined : this.props.ariaLabel,
            "aria-labelledby": this.props.ariaLabelledBy,
            "aria-describedby": this.props.ariaDescribedBy,
            children: [
                DaysOfWeekLabels && (0, _jsxruntime.jsx)(DaysOfWeekLabels, {
                    locale: this.props.locale
                }),
                (0, _jsxruntime.jsx)("div", {
                    className: _calendarcss.default.days,
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
            this.props.onSelect?.((0, _utils.toUTCDateTimeObject)(date));
        };
    }
}
Calendar.defaultProps = {
    autoFocus: true,
    today: (0, _utils.toLocalDateTimeObject)(new Date()),
    CalendarDay: _day.CalendarDayWithWrapper,
    CalendarWeek: _week.CalendarWeek,
    DaysOfWeekLabels: _days_week_labels.CalendarDaysOfWeekLabels
};
