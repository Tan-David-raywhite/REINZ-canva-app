import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { resolveUnitOrNumberSize } from '../../metrics/metrics';
import { getDimensions } from './dimension';
import styles from './thumbnail.css';
import { resolveAspectRatio, SizingContainer, ThumbnailContainerContext } from './thumbnail_container';
export const Thumbnail = ({ width, height, aspectRatio, border = 'low', borderRadius = 'elementSmall', children, innerContainerClassName })=>{
    const thumbnailContainerContext = React.useContext(ThumbnailContainerContext);
    const thumbnailRatio = resolveAspectRatio({
        width,
        height,
        aspectRatio
    });
    const { aspectRatio: containerRatio, padding, fit } = thumbnailContainerContext || {};
    const needDimensions = thumbnailRatio != null && containerRatio != null;
    if (!needDimensions && border === 'none' && borderRadius === 'none' && innerContainerClassName == null)
    return _jsx(SizingContainer, {
        height: height,
        width: width,
        aspectRatio: thumbnailRatio,
        children: children
    });
    const resolvedPadding = padding === 'none' ? 0 : resolveUnitOrNumberSize(padding);
    const dimensionStyles = needDimensions ? getDimensions(fit, containerRatio, thumbnailRatio, resolvedPadding) : undefined;
    return _jsx(SizingContainer, {
        height: height,
        width: width,
        aspectRatio: needDimensions ? undefined : thumbnailRatio,
        children: _jsx("div", {
            className: classNames(styles.mediaWrapper, innerContainerClassName, {
                [styles.elementSmallBorderRadius]: borderRadius === 'elementSmall',
                [styles.elementBorderRadius]: borderRadius === 'element',
                [styles.elementRelaxedBorderRadius]: borderRadius === 'elementRelaxed',
                [styles.elementSoftestBorderRadius]: borderRadius === 'elementSoftest',
                [styles.elementRoundBorderRadius]: borderRadius === 'elementRound',
                [styles.border]: border !== 'none',
                [styles.lowBorder]: border === 'low'
            }),
            style: dimensionStyles,
            children: children
        })
    });
};
