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
    get MasonryPresenter () {
        return MasonryPresenter;
    },
    get MasonryState () {
        return MasonryState;
    }
});
const _make_observable = require('../../../base/make_observable/make_observable');
const _preconditions = require('../../../base/preconditions');
const _mobx = _interop_require_wildcard(require("mobx"));
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
class MasonryState {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            rows: _mobx.observable.shallow,
            containerWidth: _mobx.observable.ref,
            minRowHeightPx: _mobx.observable.ref,
            maxRowHeightPx: _mobx.observable.ref,
            targetRowHeightPx: _mobx.observable.ref,
            horizontalGutterPx: _mobx.observable.ref,
            verticalGutterPx: _mobx.observable.ref,
            rowLimit: _mobx.observable.ref,
            minElements: _mobx.observable.ref,
            minItemWidthPx: _mobx.observable.ref,
            hideIncompleteRow: _mobx.observable.ref,
            verticalOffset: _mobx.observable.ref,
            rowHeights: _mobx.computed
        });
    }
    get rowHeights() {
        return this.rows.map((row)=>row.height + row.footerHeight + this.verticalGutterPx);
    }
    constructor(){
        this.children = (MasonryState._makeObservable(this), []);
        this.rows = [];
        this.containerWidth = undefined;
        this.minRowHeightPx = undefined;
        this.maxRowHeightPx = undefined;
        this.targetRowHeightPx = 0;
        this.horizontalGutterPx = 0;
        this.verticalGutterPx = 0;
        this.rowLimit = undefined;
        this.minElements = 1;
        this.minItemWidthPx = 0;
        this.hideIncompleteRow = false;
        this.verticalOffset = 0;
        this.computeMidPoints = false;
        this.alignLastRowHeight = false;
    }
}
class MasonryPresenter {
    static _makeObservable(instance) {
        (0, _make_observable.makeObservable)(instance, {
            updateChildren: _mobx.action,
            setContainerWidth: _mobx.action,
            setContainerOffset: _mobx.action,
            applyBanner: _mobx.action
        });
    }
    static layout(state) {
        const { containerWidth, targetRowHeightPx, minRowHeightPx, maxRowHeightPx, horizontalGutterPx, minElements = 1, minItemWidthPx, hideIncompleteRow, computeMidPoints, alignLastRowHeight } = state;
        if (containerWidth == null) return;
        let rowHeightWithoutEl;
        let rowHeightIncludingEl = 0;
        let pendingRowElements = [];
        const rowLimit = state.rowLimit || Infinity;
        const previousRows = [
            ...state.rows
        ];
        state.rows = [];
        const sizedChildren = state.children.filter((el)=>el.width > 0 && el.height > 0);
        const scaledChildren = MasonryPresenter.scaleChildren(sizedChildren, targetRowHeightPx);
        let nPositionedElements = 0;
        if (scaledChildren.length > 0) {
            pendingRowElements = [
                scaledChildren[0]
            ];
            rowHeightIncludingEl = MasonryPresenter.getRowHeight(pendingRowElements, containerWidth, horizontalGutterPx, minItemWidthPx);
        }
        for (const el of scaledChildren.slice(1)) {
            rowHeightWithoutEl = rowHeightIncludingEl;
            rowHeightIncludingEl = MasonryPresenter.getRowHeight([
                ...pendingRowElements,
                el
            ], containerWidth, horizontalGutterPx, minItemWidthPx);
            if (MasonryPresenter.shouldRowExcludeEl(rowHeightWithoutEl, rowHeightIncludingEl, targetRowHeightPx, minRowHeightPx)) {
                const initFooterHeight = MasonryPresenter.getInitFooterHeight(state.rows, previousRows, pendingRowElements);
                state.rows.push(MasonryPresenter.getMeasuredRow(pendingRowElements, rowHeightWithoutEl, minItemWidthPx, minRowHeightPx, maxRowHeightPx, initFooterHeight));
                nPositionedElements = nPositionedElements + pendingRowElements.length;
                if (rowLimit <= state.rows.length && nPositionedElements >= minElements)
                    break;
                pendingRowElements = [
                    el
                ];
                rowHeightIncludingEl = MasonryPresenter.getRowHeight(pendingRowElements, containerWidth, horizontalGutterPx, minItemWidthPx);
            } else
                pendingRowElements.push(el);
        }
        if (pendingRowElements.length > 0 && (rowLimit > state.rows.length || minElements > nPositionedElements)) {
            const isRowContainsEmptySpace = MasonryPresenter.rowContainsEmptySpace(pendingRowElements, containerWidth, horizontalGutterPx);
            if (hideIncompleteRow && isRowContainsEmptySpace && state.rows.length > 0)
                return;
            const initFooterHeight = MasonryPresenter.getInitFooterHeight(state.rows, previousRows, pendingRowElements);
            const lastRowHeight = alignLastRowHeight && isRowContainsEmptySpace && state.rows[state.rows.length - 1]?.height ? state.rows[state.rows.length - 1].height : Math.min(targetRowHeightPx, rowHeightIncludingEl);
            state.rows.push(MasonryPresenter.getMeasuredRow(pendingRowElements, lastRowHeight, minItemWidthPx, minRowHeightPx, maxRowHeightPx, initFooterHeight));
        }
        let index = 0;
        const midPointCache = new Map();
        state.rows.forEach((row, rowIndex)=>{
            row.elements.forEach((element, columnIndex)=>{
                const { onLayoutSet } = element.child.props;
                let elementAboveIndex;
                let elementBelowIndex;
                if (computeMidPoints) {
                    const midPoint = MasonryPresenter.getMidPoint({
                        midPointCache,
                        currentRow: row,
                        element,
                        index
                    });
                    const previousRow = rowIndex > 0 && state.rows[rowIndex - 1];
                    const nextRow = rowIndex + 1 < state.rows.length && state.rows[rowIndex + 1];
                    elementAboveIndex = previousRow ? MasonryPresenter.getNextIndexWithClosestMidPoint({
                        row: previousRow,
                        midPointCache,
                        midPoint,
                        firstElementIndex: index - columnIndex - previousRow.elements.length
                    }) : undefined;
                    elementBelowIndex = nextRow ? MasonryPresenter.getNextIndexWithClosestMidPoint({
                        row: nextRow,
                        midPointCache,
                        midPoint,
                        firstElementIndex: index - columnIndex + row.elements.length
                    }) : undefined;
                }
                onLayoutSet?.({
                    row: rowIndex,
                    column: columnIndex,
                    index,
                    elementAboveIndex,
                    elementBelowIndex
                });
                index++;
            });
        });
    }
    static getNextIndexWithClosestMidPoint({ row, midPointCache, midPoint, firstElementIndex }) {
        let minMidPointDist = Infinity;
        let indexOfClosestMidPoint;
        let column = 0;
        for (const element of row.elements){
            const offsetIndex = firstElementIndex + column;
            const elMidPoint = MasonryPresenter.getMidPoint({
                midPointCache,
                currentRow: row,
                element,
                index: offsetIndex
            });
            const dist = Math.abs(elMidPoint - midPoint);
            if (dist < minMidPointDist) {
                minMidPointDist = dist;
                indexOfClosestMidPoint = offsetIndex;
            }
            column++;
        }
        return indexOfClosestMidPoint;
    }
    static getMidPoint({ midPointCache, currentRow, element, index }) {
        let midPoint = midPointCache.get(index);
        if (midPoint) return midPoint;
        let leftOffset = 0;
        for (const el of currentRow.elements){
            if (el === element) break;
            leftOffset += el.width;
        }
        midPoint = leftOffset + element.width / 2;
        midPointCache.set(index, midPoint);
        return midPoint;
    }
    static getInitFooterHeight(currentRows, previousRows, pendingRowElements) {
        const hasFooter = pendingRowElements.some((el)=>el.footer) || previousRows.some((row)=>row.Footer != null);
        const previousFooterHeight = currentRows.length < previousRows.length ? previousRows[currentRows.length].footerHeight : 0;
        return hasFooter ? previousFooterHeight : 0;
    }
    static scaleChildren(children, targetHeight) {
        return children.map((child)=>MasonryPresenter.scaleToTargetHeight(child, targetHeight));
    }
    static scaleToTargetHeight(measuredChild, targetHeight) {
        const el = {
            ...measuredChild
        };
        const scale = targetHeight / el.height;
        el.width = Math.max(el.minWidth || 0, scale * el.width);
        el.height = targetHeight;
        return el;
    }
    static shouldRowExcludeEl(
    rowHeightWithoutEl,
    rowHeightIncludingEl,
    targetRowHeight,
    minRowHeight = 0
) {
        return !(rowHeightWithoutEl === 0 || rowHeightIncludingEl >= targetRowHeight || Math.abs(targetRowHeight - rowHeightWithoutEl) > Math.abs(targetRowHeight - rowHeightIncludingEl)) || rowHeightIncludingEl < minRowHeight || rowHeightIncludingEl === 0;
    }
    static getRowHeight(children, containerWidth, horizontalGutterPx, minItemWidth) {
        _preconditions.Preconditions.checkState(children.length > 0, 'row has no children');
        const totalGutterSpace = MasonryPresenter.getTotalGutterSpace(children, horizontalGutterPx);
        if (children.length * minItemWidth > containerWidth - totalGutterSpace)
        return 0;
        const rowWidth = MasonryPresenter.getChildrenWidth(children);
        const scale = (containerWidth - totalGutterSpace) / rowWidth;
        const wideEnoughChildren = children.filter((el)=>el.width * scale >= minItemWidth);
        if (wideEnoughChildren.length === children.length)
        return scale * children[0].height;
        if (!wideEnoughChildren.length)
        return 0;
        const nNarrowChildren = children.length - wideEnoughChildren.length;
        return MasonryPresenter.getRowHeight(wideEnoughChildren, containerWidth - nNarrowChildren * minItemWidth - nNarrowChildren * horizontalGutterPx, horizontalGutterPx, minItemWidth);
    }
    static getMeasuredRow(
    elements,
    rowHeight,
    minItemWidth,
    minRowHeightPx = 0,
    maxRowHeightPx = Number.MAX_VALUE,
    initFooterHeight = 0
) {
        return {
            height: Math.max(minRowHeightPx, Math.min(rowHeight, maxRowHeightPx)),
            elements: elements.map((el)=>{
                const scale = rowHeight / el.height;
                return {
                    child: el.child,
                    width: Math.max(scale * el.width, minItemWidth, el.minWidth || 0),
                    footer: el.footer
                };
            }),
            footerHeight: initFooterHeight
        };
    }
    static rowContainsEmptySpace(children, containerWidth, horizontalGutterPx) {
        const totalGutterSpace = MasonryPresenter.getTotalGutterSpace(children, horizontalGutterPx);
        const rowWidth = MasonryPresenter.getChildrenWidth(children);
        return containerWidth > rowWidth + totalGutterSpace;
    }
    static getTotalGutterSpace(children, horizontalGutterPx) {
        return (children.length - 1) * horizontalGutterPx;
    }
    static getChildrenWidth(children) {
        return children.reduce((sum, el)=>sum + el.width, 0);
    }
    updateChildren(state, children) {
        state.children = children != null ? children.map(MasonryPresenter.getMeasuredElement) : [];
        MasonryPresenter.layout(state);
    }
    static getMeasuredElement(child) {
        return {
            child,
            width: child.props.targetWidthPx,
            height: child.props.targetHeightPx,
            footer: child.props.footer,
            minWidth: child.props.minWidthPx
        };
    }
    setContainerWidth(state, containerWidth) {
        if (containerWidth !== state.containerWidth && containerWidth > 0) {
            state.containerWidth = containerWidth;
            MasonryPresenter.layout(state);
        }
    }
    setContainerOffset(state, offset) {
        state.verticalOffset = offset;
    }
    applyBanner(state, Banner) {
        state.rows = state.rows.map((row)=>({
                ...row,
                Footer: Banner
            }));
    }
    constructor(){
        MasonryPresenter._makeObservable(this);
    }
}
