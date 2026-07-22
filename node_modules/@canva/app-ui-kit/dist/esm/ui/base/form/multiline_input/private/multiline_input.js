import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { composeRefs } from '../../../../../base/react/compose_refs';
import classNames from 'classnames';
import * as React from 'react';
import { useControllableValue } from '../../../controllable_value/controllable_value';
import { useEaselFlags } from '../../../flags/flags';
import { InputWrapper } from '../../base_input/base_input';
import inputStyles from '../../base_input/temporary_exports.css';
import { BaseInputContextProvider, useCreateInputControls, usePropOverrides } from '../../internal/input';
import { baseUnit } from '../../../metrics/metrics';
import styles, { getStyle } from './multiline_input.css';
import { MultilineInputTestIds } from './multiline_input.testids';
import { MultilineInputField } from './multiline_input_field';
import { useResize } from './resize';
const MIN_HEIGHT_PX_MEDIUM = baseUnit * 5;
const MIN_HEIGHT_PX_LARGE = baseUnit * 6;
export const MultilineInput = ({ ref, ...props_ })=>{
    const { props, setPropOverrides } = usePropOverrides(props_);
    const { onChange: onChangeProp, size = 'medium' } = props;
    const inputRef = React.useRef(null);
    const [value, setValue] = useControllableValue({
        value: props.value
    });
    const controls = useCreateInputControls({
        focus: ()=>inputRef.current?.focus(),
        setDisabled: (disabled)=>setPropOverrides({
                disabled
            }),
        setValue: (value)=>{
            setValue(value);
            onChangeProp?.(value);
        }
    });
    const onChange = React.useCallback((e)=>{
        setValue(e.target.value);
        onChangeProp?.(e.target.value, e);
    }, [
        onChangeProp,
        setValue
    ]);
    const hasResize = !props.autoGrow && !!props.resize;
    const { resizeContainerRef, resizeHandleRef } = useResize({
        minHeightPx: size === 'medium' ? MIN_HEIGHT_PX_MEDIUM : MIN_HEIGHT_PX_LARGE
    });
    const { enableHighContrastOverride } = useEaselFlags();
    const wrapperClassName = classNames(inputStyles.wrapper, styles.multilineWrapper, getStyle(size), {
        [inputStyles.borderless]: props.borderless,
        [inputStyles.highContrast]: enableHighContrastOverride
    }, props.className);
    const inputClassName = classNames(styles.multilineTextField, getStyle(size), props.inputClassName);
    return _jsx(InputWrapper, {
        className: wrapperClassName,
        disabled: props.disabled,
        error: props.error,
        ref: hasResize ? resizeContainerRef : undefined,
        testId: MultilineInputTestIds.wrapper,
        children: _jsxs(BaseInputContextProvider, {
            controls: controls,
            value: value ?? '',
            children: [
                _jsx(MultilineInputField, {
                    ...props,
                    ref: composeRefs(inputRef, ref),
                    value: value,
                    onChange: onChange,
                    className: inputClassName,
                    testId: MultilineInputTestIds.textField
                }),
                props.footer,
                hasResize && _jsx("div", {
                    ref: resizeHandleRef,
                    className: styles.resizeHandle
                })
            ]
        })
    });
};
MultilineInput.displayName = 'MultilineInput';
