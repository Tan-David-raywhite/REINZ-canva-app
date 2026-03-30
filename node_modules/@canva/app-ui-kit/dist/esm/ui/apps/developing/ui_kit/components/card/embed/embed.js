import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { Card, CardDecorator, CardImageThumbnail, CardThumbnailContainer } from '../../../../../../base/card/card';
import { AnimatedSpinnerIcon } from '../../../../../../base/icons/animated_spinner/icon';
import { Box } from '../../box/box';
import { Draggable } from '../draggable/draggable';
import styles from './embed.css';
export const EmbedCard = (props)=>_jsx(Draggable, {
        ...props,
        children: (conf)=>_jsx(InternalEmbedCard, {
                ...props,
                ...conf
            })
    });
const InternalEmbedCard = ({ ariaLabel, title, description, thumbnailUrl, onDragStart, onDragEnd, onClick, thumbnailHeight, thumbnailAspectRatio, bottomEnd, bottomEndVisibility, selectable, selected, disabled, loading })=>{
    return _jsx(Card, {
        buttonAriaLabel: ariaLabel,
        title: title,
        description: description,
        onDragStart: onDragStart,
        draggable: onDragStart !== undefined,
        onDragEnd: onDragEnd,
        onClick: onClick,
        hoverEffect: "none",
        decorators: _jsx(_Fragment, {
            children: bottomEnd && _jsx(CardDecorator, {
                location: "bottom-end",
                visibility: bottomEndVisibility,
                isInteractive: true,
                children: bottomEnd
            })
        }),
        selectableMode: selectable ? 'primary' : 'none',
        selected: selected,
        disabled: disabled,
        thumbnail: _jsxs(CardThumbnailContainer, {
            background: "none",
            padding: "none",
            borderRadius: !title && !description ? 'none' : 'element',
            children: [
                _jsx(CardImageThumbnail, {
                    src: thumbnailUrl,
                    border: "none",
                    borderRadius: !title && !description ? 'none' : 'element',
                    height: thumbnailHeight,
                    className: classNames({
                        [styles.thumbnailAutoWidth]: !thumbnailAspectRatio && thumbnailHeight
                    })
                }),
                loading && _jsx(Box, {
                    borderRadius: !title && !description ? 'none' : 'large',
                    className: styles.loading,
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "full",
                    height: "full",
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
