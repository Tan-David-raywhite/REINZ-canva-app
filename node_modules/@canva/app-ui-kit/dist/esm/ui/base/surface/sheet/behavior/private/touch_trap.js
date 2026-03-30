import { Preconditions } from '../../../../../../base/preconditions';
import { getDirection } from '../../../../gestures/pan_recognizer';
export const elementHasVerticalScrollAtEnd = (element)=>element.scrollHeight - element.scrollTop <= element.clientHeight;
export const elementHasHorizontalScrollAtEnd = (element)=>element.scrollWidth - element.scrollLeft <= element.clientWidth;
export const elementMaybePannable = (element)=>{
    if (element.hasAttribute('draggable') && element.getAttribute('draggable') !== 'false')
    return true;
    return false;
};
const elementCanScroll = (element)=>{
    const globalWindow = typeof window !== 'undefined' ? window : null;
    if (!globalWindow)
    return false;
    const style = globalWindow.getComputedStyle(element);
    const vertical = element.scrollHeight > element.clientHeight && (style.overflowY === 'auto' || style.overflowY === 'scroll');
    const horizontal = element.scrollWidth > element.clientWidth && (style.overflowX === 'auto' || style.overflowX === 'scroll');
    return horizontal || vertical;
};
export const inputElementCanScroll = (element)=>{
    return element.scrollHeight > element.clientHeight || element.scrollWidth > element.clientWidth;
};
export const findClosestScrollableElement = (element, rootElement)=>{
    Preconditions.checkArgument(rootElement.contains(element), '`element` must be descendants of `rootElement`');
    let node = element;
    while (node !== rootElement) {
        if (!node.parentElement)
        return;
        if (elementMaybePannable(node)) return;
        if (node instanceof HTMLElement) {
            if ((element.tagName === 'INPUT' || element.tagName === 'TEXTAREA') && inputElementCanScroll(node)) return {
                element: node,
                currentlyScrolling: {
                    horizontal: false,
                    vertical: false
                }
            };
            if (elementCanScroll(node))
            return {
                element: node,
                currentlyScrolling: {
                    horizontal: false,
                    vertical: false
                }
            };
        }
        node = node.parentElement;
    }
};
export const handleScrollableElement = (scrollableElement, rootElement, touchDistance)=>{
    if (!scrollableElement.current) return false;
    const { currentlyScrolling, element } = scrollableElement.current;
    if (currentlyScrolling.horizontal || currentlyScrolling.vertical)
    return true;
    const direction = getDirection(touchDistance.x, touchDistance.y);
    const isPanningUp = direction === 'up';
    const isPanningDown = direction === 'down';
    const isPanningLeft = direction === 'left';
    const isPanningRight = direction === 'right';
    const canScrollUp = element.scrollTop > 0;
    const canScrollDown = !elementHasVerticalScrollAtEnd(element);
    const canScrollLeft = element.scrollLeft > 0;
    const canScrollRight = !elementHasHorizontalScrollAtEnd(element);
    switch(true){
        case isPanningLeft && canScrollRight:
        case isPanningRight && canScrollLeft:
            scrollableElement.current.currentlyScrolling.horizontal = true;
            return true;
        case isPanningDown && canScrollUp:
        case isPanningUp && canScrollDown:
            scrollableElement.current.currentlyScrolling.vertical = true;
            return true;
        case isPanningLeft && !canScrollRight:
        case isPanningRight && !canScrollLeft:
        case isPanningDown && !canScrollUp:
        case isPanningUp && !canScrollDown:
            if (!element.parentElement) return false;
            scrollableElement.current = findClosestScrollableElement(element.parentElement, rootElement);
            return scrollableElement.current ? handleScrollableElement(scrollableElement, rootElement, touchDistance) : false;
        default:
    }
    return false;
};
