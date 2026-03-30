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
    get DisplayPlaceholder () {
        return DisplayPlaceholder;
    },
    get TextPlaceholder () {
        return TextPlaceholder;
    },
    get TitlePlaceholder () {
        return TitlePlaceholder;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../base/preconditions');
const _react = _interop_require_wildcard(require("react"));
const _placeholder = require('../../../placeholder/placeholder');
const _placeholdercss = require("./placeholder.css");
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
const TextPlaceholder = _react.memo((props)=>(0, _jsxruntime.jsx)(TextPlaceholderComponent, {
        ...props,
        variant: "body"
    }));
const TitlePlaceholder = _react.memo((props)=>(0, _jsxruntime.jsx)(TextPlaceholderComponent, {
        ...props,
        variant: "title"
    }));
const DisplayPlaceholder = _react.memo((props)=>(0, _jsxruntime.jsx)(TextPlaceholderComponent, {
        ...props,
        variant: "display"
    }));
function TextPlaceholderComponent({ size = 'medium', variant, index, disableAnimations }) {
    const containerClassName = (0, _placeholdercss.getStyle)(`${variant}${getSizeClassName(size)}`);
    return (0, _jsxruntime.jsx)("div", {
        className: containerClassName,
        children: (0, _jsxruntime.jsx)(_placeholder.Placeholder, {
            shape: "textRectangle",
            index: index,
            disableAnimations: disableAnimations
        })
    });
}
function getSizeClassName(size) {
    switch(size){
        case 'xxlarge':
            return 'XxLarge';
        case 'xlarge':
            return 'XLarge';
        case 'large':
            return 'Large';
        case 'medium':
            return 'Medium';
        case 'small':
            return 'Small';
        case 'xsmall':
            return 'XSmall';
        case 'xxsmall':
            return 'XxSmall';
        default:
            throw new _preconditions.UnreachableError(size);
    }
}
