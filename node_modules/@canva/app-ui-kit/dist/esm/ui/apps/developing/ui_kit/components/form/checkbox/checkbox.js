import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Checkbox as EaselCheckbox } from '../../../../../../base/form/checkbox/checkbox';
/** 
 * A box that can be checked or unchecked, representing a binary choice.
 */ export function Checkbox(props) {
    return _jsx(EaselCheckbox, {
        checked: props.checked,
        defaultChecked: props.defaultChecked,
        disabled: props.disabled,
        description: props.description,
        id: props.id,
        label: props.label,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        value: props.value
    });
}
