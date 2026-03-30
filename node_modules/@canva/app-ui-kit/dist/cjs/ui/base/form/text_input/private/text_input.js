"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TextInput", {
    enumerable: true,
    get: function() {
        return TextInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _base_input = require('../../base_input/base_input');
const _input_decorators = require('../../input_decorators/input_decorators');
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function TextInput(props) {
    const { type = 'text', clearable = 'never', end } = props;
    const endContent = getEndContent(end, clearable !== 'never');
    return (0, _jsxruntime.jsx)(_base_input.BaseInput, {
        ...props,
        type: type,
        end: endContent
    });
}
function getEndContent(end, showClearable) {
    const endContent = typeof end === 'function' ? end() : end;
    if (!showClearable) return endContent;
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            (0, _jsxruntime.jsx)(_input_decorators.ClearDecorator, {
                showDivider: !!endContent
            }),
            _react.isValidElement(endContent) && endContent.type === _react.Fragment ? _react.Children.toArray(endContent.props.children) : endContent
        ]
    });
}
