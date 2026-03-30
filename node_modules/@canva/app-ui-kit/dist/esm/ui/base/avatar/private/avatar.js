import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classnames from 'classnames';
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import { useIsHoveringInput } from '../../a11y/pointer_input_state/pointer_input_state';
import { BaseAnchor, BaseButton } from '../../button/base_button/base_button';
import { Tooltip } from '../../tooltip/tooltip';
import styles, { customProperties } from './avatar.css';
import { useAvatarSizeStyle } from './avatar_size';
import sizedAvatarStyles from './avatar_size.css';
import { InternalAvatar } from './internal_avatar';
export const showOverlays = [
    'always',
    'on-hover',
    'not-on-hover'
];
export const Avatar = observer(function Avatar({ name, tooltipLabel, tooltipDescription, photo, borderColor, size = 'medium', backgroundSeed, backgroundColor, role = 'presentation', showOverlay, overlayContent, shape = 'circle', onClick, href, target, buttonAriaLabel, buttonAriaLabelledBy, buttonAriaDescribedBy }) {
    const avatarLabel = onClick != null || href != null ? undefined : name;
    const avatarRole = onClick != null || href != null ? 'presentation' : role;
    const sizeStyle = useAvatarSizeStyle(size);
    const hoverSupported = useIsHoveringInput();
    const tooltipText = tooltipLabel ?? name;
    const renderAvatarWithOverlay = React.useCallback((triggerProps)=>{
        const avatarElement = _jsx(InternalAvatar, {
            name: name,
            shape: shape,
            ariaRole: avatarRole,
            ariaLabel: avatarLabel,
            backgroundSeed: backgroundSeed,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            photo: photo,
            className: sizedAvatarStyles.internalSizedContainer,
            style: sizeStyle,
            ...(showOverlay == null ? triggerProps : {})
        });
        if (showOverlay == null) return avatarElement;
        return _jsx(OverlayWrapper, {
            overlayContent: overlayContent,
            showOverlay: showOverlay,
            borderColor: borderColor,
            shape: shape,
            ...triggerProps,
            children: avatarElement
        });
    }, [
        avatarLabel,
        avatarRole,
        backgroundColor,
        backgroundSeed,
        borderColor,
        name,
        photo,
        sizeStyle,
        shape,
        overlayContent,
        showOverlay
    ]);
    const buttonProps = {
        className: classnames(styles.avatarButton, {
            [styles.hoverSupported]: hoverSupported,
            [styles.square]: shape === 'square',
            [styles.showOverlay]: showOverlay
        }),
        onClick,
        ariaLabel: buttonAriaLabel ?? tooltipText,
        ariaLabelledBy: buttonAriaLabelledBy,
        ariaDescribedBy: buttonAriaDescribedBy,
        tooltipLabel: tooltipText,
        tooltipDescription,
        display: 'block',
        borderRadius: shape === 'square' ? 'elementSmall' : 'elementRound',
        position: 'relative'
    };
    if (href) return _jsx(BaseAnchor, {
        ...buttonProps,
        href: href,
        target: target,
        children: renderAvatarWithOverlay()
    });
    if (onClick != null) return _jsx(BaseButton, {
        ...buttonProps,
        children: renderAvatarWithOverlay()
    });
    if (avatarRole === 'img' && tooltipText != null) return _jsx(Tooltip, {
        label: tooltipText,
        description: tooltipDescription,
        children: ({ tooltipId, ...triggerProps })=>renderAvatarWithOverlay(triggerProps)
    });
    return renderAvatarWithOverlay();
});
const OverlayWrapper = React.memo(
    ({ children, shape, overlayContent, showOverlay, borderColor, ...tooltipTriggerProps })=>{
        return _jsxs("span", {
            className: getOverlayClassName({
                showOverlay,
                shape
            }),
            style: {
                [customProperties.colorAvatarBorder]: borderColor
            },
            ...tooltipTriggerProps,
            children: [
                children,
                overlayContent && _jsx("div", {
                    className: styles.overlayContent,
                    children: overlayContent
                })
            ]
        });
    }
);
const getOverlayClassName = ({ showOverlay, shape })=>classnames(styles.overlay, {
        [styles.square]: shape === 'square',
        [styles.showOverlayOnHover]: showOverlay === 'on-hover',
        [styles.hiddenOverlayOnHover]: showOverlay === 'not-on-hover'
    });
