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
    get Masonry () {
        return Masonry;
    },
    get MasonryItem () {
        return MasonryItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _masonry = require('../../../../../base/masonry/masonry');
const _metrics = require("../metrics/metrics");
function Masonry(props) {
    return (0, _jsxruntime.jsx)(_masonry.Masonry, {
        ...props,
        gutterPx: _metrics.baseUnit
    });
}
function MasonryItem(props) {
    return (0, _jsxruntime.jsx)(_masonry.MasonryItem, {
        ...props
    });
}
