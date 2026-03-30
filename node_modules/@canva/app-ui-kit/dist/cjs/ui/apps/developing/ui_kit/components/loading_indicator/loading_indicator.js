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
    get LoadingIndicator () {
        return LoadingIndicator;
    },
    get sizes () {
        return sizes;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _loading_indicator = require('../../../../../base/loading_indicator/loading_indicator');
const sizes = [
    'small',
    'medium'
];
function LoadingIndicator(props) {
    return (0, _jsxruntime.jsx)(_loading_indicator.LoadingIndicator, {
        size: props.size
    });
}
