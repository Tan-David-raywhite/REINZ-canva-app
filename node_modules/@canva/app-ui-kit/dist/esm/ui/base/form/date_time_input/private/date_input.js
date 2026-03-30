import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { DateTimeInput } from './date_time_input';
export function DateInput(props) {
    return _jsx(DateTimeInput, {
        ...props,
        mode: "date"
    });
}
