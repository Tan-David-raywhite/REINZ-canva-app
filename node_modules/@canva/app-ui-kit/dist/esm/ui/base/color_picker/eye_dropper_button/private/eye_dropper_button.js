import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { BaseButton } from '../../../button/base_button/base_button';
import { Button } from '../../../button/button';
import { EyedropperIcon } from '../../../icons/eyedropper/icon';
import { MobileEventHandler } from '../../../mobile_event_handler/mobile_event_handler';
import styles from './eye_dropper_button.css';
import { EyeDropperButtonMessages } from './eye_dropper_button.messages';
export function EyeDropperButton(props) {
    const [active, setActive] = React.useState(false);
    const onStart = (event)=>{
        setActive(true);
        props.onStart(event).finally(()=>setActive(false));
    };
    const onBackButton = (e)=>{
        if (!active) return;
        props.onBackButton?.();
        e.stopPropagation();
    };
    return _jsx(MobileEventHandler, {
        onBackButton: onBackButton,
        children: props.shape === 'circle' ? _jsx(BaseButton, {
            tone: "tertiary",
            active: active,
            selected: active,
            className: styles.eyedropperButtonCircle,
            tooltipLabel: EyeDropperButtonMessages.eyedropperTooltip(),
            onClick: onStart,
            border: "ui",
            borderRadius: "elementRound",
            alignItems: "center",
            justifyContent: "center",
            children: _jsx(EyedropperIcon, {
                size: "medium"
            })
        }) : _jsx(Button, {
            variant: "tertiary",
            icon: EyedropperIcon,
            active: active,
            className: styles.eyedropperButton,
            tooltipLabel: EyeDropperButtonMessages.eyedropperTooltip(),
            onClick: onStart
        })
    });
}
