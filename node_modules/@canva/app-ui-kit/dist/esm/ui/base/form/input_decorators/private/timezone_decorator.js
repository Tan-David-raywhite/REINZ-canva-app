import { jsx as _jsx } from "react/jsx-runtime";
import { getTimezone } from '../../../date_time/utils/utils';
import { Tooltip } from '../../../tooltip/tooltip';
import { TextDecorator } from './text_decorator';
export const TimezoneDecorator = ({ locale: localeProp, timezone: timezoneProp })=>{
    let timezone = timezoneProp;
    if (timezone == null) {
        let locale = localeProp;
        if (locale == null) {
            const languages = navigator.languages;
            if (languages && languages.length > 0) locale = languages[0];
            else locale = navigator.language;
        }
        if (locale == null) return null;
        timezone = getTimezone(new Date(), locale);
    }
    const offsetString = getTimezoneOffsetString(timezone.offset);
    return _jsx(Tooltip, {
        label: `${offsetString}: ${timezone.label}`,
        children: ({ tooltipId, ...triggerProps })=>_jsx("div", {
                "aria-describedby": tooltipId,
                ...triggerProps,
                children: _jsx(TextDecorator, {
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
