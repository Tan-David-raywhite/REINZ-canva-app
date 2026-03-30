"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AvatarGroup", {
    enumerable: true,
    get: function() {
        return AvatarGroup;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _elevation = require('../../tokens/elevation');
const _avatar = require("./avatar");
const _avatar_groupcss = _interop_require_default(require("./avatar_group.css"));
const _avatar_group_utils = require("./avatar_group_utils");
const _avatar_size = require("./avatar_size");
const _placeholders = require("./placeholders");
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
const AvatarGroup = ({ avatars, size = 'medium', direction = 'inherit', onClick, overflowCount = 0, overflowTooltip, overflowAriaLabel, onOverflowClick, role: roleProp = 'list' })=>{
    const role = onClick || onOverflowClick || overflowTooltip ? 'list' : roleProp;
    const avatarItems = _react.useMemo(()=>{
        const items = direction === 'reverse' ? [
            ...avatars
        ].reverse() : avatars;
        return items.map((avatarItemProp, index)=>{
            if (avatarItemProp === 'placeholder') return (0, _jsxruntime.jsx)(_placeholders.AvatarPlaceholder, {
                size: size,
                index: index
            }, index);
            return (0, _jsxruntime.jsx)(_avatar.Avatar, {
                photo: avatarItemProp.photo,
                backgroundSeed: avatarItemProp.backgroundSeed,
                backgroundColor: avatarItemProp.backgroundColor,
                borderColor: avatarItemProp.borderColor ?? _elevation.elevationSurfaceBg,
                name: avatarItemProp.name ?? '',
                shape: avatarItemProp.shape,
                tooltipLabel: avatarItemProp.tooltipLabel,
                tooltipDescription: avatarItemProp.tooltipDescription,
                href: avatarItemProp.href,
                target: avatarItemProp.target,
                role: role === 'presentation' ? 'presentation' : 'img',
                size: size,
                showOverlay: avatarItemProp.showOverlay,
                overlayContent: avatarItemProp.overlayContent,
                onClick: onClick ? ()=>onClick?.(index) : undefined,
                buttonAriaLabel: avatarItemProp.buttonAriaLabel,
                buttonAriaLabelledBy: avatarItemProp.buttonAriaLabelledBy,
                buttonAriaDescribedBy: avatarItemProp.buttonAriaDescribedBy
            }, `${avatarItemProp.name}_${index}`);
        });
    }, [
        avatars,
        role,
        size,
        onClick,
        direction
    ]);
    const overflowAvatar = (0, _jsxruntime.jsx)(_avatar_group_utils.OverflowAvatar, {
        tooltipLabel: overflowTooltip,
        ariaLabel: overflowAriaLabel,
        count: overflowCount,
        size: size,
        onClick: onOverflowClick,
        role: role === 'presentation' ? 'presentation' : 'img'
    });
    const sizeStyle = (0, _avatar_size.useAvatarSizeStyle)(size);
    const showOverflow = overflowCount === _avatar_group_utils.OverflowCountUnknown || overflowCount > 0;
    return (0, _jsxruntime.jsxs)("ul", {
        role: role,
        className: _avatar_groupcss.default.avatarGroup,
        children: [
            direction === 'reverse' && showOverflow && overflowAvatar,
            avatarItems.map((item, index)=>(0, _jsxruntime.jsx)("li", {
                    className: _avatar_groupcss.default.avatarGroupItem,
                    style: {
                        zIndex: direction === 'reverse' ? index : avatars.length - index,
                        ...sizeStyle
                    },
                    children: item
                }, index)),
            direction === 'inherit' && showOverflow && overflowAvatar
        ]
    });
};
