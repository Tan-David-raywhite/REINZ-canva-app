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
    get ContextualScrollState () {
        return ContextualScrollState;
    },
    get ScrollControls () {
        return ScrollControls;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _make_observable = require('../../../base/make_observable/make_observable');
const _debounce = require('../../../base/debounce');
const _mobx = require("mobx");
const _react = _interop_require_wildcard(require("react"));
const _resizeobserverpolyfill = _interop_require_default(require("resize-observer-polyfill"));
const _provider = require('../provider/provider');
require('../smooth_scroll_polyfill/smooth_scroll_polyfill');
const _normalized_scroll = require("./normalized_scroll");
const _scroll_positions = require("./scroll_positions");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
const SubPixelRoundingTolerance = 2;
const SCROLL_CHANGE_THROTTLE = 500;
const getElementWidth = (element)=>element instanceof HTMLElement ? element.offsetWidth : element.clientWidth;
class ContextualScrollState {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            isRtl: _mobx.observable.ref,
            atLeft: _mobx.observable.ref,
            atRight: _mobx.observable.ref,
            closestItemFromStartIndex: _mobx.observable.ref,
            atStart: _mobx.computed,
            atEnd: _mobx.computed
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
function ScrollControls(props) {
    const { children, innerRef, itemWidths, itemGap = 0, smoothScroll, doNotUseForceLTRForPageNavigator, onScroll, ref } = props;
    const isRtl = (0, _provider.useDirection)() === 'RTL';
    const enableAnimations = (0, _provider.useEnableAnimations)();
    const scrollState = _react.useRef(new ContextualScrollState(isRtl));
    const privateFields = _react.useRef({
        resizeObserver: null,
        scrollableEl: null
    });
    const getScrollBehavior = _react.useCallback(()=>{
        if (smoothScroll != null) return smoothScroll ? 'smooth' : undefined;
        return enableAnimations ? 'smooth' : undefined;
    }, [
        smoothScroll,
        enableAnimations
    ]);
    const getItemWidths = _react.useCallback(()=>{
        const itemWidthsWithoutGap = privateFields.current.scrollableEl ? itemWidths ?? Array.from(privateFields.current.scrollableEl.children, getElementWidth) : [];
        const itemWidthsWithGap = itemGap > 0 ? itemWidthsWithoutGap.map((width)=>width + itemGap) : itemWidthsWithoutGap;
        if (itemGap > 0 && itemWidthsWithGap.length > 0) itemWidthsWithGap[itemWidthsWithGap.length - 1] -= itemGap;
        return itemWidthsWithGap;
    }, [
        itemWidths,
        itemGap
    ]);
    const updateEdges = _react.useCallback(()=>{
        (0, _mobx.runInAction)(()=>{
            if (privateFields.current.scrollableEl && privateFields.current.scrollableEl.offsetParent != null) {
                const scrollLeft = (0, _normalized_scroll.getNormalizedScrollLeft)(privateFields.current.scrollableEl, scrollState.current.isRtl);
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
    const scrollableRef = _react.useCallback((el)=>{
        if (privateFields.current.scrollableEl === el) return;
        if (!privateFields.current.resizeObserver) privateFields.current.resizeObserver = new _resizeobserverpolyfill.default(updateEdges);
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
    const move = _react.useCallback((getScrollPosition, disableAnimations)=>{
        if (privateFields.current.scrollableEl == null) return;
        const scrollLeft = (0, _normalized_scroll.getNormalizedScrollLeft)(privateFields.current.scrollableEl, scrollState.current.isRtl);
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
            left: (0, _normalized_scroll.getContextualizedScrollLeft)(privateFields.current.scrollableEl, targetLeft, scrollState.current.isRtl),
            behavior: disableAnimations ? undefined : getScrollBehavior()
        });
    }, [
        getItemWidths,
        getScrollBehavior
    ]);
    const moveToItem = _react.useCallback((itemIndex, scrollLogicalPosition = 'start', disableAnimations)=>{
        move((itemSizes, pageSize, scrollPosition)=>(0, _scroll_positions.scrollPositionByItem)(itemSizes, pageSize, scrollPosition, itemIndex, scrollLogicalPosition), disableAnimations);
    }, [
        move
    ]);
    const movePages = _react.useCallback((pages)=>pages !== 0 && move((itemSizes, pageSize, scrollPosition)=>(0, _scroll_positions.scrollPositionByPage)(itemSizes, pageSize, scrollPosition, pages)), [
        move
    ]);
    const moveNext = _react.useCallback(()=>movePages(1), [
        movePages
    ]);
    const movePrev = _react.useCallback(()=>movePages(-1), [
        movePages
    ]);
    const handleScroll = _react.useMemo(()=>{
        if (!onScroll) return;
        return smoothScroll ? (0, _debounce.debounce)(()=>{
            onScroll?.(scrollState.current);
        }, SCROLL_CHANGE_THROTTLE) : ()=>onScroll?.(scrollState.current);
    }, [
        onScroll,
        smoothScroll
    ]);
    _react.useEffect(()=>{
        (0, _mobx.runInAction)(()=>scrollState.current.isRtl = doNotUseForceLTRForPageNavigator ? false : isRtl);
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
    _react.useImperativeHandle(ref, ()=>({
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
    return (0, _jsxruntime.jsx)(_jsxruntime.Fragment, {
        children: children({
            scrollableRef,
            moveNext,
            movePrev,
            scrollState: scrollState.current,
            moveToItem
        })
    });
}
