import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { RadioGroup as EaselRadioGroup } from '../../../../../../base/form/radio_group/radio_group';
/** 
 * An accessible list of radio buttons.
 */ export function RadioGroup(props) {
    return _jsx(EaselRadioGroup, {
        variant: "radio",
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        id: props.id,
        name: props.name,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        options: props.options,
        value: props.value
    });
}
