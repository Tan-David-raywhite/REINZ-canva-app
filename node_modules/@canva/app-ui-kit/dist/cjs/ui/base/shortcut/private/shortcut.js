"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Shortcut", {
    enumerable: true,
    get: function() {
        return Shortcut;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _key_combinations = require('../../key_combinations/key_combinations');
const _provider = require('../../provider/provider');
const _shortcutcss = _interop_require_wildcard(require("./shortcut.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const Shortcut = _react.memo(
    ({ combination, platform, compact = false, size = 'medium', className })=>{
        const direction = (0, _provider.useDirection)();
        const keyClassName = (0, _classnames.default)(_shortcutcss.default.key, (0, _shortcutcss.getStyle)(size));
        if (compact) return (0, _jsxruntime.jsx)(Key, {
            className: (0, _classnames.default)(className, keyClassName),
            children: (0, _key_combinations.makeHumanReadableString)(combination, direction, platform)
        });
        const keyStrings = (0, _key_combinations.makeHumanReadableArray)(combination, direction, platform);
        return keyStrings.length === 1 ? (0, _jsxruntime.jsx)(Key, {
            className: (0, _classnames.default)(className, keyClassName),
            children: keyStrings[0]
        }) : (0, _jsxruntime.jsx)("kbd", {
            className: (0, _classnames.default)(className, _shortcutcss.default.keygroup),
            children: keyStrings.map((keyString)=>(0, _jsxruntime.jsx)(Key, {
                    className: keyClassName,
                    children: keyString
                }, keyString))
        });
    }
);
Shortcut.displayName = 'Shortcut';
const Key = ({ className, children })=>{
    return (0, _jsxruntime.jsx)("kbd", {
        className: (0, _classnames.default)(className, children.length === 1 && _shortcutcss.default.square),
        children: children
    });
};
