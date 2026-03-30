import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Thumbnail } from './thumbnail';
import { ThumbnailContainer } from './thumbnail_container';
export function IconThumbnail(
    { tone = 'secondary', Icon, size, background = 'secondary', border = 'low', padding = 'none', borderRadius = 'elementSmall', aspectRatio, width, height }
) {
    return _jsx(Thumbnail, {
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        border: border,
        borderRadius: borderRadius,
        children: _jsx(ThumbnailContainer, {
            background: background,
            padding: padding,
            children: _jsx(Icon, {
                tone: tone,
                size: size || 'medium'
            })
        })
    });
}
