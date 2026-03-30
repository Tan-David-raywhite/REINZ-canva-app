import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { CheckboxGroup as EaselCheckboxGroup } from '../../../../../../base/form/checkbox/checkbox';
/** 
 * An accessible list of checkboxes.
 */ export function CheckboxGroup(props) {
    return _jsx(EaselCheckboxGroup, {
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        id: props.id,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        options: props.options,
        value: props.value
    });
}
