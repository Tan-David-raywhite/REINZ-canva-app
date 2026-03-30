import './safe_area_insets.css';
import { customProperties } from './safe_area_insets.css';
export const SAFE_AREA_INSET_PROPERTY = {
    TOP: customProperties.safeAreaInsetTop,
    BOTTOM: customProperties.safeAreaInsetBottom,
    LEFT: customProperties.safeAreaInsetLeft,
    RIGHT: customProperties.safeAreaInsetRight
};
export function getSafeAreaInsets() {
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
