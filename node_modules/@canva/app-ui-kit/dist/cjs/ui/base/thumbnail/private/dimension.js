"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getDimensions", {
    enumerable: true,
    get: function() {
        return getDimensions;
    }
});
function getDimensions(fit, containerRatio, thumbnailRatio, containerPadding) {
    if (fit == null || fit === 'cover') return getCoverDimensions(containerRatio, thumbnailRatio, containerPadding);
    return getCoverCropDimensions(containerRatio, thumbnailRatio, containerPadding);
}
function getCoverDimensions(containerRatio, thumbnailRatio, containerPadding) {
    if (thumbnailRatio > containerRatio) return {
        width: '100%',
        height: `calc((((100% + ${containerPadding * 2}px) * ${containerRatio}) - ${containerPadding * 2}px) / ${thumbnailRatio})`
    };
    else return {
        width: `calc((((100% + ${containerPadding * 2}px) / ${containerRatio}) - ${containerPadding * 2}px) * ${thumbnailRatio})`,
        height: '100%'
    };
}
function getCoverCropDimensions(containerRatio, thumbnailRatio, containerPadding) {
    if (thumbnailRatio > 100 / 15)
    return getCoverDimensions(containerRatio, 100 / 15, containerPadding);
    else if (thumbnailRatio < containerRatio * 0.75)
    return {
        width: `calc((100% + ${containerPadding * 2}px) * 0.75)`,
        height: `calc((100% + ${containerPadding * 2}px) * 0.75 * ${containerRatio} / ${thumbnailRatio})`,
        transform: 'translateY(50%)',
        marginTop: `calc(((100% + ${containerPadding * 2}px) / ${containerRatio}  * -1) + ${containerPadding * 2}px)`
    };
    else return getCoverDimensions(containerRatio, thumbnailRatio, containerPadding);
}
