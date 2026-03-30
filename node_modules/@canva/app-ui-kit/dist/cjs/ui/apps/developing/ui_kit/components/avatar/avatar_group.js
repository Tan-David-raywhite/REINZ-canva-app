"use strict"
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
require("react");
const _avatar = require('../../../../../base/avatar/avatar');
function AvatarGroup(props) {
    return (0, _jsxruntime.jsx)(_avatar.AvatarGroup, {
        size: "medium",
        role: "list",
        avatars: props.avatars,
        onClick: props.onClick,
        onOverflowClick: props.onOverflowClick,
        overflowCount: props.overflowCount
    });
}
