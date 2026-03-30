import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { MultilineInput as EaselMultilineInput } from '../../../../../../base/form/multiline_input/multiline_input';
/** 
 * A textarea that can automatically grow or shrink based on its contents.
 */ export function MultilineInput(props) {
    return _jsx(EaselMultilineInput, {
        autoGrow: props.autoGrow,
        disabled: props.disabled,
        error: props.error,
        id: props.id,
        maxLength: props.maxLength,
        maxRows: props.maxRows,
        minRows: props.minRows,
        onChange: props.onChange,
        onKeyDown: props.onKeyDown,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        footer: props.footer,
        placeholder: props.placeholder,
        readOnly: props.readOnly,
        required: props.required,
        value: props.value
    });
}
