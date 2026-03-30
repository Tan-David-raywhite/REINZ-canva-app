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
    get NeutralButton () {
        return NeutralButton;
    },
    get NeutralButtonLink () {
        return NeutralButtonLink;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _internal_button = require("./internal_button");
function NeutralButton(props) {
    return (0, _jsxruntime.jsx)(_internal_button.InternalButton, {
        ...props,
        variant: `${props.variant}Neutral`
    });
}
function NeutralButtonLink(props) {
    return (0, _jsxruntime.jsx)(_internal_button.InternalAnchor, {
        ...props,
        variant: `${props.variant}Neutral`
    });
}
