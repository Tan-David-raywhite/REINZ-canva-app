import * as React from 'react';
import { useRefEffect } from '../../../internal/ref_effect';
import { markAsIsolated, useStableIsolatableListener } from './isolate';
import { elementMaybePannable, findClosestScrollableElement, handleScrollableElement } from './touch_trap';
export function useTouchScroll({ panControls }) {
    const identifier = React.useRef(undefined);
    const lastPos = React.useRef({
        x: 0,
        y: 0
    });
    const scrollingContentElement = React.useRef(undefined);
    const scrollState = React.useRef({
        top: 0,
        set: false
    });
    const onTouchStart = useStableIsolatableListener((event)=>{
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
            if (event.target instanceof Element) scrollingContentElement.current = findClosestScrollableElement(event.target, event.currentTarget);
        }
        panControls.start();
    });
    const onTouchMove = useStableIsolatableListener((event)=>{
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
        if (currentTarget && handleScrollableElement(scrollingContentElement, currentTarget, delta))
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
                if (event.target instanceof HTMLElement && !elementMaybePannable(event.target))
                event.preventDefault();
            }
        } else if (!allowScroll && event.cancelable)
        event.preventDefault();
    });
    const onScroll = useStableIsolatableListener((event)=>{
        if (scrollState.current.set && event.currentTarget instanceof HTMLElement)
            event.currentTarget.scrollTop = scrollState.current.top;
        scrollState.current.set = false;
    });
    const onTouchEnd = useStableIsolatableListener(()=>{
        if (identifier.current == null)
            return;
        scrollingContentElement.current = undefined;
        identifier.current = undefined;
        panControls.end();
    });
    const touchScrollRef = useRefEffect((element)=>{
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
export function useTouchScrollIsolation() {
    return useRefEffect((element)=>{
        element.addEventListener('touchstart', markAsIsolated);
        element.addEventListener('touchmove', markAsIsolated);
        element.addEventListener('touchend', markAsIsolated);
        element.addEventListener('scroll', markAsIsolated);
        return ()=>{
            element.removeEventListener('touchstart', markAsIsolated);
            element.removeEventListener('touchmove', markAsIsolated);
            element.removeEventListener('touchend', markAsIsolated);
            element.removeEventListener('scroll', markAsIsolated);
        };
    });
}
