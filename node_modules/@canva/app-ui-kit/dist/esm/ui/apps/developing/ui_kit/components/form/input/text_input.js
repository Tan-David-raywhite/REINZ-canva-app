import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { TextInput as EaselTextInput } from '../../../../../../base/form/text_input/text_input';
/** 
 * An input that accepts textual values.
 * */ export function TextInput(props) {
    return _jsx(EaselTextInput, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        type: props.type || 'text',
        maxLength: props.maxLength,
        name: props.name,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        placeholder: props.placeholder,
        value: props.value,
        start: props.start,
        end: props.end
    });
}
