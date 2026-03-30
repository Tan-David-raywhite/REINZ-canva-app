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
    get useTouchScroll () {
        return useTouchScroll;
    },
    get useTouchScrollIsolation () {
        return useTouchScrollIsolation;
    }
});
const _react = _interop_require_wildcard(require("react"));
const _ref_effect = require('../../../internal/ref_effect');
const _isolate = require("./isolate");
const _touch_trap = require("./touch_trap");
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
function useTouchScroll({ panControls }) {
    const identifier = _react.useRef(undefined);
    const lastPos = _react.useRef({
        x: 0,
        y: 0
    });
    const scrollingContentElement = _react.useRef(undefined);
    const scrollState = _react.useRef({
        top: 0,
        set: false
    });
    const onTouchStart = (0, _isolate.useStableIsolatableListener)((event)=>{
        if (event.touches.length !== 1)
            return;
        const touch = event.changedTouches[0];
        identifier.current = touch.identifier;
        lastPos.current = {
            x: touch.clientX,
            y: touch.clientY
        };
        if (event.currentTarget instanceof HTMLElement) {
            scrollState.current.top = event.currentTarget.scrollTop;
            if (event.target instanceof Element) scrollingContentElement.current = (0, _touch_trap.findClosestScrollableElement)(event.target, event.currentTarget);
        }
        panControls.start();
    });
    const onTouchMove = (0, _isolate.useStableIsolatableListener)((event)=>{
        let currentTouch;
        for (const touch of event.changedTouches) if (touch.identifier === identifier.current) {
            currentTouch = touch;
            break;
        }
        if (currentTouch == null) return;
        const currentTarget = event.currentTarget instanceof HTMLElement ? event.currentTarget : null;
        const delta = {
            x: currentTouch.clientX - lastPos.current.x,
            y: currentTouch.clientY - lastPos.current.y
        };
        if ((event.target instanceof HTMLInputElement || event.target instanceof HTMLTextAreaElement) && document.activeElement === event.target)
            return;
        if (currentTarget && (0, _touch_trap.handleScrollableElement)(scrollingContentElement, currentTarget, delta))
        return;
        lastPos.current = {
            x: currentTouch.clientX,
            y: currentTouch.clientY
        };
        const allowScroll = panControls.update(-delta.y);
        if (currentTarget != null) {
            if (allowScroll)
            scrollState.current.top = currentTarget.scrollTop;
            else {
                scrollState.current.set = true;
                if (event.target instanceof HTMLElement && !(0, _touch_trap.elementMaybePannable)(event.target))
                event.preventDefault();
            }
        } else if (!allowScroll && event.cancelable)
        event.preventDefault();
    });
    const onScroll = (0, _isolate.useStableIsolatableListener)((event)=>{
        if (scrollState.current.set && event.currentTarget instanceof HTMLElement)
            event.currentTarget.scrollTop = scrollState.current.top;
        scrollState.current.set = false;
    });
    const onTouchEnd = (0, _isolate.useStableIsolatableListener)(()=>{
        if (identifier.current == null)
            return;
        scrollingContentElement.current = undefined;
        identifier.current = undefined;
        panControls.end();
    });
    const touchScrollRef = (0, _ref_effect.useRefEffect)((element)=>{
        element.addEventListener('touchstart', onTouchStart);
        element.addEventListener('touchmove', onTouchMove);
        element.addEventListener('touchend', onTouchEnd);
        element.addEventListener('scroll', onScroll);
        return ()=>{
            element.removeEventListener('touchstart', onTouchStart);
            element.removeEventListener('touchmove', onTouchMove);
            element.removeEventListener('touchend', onTouchEnd);
            element.removeEventListener('scroll', onScroll);
        };
    });
    return {
        touchScrollRef
    };
}
function useTouchScrollIsolation() {
    return (0, _ref_effect.useRefEffect)((element)=>{
        element.addEventListener('touchstart', _isolate.markAsIsolated);
        element.addEventListener('touchmove', _isolate.markAsIsolated);
        element.addEventListener('touchend', _isolate.markAsIsolated);
        element.addEventListener('scroll', _isolate.markAsIsolated);
        return ()=>{
            element.removeEventListener('touchstart', _isolate.markAsIsolated);
            element.removeEventListener('touchmove', _isolate.markAsIsolated);
            element.removeEventListener('touchend', _isolate.markAsIsolated);
            element.removeEventListener('scroll', _isolate.markAsIsolated);
        };
    });
}
