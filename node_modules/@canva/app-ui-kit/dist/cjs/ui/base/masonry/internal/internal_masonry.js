"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "InternalMasonryContainer", {
    enumerable: true,
    get: function() {
        return InternalMasonryContainer;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _reactmeasure = _interop_require_default(require("react-measure"));
const _provider = require('../../provider/provider');
const _masonrycss = _interop_require_default(require("../masonry.css"));
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
const InternalMasonryContainer = (0, _mobxreactlite.observer)(({ rows, rowVisibility, presenter, verticalGutterPx, horizontalGutterPx, containerWidth })=>{
    let firstVisible = 0;
    let lastVisible = 0;
    let visibleRows = rows;
    let beforeHeight = 0;
    let afterHeight = 0;
    if (rowVisibility) {
        const { renderedFirstVisible, renderedLastVisible, scrollingFirstVisible, scrollingLastVisible } = rowVisibility;
        firstVisible = Math.min(renderedFirstVisible, scrollingFirstVisible);
        lastVisible = Math.max(renderedLastVisible, scrollingLastVisible);
        visibleRows = rows.slice(firstVisible, lastVisible);
        beforeHeight = rows.slice(0, firstVisible).reduce((height, row)=>height + row.height + row.footerHeight + verticalGutterPx, 0);
        afterHeight = rows.slice(lastVisible).reduce((height, row)=>height + row.height + row.footerHeight + verticalGutterPx, 0);
    }
    return (0, _jsxruntime.jsxs)("div", {
        className: _masonrycss.default.masonry,
        style: {
            margin: `-${verticalGutterPx / 2}px 0`
        },
        children: [
            rowVisibility && (0, _jsxruntime.jsx)("div", {
                className: _masonrycss.default.spacer,
                style: {
                    height: beforeHeight
                }
            }, "spacer-before"),
            visibleRows.map((row, index)=>{
                const rowIndex = index + firstVisible;
                const debounceElement = !!rowVisibility && (rowIndex < rowVisibility.renderedFirstVisible || rowIndex > rowVisibility.renderedLastVisible);
                return (0, _jsxruntime.jsx)(Row, {
                    containerWidth: containerWidth,
                    row: row,
                    index: rowIndex,
                    height: row.height,
                    margin: verticalGutterPx / 2,
                    horizontalGutterPx: horizontalGutterPx,
                    debounceElement: debounceElement
                }, rowIndex);
            }),
            rowVisibility && (0, _jsxruntime.jsx)("div", {
                className: _masonrycss.default.spacer,
                style: {
                    height: afterHeight
                }
            }, "spacer-after")
        ]
    });
});
const Row = ({ row, index, height, margin, horizontalGutterPx, containerWidth = 0, debounceElement })=>{
    const isRtl = (0, _provider.useDirection)() === 'RTL';
    const onAfterRowResize = _react.useCallback((contentRect)=>{
        if (contentRect.client != null && contentRect.client.height > 0) row.footerHeight = contentRect.client.height;
    }, [
        row
    ]);
    const firstElWithExpandableFooterIndex = row.elements.findIndex((el)=>el.footer?.expandable);
    const hasExpandableFooter = firstElWithExpandableFooterIndex !== -1;
    const hasNonExpandableFooter = row.elements.some((el)=>el.footer?.nonExpandable);
    let gridTemplateAreas;
    let gridTemplateColumns;
    if (hasExpandableFooter) {
        let currentElWithFooter = firstElWithExpandableFooterIndex;
        gridTemplateAreas = row.elements.reduce((areas, el, index)=>{
            if (el.footer?.expandable) currentElWithFooter = index;
            return isRtl ? `item-${currentElWithFooter} ${areas}` : `${areas} item-${currentElWithFooter}`;
        }, '');
        gridTemplateColumns = row.elements.reduce((columns, el)=>isRtl ? `${el.width}px ${columns}` : `${columns} ${el.width}px`, '');
        const totalWidth = row.elements.reduce((sum, el)=>sum + el.width + horizontalGutterPx, -horizontalGutterPx);
        if (totalWidth < containerWidth) {
            if (isRtl) {
                gridTemplateAreas = `item-${currentElWithFooter} ${gridTemplateAreas}`;
                gridTemplateColumns = `${Math.max(0, containerWidth - totalWidth - horizontalGutterPx)}px ${gridTemplateColumns}`;
            } else {
                gridTemplateAreas = `${gridTemplateAreas} item-${currentElWithFooter}`;
                gridTemplateColumns = `${gridTemplateColumns} ${Math.max(0, containerWidth - totalWidth - horizontalGutterPx)}px`;
            }
        }
        gridTemplateAreas = `'${gridTemplateAreas}'`;
    }
    return (0, _jsxruntime.jsxs)("div", {
        className: _masonrycss.default.row,
        style: {
            margin: `${margin}px 0`
        },
        children: [
            (0, _jsxruntime.jsx)("div", {
                className: _masonrycss.default.elements,
                style: {
                    height,
                    margin: `0 -${horizontalGutterPx / 2}px`
                },
                children: row.elements.map(({ child, width })=>(0, _jsxruntime.jsx)("div", {
                        className: _masonrycss.default.element,
                        style: {
                            width,
                            margin: `0 ${horizontalGutterPx / 2}px`,
                            height
                        },
                        children: _react.cloneElement(child, {
                            resizing: debounceElement
                        })
                    }, String(child.key)))
            }),
            (row.Footer || hasExpandableFooter || hasNonExpandableFooter) && (0, _jsxruntime.jsx)(_reactmeasure.default, {
                client: true,
                onResize: onAfterRowResize,
                children: ({ measureRef })=>(0, _jsxruntime.jsxs)("div", {
                        ref: measureRef,
                        children: [
                            hasNonExpandableFooter && (0, _jsxruntime.jsx)("div", {
                                className: _masonrycss.default.footerNonExpandable,
                                style: {
                                    margin: `0 -${horizontalGutterPx / 2}px`
                                },
                                children: row.elements.map((el, key)=>(0, _jsxruntime.jsx)("div", {
                                        style: {
                                            width: el.width,
                                            margin: `0 ${horizontalGutterPx / 2}px`
                                        },
                                        children: el.footer?.nonExpandable
                                    }, key))
                            }),
                            hasExpandableFooter && (0, _jsxruntime.jsx)("div", {
                                className: _masonrycss.default.footerExpandable,
                                style: {
                                    gridColumnGap: horizontalGutterPx,
                                    gridTemplateColumns,
                                    gridTemplateAreas
                                },
                                children: row.elements.map((el, key)=>el.footer?.expandable && (0, _jsxruntime.jsx)("div", {
                                        style: {
                                            gridArea: `item-${key}`
                                        },
                                        children: el.footer.expandable
                                    }, key))
                            }),
                            row.Footer && (0, _jsxruntime.jsx)(row.Footer, {
                                rowIndex: index
                            })
                        ]
                    })
            })
        ]
    });
};
