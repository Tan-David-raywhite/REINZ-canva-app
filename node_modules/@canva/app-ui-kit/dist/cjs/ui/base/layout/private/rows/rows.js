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
    get Rows () {
        return Rows;
    },
    get aligns () {
        return aligns;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _callback_ref = require('../../../../../base/react/callback_ref');
require("react");
const _common_props = require('../../../box/common_props/common_props');
const _metrics = require('../../../metrics/metrics');
const _responsive = require('../../../responsive/responsive');
const _rowscss = _interop_require_wildcard(require("./rows.css"));
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
const aligns = [
    'start',
    'center',
    'end',
    'stretch'
];
const spacingPropertyMap = {
    default: _rowscss.customProperties.spacing,
    smallUp: _rowscss.customProperties.smallUpSpacing,
    mediumUp: _rowscss.customProperties.mediumUpSpacing,
    largeUp: _rowscss.customProperties.largeUpSpacing,
    xLargeUp: _rowscss.customProperties.xLargeUpSpacing
};
const alignPropertyMap = {
    default: _rowscss.customProperties.align,
    smallUp: _rowscss.customProperties.smallUpAlign,
    mediumUp: _rowscss.customProperties.mediumUpAlign,
    largeUp: _rowscss.customProperties.largeUpAlign,
    xLargeUp: _rowscss.customProperties.xLargeUpAlign
};
function Rows({ children, spacing, align, tagName: TagName = 'div', ref, ...rest }) {
    return ((0, _jsxruntime.jsx)(TagName, {
                className: _rowscss.default.rows,
                style: {
                    ...(spacing && (0, _responsive.generateStyle)(spacingPropertyMap, spacing, _metrics.getSpaceValue)),
                    ...(align && (0, _responsive.generateStyle)(alignPropertyMap, align))
                },
                ref: (0, _callback_ref.toCallbackRef)(ref),
                ...(0, _common_props.commonPropsToDOMProps)(rest),
                children: children
            }));
}
