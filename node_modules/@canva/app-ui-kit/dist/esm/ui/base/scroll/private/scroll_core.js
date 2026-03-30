export const SUBPIXEL_ROUNDING_TOLERANCE = 2;
export function getScrollContainer(container) {
    if (container === 'window') return document.documentElement;
    return container;
}
export function getCoreScrollState(container = 'window', options) {
    const containerElement = getScrollContainer(container);
    const x = containerElement.scrollLeft * (options?.rtl ? -1 : 1) + 0;
    const y = containerElement.scrollTop;
    const maxX = containerElement.scrollWidth - containerElement.clientWidth;
    const maxY = containerElement.scrollHeight - containerElement.clientHeight;
    const scrollableX = maxX > 0;
    const scrollableY = maxY > 0;
    const scrollable = scrollableX || scrollableY;
    const containerWidth = containerElement.clientWidth;
    const containerHeight = containerElement.clientHeight;
    const scrollWidth = containerElement.scrollWidth;
    const scrollHeight = containerElement.scrollHeight;
    return {
        x,
        y,
        scrollable,
        scrollableX,
        scrollableY,
        containerWidth,
        containerHeight,
        scrollWidth,
        scrollHeight,
        atTop: y <= SUBPIXEL_ROUNDING_TOLERANCE,
        atBottom: y >= maxY - SUBPIXEL_ROUNDING_TOLERANCE,
        atStart: x <= SUBPIXEL_ROUNDING_TOLERANCE,
        atEnd: x >= maxX - SUBPIXEL_ROUNDING_TOLERANCE
    };
}
function scrollWithEasing(containerElement, options) {
    const { x, y, duration = 150, easing } = options;
    const currentX = containerElement.scrollLeft;
    const currentY = containerElement.scrollTop;
    let start;
    const animate = (timestamp)=>{
        start ?? (start = timestamp);
        const progress = Math.min(duration, timestamp - start);
        const newX = x != null ? easing(currentX, x, progress, duration) : currentX;
        const newY = y != null ? easing(currentY, y, progress, duration) : currentY;
        containerElement.scrollLeft = newX;
        containerElement.scrollTop = newY;
        if (progress < duration) requestAnimationFrame(animate);
    };
    requestAnimationFrame(animate);
}
export function scrollTo(container, options) {
    const { easing = 'auto', duration, rtl } = options;
    const containerElement = getScrollContainer(container);
    let x = options.x;
    let y = options.y;
    if (x === 'start') x = 0;
    else if (x === 'end') x = containerElement.scrollWidth - containerElement.clientWidth;
    if (y === 'start') y = 0;
    else if (y === 'end') y = containerElement.scrollHeight - containerElement.clientHeight;
    if (x != null && rtl) x = -x;
    if (typeof easing === 'function') return scrollWithEasing(containerElement, {
        x,
        y,
        duration,
        easing
    });
    if (typeof containerElement.scrollTo !== 'function') {
        containerElement.scrollLeft = x ?? containerElement.scrollLeft;
        containerElement.scrollTop = y != null ? y : containerElement.scrollTop;
    } else containerElement.scrollTo({
        left: x,
        top: y,
        behavior: easing
    });
}
export function scrollBy(container, options) {
    const { x, y, easing, duration, rtl } = options;
    const { x: currentX, y: currentY } = getCoreScrollState(container, {
        rtl
    });
    scrollTo(container, {
        x: x != null ? currentX + x : undefined,
        y: y != null ? currentY + y : undefined,
        easing,
        duration,
        rtl
    });
}
