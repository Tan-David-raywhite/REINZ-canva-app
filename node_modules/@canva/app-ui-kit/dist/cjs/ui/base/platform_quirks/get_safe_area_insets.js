"use strict"
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
    get SAFE_AREA_INSET_PROPERTY () {
        return SAFE_AREA_INSET_PROPERTY;
    },
    get getSafeAreaInsets () {
        return getSafeAreaInsets;
    }
});
const _safe_area_insetscss = require("./safe_area_insets.css");
const SAFE_AREA_INSET_PROPERTY = {
    TOP: _safe_area_insetscss.customProperties.safeAreaInsetTop,
    BOTTOM: _safe_area_insetscss.customProperties.safeAreaInsetBottom,
    LEFT: _safe_area_insetscss.customProperties.safeAreaInsetLeft,
    RIGHT: _safe_area_insetscss.customProperties.safeAreaInsetRight
};
function getSafeAreaInsets() {
    const computedStyles = getComputedStyle(document.body);
    const top = parseInt(computedStyles.getPropertyValue(SAFE_AREA_INSET_PROPERTY.TOP), 10) || 0;
    const bottom = parseInt(computedStyles.getPropertyValue(SAFE_AREA_INSET_PROPERTY.BOTTOM), 10) || 0;
    const left = parseInt(computedStyles.getPropertyValue(SAFE_AREA_INSET_PROPERTY.LEFT), 10) || 0;
    const right = parseInt(computedStyles.getPropertyValue(SAFE_AREA_INSET_PROPERTY.RIGHT), 10) || 0;
    return {
        top,
        bottom,
        left,
        right
    };
}
