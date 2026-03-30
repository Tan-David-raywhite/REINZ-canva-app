"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Spacer", {
    enumerable: true,
    get: function() {
        return Spacer;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _metrics = require('../../../metrics/metrics');
const _responsive = require('../../../responsive/responsive');
const _spacercss = _interop_require_wildcard(require("./spacer.css"));
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
const sizePropertyMap = {
    default: _spacercss.customProperties.size,
    smallUp: _spacercss.customProperties.smallUpSize,
    mediumUp: _spacercss.customProperties.mediumUpSize,
    largeUp: _spacercss.customProperties.largeUpSize,
    xLargeUp: _spacercss.customProperties.xLargeUpSize
};
const Spacer = ({ size, direction = 'both' })=>{
    return (0, _jsxruntime.jsx)("span", {
        className: (0, _classnames.default)(_spacercss.default.spacer, {
            [_spacercss.default.horizontal]: direction === 'horizontal',
            [_spacercss.default.vertical]: direction === 'vertical'
        }),
        style: (0, _responsive.generateStyle)(sizePropertyMap, size, _metrics.getSpaceValue),
        "aria-hidden": true
    });
};
