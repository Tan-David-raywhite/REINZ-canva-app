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
    get fixedAvatarSizeBaseUnitMultipliers () {
        return fixedAvatarSizeBaseUnitMultipliers;
    },
    get fixedAvatarSizes () {
        return fixedAvatarSizes;
    },
    get isVariableSize () {
        return isVariableSize;
    },
    get useAvatarSize () {
        return useAvatarSize;
    },
    get useAvatarSizeInPixel () {
        return useAvatarSizeInPixel;
    },
    get useAvatarSizeStyle () {
        return useAvatarSizeStyle;
    }
});
const _metrics = require('../../metrics/metrics');
const _avatar_sizecss = require("./avatar_size.css");
const fixedAvatarSizes = [
    'xxsmall',
    'xsmall',
    'small',
    'medium',
    'large',
    'xlarge',
    'xxlarge',
    'xxxlarge'
];
const isVariableSize = (size)=>{
    return size.endsWith('rem');
};
const fixedAvatarSizeBaseUnitMultipliers = {
    ['xxsmall']: 2,
    ['xsmall']: 3,
    ['small']: 4,
    ['medium']: 5,
    ['large']: 6,
    ['xlarge']: 8,
    ['xxlarge']: 10,
    ['xxxlarge']: 20
};
const useAvatarSize = (size)=>{
    const baseUnitInRem = (0, _metrics.useBaseUnitInRem)();
    if (isVariableSize(size)) return size;
    return `${baseUnitInRem * fixedAvatarSizeBaseUnitMultipliers[size]}rem`;
};
const useAvatarSizeInPixel = (size, rootFontSize)=>{
    const textZoomBaseUnit = (0, _metrics.useTextZoomBaseUnit)(rootFontSize);
    if (isVariableSize(size)) {
        const textZoomLevel = textZoomBaseUnit / _metrics.baseUnit;
        return parseFloat(size) * _metrics.DEFAULT_ROOT_FONT_SIZE * textZoomLevel;
    }
    return textZoomBaseUnit * fixedAvatarSizeBaseUnitMultipliers[size];
};
const useAvatarSizeStyle = (size)=>{
    const avatarSizeInRem = useAvatarSize(size);
    return {
        [_avatar_sizecss.customProperties.avatarSize]: avatarSizeInRem
    };
};
