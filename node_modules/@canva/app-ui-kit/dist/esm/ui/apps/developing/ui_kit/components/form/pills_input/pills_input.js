import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { PillsInput as EaselPillsInput } from '../../../../../../base/form/pills_input/pills_input';
/** 
 * An input that uses pills to represent the items entered.
 */ export function PillsInput(props) {
    return _jsx(EaselPillsInput, {
        value: props.value,
        inputValue: props.inputValue,
        disabled: props.disabled,
        loading: props.loading,
        error: props.error,
        placeholder: props.placeholder,
        additionalPlaceholder: props.additionalPlaceholder,
        minRows: props.minRows,
        maxRows: props.maxRows,
        onPillAdd: props.onPillAdd,
        onLastPillRemove: props.onLastPillRemove,
        onInputChange: props.onInputChange,
        onClick: props.onClick,
        onClearClick: props.onClearClick,
        onBlur: props.onBlur,
        onFocus: props.onFocus,
        ariaLabel: props.ariaLabel,
        role: "textbox",
        addPillKeyCombinations: [
            'Enter'
        ]
    });
}
