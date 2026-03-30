import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Slider as EaselSlider } from '../../../../../../base/form/slider/slider';
/** 
 * An input for choosing a number between a range of values.
 */ export function Slider(props) {
    return _jsx(EaselSlider, {
        id: props.id,
        min: props.min,
        max: props.max,
        step: props.step,
        origin: props.origin,
        disabled: props.disabled,
        value: props.value,
        defaultValue: props.defaultValue,
        onChange: props.onChange,
        onChangeComplete: props.onChangeComplete,
        labelSize: "medium"
    });
}
