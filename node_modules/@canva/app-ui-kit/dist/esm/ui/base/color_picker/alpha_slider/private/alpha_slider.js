import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { useIsMouseAccessMode } from '../../../a11y/access_mode_state/access_mode_state';
import { useIsTouchInput } from '../../../a11y/pointer_input_state/pointer_input_state';
import { HsvColor } from '../../hsv_color/hsv_color';
import { useColorPickerAlpha, useColorPickerControls, useColorPickerHex } from '../../internal/color_picker_provider';
import { Handle } from '../../internal/handle';
import { BaseSlider } from '../../../form/slider/slider';
import styles, { customProperties } from './alpha_slider.css';
import { AlphaSliderMessages } from './alpha_slider.messages';
export const AlphaSlider = ({ alpha: alphaProp, color: colorProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel = AlphaSliderMessages.colorAlphaLabel(), showHandlePreview = 'touch-only' })=>{
    const colorPicker = useColorPickerControls();
    const setColor = colorPicker?.setColor;
    const onChangeStart = onChangeStartProp ?? colorPicker?.onChangeStart;
    const onChangeComplete = onChangeCompleteProp ?? colorPicker?.onChangeComplete;
    const colorPickerHex = useColorPickerHex();
    const colorPickerAlpha = useColorPickerAlpha();
    const color = colorProp ?? colorPickerHex ?? '#ffffff';
    const alpha = alphaProp ?? colorPickerAlpha ?? 1;
    const isMouseAccessMode = useIsMouseAccessMode();
    const [showPreview, setShowPreview] = React.useState(false);
    const isTouchInput = useIsTouchInput();
    const onChangeStartWithPreview = React.useCallback(()=>{
        onChangeStart?.();
        if (showHandlePreview === 'always' || showHandlePreview === 'touch-only' && isTouchInput) setShowPreview(true);
    }, [
        onChangeStart,
        isTouchInput,
        showHandlePreview
    ]);
    const onChangeCompleteWithPreview = React.useCallback(()=>{
        setShowPreview(false);
        onChangeComplete?.();
    }, [
        onChangeComplete
    ]);
    const handle = React.useCallback(({ focused, active })=>{
        const hsvColor = HsvColor.fromHexString(color, alpha);
        const rgbColor = hsvColor.toRgb();
        const swatchColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${alpha})`;
        return _jsx(Handle, {
            color: swatchColor,
            focused: focused && !isMouseAccessMode,
            active: active,
            preview: showPreview,
            className: styles.handle
        });
    }, [
        alpha,
        color,
        isMouseAccessMode,
        showPreview
    ]);
    const track = React.useCallback(()=>_jsx("div", {
            className: styles.track,
            children: _jsx("div", {
                className: styles.overlay,
                style: {
                    [customProperties.overlayColor]: color
                }
            })
        }), [
        color
    ]);
    const onChange = React.useCallback((value)=>{
        setColor?.({
            alpha: value
        }, 'alpha');
        onChangeProp?.(value);
    }, [
        onChangeProp,
        setColor
    ]);
    const containerClassName = classNames(styles.container, {
        [styles.hideOutline]: isMouseAccessMode
    });
    return _jsx("div", {
        className: containerClassName,
        children: _jsx("div", {
            className: styles.widener,
            children: _jsx(BaseSlider, {
                value: alpha,
                min: 0,
                max: 1,
                step: 0.005,
                onChange: onChange,
                onDragStart: onChangeStartWithPreview,
                onDragEnd: onChangeCompleteWithPreview,
                ariaLabel: ariaLabel,
                fillColor: "transparent",
                handle: handle,
                track: track
            })
        })
    });
};
