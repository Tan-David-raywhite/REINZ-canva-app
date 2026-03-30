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
    get OverflowAvatar () {
        return OverflowAvatar;
    },
    get OverflowCountUnknown () {
        return OverflowCountUnknown;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _pointer_input_state = require('../../a11y/pointer_input_state/pointer_input_state');
const _base_button = require('../../button/base_button/base_button');
const _icon = require('../../icons/more_horizontal/icon');
const _number_abbreviation_presenter = require('../../number_abbreviation/number_abbreviation_presenter');
const _tooltip = require('../../tooltip/tooltip');
const _avatarcss = _interop_require_default(require("./avatar.css"));
const _avatar_groupcss = _interop_require_default(require("./avatar_group.css"));
const _avatar_groupmessages = require("./avatar_group.messages");
const _avatar_size = require("./avatar_size");
const _avatar_sizecss = _interop_require_default(require("./avatar_size.css"));
const _internal_avatarcss = _interop_require_default(require("./internal_avatar.css"));
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
const OverflowCountUnknown = Symbol('OverflowCountUnknown');
function OverflowAvatar({ count, size = 'medium', role = 'img', onClick, active, pressed, disclosure, ariaHasPopup, id, ariaOwns, tooltipLabel, ariaLabel, ref }) {
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    let label;
    if (tooltipLabel) label = tooltipLabel;
    else if (typeof count === 'number') label = _avatar_groupmessages.AvatarGroupMessages.more(count);
    else label = _avatar_groupmessages.AvatarGroupMessages.unknownMore();
    const avatarSize = (0, _avatar_size.useAvatarSize)(size);
    const sizeStyle = (0, _avatar_size.useAvatarSizeStyle)(size);
    const abbreviationPresenter = _react.useMemo(()=>new _number_abbreviation_presenter.NumberAbbreviationPresenter('en-US', {
            maximumSignificantDigits: 2
        }), []);
    const formattedCount = `+${abbreviationPresenter.abbreviateNumber(typeof count === 'number' ? count : 0)}`;
    const wrapWithContainer = (_children)=>{
        return (0, _jsxruntime.jsx)("li", {
            className: (0, _classnames.default)(_avatar_groupcss.default.avatarGroupItem, {
                [_avatar_groupcss.default.overflowAvatarSmall]: avatarSize ? parseFloat(avatarSize) < 3.2 : false,
                [_avatar_groupcss.default.overflowAvatarAboveLarge]: avatarSize ? parseFloat(avatarSize) >= 6.4 : false,
                [_avatar_groupcss.default.overflowAvatarThreeChars]: formattedCount.length === 3,
                [_avatar_groupcss.default.overflowAvatarFourChars]: formattedCount.length === 4,
                [_avatar_groupcss.default.overflowAvatarFiveChars]: formattedCount.length === 5
            }),
            style: sizeStyle,
            children: _children
        });
    };
    const children = (0, _jsxruntime.jsx)("span", {
        className: (0, _classnames.default)(_internal_avatarcss.default.avatar, _avatar_sizecss.default.internalSizedContainer, _avatar_groupcss.default.overflowAvatar),
        role: role,
        "aria-label": ariaLabel ?? label,
        children: count === OverflowCountUnknown ? (0, _jsxruntime.jsx)(_icon.MoreHorizontalIcon, {}) : formattedCount
    });
    if (onClick) return wrapWithContainer((0, _jsxruntime.jsx)(_base_button.BaseButton, {
        onClick: onClick,
        className: (0, _classnames.default)(_avatarcss.default.avatarButton, {
            [_avatar_groupcss.default.hoverSupported]: hoverSupported
        }),
        display: "block",
        borderRadius: "elementRound",
        position: "relative",
        pressed: pressed ?? active,
        disclosure: disclosure,
        ariaHasPopup: ariaHasPopup,
        id: id,
        ref: ref,
        ariaOwns: ariaOwns,
        ariaLabel: ariaLabel ?? label,
        tooltipLabel: label,
        children: children
    }));
    if (label && role !== 'presentation') return wrapWithContainer((0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: label,
        children: ({ tooltipId, ...rest })=>(0, _jsxruntime.jsx)("div", {
                className: _avatar_groupcss.default.overflowAvatarContainer,
                ...rest,
                children: children
            })
    }));
    return wrapWithContainer(children);
}
