import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { RgbaColor, RgbColor } from '../../../../../base/color/color';
import classNames from 'classnames';
import * as React from 'react';
import { useIsMouseAccessMode } from '../../../a11y/access_mode_state/access_mode_state';
import { Box } from '../../../box/box';
import { HsvColor } from '../../hsv_color/hsv_color';
import { useColorPickerAlpha, useColorPickerControls, useColorPickerHex } from '../../internal/color_picker_provider';
import { NumberInput } from '../../../form/number_input/number_input';
import { TextInput } from '../../../form/text_input/text_input';
import { Swatch } from '../../../swatch/swatch';
import { Text } from '../../../typography/typography';
import styles from './color_code_input.css';
import { ColorCodeInputMessages } from './color_code_input.messages';
export function ColorCodeInput(
    { color: colorProp, alpha: alphaProp, onChange: onChangeProp, onAlphaChange: onAlphaChangeProp, showAlpha = false, withSwatch = true, ariaLabel = ColorCodeInputMessages.colorCodeInputLabel(), ariaLabelledBy, ariaDescribedBy, autoFocus = 'on-desktop' }
) {
    const colorPicker = useColorPickerControls();
    const setColor = colorPicker?.setColor;
    const colorPickerHex = useColorPickerHex();
    const colorPickerAlpha = useColorPickerAlpha();
    const color = colorProp ?? colorPickerHex ?? '#ffffff';
    const alpha = alphaProp ?? colorPickerAlpha ?? 1;
    const colorInputRef = React.useRef(null);
    const alphaInputRef = React.useRef(null);
    const recentlyBlurredRef = React.useRef(false);
    const isMouseAccessMode = useIsMouseAccessMode();
    const [inputValue, setInputValue] = React.useState(color);
    const [isHexFocused, setIsHexFocused] = React.useState(false);
    const [isAlphaFocused, setIsAlphaFocused] = React.useState(false);
    const onChange = React.useCallback((value)=>{
        const inputLength = value.length;
        value = value.replace(/[^0-9a-f]/gi, '');
        const lengthDiff = inputLength - value.length;
        value = `#${value.slice(0, 6)}`;
        setInputValue(value);
        const fudgedValue = fudgeHex(value);
        setColor?.(HsvColor.fromHexString(fudgedValue), 'hex');
        onChangeProp?.(fudgedValue);
        const colorInput = colorInputRef.current;
        if (colorInput) {
            const cursorPosition = colorInput.selectionStart - lengthDiff + 1;
            colorInput.value = value;
            colorInput.selectionStart = cursorPosition;
            colorInput.selectionEnd = cursorPosition;
        }
    }, [
        onChangeProp,
        setColor
    ]);
    const onAlphaChange = React.useCallback((value)=>{
        const alpha = isNaN(value) ? 0 : Math.max(0, Math.min(100, value)) / 100;
        setColor?.({
            alpha
        }, 'alpha');
        onAlphaChangeProp?.(alpha);
    }, [
        onAlphaChangeProp,
        setColor
    ]);
    const onFocus = React.useCallback(()=>{
        colorPicker?.onChangeStart?.();
        setIsHexFocused(true);
        if (!recentlyBlurredRef.current)
            setTimeout(()=>colorInputRef.current?.select());
    }, [
        colorPicker
    ]);
    const onBlur = React.useCallback(()=>{
        setIsHexFocused(false);
        recentlyBlurredRef.current = true;
        setTimeout(()=>recentlyBlurredRef.current = false, 0);
    }, []);
    const onAlphaFocus = React.useCallback(()=>{
        colorPicker?.onChangeStart?.();
        setIsAlphaFocused(true);
        alphaInputRef.current?.select();
    }, [
        colorPicker
    ]);
    const onAlphaBlur = React.useCallback(()=>{
        setIsAlphaFocused(false);
    }, []);
    const onAlphaMouseDown = React.useCallback((e)=>{
        if (e.target !== alphaInputRef.current) {
            e.stopPropagation();
            e.preventDefault();
            alphaInputRef.current?.focus();
        }
    }, []);
    const colorValue = fudgeHex(inputValue) === color ? inputValue : color;
    const { r, g, b } = RgbColor.fromHexString(fudgeHex(colorValue));
    const valueWithAlpha = new RgbaColor(r, g, b, alpha ?? 1).toRgbaString();
    const wrapperClassName = classNames(styles.inputWrapper, {
        [styles.hexFocused]: isHexFocused && !isAlphaFocused && !isMouseAccessMode
    });
    const numInputWrapperClassName = classNames(styles.numInputWrapper, {
        [styles.alphaFocused]: isAlphaFocused && !isMouseAccessMode
    });
    return _jsx(TextInput, {
        className: wrapperClassName,
        inputClassName: styles.input,
        start: withSwatch ? _jsx(Swatch, {
            size: "xxsmall",
            fill: [
                valueWithAlpha
            ]
        }) : undefined,
        value: colorValue,
        end: showAlpha && _jsxs(_Fragment, {
            children: [
                _jsx(Box, {
                    className: styles.divider
                }),
                _jsxs("div", {
                    className: numInputWrapperClassName,
                    onMouseDown: onAlphaMouseDown,
                    children: [
                        _jsx(NumberInput, {
                            ref: alphaInputRef,
                            className: styles.numInput,
                            value: Math.round(alpha * 100),
                            borderless: true,
                            max: 100,
                            min: 0,
                            onChange: onAlphaChange,
                            onChangeComplete: colorPicker?.onChangeComplete,
                            onFocus: onAlphaFocus,
                            onBlur: onAlphaBlur,
                            ariaLabel: ColorCodeInputMessages.alphaInputLabel(),
                            textAlignCenter: true
                        }),
                        _jsx(Text, {
                            tone: "tertiary",
                            children: "%"
                        })
                    ]
                })
            ]
        }),
        disableSpellcheck: true,
        onChange: onChange,
        onChangeComplete: colorPicker?.onChangeComplete,
        onFocus: onFocus,
        onBlur: onBlur,
        ref: colorInputRef,
        textAlignCenter: !withSwatch && !showAlpha,
        autoFocus: autoFocus,
        ariaLabel: ariaLabel,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy
    });
}
const fudgeHex = (hex)=>{
    hex = hex.toLowerCase().replace(/[^0-9a-f]/g, '').slice(0, 6);
    hex = hex || 'ffffff';
    if (hex.length <= 3) {
        hex += '0'.repeat(3 - hex.length);
        hex = hex[0].repeat(2) + hex[1].repeat(2) + hex[2].repeat(2);
    } else if (hex.length < 6) hex += '0'.repeat(6 - hex.length);
    return `#${hex}`;
};
