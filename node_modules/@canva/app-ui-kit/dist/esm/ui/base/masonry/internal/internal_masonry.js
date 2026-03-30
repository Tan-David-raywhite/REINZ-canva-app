import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { observer } from 'mobx-react-lite';
import * as React from 'react';
import Measure from 'react-measure';
import { useDirection } from '../../provider/provider';
import styles from '../masonry.css';
export const InternalMasonryContainer = observer(({ rows, rowVisibility, presenter, verticalGutterPx, horizontalGutterPx, containerWidth })=>{
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
    return _jsxs("div", {
        className: styles.masonry,
        style: {
            margin: `-${verticalGutterPx / 2}px 0`
        },
        children: [
            rowVisibility && _jsx("div", {
                className: styles.spacer,
                style: {
                    height: beforeHeight
                }
            }, "spacer-before"),
            visibleRows.map((row, index)=>{
                const rowIndex = index + firstVisible;
                const debounceElement = !!rowVisibility && (rowIndex < rowVisibility.renderedFirstVisible || rowIndex > rowVisibility.renderedLastVisible);
                return _jsx(Row, {
                    containerWidth: containerWidth,
                    row: row,
                    index: rowIndex,
                    height: row.height,
                    margin: verticalGutterPx / 2,
                    horizontalGutterPx: horizontalGutterPx,
                    debounceElement: debounceElement
                }, rowIndex);
            }),
            rowVisibility && _jsx("div", {
                className: styles.spacer,
                style: {
                    height: afterHeight
                }
            }, "spacer-after")
        ]
    });
});
const Row = ({ row, index, height, margin, horizontalGutterPx, containerWidth = 0, debounceElement })=>{
    const isRtl = useDirection() === 'RTL';
    const onAfterRowResize = React.useCallback((contentRect)=>{
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
    return _jsxs("div", {
        className: styles.row,
        style: {
            margin: `${margin}px 0`
        },
        children: [
            _jsx("div", {
                className: styles.elements,
                style: {
                    height,
                    margin: `0 -${horizontalGutterPx / 2}px`
                },
                children: row.elements.map(({ child, width })=>_jsx("div", {
                        className: styles.element,
                        style: {
                            width,
                            margin: `0 ${horizontalGutterPx / 2}px`,
                            height
                        },
                        children: React.cloneElement(child, {
                            resizing: debounceElement
                        })
                    }, String(child.key)))
            }),
            (row.Footer || hasExpandableFooter || hasNonExpandableFooter) && _jsx(Measure, {
                client: true,
                onResize: onAfterRowResize,
                children: ({ measureRef })=>_jsxs("div", {
                        ref: measureRef,
                        children: [
                            hasNonExpandableFooter && _jsx("div", {
                                className: styles.footerNonExpandable,
                                style: {
                                    margin: `0 -${horizontalGutterPx / 2}px`
                                },
                                children: row.elements.map((el, key)=>_jsx("div", {
                                        style: {
                                            width: el.width,
                                            margin: `0 ${horizontalGutterPx / 2}px`
                                        },
                                        children: el.footer?.nonExpandable
                                    }, key))
                            }),
                            hasExpandableFooter && _jsx("div", {
                                className: styles.footerExpandable,
                                style: {
                                    gridColumnGap: horizontalGutterPx,
                                    gridTemplateColumns,
                                    gridTemplateAreas
                                },
                                children: row.elements.map((el, key)=>el.footer?.expandable && _jsx("div", {
                                        style: {
                                            gridArea: `item-${key}`
                                        },
                                        children: el.footer.expandable
                                    }, key))
                            }),
                            row.Footer && _jsx(row.Footer, {
                                rowIndex: index
                            })
                        ]
                    })
            })
        ]
    });
};
