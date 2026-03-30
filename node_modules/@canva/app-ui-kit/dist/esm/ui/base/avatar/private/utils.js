import { RgbColor } from '../../../../base/color/color';
import { useMemo } from 'react';
import seedrandom from 'seedrandom';
import { useDevicePixelRatio } from '../../device_capabilities/device_pixel_ratio/device_pixel_ratio';
import { baseUnit, DEFAULT_ROOT_FONT_SIZE } from '../../metrics/metrics';
import { colorBlue06, colorGreen06, colorPurple06, colorRed06, colorYellow03 } from '../../tokens/primitive/color';
import { fixedAvatarSizeBaseUnitMultipliers, isVariableSize } from './avatar_size';
export const DEFAULT_BACKGROUND_COLOR = '#8e8e8e';
const defaultColors = [
    colorBlue06,
    colorRed06,
    colorYellow03,
    colorGreen06,
    colorPurple06
].map((colorString)=>{
    try {
        return RgbColor.fromCssString(colorString).toHexString();
    } catch (e) {
        return DEFAULT_BACKGROUND_COLOR;
    }
});
export function generateAvatarBackgroundColor(seed = '', colors = defaultColors) {
    const random = seedrandom(seed);
    const colorIndex = Math.floor(random() * colors.length);
    return colors[colorIndex];
}
const getDefaultAvatarSizeInPixel = (size)=>{
    if (isVariableSize(size)) return parseFloat(size) * DEFAULT_ROOT_FONT_SIZE;
    return baseUnit * fixedAvatarSizeBaseUnitMultipliers[size];
};
function compare(a, b, target) {
    if (a > target && b < target)
        return -1;
    if (a < target && b > target) return 1;
    return Math.abs(a - target) - Math.abs(b - target);
}
export function getNearestAvatarUrlFromBundle(avatarBundle, size = 'medium', devicePixelRatio, includeDefaultAvatar) {
    if (avatarBundle == null) return undefined;
    if (avatarBundle.sizes.size <= 0 || avatarBundle.isDefault && !includeDefaultAvatar) return;
    const dpr = devicePixelRatio || window.devicePixelRatio || 1;
    const avatarSizeInPixel = typeof size === 'number' ? size : getDefaultAvatarSizeInPixel(size);
    const targetSize = avatarSizeInPixel * dpr;
    const images = Array.from(avatarBundle.sizes.values());
    const sortedImages = images.sort((a, b)=>compare(a.size, b.size, targetSize));
    return sortedImages[0].url;
}
export function useNearestAvatarUrlFromBundle(avatarBundle, size = 'medium', devicePixelRatioProp, includeDefaultAvatar) {
    const dpr = useDevicePixelRatio();
    const avatarSizeInPixel = getDefaultAvatarSizeInPixel(size);
    const dprValue = devicePixelRatioProp || dpr;
    return useMemo(()=>{
        return getNearestAvatarUrlFromBundle(avatarBundle, avatarSizeInPixel, dprValue, includeDefaultAvatar);
    }, [
        avatarBundle,
        dprValue,
        includeDefaultAvatar,
        avatarSizeInPixel
    ]);
}
export function getNearestAvatarUrlFromImages(images, size = 'medium', devicePixelRatio) {
    if (!images?.length) return;
    const dpr = devicePixelRatio || window.devicePixelRatio || 1;
    const avatarSizeInPixel = typeof size === 'number' ? size : getDefaultAvatarSizeInPixel(size);
    const targetSize = avatarSizeInPixel * dpr;
    const sortedImages = [
        ...images
    ].sort((a, b)=>compare(a.width, b.width, targetSize));
    return sortedImages[0].url;
}
export function useNearestAvatarUrlFromImages(images, size = 'medium', devicePixelRatioProp) {
    const dpr = useDevicePixelRatio();
    const avatarSizeInPixel = getDefaultAvatarSizeInPixel(size);
    const dprValue = devicePixelRatioProp || dpr;
    return useMemo(()=>{
        return getNearestAvatarUrlFromImages(images, avatarSizeInPixel, dprValue);
    }, [
        images,
        dprValue,
        avatarSizeInPixel
    ]);
}
export function maybeGetNearestAvatarUrl(avatar, size = 'medium') {
    if (avatar?.isDefault) return;
    return getNearestAvatarUrlFromImages(avatar?.images || [], size);
}
