"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateInput", {
    enumerable: true,
    get: function() {
        return DateInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _date_time_input = require('../../../../../../base/form/date_time_input/date_time_input');
function getCommonProps(props) {
    return {
        disabled: props.disabled,
        error: props.error,
        readOnly: props.readOnly,
        required: props.required,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        onClick: props.onClick,
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy,
        end: (endProps)=>(0, _jsxruntime.jsx)(_date_time_input.DateTimePickerDecorator, {
                ...endProps,
                locale: document.documentElement.lang
            })
    };
}
function DateInput(props) {
    const { mode = 'date' } = props;
    const commonProps = getCommonProps(props);
    if (mode === 'date') {
        const dateProps = props;
        return (0, _jsxruntime.jsx)(_date_time_input.DateTimeInput, {
            mode: "date",
            value: dateProps.value,
            min: dateProps.min,
            max: dateProps.max,
            onChange: dateProps.onChange,
            onChangeComplete: dateProps.onChangeComplete,
            ...commonProps
        });
    }
    const dateTimeProps = props;
    return (0, _jsxruntime.jsx)(_date_time_input.DateTimeInput, {
        mode: "datetime",
        value: dateTimeProps.value,
        min: dateTimeProps.min,
        max: dateTimeProps.max,
        onChange: dateTimeProps.onChange,
        onChangeComplete: dateTimeProps.onChangeComplete,
        ...commonProps
    });
}
