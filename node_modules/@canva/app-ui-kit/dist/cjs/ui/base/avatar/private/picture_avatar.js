"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PictureAvatar", {
    enumerable: true,
    get: function() {
        return PictureAvatar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _picture_avatarcss = _interop_require_wildcard(require("./picture_avatar.css"));
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
const PictureAvatar = ({ borderColor, backgroundColor, photoSrc, ariaLabel, className, style, role, ...tooltipTriggerProps })=>{
    return (0, _jsxruntime.jsx)("span", {
        className: (0, _classnames.default)(className, {
            [_picture_avatarcss.default.background]: backgroundColor,
            [_picture_avatarcss.default.border]: borderColor,
            [_picture_avatarcss.default.defaultBorder]: !borderColor
        }),
        style: {
            backgroundImage: `url(${photoSrc})`,
            [_picture_avatarcss.customProperties.backgroundColor]: backgroundColor,
            [_picture_avatarcss.customProperties.borderColor]: borderColor,
            ...style
        },
        role: role,
        "aria-label": role === 'img' ? ariaLabel : undefined,
        ...tooltipTriggerProps
    });
};
