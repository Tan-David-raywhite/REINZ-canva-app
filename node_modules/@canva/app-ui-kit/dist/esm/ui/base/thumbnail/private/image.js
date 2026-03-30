import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import '../../../../base/platform_quirks/disable_dragging';
import classNames from 'classnames';
import * as React from 'react';
import { AlertTriangleIcon } from '../../icons/alert_triangle/icon';
import { Placeholder, PlaceholderFader } from '../../placeholder/placeholder';
import { IconThumbnail } from './icon_thumbnail';
import styles from './image.css';
export const ImageComponent = ({ loadingState, src, loadImage = simpleLoadImage, onImageLoad, renderImage = StaticImage, ...staticImageProps })=>{
    if (loadingState === 'none') return renderImage({
        src,
        ...staticImageProps
    });
    if (loadingState == null && src != null) return _jsx(LoadImage, {
        src: src,
        loadImage: loadImage,
        callback: onImageLoad,
        children: (_loadingState)=>_jsx(LoadableImage, {
                loadingState: _loadingState,
                src: src,
                renderImage: renderImage,
                ...staticImageProps
            })
    });
    return _jsx(LoadableImage, {
        loadingState: loadingState,
        src: src,
        renderImage: renderImage,
        ...staticImageProps
    });
};
const LoadableImage = ({ src, loadingState, placeholder = _jsx(ImagePlaceholder, {
    src: src
}), fallback = _jsx(IconThumbnail, {
    Icon: AlertTriangleIcon,
    border: "none"
}), renderImage = StaticImage, ...staticImageProps })=>{
    return _jsx(PlaceholderFader, {
        loading: loadingState === 'loading',
        expand: true,
        placeholder: placeholder,
        content: loadingState === 'error' ? fallback : renderImage({
            src,
            ...staticImageProps
        })
    });
};
export const StaticImage = ({ id, className, alt, crossOrigin, src, elementTiming, style, objectFit })=>{
    return _jsx("img", {
        id: id,
        className: classNames(className, styles.image, {
            [styles.objectFitContain]: objectFit === 'contain',
            [styles.objectFitCover]: objectFit === 'cover'
        }),
        crossOrigin: crossOrigin,
        src: src,
        alt: alt,
        draggable: false,
        elementtiming: elementTiming,
        style: style
    });
};
export const ImagePlaceholder = ({ src, index, shape = 'sharpRectangle', disableAnimations })=>{
    const placeholder = _jsx(Placeholder, {
        shape: shape,
        index: index,
        disableAnimations: disableAnimations
    });
    if (src == null) return placeholder;
    return _jsxs(_Fragment, {
        children: [
            placeholder,
            _jsx("noscript", {
                children: _jsx("img", {
                    src: src,
                    className: styles.hideForNoscript,
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
    const [loadingState, setLoadingState] = React.useState('loading');
    React.useEffect(()=>{
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
