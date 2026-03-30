import { jsx as _jsx, Fragment as _Fragment } from "react/jsx-runtime";
import { makeObservable } from '../../../base/make_observable/make_observable';
import { debounce } from '../../../base/debounce';
import { computed, observable, runInAction } from 'mobx';
import * as React from 'react';
import ResizeObserver from 'resize-observer-polyfill';
import { useDirection, useEnableAnimations } from '../provider/provider';
import '../smooth_scroll_polyfill/smooth_scroll_polyfill';
import { getContextualizedScrollLeft, getNormalizedScrollLeft } from './normalized_scroll';
import { scrollPositionByItem, scrollPositionByPage } from './scroll_positions';
const SubPixelRoundingTolerance = 2;
const SCROLL_CHANGE_THROTTLE = 500;
const getElementWidth = (element)=>element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
export class ContextualScrollState {
    static _makeObservable(instance) {
        makeObservable(instance, {
            isRtl: observable.ref,
            atLeft: observable.ref,
            atRight: observable.ref,
            closestItemFromStartIndex: observable.ref,
            atStart: computed,
            atEnd: computed
        });
    }
    get atStart() {
        return this.isRtl ? this.atRight : this.atLeft;
    }
    get atEnd() {
        return this.isRtl ? this.atLeft : this.atRight;
    }
    constructor(isRtl){
        this.isRtl = (ContextualScrollState._makeObservable(this), undefined);
        this.isRtl = isRtl;
    }
}
export function ScrollControls(props) {
    const { children, innerRef, itemWidths, itemGap = 0, smoothScroll, doNotUseForceLTRForPageNavigator, onScroll, ref } = props;
    const isRtl = useDirection() === 'RTL';
    const enableAnimations = useEnableAnimations();
    const scrollState = React.useRef(new ContextualScrollState(isRtl));
    const privateFields = React.useRef({
        resizeObserver: null,
        scrollableEl: null
    });
    const getScrollBehavior = React.useCallback(()=>{
        if (smoothScroll != null) return smoothScroll ? 'smooth' : undefined;
        return enableAnimations ? 'smooth' : undefined;
    }, [
        smoothScroll,
        enableAnimations
    ]);
    const getItemWidths = React.useCallback(()=>{
        const itemWidthsWithoutGap = privateFields.current.scrollableEl ? itemWidths ?? Array.from(privateFields.current.scrollableEl.children, getElementWidth) : [];
        const itemWidthsWithGap = itemGap > 0 ? itemWidthsWithoutGap.map((width)=>width + itemGap) : itemWidthsWithoutGap;
        if (itemGap > 0 && itemWidthsWithGap.length > 0) itemWidthsWithGap[itemWidthsWithGap.length - 1] -= itemGap;
        return itemWidthsWithGap;
    }, [
        itemWidths,
        itemGap
    ]);
    const updateEdges = React.useCallback(()=>{
        runInAction(()=>{
            if (privateFields.current.scrollableEl && privateFields.current.scrollableEl.offsetParent != null) {
                const scrollLeft = getNormalizedScrollLeft(privateFields.current.scrollableEl, scrollState.current.isRtl);
                const scrollRight = privateFields.current.scrollableEl.scrollWidth - privateFields.current.scrollableEl.clientWidth - scrollLeft;
                scrollState.current.atLeft = scrollLeft <= SubPixelRoundingTolerance;
                scrollState.current.atRight = scrollRight <= SubPixelRoundingTolerance;
                const scrollStart = scrollState.current.isRtl ? scrollRight : scrollLeft;
                const currentItemWidths = getItemWidths();
                const cumSumItemWidths = currentItemWidths.map(((sum)=>(width)=>sum += width)(0));
                const distancesFromScrollStart = cumSumItemWidths.map((width, index)=>Math.abs(width - currentItemWidths[index] - scrollStart));
                const minDistanceFromScrollStart = Math.min(...distancesFromScrollStart);
                scrollState.current.closestItemFromStartIndex = distancesFromScrollStart.findIndex((distance)=>distance === minDistanceFromScrollStart);
            }
        });
    }, [
        getItemWidths
    ]);
    const scrollableRef = React.useCallback((el)=>{
        if (privateFields.current.scrollableEl === el) return;
        if (!privateFields.current.resizeObserver) privateFields.current.resizeObserver = new ResizeObserver(updateEdges);
        if (innerRef) {
            if (typeof innerRef === 'function') innerRef(el);
            else innerRef.current = el;
        }
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.unobserve(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.removeEventListener('scroll', updateEdges);
        }
        privateFields.current.scrollableEl = el;
        if (privateFields.current.scrollableEl) {
            privateFields.current.resizeObserver.observe(privateFields.current.scrollableEl);
            privateFields.current.scrollableEl.addEventListener('scroll', updateEdges);
        } else {
            privateFields.current.resizeObserver?.disconnect();
            privateFields.current.resizeObserver = null;
        }
        updateEdges();
    }, [
        innerRef,
        updateEdges
    ]);
    const move = React.useCallback((getScrollPosition, disableAnimations)=>{
        if (privateFields.current.scrollableEl == null) return;
        const scrollLeft = getNormalizedScrollLeft(privateFields.current.scrollableEl, scrollState.current.isRtl);
        const containerWidth = privateFields.current.scrollableEl.clientWidth;
        const currentItemWidths = getItemWidths();
        let targetLeft;
        if (scrollState.current.isRtl) {
            const scrollWidth = privateFields.current.scrollableEl.scrollWidth;
            const scrollRight = scrollWidth - containerWidth - scrollLeft;
            const targetRight = getScrollPosition(currentItemWidths, containerWidth, scrollRight);
            targetLeft = scrollWidth - containerWidth - targetRight;
        } else targetLeft = getScrollPosition(currentItemWidths, containerWidth, scrollLeft);
        privateFields.current.scrollableEl.scrollTo?.({
            left: getContextualizedScrollLeft(privateFields.current.scrollableEl, targetLeft, scrollState.current.isRtl),
            behavior: disableAnimations ? undefined : getScrollBehavior()
        });
    }, [
        getItemWidths,
        getScrollBehavior
    ]);
    const moveToItem = React.useCallback((itemIndex, scrollLogicalPosition = 'start', disableAnimations)=>{
        move((itemSizes, pageSize, scrollPosition)=>scrollPositionByItem(itemSizes, pageSize, scrollPosition, itemIndex, scrollLogicalPosition), disableAnimations);
    }, [
        move
    ]);
    const movePages = React.useCallback((pages)=>pages !== 0 && move((itemSizes, pageSize, scrollPosition)=>scrollPositionByPage(itemSizes, pageSize, scrollPosition, pages)), [
        move
    ]);
    const moveNext = React.useCallback(()=>movePages(1), [
        movePages
    ]);
    const movePrev = React.useCallback(()=>movePages(-1), [
        movePages
    ]);
    const handleScroll = React.useMemo(()=>{
        if (!onScroll) return;
        return smoothScroll ? debounce(()=>{
            onScroll?.(scrollState.current);
        }, SCROLL_CHANGE_THROTTLE) : ()=>onScroll?.(scrollState.current);
    }, [
        onScroll,
        smoothScroll
    ]);
    React.useEffect(()=>{
        runInAction(()=>scrollState.current.isRtl = doNotUseForceLTRForPageNavigator ? false : isRtl);
        updateEdges();
        const scrollableElement = privateFields.current.scrollableEl;
        if (!handleScroll) return;
        scrollableElement?.addEventListener('scroll', handleScroll);
        return ()=>{
            scrollableElement?.removeEventListener('scroll', handleScroll);
        };
    }, [
        doNotUseForceLTRForPageNavigator,
        updateEdges,
        isRtl,
        handleScroll
    ]);
    React.useImperativeHandle(ref, ()=>({
            moveToItem,
            moveNext,
            movePrev,
            recalculateScrollState: updateEdges
        }), [
        moveToItem,
        moveNext,
        movePrev,
        updateEdges
    ]);
    return _jsx(_Fragment, {
        children: children({
            scrollableRef,
            moveNext,
            movePrev,
            scrollState: scrollState.current,
            moveToItem
        })
    });
}
