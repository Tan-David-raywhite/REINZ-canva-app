"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EmbedCard", {
    enumerable: true,
    get: function() {
        return EmbedCard;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _card = require('../../../../../../base/card/card');
const _icon = require('../../../../../../base/icons/animated_spinner/icon');
const _box = require("../../box/box");
const _draggable = require("../draggable/draggable");
const _embedcss = _interop_require_default(require("./embed.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const EmbedCard = (props)=>(0, _jsxruntime.jsx)(_draggable.Draggable, {
        ...props,
        children: (conf)=>(0, _jsxruntime.jsx)(InternalEmbedCard, {
                ...props,
                ...conf
            })
    });
const InternalEmbedCard = ({ ariaLabel, title, description, thumbnailUrl, onDragStart, onDragEnd, onClick, thumbnailHeight, thumbnailAspectRatio, bottomEnd, bottomEndVisibility, selectable, selected, disabled, loading })=>{
    return (0, _jsxruntime.jsx)(_card.Card, {
        buttonAriaLabel: ariaLabel,
        title: title,
        description: description,
        onDragStart: onDragStart,
        draggable: onDragStart !== undefined,
        onDragEnd: onDragEnd,
        onClick: onClick,
        hoverEffect: "none",
        decorators: (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
            children: bottomEnd && (0, _jsxruntime.jsx)(_card.CardDecorator, {
                location: "bottom-end",
                visibility: bottomEndVisibility,
                isInteractive: true,
                children: bottomEnd
            })
        }),
        selectableMode: selectable ? 'primary' : 'none',
        selected: selected,
        disabled: disabled,
        thumbnail: (0, _jsxruntime.jsxs)(_card.CardThumbnailContainer, {
            background: "none",
            padding: "none",
            borderRadius: !title && !description ? 'none' : 'element',
            children: [
                (0, _jsxruntime.jsx)(_card.CardImageThumbnail, {
                    src: thumbnailUrl,
                    border: "none",
                    borderRadius: !title && !description ? 'none' : 'element',
                    height: thumbnailHeight,
                    className: (0, _classnames.default)({
                        [_embedcss.default.thumbnailAutoWidth]: !thumbnailAspectRatio && thumbnailHeight
                    })
                }),
                loading && (0, _jsxruntime.jsx)(_box.Box, {
                    borderRadius: !title && !description ? 'none' : 'large',
                    className: _embedcss.default.loading,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "full",
                    height: "full",
                    children: (0, _jsxruntime.jsx)(_icon.AnimatedSpinnerIcon, {
                        size: "medium",
                        className: _embedcss.default.spinner
                    })
                })
            ]
        }),
        layout: "vertical",
        hoverBoundary: "thumbnail"
    });
};
