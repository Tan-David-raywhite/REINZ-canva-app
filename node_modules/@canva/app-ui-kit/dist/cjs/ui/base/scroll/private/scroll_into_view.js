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
    get isAboveView () {
        return isAboveView;
    },
    get isBelowView () {
        return isBelowView;
    },
    get isFullyInView () {
        return isFullyInView;
    },
    get scrollIntoView () {
        return scrollIntoView;
    }
});
const _preconditions = require('../../../../base/preconditions');
const _scroll_core = require("./scroll_core");
function scrollIntoView(container, element, options = {}) {
    const { align = 'start', easing, duration, rtl } = options;
    const containerElement = (0, _scroll_core.getScrollContainer)(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    const startX = containerElement.scrollLeft + elementRect.left - containerRect.left;
    const startY = containerElement.scrollTop + elementRect.top - containerRect.top;
    switch(align){
        case 'start':
            return (0, _scroll_core.scrollTo)(containerElement, {
                x: rtl ? startX + (elementRect.width - containerRect.width) : startX,
                y: startY,
                easing,
                duration
            });
        case 'center':
            return (0, _scroll_core.scrollTo)(containerElement, {
                x: startX + (elementRect.width - containerRect.width) / 2,
                y: startY + (elementRect.height - containerRect.height) / 2,
                easing,
                duration
            });
        case 'end':
            return (0, _scroll_core.scrollTo)(containerElement, {
                x: rtl ? startX : startX + (elementRect.width - containerRect.width),
                y: startY + (elementRect.height - containerRect.height),
                easing,
                duration
            });
        default:
            throw new _preconditions.UnreachableError(align);
    }
}
function isAboveView(container, element) {
    const containerElement = (0, _scroll_core.getScrollContainer)(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.top < containerRect.top;
}
function isBelowView(container, element) {
    const containerElement = (0, _scroll_core.getScrollContainer)(container);
    const containerRect = containerElement.getBoundingClientRect();
    const elementRect = element.getBoundingClientRect();
    return elementRect.bottom > containerRect.bottom;
}
function isFullyInView(container, element) {
    return !isAboveView(container, element) && !isBelowView(container, element);
}
