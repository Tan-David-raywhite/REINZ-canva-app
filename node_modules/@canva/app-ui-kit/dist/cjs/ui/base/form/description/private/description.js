"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Description", {
    enumerable: true,
    get: function() {
        return Description;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _descriptioncss = _interop_require_wildcard(require("./description.css"));
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
const Description = ({ tone = 'neutral', children, id })=>{
    if (children == null) return null;
    const hasChildrenArray = Array.isArray(children);
    const className = (0, _classnames.default)(_descriptioncss.default.description, (0, _descriptioncss.getStyle)(tone), {
        [_descriptioncss.default.listItem]: hasChildrenArray
    });
    const role = tone === 'critical' ? 'alert' : undefined;
    if (hasChildrenArray) return (0, _jsxruntime.jsx)("div", {
        id: id,
        className: _descriptioncss.default.list,
        role: role,
        "aria-atomic": false,
        children: _react.Children.map(children, (child, i)=>(0, _jsxruntime.jsx)("p", {
                className: className,
                children: child
            }, i))
    });
    return (0, _jsxruntime.jsx)("p", {
        id: id,
        className: className,
        role: role,
        children: children
    });
};
