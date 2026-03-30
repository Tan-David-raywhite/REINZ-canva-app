import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { useIsHoveringInput } from '../../../a11y/pointer_input_state/pointer_input_state';
import { ScreenReaderContent } from '../../../a11y/screen_reader_content/screen_reader_content';
import { BaseButton } from '../../../button/base_button/base_button';
import { CircleButton } from '../../../button/button';
import { ChevronLeftIcon } from '../../../icons/chevron_left/icon';
import { ChevronRightIcon } from '../../../icons/chevron_right/icon';
import { OutlinedChevronLeftIcon, OutlinedChevronRightIcon } from './outlined_chevron';
import styles, { customProperties } from './scroll_button.css';
import { ButtonMessages } from './scroll_button.messages';
export function useScrollButtonAriaLabel(parentAriaLabelProps, direction) {
    const childId = React.useId();
    const directionMessage = direction === 'forward' ? ButtonMessages.nextPage() : ButtonMessages.prevPage();
    if (parentAriaLabelProps.ariaLabelledBy != null) return {
        ariaLabelledBy: `${childId} ${parentAriaLabelProps.ariaLabelledBy}`,
        hiddenLabelElement: _jsx(ScreenReaderContent, {
            id: childId,
            asLabelTextOnly: true,
            tagName: "span",
            children: `${directionMessage}:`
        })
    };
    if (parentAriaLabelProps.ariaLabel != null) return {
        ariaLabel: `${directionMessage}: ${parentAriaLabelProps.ariaLabel}`
    };
    return {
        ariaLabel: directionMessage
    };
}
const useScrollButton = (props)=>{
    const composedAriaLabel = useScrollButtonAriaLabel({
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy
    }, props.direction);
    const hoverSupported = useIsHoveringInput();
    const isDisabled = props.atStart === true && props.direction === 'backward' || props.atEnd === true && props.direction === 'forward';
    const shouldDisplayButton = props.position === 'detached' || !isDisabled;
    const buttonClassName = classNames(styles.base, {
        [styles.bounded]: props.position === 'bounded',
        [styles.forward]: props.direction === 'forward',
        [styles.backward]: props.direction === 'backward',
        [styles.hoverSupported]: hoverSupported
    });
    const setButtonHandle = React.useCallback((handle)=>{
        if (props.buttonHandle) props.buttonHandle.current = handle;
    }, [
        props.buttonHandle
    ]);
    const resetButtonHandle = React.useCallback(()=>{
        if (props.buttonHandle) props.buttonHandle.current = null;
    }, [
        props.buttonHandle
    ]);
    React.useEffect(()=>{
        if (!shouldDisplayButton) resetButtonHandle();
    }, [
        resetButtonHandle,
        shouldDisplayButton
    ]);
    return {
        aria: composedAriaLabel,
        onClick: props.onClick,
        shouldDisplayButton,
        isDisabled,
        className: buttonClassName,
        buttonHandle: setButtonHandle
    };
};
function maybeWrapWithOffset(children, position, offsetY, horizontalOpts) {
    if (position !== 'bounded' || offsetY == null && horizontalOpts == null) return children;
    const horizontalDirection = horizontalOpts && (horizontalOpts.direction === 'backward' ? 1 : -1);
    const horizontalOffsetPx = horizontalDirection && horizontalOpts.offsetX * horizontalDirection;
    return _jsx("div", {
        style: {
            [customProperties.horizontalOffset]: horizontalOffsetPx ? `${horizontalOffsetPx}px` : undefined,
            [customProperties.verticalOffset]: offsetY ? `${offsetY}px` : undefined
        },
        children: children
    });
}
export const ProminentScrollButton = ({ position = 'bounded', size = 'medium', offsetY, offsetX, ...props })=>{
    const { aria, className, onClick, buttonHandle, shouldDisplayButton, isDisabled } = useScrollButton({
        ...props,
        position
    });
    if (!shouldDisplayButton) return null;
    const isForwardDirection = props.direction === 'forward';
    const circularIcon = isForwardDirection ? ChevronRightIcon : ChevronLeftIcon;
    const circleButtonAriaLabelProps = aria.ariaLabel != null ? {
        ariaLabel: aria.ariaLabel
    } : {
        ariaLabelledBy: aria.ariaLabelledBy
    };
    return _jsxs(_Fragment, {
        children: [
            aria.hiddenLabelElement,
            maybeWrapWithOffset(_jsx(CircleButton, {
                variant: "secondary",
                size: size,
                elevated: true,
                icon: circularIcon,
                ariaControls: props.scrollableId,
                onClick: onClick,
                containerClassName: classNames(className, styles.prominent),
                ref: buttonHandle,
                disabled: isDisabled,
                ...circleButtonAriaLabelProps
            }), position, offsetY, offsetX ? {
                offsetX,
                direction: props.direction
            } : undefined)
        ]
    });
};
export const SubtleScrollButton = ({ position = 'bounded', ...props })=>{
    const { aria, className, onClick, buttonHandle, shouldDisplayButton, isDisabled } = useScrollButton({
        ...props,
        position
    });
    if (!shouldDisplayButton) return null;
    const isForwardDirection = props.direction === 'forward';
    const OutlinedIcon = isForwardDirection ? OutlinedChevronRightIcon : OutlinedChevronLeftIcon;
    return _jsxs(_Fragment, {
        children: [
            aria.hiddenLabelElement,
            maybeWrapWithOffset(_jsx(BaseButton, {
                type: "button",
                className: classNames(className, styles.subtle, {
                    [styles.disabled]: isDisabled
                }),
                onClick: onClick,
                ariaControls: props.scrollableId,
                ariaLabel: aria.ariaLabel,
                ariaLabelledBy: aria.ariaLabelledBy,
                ref: buttonHandle,
                disabled: isDisabled,
                children: _jsx(OutlinedIcon, {
                    size: "medium",
                    className: styles.subtleButtonIcon
                })
            }), position, props.offsetY)
        ]
    });
};
