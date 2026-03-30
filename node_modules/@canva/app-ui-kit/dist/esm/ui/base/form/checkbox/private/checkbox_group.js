import { jsx as _jsx } from "react/jsx-runtime";
import { createElement as _createElement } from "react";
import * as React from 'react';
import { useControllableValue } from '../../../controllable_value/controllable_value';
import { Checkbox } from './checkbox';
import styles from './checkbox_group.css';
export function CheckboxGroup(props) {
    const { value: valueProp, defaultValue: defaultValueProp, options, onChange: onChangeProp, disabled, id, ariaLabel, ariaLabelledBy, ariaDescribedBy, focusRef, onFocus, onBlur } = props;
    const groupRef = React.useRef(null);
    const [value, setValue] = useControllableValue({
        value: valueProp,
        defaultValue: defaultValueProp || []
    });
    const onChange = React.useCallback((newValue, checked)=>{
        const newValues = checked ? value.concat(newValue) : value.filter((v)=>v !== newValue);
        setValue(newValues);
        onChangeProp?.(newValues);
    }, [
        onChangeProp,
        setValue,
        value
    ]);
    const onItemFocus = React.useCallback((e)=>{
        const previouslyFocussedElement = e.relatedTarget;
        if (previouslyFocussedElement && groupRef?.current?.contains(previouslyFocussedElement)) return;
        onFocus?.(e);
    }, [
        onFocus
    ]);
    const onItemBlur = React.useCallback((e)=>{
        const nextElementToBeFocussed = e.relatedTarget;
        if (nextElementToBeFocussed && groupRef?.current?.contains(nextElementToBeFocussed)) return;
        onBlur?.(e);
    }, [
        onBlur
    ]);
    return _jsx("div", {
        role: "group",
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        className: styles.checkboxGroup,
        ref: groupRef,
        children: options.map((option, index)=>{
            const checked = value.indexOf(option.value) >= 0;
            return _createElement(Checkbox, {
                ...option,
                disabled: option.disabled ?? disabled,
                checked: checked,
                key: index,
                size: "small",
                onChange: onChange,
                focusRef: index === 0 ? focusRef : undefined,
                onFocus: onFocus && onItemFocus,
                onBlur: onBlur && onItemBlur
            });
        })
    });
}
