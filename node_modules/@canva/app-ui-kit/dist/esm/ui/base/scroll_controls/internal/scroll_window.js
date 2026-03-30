import { jsx as _jsx } from "react/jsx-runtime";
import { observable, runInAction } from 'mobx';
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useDirection } from '../../provider/provider';
import { calculateScrollStatePosition } from './utilities';
export function ScrollWindow(props) {
    const { layout, innerRef, doNotUseForceLTRForPageNavigator, children } = props;
    const direction = useDirection();
    const privateFields = React.useRef({
        resizeObserver: null,
        scrollableEl: null,
        isRtl: doNotUseForceLTRForPageNavigator ? false : direction === 'RTL',
        scrollState: observable({
            layout
        })
    });
    const dispatch = React.useCallback(()=>{
        runInAction(()=>{
            if (!privateFields.current.scrollableEl) {
                privateFields.current.scrollState.positions = undefined;
                return;
            }
            if (privateFields.current.scrollableEl.offsetParent == null)
                return;
            privateFields.current.scrollState.positions = calculateScrollStatePosition(privateFields.current.scrollableEl, layout, privateFields.current.isRtl);
        });
    }, [
        layout
    ]);
    const scrollableRef = React.useCallback((el)=>{
        if (privateFields.current.scrollableEl === el) return;
        if (!privateFields.current.resizeObserver) privateFields.current.resizeObserver = new ResizeObserver(dispatch);
        innerRef?.(el);
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.unobserve(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.removeEventListener('scroll', dispatch);
        }
        privateFields.current.scrollableEl = el;
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.observe(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.addEventListener('scroll', dispatch, {
                passive: true
            });
        } else {
            privateFields.current.resizeObserver?.disconnect();
            privateFields.current.resizeObserver = null;
        }
        dispatch();
    }, [
        innerRef,
        dispatch
    ]);
    React.useEffect(()=>{
        privateFields.current.isRtl = doNotUseForceLTRForPageNavigator ? false : direction === 'RTL';
    }, [
        doNotUseForceLTRForPageNavigator,
        direction
    ]);
    return children({
        scrollableRef,
        scrollState: privateFields.current.scrollState
    });
}
export function OptionalScrollWindow(props) {
    const { enabled, innerRef, children } = props;
    if (enabled) return _jsx(ScrollWindow, {
        ...props
    });
    return children({
        scrollableRef: innerRef
    });
}
