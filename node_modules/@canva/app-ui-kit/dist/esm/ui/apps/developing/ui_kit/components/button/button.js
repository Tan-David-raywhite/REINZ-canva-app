import { jsx as _jsx } from "react/jsx-runtime";
import { UnreachableError } from '../../../../../../base/preconditions';
import 'react';
import { Button as EaselButton } from '../../../../../base/button/button';
function isInvalidSmallSize(variant, hasLabel, hasIcon) {
    switch(variant){
        case 'primary':
            return true;
        case 'secondary':
            return hasIcon && !hasLabel;
        case 'contrast':
            return hasLabel || !hasIcon;
        case 'tertiary':
            return false;
        default:
            throw new UnreachableError(variant);
    }
}
function determineSizeFromButtonProps({ children, size, icon, variant }) {
    const hasLabel = Boolean(children);
    const hasIcon = Boolean(icon);
    if (size === 'small' && isInvalidSmallSize(variant, hasLabel, hasIcon)) {
        console.warn(`Button: size "small" is invalid for variant "${variant}" with the specified label and icon combination; overriding with "medium"`);
        return 'medium';
    }
    return size;
}
export function Button(props) {
    const variant = props.variant || 'tertiary';
    const easelSize = determineSizeFromButtonProps({
        size: props.size,
        children: props.children,
        icon: props.icon,
        variant
    });
    const pressed = 'pressed' in props ? props.pressed : undefined;
    const commonProps = {
        ariaLabel: props.ariaLabel,
        children: props.children,
        disabled: props.disabled,
        selected: props.selected,
        icon: props.icon,
        iconPosition: props.iconPosition,
        alignment: props.alignment,
        loading: props.loading,
        onClick: props.onClick,
        tooltipLabel: props.tooltipLabel,
        stretch: props.stretch,
        type: props.type || 'button',
        variant
    };
    return _jsx(EaselButton, {
        ...commonProps,
        expandClickableArea: easelSize === 'small' ? true : undefined,
        size: easelSize,
        pressed: variant !== 'primary' ? pressed : undefined
    });
}
