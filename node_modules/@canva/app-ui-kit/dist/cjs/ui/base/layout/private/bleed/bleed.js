"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Bleed", {
    enumerable: true,
    get: function() {
        return Bleed;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _callback_ref = require('../../../../../base/react/callback_ref');
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _common_props = require('../../../box/common_props/common_props');
const _metrics = require('../../../metrics/metrics');
const _responsive = require('../../../responsive/responsive');
const _bleedcss = _interop_require_wildcard(require("./bleed.css"));
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
function Bleed({ all, x, y, top, bottom, start, end, tagName: TagName = 'div', children, ref, ...rest }) {
    const preventMarginCollapse = all || y || top || bottom;
    const content = (0, _jsxruntime.jsx)(TagName, {
        className: (0, _classnames.default)(_bleedcss.default.hasBleed, {
            [_bleedcss.default.block]: TagName === 'span'
        }),
        style: {
            ...(all && (0, _responsive.generateStyle)(allPropertyMap, all, _metrics.getSpaceValue)),
            ...(x && (0, _responsive.generateStyle)(xPropertyMap, x, _metrics.getSpaceValue)),
            ...(y && (0, _responsive.generateStyle)(yPropertyMap, y, _metrics.getSpaceValue)),
            ...(top && (0, _responsive.generateStyle)(topPropertyMap, top, _metrics.getSpaceValue)),
            ...(bottom && (0, _responsive.generateStyle)(bottomPropertyMap, bottom, _metrics.getSpaceValue)),
            ...(start && (0, _responsive.generateStyle)(startPropertyMap, start, _metrics.getSpaceValue)),
            ...(end && (0, _responsive.generateStyle)(endPropertyMap, end, _metrics.getSpaceValue))
        },
        ...(0, _common_props.commonPropsToDOMProps)(rest),
        ref: preventMarginCollapse ? undefined : (0, _callback_ref.toCallbackRef)(ref),
        children: children
    });
    return preventMarginCollapse ? (0, _jsxruntime.jsx)(TagName, {
        className: _bleedcss.default.noCollapse,
        ref: (0, _callback_ref.toCallbackRef)(ref),
        children: content
    }) : content;
}
const allPropertyMap = {
    default: _bleedcss.customProperties.bleed,
    smallUp: _bleedcss.customProperties.smallUpBleed,
    mediumUp: _bleedcss.customProperties.mediumUpBleed,
    largeUp: _bleedcss.customProperties.largeUpBleed,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleed
};
const xPropertyMap = {
    default: _bleedcss.customProperties.bleedX,
    smallUp: _bleedcss.customProperties.smallUpBleedX,
    mediumUp: _bleedcss.customProperties.mediumUpBleedX,
    largeUp: _bleedcss.customProperties.largeUpBleedX,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedX
};
const yPropertyMap = {
    default: _bleedcss.customProperties.bleedY,
    smallUp: _bleedcss.customProperties.smallUpBleedY,
    mediumUp: _bleedcss.customProperties.mediumUpBleedY,
    largeUp: _bleedcss.customProperties.largeUpBleedY,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedY
};
const topPropertyMap = {
    default: _bleedcss.customProperties.bleedTop,
    smallUp: _bleedcss.customProperties.smallUpBleedTop,
    mediumUp: _bleedcss.customProperties.mediumUpBleedTop,
    largeUp: _bleedcss.customProperties.largeUpBleedTop,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedTop
};
const bottomPropertyMap = {
    default: _bleedcss.customProperties.bleedBottom,
    smallUp: _bleedcss.customProperties.smallUpBleedBottom,
    mediumUp: _bleedcss.customProperties.mediumUpBleedBottom,
    largeUp: _bleedcss.customProperties.largeUpBleedBottom,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedBottom
};
const startPropertyMap = {
    default: _bleedcss.customProperties.bleedStart,
    smallUp: _bleedcss.customProperties.smallUpBleedStart,
    mediumUp: _bleedcss.customProperties.mediumUpBleedStart,
    largeUp: _bleedcss.customProperties.largeUpBleedStart,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedStart
};
const endPropertyMap = {
    default: _bleedcss.customProperties.bleedEnd,
    smallUp: _bleedcss.customProperties.smallUpBleedEnd,
    mediumUp: _bleedcss.customProperties.mediumUpBleedEnd,
    largeUp: _bleedcss.customProperties.largeUpBleedEnd,
    xLargeUp: _bleedcss.customProperties.xLargeUpBleedEnd
};
