import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { useIsVirtualKeyboard } from '../../../device_capabilities/keyboard';
import { ButtonDecorator } from '../../input_decorators/input_decorators';
import { TextInput } from '../../text_input/text_input';
import { ChevronLeftIcon } from '../../../icons/chevron_left/icon';
import { ClearIcon } from '../../../icons/clear/icon';
import styles from './clearable_input.css';
import { ClearableInputMessages as Messages } from './clearable_input.messages';
const ClearButtonIcon = ()=>_jsx(ClearIcon, {
        size: "medium",
        className: styles.clearIcon
    });
export function ClearableInput(
    { type = 'search', allowClear = 'when-not-empty', focusOnClear = true, onClear, showBackButton, BackButtonIcon = ChevronLeftIcon, onBack, inputClassName, borderless = true, blurOnEnterKeyDown: blurOnEnterKeyDownProp, onKeyDown, start, end, ref, ...inputProps }
) {
    const inputRef = React.useRef(null);
    const handleClear = React.useCallback(()=>{
        onClear?.();
        if (focusOnClear) inputRef.current?.focus();
    }, [
        focusOnClear,
        onClear
    ]);
    const handleBack = React.useCallback(()=>{
        onBack?.();
    }, [
        onBack
    ]);
    React.useImperativeHandle(ref, ()=>{
        return {
            blur () {
                inputRef.current?.blur();
            },
            focus () {
                inputRef.current?.focus();
            },
            select () {
                inputRef.current?.select();
            }
        };
    }, []);
    const showClearButton = (allowClear === 'always' || allowClear === 'when-not-empty' && !!inputProps.value) && !inputProps.disabled;
    const isVirtualKeyboard = useIsVirtualKeyboard();
    const blurOnEnterKeyDown = blurOnEnterKeyDownProp ?? isVirtualKeyboard;
    return _jsx(TextInput, {
        type: type === 'search' ? 'search' : 'text',
        ref: inputRef,
        icon: showBackButton || type === 'text' ? undefined : {
            type,
            align: 'start'
        },
        borderless: borderless,
        blurOnEnterKeyDown: blurOnEnterKeyDown,
        onKeyDown: onKeyDown,
        start: showBackButton || start ? _jsxs(_Fragment, {
            children: [
                showBackButton && _jsx(ButtonDecorator, {
                    label: Messages.backTitle(),
                    icon: BackButtonIcon,
                    onClick: handleBack,
                    className: styles.backButton
                }),
                typeof start === 'function' ? start() : start
            ]
        }) : undefined,
        end: showClearButton || end ? _jsxs(_Fragment, {
            children: [
                showClearButton && _jsx(ButtonDecorator, {
                    label: Messages.clearTitle(),
                    icon: ClearButtonIcon,
                    onClick: handleClear,
                    className: styles.clearButton
                }),
                typeof end === 'function' ? end() : end
            ]
        }) : undefined,
        ...inputProps,
        inputClassName: classNames(inputClassName, styles.clearableInput)
    });
}
