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
    get PixelDensityResponsiveImage () {
        return PixelDensityResponsiveImage;
    },
    get ViewportResponsiveImage () {
        return ViewportResponsiveImage;
    },
    get ViewportResponsivePicture () {
        return ViewportResponsivePicture;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _metrics = require('../metrics/metrics');
const _metricscss = _interop_require_default(require('../metrics/metrics.css'));
const _responsive_imagecss = _interop_require_default(require("./responsive_image.css"));
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
const breakpointsOrder = {
    [_metrics.Breakpoint.DEFAULT]: 0,
    [_metrics.Breakpoint.SMALL]: 1,
    [_metrics.Breakpoint.MEDIUM]: 2,
    [_metrics.Breakpoint.LARGE]: 3,
    [_metrics.Breakpoint.XLARGE]: 4
};
function PixelDensityResponsiveImage(props) {
    const { alt, sources, ...otherImgProps } = props;
    const imageSources = _react.useMemo(()=>sources.map((s)=>({
                size: s.pixelDensity,
                unit: 'x',
                src: s.src
            })), [
        sources
    ]);
    const srcSet = _react.useMemo(()=>toSrcSet(imageSources), [
        imageSources
    ]);
    const src = _react.useMemo(()=>chooseFallbackSource(imageSources, otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    return (0, _jsxruntime.jsx)("img", {
        ...otherImgProps,
        alt: alt,
        srcSet: srcSet,
        src: src
    });
}
function ViewportResponsiveImage(props) {
    const { alt, sources, sizes, ...otherImgProps } = props;
    const imageSources = _react.useMemo(()=>sources.map((s)=>({
                src: s.src,
                size: s.intrinsicWidth,
                unit: 'w'
            })), [
        sources
    ]);
    const srcSet = _react.useMemo(()=>toSrcSet(imageSources), [
        imageSources
    ]);
    const src = _react.useMemo(()=>chooseFallbackSource(imageSources, otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    const sizesAttr = _react.useMemo(()=>toSizes(sizes), [
        sizes
    ]);
    return (0, _jsxruntime.jsx)("img", {
        ...otherImgProps,
        alt: alt,
        srcSet: srcSet,
        sizes: sizesAttr,
        src: src
    });
}
function ViewportResponsivePicture(props) {
    const { alt, sources, className, ref, ...otherImgProps } = props;
    const imageSources = _react.useMemo(()=>sources.sort((a, b)=>{
            if (a.breakpoint && b.breakpoint)
                return breakpointsOrder[b.breakpoint] - breakpointsOrder[a.breakpoint];
            if (!a.breakpoint) return 1;
            if (!b.breakpoint) return -1;
            return 0;
        }).map((source)=>{
            const { breakpoint, images } = source;
            const imageSource = images.map((s)=>({
                    src: s.src,
                    size: s.intrinsicWidth,
                    unit: 'w'
                }));
            const srcSet = toSrcSet(imageSource);
            const media = toMediaBreakpoint(breakpoint);
            return {
                media,
                imageSource,
                srcSet
            };
        }), [
        sources
    ]);
    const fallbackSrc = _react.useMemo(()=>chooseFallbackSource(imageSources.flatMap((s)=>s.imageSource), otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    return (0, _jsxruntime.jsxs)("picture", {
        ref: ref,
        className: _responsive_imagecss.default.responsiveImage,
        children: [
            imageSources.map(({ media, srcSet })=>(0, _jsxruntime.jsx)("source", {
                    media: media,
                    srcSet: srcSet
                }, srcSet)),
            (0, _jsxruntime.jsx)("img", {
                ...otherImgProps,
                src: fallbackSrc,
                alt: alt,
                className: className
            })
        ]
    });
}
function toSrcSet(sources) {
    if (sources.length > 0) return sources.map((source)=>`${source.src} ${source.size}${source.unit}`).join(', ');
}
function toSizes(sizes) {
    if (sizes.length === 0) return;
    const breakpoints = sizes.map((size)=>size.breakpoint);
    breakpoints.sort();
    const viewportWidths = sizes.reduce((map, size)=>{
        const width = `${size.width.value}${size.width.type}`;
        map.set(size.breakpoint, width);
        return map;
    }, new Map());
    return breakpoints.map((breakpoint)=>breakpoint != null ? `(max-width: ${breakpoint.value}${breakpoint.type}) ${viewportWidths.get(breakpoint)}` : `${viewportWidths.get(breakpoint)}`).join(', ');
}
function chooseFallbackSource(sources, explicitSrc) {
    if (explicitSrc != null) return explicitSrc;
    return toLargestSource(sources);
}
function toLargestSource(sources) {
    const largestSource = sources.reduce((max, source)=>max == null || source.size > max.size ? source : max, undefined);
    return largestSource != null ? largestSource.src : undefined;
}
function toMediaBreakpoint(breakpoint) {
    switch(breakpoint){
        case _metrics.Breakpoint.SMALL:
            return _metricscss.default.smallUp;
        case _metrics.Breakpoint.MEDIUM:
            return _metricscss.default.mediumUp;
        case _metrics.Breakpoint.LARGE:
            return _metricscss.default.largeUp;
        case _metrics.Breakpoint.XLARGE:
            return _metricscss.default.xLargeUp;
        default:
            return _metricscss.default.belowSmall;
    }
}
