"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Thumbnail", {
    enumerable: true,
    get: function() {
        return Thumbnail;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _metrics = require('../../metrics/metrics');
const _dimension = require("./dimension");
const _thumbnailcss = _interop_require_default(require("./thumbnail.css"));
const _thumbnail_container = require("./thumbnail_container");
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
const Thumbnail = ({ width, height, aspectRatio, border = 'low', borderRadius = 'elementSmall', children, innerContainerClassName })=>{
    const thumbnailContainerContext = _react.useContext(_thumbnail_container.ThumbnailContainerContext);
    const thumbnailRatio = (0, _thumbnail_container.resolveAspectRatio)({
        width,
        height,
        aspectRatio
    });
    const { aspectRatio: containerRatio, padding, fit } = thumbnailContainerContext || {};
    const needDimensions = thumbnailRatio != null && containerRatio != null;
    if (!needDimensions && border === 'none' && borderRadius === 'none' && innerContainerClassName == null)
    return (0, _jsxruntime.jsx)(_thumbnail_container.SizingContainer, {
        height: height,
        width: width,
        aspectRatio: thumbnailRatio,
        children: children
    });
    const resolvedPadding = padding === 'none' ? 0 : (0, _metrics.resolveUnitOrNumberSize)(padding);
    const dimensionStyles = needDimensions ? (0, _dimension.getDimensions)(fit, containerRatio, thumbnailRatio, resolvedPadding) : undefined;
    return (0, _jsxruntime.jsx)(_thumbnail_container.SizingContainer, {
        height: height,
        width: width,
        aspectRatio: needDimensions ? undefined : thumbnailRatio,
        children: (0, _jsxruntime.jsx)("div", {
            className: (0, _classnames.default)(_thumbnailcss.default.mediaWrapper, innerContainerClassName, {
                [_thumbnailcss.default.elementSmallBorderRadius]: borderRadius === 'elementSmall',
                [_thumbnailcss.default.elementBorderRadius]: borderRadius === 'element',
                [_thumbnailcss.default.elementRelaxedBorderRadius]: borderRadius === 'elementRelaxed',
                [_thumbnailcss.default.elementSoftestBorderRadius]: borderRadius === 'elementSoftest',
                [_thumbnailcss.default.elementRoundBorderRadius]: borderRadius === 'elementRound',
                [_thumbnailcss.default.border]: border !== 'none',
                [_thumbnailcss.default.lowBorder]: border === 'low'
            }),
            style: dimensionStyles,
            children: children
        })
    });
};
