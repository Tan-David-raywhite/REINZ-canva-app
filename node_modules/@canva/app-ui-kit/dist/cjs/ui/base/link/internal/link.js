"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get InheritColor () {
        return InheritColor;
    },
    get Link () {
        return Link;
    },
    get LinkButton () {
        return LinkButton;
    },
    get variants () {
        return variants;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _button_aria_attributes = require('../../a11y/button_aria_attributes/button_aria_attributes');
const _pointer_input_state = require('../../a11y/pointer_input_state/pointer_input_state');
const _screen_reader_content = require('../../a11y/screen_reader_content/screen_reader_content');
const _skip_render_on_client = require('../../hydration/skip_render_on_client');
const _icon = require('../../icons/open_in_new/icon');
const _tooltip = require('../../tooltip/tooltip');
const _linkcss = _interop_require_wildcard(require("./link.css"));
const _linkmessages = require("./link.messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const InheritColor = Symbol('inherit');
const variants = [
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
    const onKeyDown = _react.useCallback((e)=>{
        if (e.key === ' ' && onClick)
        {
            if (role === 'button' && e.target === e.currentTarget) onClick(e);
        }
    }, [
        onClick,
        role
    ]);
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    return ((0, _jsxruntime.jsxs)("a", {
            className: (0, _classnames.default)(_linkcss.default.link, className, variant === InheritColor ? _linkcss.default.inheritColor : (0, _linkcss.getStyle)(variant), {
                [_linkcss.default.hoverSupported]: hoverSupported,
                [_linkcss.default.disabled]: disabled
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
            ...(0, _button_aria_attributes.getButtonAriaAttributes)({
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
                withOpenInNewIcon && (0, _jsxruntime.jsxs)("span", {
                    className: _linkcss.default.openInNewIcon,
                    children: [
                        preventLineBreak && (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                            children: "⁠"
                        }),
                        (0, _jsxruntime.jsx)(_icon.OpenInNewIcon, {
                            size: "small"
                        })
                    ]
                }),
                target != null && (0, _jsxruntime.jsxs)(_skip_render_on_client.SkipRenderOnClient, {
                    className: _linkcss.default.noSelect,
                    tagName: "span",
                    shouldRenderOnClient: ()=>targetBlank,
                    children: [
                        preventLineBreak && (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
                            children: "⁠"
                        }),
                        (0, _jsxruntime.jsx)(_screen_reader_content.ScreenReaderContent, {
                            tagName: "span",
                            children: _linkmessages.LinkMessages.opensInNewWindow()
                        })
                    ]
                })
            ]
        }));
};
function Link({ tooltipLabel, tooltipDescription, tooltipDisabled, tooltipLineClamp, tooltipPlacement, ...props }) {
    if (tooltipLabel) return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: tooltipLabel,
        description: tooltipDescription,
        disabled: tooltipDisabled,
        lineClamp: tooltipLineClamp,
        placement: tooltipPlacement,
        children: ({ onFocus, onBlur, onMouseEnter, onMouseLeave, onMouseDown, tooltipId })=>{
            return (0, _jsxruntime.jsx)(LinkInner, {
                ...props,
                onFocus: onFocus,
                onBlur: onBlur,
                onMouseEnter: onMouseEnter,
                onMouseLeave: onMouseLeave,
                onMouseDown: onMouseDown
            });
        }
    });
    return (0, _jsxruntime.jsx)(LinkInner, {
        ...props
    });
}
function LinkButton({ onClick, ...props }) {
    const wrappedOnClick = _react.useCallback((event)=>{
        event.preventDefault();
        if (onClick) onClick(event);
    }, [
        onClick
    ]);
    const href = props.href || '#';
    return (0, _jsxruntime.jsx)(Link, {
        role: "button",
        ...props,
        href: href,
        onClick: wrappedOnClick
    });
}
