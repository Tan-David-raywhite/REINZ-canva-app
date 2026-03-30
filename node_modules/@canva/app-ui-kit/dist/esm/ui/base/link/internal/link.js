import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { getButtonAriaAttributes } from '../../a11y/button_aria_attributes/button_aria_attributes';
import { useIsHoveringInput } from '../../a11y/pointer_input_state/pointer_input_state';
import { ScreenReaderContent } from '../../a11y/screen_reader_content/screen_reader_content';
import { SkipRenderOnClient } from '../../hydration/skip_render_on_client';
import { OpenInNewIcon } from '../../icons/open_in_new/icon';
import { Tooltip } from '../../tooltip/tooltip';
import styles, { getStyle } from './link.css';
import { LinkMessages } from './link.messages';
export const InheritColor = Symbol('inherit');
export const variants = [
    'regular',
    'semiBold',
    'subtle',
    'muted',
    'unstyled',
    'critical',
    InheritColor
];
const LinkInner = (props)=>{
    const { href, target, children, className, id, variant = 'regular', download, draggable = false, onClick, onFocus, onBlur, onMouseEnter, onMouseLeave, onMouseDown, onPointerDown, onPointerUp, onPointerEnter, onPointerLeave, onPointerMove, onPointerCancel, role, ariaLabel, ariaLabelledBy, ariaCurrent, ariaOwns, ariaRoleDescription, ariaDescribedBy, ariaControls, ariaHidden, tabIndex, active, pressed, disclosure, disabled, withOpenInNewIcon = false, preventLineBreak = true, ref } = props;
    let { rel } = props;
    const targetBlank = target === '_blank';
    if (targetBlank && !rel) rel = 'noopener';
    const onKeyDown = React.useCallback((e)=>{
        if (e.key === ' ' && onClick)
        {
            if (role === 'button' && e.target === e.currentTarget) onClick(e);
        }
    }, [
        onClick,
        role
    ]);
    const hoverSupported = useIsHoveringInput();
    return (_jsxs("a", {
            className: classNames(styles.link, className, variant === InheritColor ? styles.inheritColor : getStyle(variant), {
                [styles.hoverSupported]: hoverSupported,
                [styles.disabled]: disabled
            }),
            id: id,
            href: disabled ? undefined : href,
            ref: ref,
            download: download,
            draggable: draggable,
            onClick: disabled ? undefined : onClick,
            onKeyDown: disabled ? undefined : onKeyDown,
            onPointerDown: disabled ? undefined : onPointerDown,
            onPointerUp: disabled ? undefined : onPointerUp,
            onPointerEnter: onPointerEnter,
            onPointerLeave: onPointerLeave,
            onPointerMove: onPointerMove,
            onPointerCancel: onPointerCancel,
            onFocus: onFocus,
            onBlur: onBlur,
            onMouseEnter: onMouseEnter,
            onMouseLeave: onMouseLeave,
            onMouseDown: onMouseDown,
            target: target,
            rel: rel,
            role: role,
            "aria-current": ariaCurrent,
            ...getButtonAriaAttributes({
                tagName: 'a',
                ariaLabel,
                ariaLabelledBy,
                ariaControls,
                ariaOwns,
                ariaRoleDescription,
                ariaDescribedBy,
                ariaHidden,
                tabIndex,
                active,
                pressed,
                disabled,
                disclosure,
                role
            }),
            children: [
                children,
                withOpenInNewIcon && _jsxs("span", {
                    className: styles.openInNewIcon,
                    children: [
                        preventLineBreak && _jsx(_Fragment, {
                            children: "⁠"
                        }),
                        _jsx(OpenInNewIcon, {
                            size: "small"
                        })
                    ]
                }),
                target != null && _jsxs(SkipRenderOnClient, {
                    className: styles.noSelect,
                    tagName: "span",
                    shouldRenderOnClient: ()=>targetBlank,
                    children: [
                        preventLineBreak && _jsx(_Fragment, {
                            children: "⁠"
                        }),
                        _jsx(ScreenReaderContent, {
                            tagName: "span",
                            children: LinkMessages.opensInNewWindow()
                        })
                    ]
                })
            ]
        }));
};
export function Link(
    { tooltipLabel, tooltipDescription, tooltipDisabled, tooltipLineClamp, tooltipPlacement, ...props }
) {
    if (tooltipLabel) return _jsx(Tooltip, {
        label: tooltipLabel,
        description: tooltipDescription,
        disabled: tooltipDisabled,
        lineClamp: tooltipLineClamp,
        placement: tooltipPlacement,
        children: ({ onFocus, onBlur, onMouseEnter, onMouseLeave, onMouseDown, tooltipId })=>{
            return _jsx(LinkInner, {
                ...props,
                onFocus: onFocus,
                onBlur: onBlur,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onMouseDown: onMouseDown
            });
        }
    });
    return _jsx(LinkInner, {
        ...props
    });
}
export function LinkButton({ onClick, ...props }) {
    const wrappedOnClick = React.useCallback((event)=>{
        event.preventDefault();
        if (onClick) onClick(event);
    }, [
        onClick
    ]);
    const href = props.href || '#';
    return _jsx(Link, {
        role: "button",
        ...props,
        href: href,
        onClick: wrappedOnClick
    });
}
