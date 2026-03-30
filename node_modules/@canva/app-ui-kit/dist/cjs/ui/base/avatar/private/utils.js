"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get DEFAULT_BACKGROUND_COLOR () {
        return DEFAULT_BACKGROUND_COLOR;
    },
    get generateAvatarBackgroundColor () {
        return generateAvatarBackgroundColor;
    },
    get getNearestAvatarUrlFromBundle () {
        return getNearestAvatarUrlFromBundle;
    },
    get getNearestAvatarUrlFromImages () {
        return getNearestAvatarUrlFromImages;
    },
    get maybeGetNearestAvatarUrl () {
        return maybeGetNearestAvatarUrl;
    },
    get useNearestAvatarUrlFromBundle () {
        return useNearestAvatarUrlFromBundle;
    },
    get useNearestAvatarUrlFromImages () {
        return useNearestAvatarUrlFromImages;
    }
});
const _color = require('../../../../base/color/color');
const _react = require("react");
const _seedrandom = _interop_require_default(require("seedrandom"));
const _device_pixel_ratio = require('../../device_capabilities/device_pixel_ratio/device_pixel_ratio');
const _metrics = require('../../metrics/metrics');
const _color1 = require('../../tokens/primitive/color');
const _avatar_size = require("./avatar_size");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const DEFAULT_BACKGROUND_COLOR = '#8e8e8e';
const defaultColors = [
    _color1.colorBlue06,
    _color1.colorRed06,
    _color1.colorYellow03,
    _color1.colorGreen06,
    _color1.colorPurple06
].map((colorString)=>{
    try {
        return _color.RgbColor.fromCssString(colorString).toHexString();
    } catch (e) {
        return DEFAULT_BACKGROUND_COLOR;
    }
});
function generateAvatarBackgroundColor(seed = '', colors = defaultColors) {
    const random = (0, _seedrandom.default)(seed);
    const colorIndex = Math.floor(random() * colors.length);
    return colors[colorIndex];
}
const getDefaultAvatarSizeInPixel = (size)=>{
    if ((0, _avatar_size.isVariableSize)(size)) return parseFloat(size) * _metrics.DEFAULT_ROOT_FONT_SIZE;
    return _metrics.baseUnit * _avatar_size.fixedAvatarSizeBaseUnitMultipliers[size];
};
function compare(a, b, target) {
    if (a > target && b < target)
        return -1;
    if (a < target && b > target) return 1;
    return Math.abs(a - target) - Math.abs(b - target);
}
function getNearestAvatarUrlFromBundle(avatarBundle, size = 'medium', devicePixelRatio, includeDefaultAvatar) {
    if (avatarBundle == null) return undefined;
    if (avatarBundle.sizes.size <= 0 || avatarBundle.isDefault && !includeDefaultAvatar) return;
    const dpr = devicePixelRatio || window.devicePixelRatio || 1;
    const avatarSizeInPixel = typeof size === 'number' ? size : getDefaultAvatarSizeInPixel(size);
    const targetSize = avatarSizeInPixel * dpr;
    const images = Array.from(avatarBundle.sizes.values());
    const sortedImages = images.sort((a, b)=>compare(a.size, b.size, targetSize));
    return sortedImages[0].url;
}
function useNearestAvatarUrlFromBundle(avatarBundle, size = 'medium', devicePixelRatioProp, includeDefaultAvatar) {
    const dpr = (0, _device_pixel_ratio.useDevicePixelRatio)();
    const avatarSizeInPixel = getDefaultAvatarSizeInPixel(size);
    const dprValue = devicePixelRatioProp || dpr;
    return (0, _react.useMemo)(()=>{
        return getNearestAvatarUrlFromBundle(avatarBundle, avatarSizeInPixel, dprValue, includeDefaultAvatar);
    }, [
        avatarBundle,
        dprValue,
        includeDefaultAvatar,
        avatarSizeInPixel
    ]);
}
function getNearestAvatarUrlFromImages(images, size = 'medium', devicePixelRatio) {
    if (!images?.length) return;
    const dpr = devicePixelRatio || window.devicePixelRatio || 1;
    const avatarSizeInPixel = typeof size === 'number' ? size : getDefaultAvatarSizeInPixel(size);
    const targetSize = avatarSizeInPixel * dpr;
    const sortedImages = [
        ...images
    ].sort((a, b)=>compare(a.width, b.width, targetSize));
    return sortedImages[0].url;
}
function useNearestAvatarUrlFromImages(images, size = 'medium', devicePixelRatioProp) {
    const dpr = (0, _device_pixel_ratio.useDevicePixelRatio)();
    const avatarSizeInPixel = getDefaultAvatarSizeInPixel(size);
    const dprValue = devicePixelRatioProp || dpr;
    return (0, _react.useMemo)(()=>{
        return getNearestAvatarUrlFromImages(images, avatarSizeInPixel, dprValue);
    }, [
        images,
        dprValue,
        avatarSizeInPixel
    ]);
}
function maybeGetNearestAvatarUrl(avatar, size = 'medium') {
    if (avatar?.isDefault) return;
    return getNearestAvatarUrlFromImages(avatar?.images || [], size);
}
