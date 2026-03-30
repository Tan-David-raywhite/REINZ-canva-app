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
    get Text () {
        return Text;
    },
    get Title () {
        return Title;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _typography = require('../../../../../base/typography/typography');
function Text(props) {
    return (0, _jsxruntime.jsx)(_typography.Text, {
        alignment: props.alignment,
        capitalization: props.capitalization,
        children: props.children,
        lineClamp: props.lineClamp,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone,
        weight: props.variant
    });
}
function Title(props) {
    return (0, _jsxruntime.jsx)(_typography.Title, {
        alignment: props.alignment,
        capitalization: props.capitalization,
        children: props.children,
        lineClamp: props.lineClamp,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone
    });
}
