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
    get Column () {
        return Column;
    },
    get Columns () {
        return Columns;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _layout = require('../../../../../../base/layout/layout');
function Column(props) {
    return (0, _jsxruntime.jsx)(_layout.Column, {
        width: props.width,
        children: props.children
    });
}
function Columns(props) {
    return (0, _jsxruntime.jsx)(_layout.Columns, {
        children: props.children,
        spacing: props.spacing,
        align: props.align,
        alignY: props.alignY
    });
}
