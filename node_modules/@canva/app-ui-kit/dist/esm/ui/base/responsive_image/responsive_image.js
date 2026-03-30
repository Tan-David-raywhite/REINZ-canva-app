import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import * as React from 'react';
import { Breakpoint } from '../metrics/metrics';
import metricsStyles from '../metrics/metrics.css';
import styles from './responsive_image.css';
const breakpointsOrder = {
    [Breakpoint.DEFAULT]: 0,
    [Breakpoint.SMALL]: 1,
    [Breakpoint.MEDIUM]: 2,
    [Breakpoint.LARGE]: 3,
    [Breakpoint.XLARGE]: 4
};
export function PixelDensityResponsiveImage(props) {
    const { alt, sources, ...otherImgProps } = props;
    const imageSources = React.useMemo(()=>sources.map((s)=>({
                size: s.pixelDensity,
                unit: 'x',
                src: s.src
            })), [
        sources
    ]);
    const srcSet = React.useMemo(()=>toSrcSet(imageSources), [
        imageSources
    ]);
    const src = React.useMemo(()=>chooseFallbackSource(imageSources, otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    return _jsx("img", {
        ...otherImgProps,
        alt: alt,
        srcSet: srcSet,
        src: src
    });
}
export function ViewportResponsiveImage(props) {
    const { alt, sources, sizes, ...otherImgProps } = props;
    const imageSources = React.useMemo(()=>sources.map((s)=>({
                src: s.src,
                size: s.intrinsicWidth,
                unit: 'w'
            })), [
        sources
    ]);
    const srcSet = React.useMemo(()=>toSrcSet(imageSources), [
        imageSources
    ]);
    const src = React.useMemo(()=>chooseFallbackSource(imageSources, otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    const sizesAttr = React.useMemo(()=>toSizes(sizes), [
        sizes
    ]);
    return _jsx("img", {
        ...otherImgProps,
        alt: alt,
        srcSet: srcSet,
        sizes: sizesAttr,
        src: src
    });
}
export function ViewportResponsivePicture(props) {
    const { alt, sources, className, ref, ...otherImgProps } = props;
    const imageSources = React.useMemo(()=>sources.sort((a, b)=>{
            if (a.breakpoint && b.breakpoint)
                return breakpointsOrder[b.breakpoint] - breakpointsOrder[a.breakpoint];
            if (!a.breakpoint) return 1;
            if (!b.breakpoint) return -1;
            return 0;
        }).map((source)=>{
            const { breakpoint, images } = source;
            const imageSource = images.map((s)=>({
                    src: s.src,
                    size: s.intrinsicWidth,
                    unit: 'w'
                }));
            const srcSet = toSrcSet(imageSource);
            const media = toMediaBreakpoint(breakpoint);
            return {
                media,
                imageSource,
                srcSet
            };
        }), [
        sources
    ]);
    const fallbackSrc = React.useMemo(()=>chooseFallbackSource(imageSources.flatMap((s)=>s.imageSource), otherImgProps.src), [
        otherImgProps.src,
        imageSources
    ]);
    return _jsxs("picture", {
        ref: ref,
        className: styles.responsiveImage,
        children: [
            imageSources.map(({ media, srcSet })=>_jsx("source", {
                    media: media,
                    srcSet: srcSet
                }, srcSet)),
            _jsx("img", {
                ...otherImgProps,
                src: fallbackSrc,
                alt: alt,
                className: className
            })
        ]
    });
}
function toSrcSet(sources) {
    if (sources.length > 0) return sources.map((source)=>`${source.src} ${source.size}${source.unit}`).join(', ');
}
function toSizes(sizes) {
    if (sizes.length === 0) return;
    const breakpoints = sizes.map((size)=>size.breakpoint);
    breakpoints.sort();
    const viewportWidths = sizes.reduce((map, size)=>{
        const width = `${size.width.value}${size.width.type}`;
        map.set(size.breakpoint, width);
        return map;
    }, new Map());
    return breakpoints.map((breakpoint)=>breakpoint != null ? `(max-width: ${breakpoint.value}${breakpoint.type}) ${viewportWidths.get(breakpoint)}` : `${viewportWidths.get(breakpoint)}`).join(', ');
}
function chooseFallbackSource(sources, explicitSrc) {
    if (explicitSrc != null) return explicitSrc;
    return toLargestSource(sources);
}
function toLargestSource(sources) {
    const largestSource = sources.reduce((max, source)=>max == null || source.size > max.size ? source : max, undefined);
    return largestSource != null ? largestSource.src : undefined;
}
function toMediaBreakpoint(breakpoint) {
    switch(breakpoint){
        case Breakpoint.SMALL:
            return metricsStyles.smallUp;
        case Breakpoint.MEDIUM:
            return metricsStyles.mediumUp;
        case Breakpoint.LARGE:
            return metricsStyles.largeUp;
        case Breakpoint.XLARGE:
            return metricsStyles.xLargeUp;
        default:
            return metricsStyles.belowSmall;
    }
}
