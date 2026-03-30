"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoadingIndicator", {
    enumerable: true,
    get: function() {
        return LoadingIndicator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _icon = require('../../icons/animated_spinner/icon');
const _loading_indicatorcss = _interop_require_default(require("./loading_indicator.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const LoadingIndicator = ({ size = 'medium' })=>(0, _jsxruntime.jsx)("span", {
        className: (0, _classnames.default)(_loading_indicatorcss.default.indicator),
        children: (0, _jsxruntime.jsx)(_icon.AnimatedSpinnerIcon, {
            size: size
        })
    });
