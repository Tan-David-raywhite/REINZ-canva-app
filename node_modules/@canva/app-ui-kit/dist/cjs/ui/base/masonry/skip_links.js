"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SkipLinks", {
    enumerable: true,
    get: function() {
        return SkipLinks;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _skip_link = require('../a11y/skip_link/skip_link');
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
const SkipLinks = _react.memo(function SkipLinks({ messages, children }) {
    const idStart = _react.useId();
    const idEnd = _react.useId();
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            (0, _jsxruntime.jsx)("span", {
                id: idStart
            }),
            (0, _jsxruntime.jsx)(_skip_link.SkipLink, {
                to: idEnd,
                children: messages.skipToEnd
            }),
            children,
            (0, _jsxruntime.jsx)(_skip_link.SkipLink, {
                to: idStart,
                children: messages.skipToStart
            }),
            (0, _jsxruntime.jsx)("span", {
                id: idEnd
            })
        ]
    });
});
