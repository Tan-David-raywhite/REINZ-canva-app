import { baseUnit, DEFAULT_ROOT_FONT_SIZE, useBaseUnitInRem, useTextZoomBaseUnit } from '../../metrics/metrics';
import { customProperties } from './avatar_size.css';
export const fixedAvatarSizes = [
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'xxxlarge'
];
export const isVariableSize = (size)=>{
    return size.endsWith('rem');
};
export const fixedAvatarSizeBaseUnitMultipliers = {
    ['xxsmall']: 2,
    ['xsmall']: 3,
    ['small']: 4,
    ['medium']: 5,
    ['large']: 6,
    ['xlarge']: 8,
    ['xxlarge']: 10,
    ['xxxlarge']: 20
};
export const useAvatarSize = (size)=>{
    const baseUnitInRem = useBaseUnitInRem();
    if (isVariableSize(size)) return size;
    return `${baseUnitInRem * fixedAvatarSizeBaseUnitMultipliers[size]}rem`;
};
export const useAvatarSizeInPixel = (size, rootFontSize)=>{
    const textZoomBaseUnit = useTextZoomBaseUnit(rootFontSize);
    if (isVariableSize(size)) {
        const textZoomLevel = textZoomBaseUnit / baseUnit;
        return parseFloat(size) * DEFAULT_ROOT_FONT_SIZE * textZoomLevel;
    }
    return textZoomBaseUnit * fixedAvatarSizeBaseUnitMultipliers[size];
};
export const useAvatarSizeStyle = (size)=>{
    const avatarSizeInRem = useAvatarSize(size);
    return {
        [customProperties.avatarSize]: avatarSizeInRem
    };
};
