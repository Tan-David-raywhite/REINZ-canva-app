"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AspectRatio", {
    enumerable: true,
    get: function() {
        return AspectRatio;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../base/preconditions');
require("react");
const _metrics = require('../../metrics/metrics');
const _aspect_ratiocss = _interop_require_default(require("./aspect_ratio.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const AspectRatio = ({ ratio, children, width: widthProp, height: heightProp })=>{
    _preconditions.Preconditions.checkArgument(ratio > 0, 'Ratio must be greater than 0');
    if (widthProp == null && heightProp == null) {
        const containerStyles = {
            paddingTop: `${1 / ratio * 100}%`
        };
        return (0, _jsxruntime.jsx)("div", {
            className: _aspect_ratiocss.default.container,
            style: containerStyles,
            children: (0, _jsxruntime.jsx)("div", {
                className: _aspect_ratiocss.default.content,
                children: children
            })
        });
    }
    const width = (0, _metrics.resolveUnitOrNumberSize)(widthProp);
    const height = (0, _metrics.resolveUnitOrNumberSize)(heightProp);
    if (width != null) return (0, _jsxruntime.jsx)("div", {
        style: {
            width,
            height: width / ratio,
            flexShrink: 0
        },
        children: children
    });
    return (0, _jsxruntime.jsx)("div", {
        style: {
            height,
            width: height * ratio,
            flexShrink: 0
        },
        children: children
    });
};
