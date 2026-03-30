import { jsx as _jsx } from "react/jsx-runtime";
import '../../../../base/platform_quirks/disable_dragging';
import { ImageComponent, ImagePlaceholder } from './image';
import { Thumbnail } from './thumbnail';
export const ImageThumbnail = ({ aspectRatio, border, borderRadius, width, height, ...imageProps })=>{
    return _jsx(Thumbnail, {
        aspectRatio: aspectRatio,
        borderRadius: borderRadius,
        border: border,
        width: width,
        height: height,
        children: _jsx(ImageComponent, {
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
export const ImageThumbnailPlaceholder = ({ src, index, width, height, aspectRatio, border = 'none', borderRadius = 'none', shape, disableAnimations })=>{
    return _jsx(Thumbnail, {
        border: border,
        borderRadius: borderRadius,
        aspectRatio: aspectRatio,
        width: width,
        height: height,
        children: _jsx(ImagePlaceholder, {
            src: src,
            index: index,
            shape: shape,
            disableAnimations: disableAnimations
        })
    });
};
