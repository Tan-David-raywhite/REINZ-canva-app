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
    get Container () {
        return Container;
    },
    get heights () {
        return heights;
    },
    get widths () {
        return widths;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _callback_ref = require('../../../../../base/react/callback_ref');
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _common_props = require('../../../box/common_props/common_props');
const _containercss = _interop_require_wildcard(require("./container.css"));
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
const widths = [
    'medium',
    'large'
];
const heights = [
    'full',
    'unset'
];
function Container({ children, width, height, tagName: TagName = 'div', ref, ...rest }) {
    return (0, _jsxruntime.jsx)(TagName, {
        className: (0, _classnames.default)(_containercss.default.container, (0, _containercss.getStyle)(width), {
            [_containercss.default.fullHeight]: height === 'full'
        }),
        ref: (0, _callback_ref.toCallbackRef)(ref),
        ...(0, _common_props.commonPropsToDOMProps)(rest),
        children: children
    });
}
