"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get CalendarDay () {
        return CalendarDay;
    },
    get CalendarDayWithWrapper () {
        return CalendarDayWithWrapper;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _utils = require('../../utils/utils');
const _device_capabilities = require('../../../device_capabilities/device_capabilities');
const _daycss = _interop_require_default(require("./day.css"));
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
class CalendarDay extends _react.PureComponent {
    get label() {
        if (this.props.label) return this.props.label;
        const label = (0, _utils.format)(this.props.date, this.props.locale, 'DD MMMM');
        return label;
    }
    get dayNumber() {
        return (0, _utils.toDate)(this.props.date).getUTCDate();
    }
    get dataDate() {
        if (!this.props.dataDate) return;
        return this.props.date.split('T')[0];
    }
    get className() {
        return (0, _classnames.default)(_daycss.default.day, this.props.className, {
            [_daycss.default.hoverSupported]: (0, _device_capabilities.canHover)(),
            [_daycss.default.current]: !this.props.disabled && this.props.current,
            [_daycss.default.disabled]: this.props.disabled,
            [_daycss.default.today]: this.props.today,
            [_daycss.default.selected]: this.props.selected,
            [_daycss.default.invalid]: this.props.selected && this.props.selectedInvalid
        });
    }
    getText() {
        return (0, _jsxruntime.jsx)("span", {
            className: this.className,
            "aria-label": this.label,
            ref: this.props.onDayRef,
            "data-date": this.dataDate,
            children: this.dayNumber
        });
    }
    getButton() {
        return (0, _jsxruntime.jsx)("button", {
            className: this.className,
            onClick: this.onClick,
            ref: this.props.onDayRef,
            "data-date": this.dataDate,
            tabIndex: this.props.includeInTabOrder ? 0 : -1,
            "aria-label": this.label,
            "aria-current": this.props.today ? 'date' : undefined,
            "aria-pressed": this.props.selected ? 'true' : undefined,
            children: this.dayNumber
        });
    }
    render() {
        return !this.props.disabled && this.props.onSelect ? this.getButton() : this.getText();
    }
    constructor(...args){
        super(...args), this.onClick = (event)=>{
            event.preventDefault();
            this.props.onSelect?.(this.props.date);
        };
    }
}
const CalendarDayWithWrapper = ({ locale, date, current, today, past, selected, selectedInvalid, disabled, className, onSelect, onDayRef, includeInTabOrder })=>(0, _jsxruntime.jsx)("div", {
        className: _daycss.default.dayWrapper,
        role: "gridcell",
        "aria-selected": selected ? 'true' : undefined,
        "aria-disabled": disabled ? 'true' : undefined,
        children: (0, _jsxruntime.jsx)(CalendarDay, {
            locale: locale,
            date: date,
            current: current,
            today: today,
            past: past,
            selected: selected,
            selectedInvalid: selectedInvalid,
            disabled: disabled,
            className: className,
            onSelect: onSelect,
            onDayRef: onDayRef,
            includeInTabOrder: includeInTabOrder
        })
    });
