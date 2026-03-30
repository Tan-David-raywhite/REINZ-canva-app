"use strict";
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
    get Avatar () {
        return Avatar;
    },
    get showOverlays () {
        return showOverlays;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _pointer_input_state = require('../../a11y/pointer_input_state/pointer_input_state');
const _base_button = require('../../button/base_button/base_button');
const _tooltip = require('../../tooltip/tooltip');
const _avatarcss = _interop_require_wildcard(require("./avatar.css"));
const _avatar_size = require("./avatar_size");
const _avatar_sizecss = _interop_require_default(require("./avatar_size.css"));
const _internal_avatar = require("./internal_avatar");
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
const showOverlays = [
    'always',
    'on-hover',
    'not-on-hover'
];
const Avatar = (0, _mobxreactlite.observer)(function Avatar({ name, tooltipLabel, tooltipDescription, photo, borderColor, size = 'medium', backgroundSeed, backgroundColor, role = 'presentation', showOverlay, overlayContent, shape = 'circle', onClick, href, target, buttonAriaLabel, buttonAriaLabelledBy, buttonAriaDescribedBy }) {
    const avatarLabel = onClick != null || href != null ? undefined : name;
    const avatarRole = onClick != null || href != null ? 'presentation' : role;
    const sizeStyle = (0, _avatar_size.useAvatarSizeStyle)(size);
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    const tooltipText = tooltipLabel ?? name;
    const renderAvatarWithOverlay = _react.useCallback((triggerProps)=>{
        const avatarElement = (0, _jsxruntime.jsx)(_internal_avatar.InternalAvatar, {
            name: name,
            shape: shape,
            ariaRole: avatarRole,
            ariaLabel: avatarLabel,
            backgroundSeed: backgroundSeed,
            backgroundColor: backgroundColor,
            borderColor: borderColor,
            photo: photo,
            className: _avatar_sizecss.default.internalSizedContainer,
            style: sizeStyle,
            ...(showOverlay == null ? triggerProps : {})
        });
        if (showOverlay == null) return avatarElement;
        return (0, _jsxruntime.jsx)(OverlayWrapper, {
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
        className: (0, _classnames.default)(_avatarcss.default.avatarButton, {
            [_avatarcss.default.hoverSupported]: hoverSupported,
            [_avatarcss.default.square]: shape === 'square',
            [_avatarcss.default.showOverlay]: showOverlay
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
    if (href) return (0, _jsxruntime.jsx)(_base_button.BaseAnchor, {
        ...buttonProps,
        href: href,
        target: target,
        children: renderAvatarWithOverlay()
    });
    if (onClick != null) return (0, _jsxruntime.jsx)(_base_button.BaseButton, {
        ...buttonProps,
        children: renderAvatarWithOverlay()
    });
    if (avatarRole === 'img' && tooltipText != null) return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: tooltipText,
        description: tooltipDescription,
        children: ({ tooltipId, ...triggerProps })=>renderAvatarWithOverlay(triggerProps)
    });
    return renderAvatarWithOverlay();
});
const OverlayWrapper = _react.memo(
    ({ children, shape, overlayContent, showOverlay, borderColor, ...tooltipTriggerProps })=>{
        return (0, _jsxruntime.jsxs)("span", {
            className: getOverlayClassName({
                showOverlay,
                shape
            }),
            style: {
                [_avatarcss.customProperties.colorAvatarBorder]: borderColor
            },
            ...tooltipTriggerProps,
            children: [
                children,
                overlayContent && (0, _jsxruntime.jsx)("div", {
                    className: _avatarcss.default.overlayContent,
                    children: overlayContent
                })
            ]
        });
    }
);
const getOverlayClassName = ({ showOverlay, shape })=>(0, _classnames.default)(_avatarcss.default.overlay, {
        [_avatarcss.default.square]: shape === 'square',
        [_avatarcss.default.showOverlayOnHover]: showOverlay === 'on-hover',
        [_avatarcss.default.hiddenOverlayOnHover]: showOverlay === 'not-on-hover'
    });
