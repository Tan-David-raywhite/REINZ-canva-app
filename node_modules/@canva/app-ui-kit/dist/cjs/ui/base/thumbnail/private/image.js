"use strict";
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
    get ImageComponent () {
        return ImageComponent;
    },
    get ImagePlaceholder () {
        return ImagePlaceholder;
    },
    get StaticImage () {
        return StaticImage;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require('../../../../base/platform_quirks/disable_dragging');
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _icon = require('../../icons/alert_triangle/icon');
const _placeholder = require('../../placeholder/placeholder');
const _icon_thumbnail = require("./icon_thumbnail");
const _imagecss = _interop_require_default(require("./image.css"));
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
const ImageComponent = ({ loadingState, src, loadImage = simpleLoadImage, onImageLoad, renderImage = StaticImage, ...staticImageProps })=>{
    if (loadingState === 'none') return renderImage({
        src,
        ...staticImageProps
    });
    if (loadingState == null && src != null) return (0, _jsxruntime.jsx)(LoadImage, {
        src: src,
        loadImage: loadImage,
        callback: onImageLoad,
        children: (_loadingState)=>(0, _jsxruntime.jsx)(LoadableImage, {
                loadingState: _loadingState,
                src: src,
                renderImage: renderImage,
                ...staticImageProps
            })
    });
    return (0, _jsxruntime.jsx)(LoadableImage, {
        loadingState: loadingState,
        src: src,
        renderImage: renderImage,
        ...staticImageProps
    });
};
const LoadableImage = ({ src, loadingState, placeholder = (0, _jsxruntime.jsx)(ImagePlaceholder, {
    src: src
}), fallback = (0, _jsxruntime.jsx)(_icon_thumbnail.IconThumbnail, {
    Icon: _icon.AlertTriangleIcon,
    border: "none"
}), renderImage = StaticImage, ...staticImageProps })=>{
    return (0, _jsxruntime.jsx)(_placeholder.PlaceholderFader, {
        loading: loadingState === 'loading',
        expand: true,
        placeholder: placeholder,
        content: loadingState === 'error' ? fallback : renderImage({
            src,
            ...staticImageProps
        })
    });
};
const StaticImage = ({ id, className, alt, crossOrigin, src, elementTiming, style, objectFit })=>{
    return (0, _jsxruntime.jsx)("img", {
        id: id,
        className: (0, _classnames.default)(className, _imagecss.default.image, {
            [_imagecss.default.objectFitContain]: objectFit === 'contain',
            [_imagecss.default.objectFitCover]: objectFit === 'cover'
        }),
        crossOrigin: crossOrigin,
        src: src,
        alt: alt,
        draggable: false,
        elementtiming: elementTiming,
        style: style
    });
};
const ImagePlaceholder = ({ src, index, shape = 'sharpRectangle', disableAnimations })=>{
    const placeholder = (0, _jsxruntime.jsx)(_placeholder.Placeholder, {
        shape: shape,
        index: index,
        disableAnimations: disableAnimations
    });
    if (src == null) return placeholder;
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            placeholder,
            (0, _jsxruntime.jsx)("noscript", {
                children: (0, _jsxruntime.jsx)("img", {
                    src: src,
                    className: _imagecss.default.hideForNoscript,
                    draggable: false,
                    alt: ""
                })
            })
        ]
    });
};
function simpleLoadImage(src) {
    return new Promise((resolve, reject)=>{
        const img = new Image();
        img.src = src;
        img.onload = ()=>{
            resolve();
        };
        img.onerror = ()=>{
            reject();
        };
    });
}
const LoadImage = ({ src, callback, children, loadImage })=>{
    const [loadingState, setLoadingState] = _react.useState('loading');
    _react.useEffect(()=>{
        (async ()=>{
            callback && callback('loading');
            await loadImage(src).then(()=>{
                setLoadingState('loaded');
                callback && callback('loaded');
            }).catch(()=>{
                setLoadingState('error');
                callback && callback('error');
            });
        })();
    }, [
        src,
        callback,
        loadImage
    ]);
    return children(loadingState);
};
