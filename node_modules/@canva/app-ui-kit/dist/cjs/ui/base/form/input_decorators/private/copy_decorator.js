"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CopyDecorator", {
    enumerable: true,
    get: function() {
        return CopyDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _button = require('../../../button/button');
const _clipboard = require('../../../clipboard/clipboard');
const _base_input = require('../../base_input/base_input');
const _input_decoratorsmessages = require("./input_decorators.messages");
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
const CopyDecorator = _react.memo(
    function CopyDecorator({ label = _input_decoratorsmessages.InputDecoratorsMessages.copy(), copiedLabel = _input_decoratorsmessages.InputDecoratorsMessages.copied(), onCopy, tone = 'primary', disabled = false }) {
        const value = (0, _base_input.useInputValue)();
        const [copied, setCopied] = _react.useState(false);
        const copyToClipboard = _react.useMemo(()=>(0, _clipboard.createClipboard)(), []);
        const onClick = _react.useCallback(()=>{
            copyToClipboard(value);
            onCopy?.();
            setCopied(true);
        }, [
            copyToClipboard,
            onCopy,
            value
        ]);
        const resetCopied = _react.useCallback(()=>setCopied(false), []);
        return (0, _jsxruntime.jsx)(_button.Button, {
            size: "small",
            variant: tone,
            iconSize: "medium",
            onClick: onClick,
            onBlur: resetCopied,
            disabled: disabled,
            children: copied ? copiedLabel : label
        });
    }
);
