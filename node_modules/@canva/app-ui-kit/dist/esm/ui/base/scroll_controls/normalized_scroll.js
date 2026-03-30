import * as normalizeScrollLeft from 'normalize-scroll-left';
export function getContextualizedScrollLeft(element, scrollLeft, isRtl) {
    if (isRtl) switch(normalizeScrollLeft.detectScrollType()){
        case 'negative':
            return element.clientWidth - element.scrollWidth + scrollLeft;
        case 'reverse':
            return element.scrollWidth - element.clientWidth - scrollLeft;
        default:
            return scrollLeft;
    }
    return scrollLeft;
}
export function getNormalizedScrollLeft(element, isRtl) {
    const direction = getDirection(isRtl);
    return normalizeScrollLeft.getNormalizedScrollLeft(element, direction);
}
export function setNormalizedScrollLeft(element, scrollLeft, isRtl) {
    const direction = getDirection(isRtl);
    return normalizeScrollLeft.setNormalizedScrollLeft(element, scrollLeft, direction);
}
function getDirection(isRtl) {
    return isRtl ? 'rtl' : 'ltr';
}
