import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { UnreachableError } from '../../../../base/preconditions';
import classNames from 'classnames';
import 'react';
import { useIsHoveringInput } from '../../a11y/pointer_input_state/pointer_input_state';
import { BasicButton, Button } from '../../button/button';
import { XIcon } from '../../icons/x/icon';
import { Tooltip } from '../../tooltip/tooltip';
import { useIsTruncated } from '../../typography/truncated/truncated';
import { InheritColor, Text } from '../../typography/typography';
import styles from './pill.css';
import { PillMessages } from './pill.messages';
export const pillSizes = [
    'tiny',
    'xsmall',
    'small',
    'medium',
    'large'
];
function resolveDecorator(decorator, className) {
    const content = typeof decorator === 'function' ? decorator() : decorator;
    return content && _jsx("span", {
        className: className,
        children: content
    });
}
export const Pill = ({ text, size = 'xsmall', shape, active, selected, pressed, disabled, maxWidth = '25u', onRemoveClick, onClick, start, end, id, role = 'button', disclosure = role === 'combobox', ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaControls, ariaHasPopup, ariaActiveDescendant, ariaInvalid, tooltipLabel: tooltipLabelProp, tooltipDescription, tooltipDisabled, tooltipPlacement, tooltipLineClamp, ref })=>{
    const hoverSupported = useIsHoveringInput();
    const { ref: isTruncatedRef, isTruncated } = useIsTruncated(text);
    const tooltipLabel = tooltipLabelProp || (isTruncated ? text : undefined);
    const className = classNames(styles.pill, {
        [styles.button]: !onRemoveClick,
        [styles.tiny]: size === 'tiny',
        [styles.xsmall]: size === 'xsmall',
        [styles.small]: size === 'small',
        [styles.medium]: size === 'medium',
        [styles.large]: size === 'large',
        [styles.rectangle]: shape === 'rectangle',
        [styles.disabled]: disabled,
        [styles.maxWidth25U]: maxWidth === '25u',
        [styles.hoverSupported]: hoverSupported,
        ...getStateClassnames({
            role,
            active,
            selected,
            pressed
        })
    });
    const startContent = resolveDecorator(start, styles.start);
    const endContent = resolveDecorator(end, styles.end);
    const content = _jsx(Text, {
        ref: isTruncatedRef,
        tagName: "span",
        className: styles.text,
        tone: InheritColor,
        size: size === 'tiny' ? 'small' : 'medium',
        lineClamp: 1,
        children: text
    });
    if (onRemoveClick != null && tooltipLabel != null) return _jsx(Tooltip, {
        label: tooltipLabel,
        description: tooltipDescription,
        disabled: tooltipDisabled,
        lineClamp: tooltipLineClamp,
        placement: tooltipPlacement,
        children: ({ tooltipId, ...triggerProps })=>_jsxs("span", {
                id: id,
                className: className,
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-describedby": ariaDescribedBy ?? (text !== tooltipLabel ? tooltipId : undefined),
                ...triggerProps,
                children: [
                    startContent,
                    content,
                    _jsx(Button, {
                        ref: ref,
                        onClick: onRemoveClick,
                        size: size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'tiny',
                        variant: "tertiary",
                        className: styles.removeButton,
                        icon: XIcon,
                        iconSize: "small",
                        ariaLabel: PillMessages.remove(text),
                        disabled: disabled
                    })
                ]
            })
    });
    if (onRemoveClick != null) return _jsxs("span", {
        id: id,
        className: className,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        children: [
            startContent,
            content,
            _jsx(Button, {
                ref: ref,
                onClick: onRemoveClick,
                size: size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'tiny',
                variant: "tertiary",
                className: styles.removeButton,
                icon: XIcon,
                iconSize: "small",
                ariaLabel: PillMessages.remove(text),
                disabled: disabled
            })
        ]
    });
    return _jsxs(BasicButton, {
        ref: ref,
        id: id,
        onClick: onClick,
        className: className,
        noChildWrapper: true,
        role: role === 'button' ? undefined : role,
        active: active,
        selected: selected,
        pressed: pressed,
        disabled: disabled,
        disclosure: disclosure,
        ariaLabel: ariaLabel,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy,
        ariaControls: ariaControls,
        ariaActiveDescendant: ariaActiveDescendant,
        ariaHasPopup: ariaHasPopup,
        ariaInvalid: ariaInvalid,
        tooltipLabel: tooltipLabel,
        tooltipDescription: tooltipDescription,
        tooltipDisabled: tooltipDisabled,
        tooltipPlacement: tooltipPlacement,
        tooltipLineClamp: tooltipLineClamp,
        children: [
            startContent,
            content,
            endContent
        ]
    });
};
function getStateClassnames({ role, active, selected, pressed }) {
    switch(role){
        case 'switch':
            return {
                [styles.active]: false,
                [styles.selected]: selected ?? active
            };
        case 'button':
        case 'combobox':
            return {
                [styles.active]: pressed ?? active,
                [styles.selected]: selected
            };
        default:
            throw new UnreachableError(role);
    }
}
