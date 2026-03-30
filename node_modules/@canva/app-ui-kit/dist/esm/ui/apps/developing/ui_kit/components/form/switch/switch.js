import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Switch as EaselSwitch } from '../../../../../../base/form/switch/switch';
/** 
 * A toggle that can be turned on and off.
 */ export function Switch(props) {
    return _jsx(EaselSwitch, {
        id: props.id,
        defaultValue: props.defaultValue,
        disabled: props.disabled,
        label: props.label,
        labelWeight: "regular",
        description: props.description,
        onChange: props.onChange,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        value: props.value
    });
}
