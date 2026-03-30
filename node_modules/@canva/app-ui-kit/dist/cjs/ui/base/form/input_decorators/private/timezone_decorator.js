"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TimezoneDecorator", {
    enumerable: true,
    get: function() {
        return TimezoneDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _utils = require('../../../date_time/utils/utils');
const _tooltip = require('../../../tooltip/tooltip');
const _text_decorator = require("./text_decorator");
const TimezoneDecorator = ({ locale: localeProp, timezone: timezoneProp })=>{
    let timezone = timezoneProp;
    if (timezone == null) {
        let locale = localeProp;
        if (locale == null) {
            const languages = navigator.languages;
            if (languages && languages.length > 0) locale = languages[0];
            else locale = navigator.language;
        }
        if (locale == null) return null;
        timezone = (0, _utils.getTimezone)(new Date(), locale);
    }
    const offsetString = getTimezoneOffsetString(timezone.offset);
    return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: `${offsetString}: ${timezone.label}`,
        children: ({ tooltipId, ...triggerProps })=>(0, _jsxruntime.jsx)("div", {
                "aria-describedby": tooltipId,
                ...triggerProps,
                children: (0, _jsxruntime.jsx)(_text_decorator.TextDecorator, {
                    children: offsetString
                })
            })
    });
};
function getTimezoneOffsetString(offsetSeconds) {
    const sign = offsetSeconds < 0 ? '-' : '+';
    const offset = Math.abs(offsetSeconds);
    const offsetHours = Math.trunc(offset / 3600);
    const offsetMinutes = Math.trunc(offset % 3600 / 60);
    const minuteString = offsetMinutes > 0 ? `:${offsetMinutes}` : '';
    return `UTC ${sign}${offsetHours}${minuteString}`;
}
