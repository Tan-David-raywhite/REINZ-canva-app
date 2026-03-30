import { UnreachableError } from '../../../../base/preconditions';
import { getScrollContainer, scrollTo } from './scroll_core';
export function scrollIntoView(container, element, options = {}) {
    const { align = 'start', easing, duration, rtl } = options;
    const containerElement = getScrollContainer(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const startX = containerElement.scrollLeft + elementRect.left - containerRect.left;
    const startY = containerElement.scrollTop + elementRect.top - containerRect.top;
    switch(align){
        case 'start':
            return scrollTo(containerElement, {
                x: rtl ? startX + (elementRect.width - containerRect.width) : startX,
                y: startY,
                easing,
                duration
            });
        case 'center':
            return scrollTo(containerElement, {
                x: startX + (elementRect.width - containerRect.width) / 2,
                y: startY + (elementRect.height - containerRect.height) / 2,
                easing,
                duration
            });
        case 'end':
            return scrollTo(containerElement, {
                x: rtl ? startX : startX + (elementRect.width - containerRect.width),
                y: startY + (elementRect.height - containerRect.height),
                easing,
                duration
            });
        default:
            throw new UnreachableError(align);
    }
}
export function isAboveView(container, element) {
    const containerElement = getScrollContainer(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.top < containerRect.top;
}
export function isBelowView(container, element) {
    const containerElement = getScrollContainer(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.bottom > containerRect.bottom;
}
export function isFullyInView(container, element) {
    return !isAboveView(container, element) && !isBelowView(container, element);
}
