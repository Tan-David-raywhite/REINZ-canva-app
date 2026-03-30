"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IconThumbnail", {
    enumerable: true,
    get: function() {
        return IconThumbnail;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _thumbnail = require("./thumbnail");
const _thumbnail_container = require("./thumbnail_container");
function IconThumbnail({ tone = 'secondary', Icon, size, background = 'secondary', border = 'low', padding = 'none', borderRadius = 'elementSmall', aspectRatio, width, height }) {
    return (0, _jsxruntime.jsx)(_thumbnail.Thumbnail, {
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        children: (0, _jsxruntime.jsx)(_thumbnail_container.ThumbnailContainer, {
            background: background,
            padding: padding,
            children: (0, _jsxruntime.jsx)(Icon, {
                tone: tone,
                size: size || 'medium'
            })
        })
    });
}
