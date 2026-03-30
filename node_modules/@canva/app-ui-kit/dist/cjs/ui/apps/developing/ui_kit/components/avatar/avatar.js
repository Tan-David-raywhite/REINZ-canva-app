"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Avatar", {
    enumerable: true,
    get: function() {
        return Avatar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _avatar = require('../../../../../base/avatar/avatar');
function Avatar(props) {
    return (0, _jsxruntime.jsx)(_avatar.Avatar, {
        size: "medium",
        shape: "circle",
        role: "img",
        photo: props.photo,
        name: props.name,
        onClick: props.onClick,
        backgroundSeed: props.backgroundSeed,
        backgroundColor: props.backgroundColor,
        buttonAriaLabel: props.buttonAriaLabel
    });
}
