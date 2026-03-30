"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateTimePickerDecorator", {
    enumerable: true,
    get: function() {
        return DateTimePickerDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _box = require('../../../box/box');
const _date_time_picker = require('../../../date_time/date_time_picker/date_time_picker');
const _input_decorators = require('../../input_decorators/input_decorators');
const _icon = require('../../../icons/calendar/icon');
const _popover = require('../../../surface/popover/popover');
const _date_time_inputmessages = require("./date_time_input.messages");
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
const DateTimePickerDecorator = _react.memo(
    function DateTimePickerDecorator({ onChangeComplete, disabled, blockOutsidePointerEvents, onChange, ...dateTimePickerProps }) {
        const [isPopoverOpen, setPopoverOpen] = _react.useState(false);
        const togglePopover = ()=>{
            if (isPopoverOpen) onChangeComplete?.(dateTimePickerProps.date);
            setPopoverOpen(!isPopoverOpen);
        };
        const closePopover = ()=>{
            onChangeComplete?.(dateTimePickerProps.date);
            setPopoverOpen(false);
        };
        const handleChangeAndClose = (value)=>{
            onChange?.(value);
            if (value != null) {
                onChangeComplete?.(value);
                setPopoverOpen(false);
            }
        };
        const label = dateTimePickerProps.mode === 'date' ? _date_time_inputmessages.DateTimeInputMessages.pickDate() : _date_time_inputmessages.DateTimeInputMessages.pickDateTime();
        return (0, _jsxruntime.jsx)(_popover.Popover, {
            open: isPopoverOpen,
            onRequestClose: closePopover,
            placement: "bottom-end",
            blockOutsidePointerEvents: blockOutsidePointerEvents,
            trigger: (triggerProps)=>(0, _jsxruntime.jsx)(_input_decorators.ButtonDecorator, {
                    label: label,
                    icon: _icon.CalendarIcon,
                    onClick: togglePopover,
                    disabled: disabled,
                    ...triggerProps
                }),
            children: (0, _jsxruntime.jsx)(_box.Box, {
                padding: "2u",
                children: (0, _jsxruntime.jsx)(_date_time_picker.DateTimePicker, {
                    ...dateTimePickerProps,
                    canSelectPastDates: true,
                    onChange: dateTimePickerProps.mode === 'date' ? handleChangeAndClose : onChange
                })
            })
        });
    }
);
