import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { useIsMouseAccessMode } from '../../../a11y/access_mode_state/access_mode_state';
import { useIsTouchInput } from '../../../a11y/pointer_input_state/pointer_input_state';
import { HsvColor } from '../../hsv_color/hsv_color';
import { useColorPickerControls, useColorPickerHue } from '../../internal/color_picker_provider';
import { Handle } from '../../internal/handle';
import { BaseSlider } from '../../../form/slider/slider';
import styles from './hue_slider.css';
import { HueSliderMessages } from './hue_slider.messages';
const track = ()=>_jsx("div", {
        className: styles.track
    });
export function HueSlider(
    { hue: hueProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel = HueSliderMessages.colorHueLabel(), showHandlePreview = 'touch-only' }
) {
    const colorPicker = useColorPickerControls();
    const setColor = colorPicker?.setColor;
    const onChangeStart = onChangeStartProp ?? colorPicker?.onChangeStart;
    const onChangeComplete = onChangeCompleteProp ?? colorPicker?.onChangeComplete;
    const colorPickerHue = useColorPickerHue();
    const hue = hueProp ?? colorPickerHue ?? 0;
    const handleAtEndRef = React.useRef(false);
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
        onChangeComplete?.();
        setShowPreview(false);
    }, [
        onChangeComplete
    ]);
    const handle = React.useCallback(({ focused, active })=>{
        const hsvColor = new HsvColor(hue, 1, 1);
        const swatchColor = hsvColor.toRgb().toHexString();
        return _jsx(Handle, {
            color: swatchColor,
            focused: focused && !isMouseAccessMode,
            active: active,
            preview: showPreview,
            className: styles.handle
        });
    }, [
        hue,
        isMouseAccessMode,
        showPreview
    ]);
    const onChange = React.useCallback((value)=>{
        handleAtEndRef.current = value === 1;
        setColor?.({
            h: value
        }, 'hue');
        onChangeProp?.(value);
    }, [
        onChangeProp,
        setColor
    ]);
    const handlePosition = handleAtEndRef.current && hue === 0 ? 1 : hue;
    const containerClassName = classNames(styles.container, {
        [styles.hideOutline]: isMouseAccessMode
    });
    return _jsx("div", {
        className: containerClassName,
        children: _jsx("div", {
            className: styles.widener,
            children: _jsx(BaseSlider, {
                value: handlePosition,
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
}
