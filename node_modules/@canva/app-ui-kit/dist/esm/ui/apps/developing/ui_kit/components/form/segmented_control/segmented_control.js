import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { SegmentedControl as EaselSegmentedControl } from '../../../../../../base/form/segmented_control/segmented_control';
/** 
 * A horizontal list of options, of which the user can select one.
 */ export function SegmentedControl(props) {
    return _jsx(EaselSegmentedControl, {
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
