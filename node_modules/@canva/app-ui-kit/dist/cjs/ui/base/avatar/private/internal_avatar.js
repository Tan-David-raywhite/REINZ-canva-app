"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InternalAvatar", {
    enumerable: true,
    get: function() {
        return InternalAvatar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _do_not_record = require('../../interaction_recorder/do_not_record');
const _acronym_avatar = require("./acronym_avatar");
const _avatar_defaultfilesvg = _interop_require_default(require("./avatar_default.file.svg"));
const _internal_avatarcss = _interop_require_default(require("./internal_avatar.css"));
const _picture_avatar = require("./picture_avatar");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const InternalAvatar = ({ name, ariaRole, ariaLabel, backgroundSeed, backgroundColor, borderColor, photo, className, style, shape = 'circle', ...tooltipTriggerProps })=>{
    const avatarClassName = (0, _classnames.default)(_internal_avatarcss.default.avatar, _do_not_record.doNotRecordClassName, className, {
        [_internal_avatarcss.default.square]: shape === 'square'
    });
    const role = ariaRole || 'presentation';
    if (photo) return (0, _jsxruntime.jsx)(_picture_avatar.PictureAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        backgroundColor: getBackgroundColor('photo', backgroundColor),
        photoSrc: photo,
        ariaLabel: ariaLabel,
        role: role,
        ...tooltipTriggerProps
    });
    else if (name) return (0, _jsxruntime.jsx)(_acronym_avatar.AcronymAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        name: name,
        shape: shape,
        backgroundSeed: backgroundSeed,
        backgroundColor: getBackgroundColor('named', backgroundColor),
        role: role,
        ariaLabel: ariaLabel,
        ...tooltipTriggerProps
    });
    else return (0, _jsxruntime.jsx)(_picture_avatar.PictureAvatar, {
        className: avatarClassName,
        style: style,
        borderColor: borderColor,
        photoSrc: _avatar_defaultfilesvg.default,
        ariaLabel: ariaLabel,
        role: role,
        ...tooltipTriggerProps
    });
};
function isAvatarColorMap(value) {
    return typeof value === 'object' && value != null;
}
function getBackgroundColor(type, backgroundColor) {
    if (typeof backgroundColor === 'string') return type === 'named' ? backgroundColor : undefined;
    if (isAvatarColorMap(backgroundColor)) {
        if (type === 'photo')
            return backgroundColor.photo;
        else
            return backgroundColor.named;
    }
    return undefined;
}
