import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { Box } from '../../../../../../base/box/box';
import { Card, CardDecorator, CardImageThumbnail, CardThumbnailContainer } from '../../../../../../base/card/card';
import { AnimatedSpinnerIcon } from '../../../../../../base/icons/animated_spinner/icon';
import { Draggable } from '../draggable/draggable';
import styles from './image.css';
export const ImageCard = (props)=>_jsx(Draggable, {
        ...props,
        children: (conf)=>_jsx(InternalImageCard, {
                ...props,
                ...conf
            })
    });
const InternalImageCard = ({ alt, ariaLabel, thumbnailUrl, onDragStart, onDragEnd, onClick, borderRadius = 'none', thumbnailHeight, bottomEnd, bottomEndVisibility, selectable, selected, disabled, loading, thumbnailAspectRatio, thumbnailPadding, thumbnailBackground, onImageLoad })=>{
    return _jsx(Card, {
        buttonAriaLabel: ariaLabel,
        onDragStart: onDragStart,
        draggable: onDragStart !== undefined,
        onDragEnd: onDragEnd,
        onClick: onClick,
        decorators: _jsx(_Fragment, {
            children: bottomEnd && _jsx(CardDecorator, {
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
        thumbnail: _jsxs(CardThumbnailContainer, {
            padding: !thumbnailPadding ? 'none' : thumbnailPadding,
            background: !thumbnailBackground ? 'none' : thumbnailBackground,
            borderRadius: borderRadius === 'standard' ? 'element' : 'none',
            children: [
                _jsx(CardImageThumbnail, {
                    src: thumbnailUrl,
                    alt: alt,
                    aspectRatio: thumbnailAspectRatio,
                    border: "none",
                    borderRadius: borderRadius === 'standard' ? 'element' : 'none',
                    height: thumbnailHeight,
                    onImageLoad: onImageLoad,
                    className: classNames({
                        [styles.thumbnailAutoWidth]: !thumbnailAspectRatio && thumbnailHeight
                    })
                }),
                loading && _jsx(Box, {
                    className: styles.loading,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "full",
                    height: "full",
                    borderRadius: borderRadius === 'standard' ? 'legacyLarge' : 'none',
                    children: _jsx(AnimatedSpinnerIcon, {
                        size: "medium",
                        className: styles.spinner
                    })
                })
            ]
        }),
        layout: "vertical",
        hoverBoundary: "thumbnail"
    });
};
