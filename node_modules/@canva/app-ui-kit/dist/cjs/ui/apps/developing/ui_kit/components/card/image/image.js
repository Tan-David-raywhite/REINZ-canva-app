"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ImageCard", {
    enumerable: true,
    get: function() {
        return ImageCard;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _box = require('../../../../../../base/box/box');
const _card = require('../../../../../../base/card/card');
const _icon = require('../../../../../../base/icons/animated_spinner/icon');
const _draggable = require("../draggable/draggable");
const _imagecss = _interop_require_default(require("./image.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ImageCard = (props)=>(0, _jsxruntime.jsx)(_draggable.Draggable, {
        ...props,
        children: (conf)=>(0, _jsxruntime.jsx)(InternalImageCard, {
                ...props,
                ...conf
            })
    });
const InternalImageCard = ({ alt, ariaLabel, thumbnailUrl, onDragStart, onDragEnd, onClick, borderRadius = 'none', thumbnailHeight, bottomEnd, bottomEndVisibility, selectable, selected, disabled, loading, thumbnailAspectRatio, thumbnailPadding, thumbnailBackground, onImageLoad })=>{
    return (0, _jsxruntime.jsx)(_card.Card, {
        buttonAriaLabel: ariaLabel,
        onDragStart: onDragStart,
        draggable: onDragStart !== undefined,
        onDragEnd: onDragEnd,
        onClick: onClick,
        decorators: (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
            children: bottomEnd && (0, _jsxruntime.jsx)(_card.CardDecorator, {
                location: "bottom-end",
                visibility: bottomEndVisibility,
                isInteractive: true,
                children: bottomEnd
            })
        }),
        hoverEffect: "none",
        selectableMode: selectable ? 'primary' : 'none',
        selected: selected,
        disabled: disabled,
        thumbnail: (0, _jsxruntime.jsxs)(_card.CardThumbnailContainer, {
            padding: !thumbnailPadding ? 'none' : thumbnailPadding,
            background: !thumbnailBackground ? 'none' : thumbnailBackground,
            borderRadius: borderRadius === 'standard' ? 'element' : 'none',
            children: [
                (0, _jsxruntime.jsx)(_card.CardImageThumbnail, {
                    src: thumbnailUrl,
                    alt: alt,
                    aspectRatio: thumbnailAspectRatio,
                    border: "none",
                    borderRadius: borderRadius === 'standard' ? 'element' : 'none',
                    height: thumbnailHeight,
                    onImageLoad: onImageLoad,
                    className: (0, _classnames.default)({
                        [_imagecss.default.thumbnailAutoWidth]: !thumbnailAspectRatio && thumbnailHeight
                    })
                }),
                loading && (0, _jsxruntime.jsx)(_box.Box, {
                    className: _imagecss.default.loading,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "full",
                    height: "full",
                    borderRadius: borderRadius === 'standard' ? 'legacyLarge' : 'none',
                    children: (0, _jsxruntime.jsx)(_icon.AnimatedSpinnerIcon, {
                        size: "medium",
                        className: _imagecss.default.spinner
                    })
                })
            ]
        }),
        layout: "vertical",
        hoverBoundary: "thumbnail"
    });
};
