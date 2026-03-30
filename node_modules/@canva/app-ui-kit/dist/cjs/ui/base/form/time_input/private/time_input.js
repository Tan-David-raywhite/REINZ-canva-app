"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TimeInput", {
    enumerable: true,
    get: function() {
        return TimeInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _utils = require('../../../date_time/utils/utils');
const _base_input = require('../../base_input/base_input');
const _input_decorators = require('../../input_decorators/input_decorators');
const _time_inputcss = _interop_require_default(require("./time_input.css"));
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
function TimeInput({ value: valueProp, onChange: onChangeProp, min, max, className, timezone, locale, end = (0, _jsxruntime.jsx)(_input_decorators.TimezoneDecorator, {
    timezone: timezone,
    locale: locale
}), ...passThroughProps }) {
    const onChange = _react.useCallback((text)=>{
        const value = text === '' ? undefined : text;
        onChangeProp?.(value != null ? (0, _utils.timeStringToMs)(value) : value);
    }, [
        onChangeProp
    ]);
    return (0, _jsxruntime.jsx)(_base_input.BaseInput, {
        ...passThroughProps,
        type: "time",
        value: valueProp != null ? (0, _utils.msToTimeString)(valueProp) : '',
        min: min != null ? (0, _utils.msToTimeString)(min) : min,
        max: max != null ? (0, _utils.msToTimeString)(max) : max,
        onChange: onChange,
        end: end,
        className: (0, _classnames.default)(_time_inputcss.default.timeInput, className),
        placeholder: "HH:mm"
    });
}
