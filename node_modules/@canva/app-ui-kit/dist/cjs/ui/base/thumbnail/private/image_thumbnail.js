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
    get ImageThumbnail () {
        return ImageThumbnail;
    },
    get ImageThumbnailPlaceholder () {
        return ImageThumbnailPlaceholder;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require('../../../../base/platform_quirks/disable_dragging');
const _image = require("./image");
const _thumbnail = require("./thumbnail");
const ImageThumbnail = ({ aspectRatio, border, borderRadius, width, height, ...imageProps })=>{
    return (0, _jsxruntime.jsx)(_thumbnail.Thumbnail, {
        aspectRatio: aspectRatio,
        borderRadius: borderRadius,
        border: border,
        width: width,
        height: height,
        children: (0, _jsxruntime.jsx)(_image.ImageComponent, {
            objectFit: "cover",
            id: imageProps.id,
            crossOrigin: imageProps.crossOrigin,
            elementTiming: imageProps.elementTiming,
            src: imageProps.src,
            alt: imageProps.alt || '',
            className: imageProps.className,
            style: imageProps.style,
            loadImage: imageProps.loadImage,
            loadingState: imageProps.loadingState,
            onImageLoad: imageProps.onImageLoad,
            placeholder: imageProps.placeholder,
            fallback: imageProps.fallback,
            renderImage: imageProps.renderImage
        })
    });
};
const ImageThumbnailPlaceholder = ({ src, index, width, height, aspectRatio, border = 'none', borderRadius = 'none', shape, disableAnimations })=>{
    return (0, _jsxruntime.jsx)(_thumbnail.Thumbnail, {
        border: border,
        borderRadius: borderRadius,
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        children: (0, _jsxruntime.jsx)(_image.ImagePlaceholder, {
            src: src,
            index: index,
            shape: shape,
            disableAnimations: disableAnimations
        })
    });
};
