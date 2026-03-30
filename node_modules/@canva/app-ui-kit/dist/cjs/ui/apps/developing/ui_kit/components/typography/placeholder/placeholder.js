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
    get TextPlaceholder () {
        return TextPlaceholder;
    },
    get TitlePlaceholder () {
        return TitlePlaceholder;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _placeholder = require('../../../../../../base/typography/placeholder/placeholder');
function TextPlaceholder(props) {
    return (0, _jsxruntime.jsx)(_placeholder.TextPlaceholder, {
        size: props.size
    });
}
function TitlePlaceholder(props) {
    return (0, _jsxruntime.jsx)(_placeholder.TitlePlaceholder, {
        size: props.size
    });
}
