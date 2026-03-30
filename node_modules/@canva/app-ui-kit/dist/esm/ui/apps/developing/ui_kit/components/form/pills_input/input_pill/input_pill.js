import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { InputPill as EaselInputPill } from '../../../../../../../base/form/pills_input/pills_input';
/** 
 * Pills to represent the items entered in an input.
 */ export function InputPill(props) {
    return _jsx(EaselInputPill, {
        text: props.text,
        tone: "secondary",
        disabled: props.disabled,
        maxWidth: props.maxWidth,
        onRemoveClick: props.onRemoveClick
    });
}
