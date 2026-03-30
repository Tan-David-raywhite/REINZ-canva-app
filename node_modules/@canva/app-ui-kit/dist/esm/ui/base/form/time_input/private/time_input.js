import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { msToTimeString, timeStringToMs } from '../../../date_time/utils/utils';
import { BaseInput } from '../../base_input/base_input';
import { TimezoneDecorator } from '../../input_decorators/input_decorators';
import styles from './time_input.css';
export function TimeInput(
    { value: valueProp, onChange: onChangeProp, min, max, className, timezone, locale, end = _jsx(TimezoneDecorator, {
        timezone: timezone,
        locale: locale
    }), ...passThroughProps }
) {
    const onChange = React.useCallback((text)=>{
        const value = text === '' ? undefined : text;
        onChangeProp?.(value != null ? timeStringToMs(value) : value);
    }, [
        onChangeProp
    ]);
    return _jsx(BaseInput, {
        ...passThroughProps,
        type: "time",
        value: valueProp != null ? msToTimeString(valueProp) : '',
        min: min != null ? msToTimeString(min) : min,
        max: max != null ? msToTimeString(max) : max,
        onChange: onChange,
        end: end,
        className: classNames(styles.timeInput, className),
        placeholder: "HH:mm"
    });
}
