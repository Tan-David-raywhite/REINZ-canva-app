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
    get Avatar () {
        return _avatar.Avatar;
    },
    get AvatarGroup () {
        return _avatar_group.AvatarGroup;
    },
    get AvatarPlaceholder () {
        return _placeholders.AvatarPlaceholder;
    },
    get DEFAULT_BACKGROUND_COLOR () {
        return _utils.DEFAULT_BACKGROUND_COLOR;
    },
    get OverflowAvatar () {
        return _avatar_group_utils.OverflowAvatar;
    },
    get OverflowCountUnknown () {
        return _avatar_group_utils.OverflowCountUnknown;
    },
    get generateAvatarBackgroundColor () {
        return _utils.generateAvatarBackgroundColor;
    },
    get useAvatarSize () {
        return _avatar_size.useAvatarSize;
    },
    get useAvatarSizeInPixel () {
        return _avatar_size.useAvatarSizeInPixel;
    },
    get useNearestAvatarUrlFromBundle () {
        return _utils.useNearestAvatarUrlFromBundle;
    },
    get useNearestAvatarUrlFromImages () {
        return _utils.useNearestAvatarUrlFromImages;
    }
});
const _avatar = require("./private/avatar");
const _avatar_size = require("./private/avatar_size");
const _avatar_group_utils = require("./private/avatar_group_utils");
const _avatar_group = require("./private/avatar_group");
const _placeholders = require("./private/placeholders");
const _utils = require("./private/utils");
