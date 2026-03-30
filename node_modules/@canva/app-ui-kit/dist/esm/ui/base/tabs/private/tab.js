import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { memo } from 'react';
import { useIsHoveringInput } from '../../a11y/pointer_input_state/pointer_input_state';
import { BasicButton } from '../../button/button';
import { Column, Columns, Rows } from '../../layout/layout';
import { useEnableAnimations } from '../../provider/provider';
import { InheritColor, Text } from '../../typography/typography';
import { useRegisterTabsElements, useTab } from './behavior';
import styles, { customProperties } from './tab.css';
import { customProperties as tabListCustomProperties } from './tab_list.css';
export const Tab = ({ id, active, onClick, tooltipLabel, ariaLabel = tooltipLabel, ariaControls, children, start, end, layout = 'horizontal' })=>{
    const tabProps = useTab({
        id,
        active,
        onClick,
        ariaControls
    });
    const animate = useEnableAnimations();
    const isHoverSupported = useIsHoveringInput();
    const { ref: collectionRef } = useRegisterTabsElements(tabProps.active);
    const content = _jsxs("span", {
        className: styles.contentWrapper,
        children: [
            _jsx("span", {
                className: styles.boldContent,
                "aria-hidden": true,
                children: _jsx(Text, {
                    tagName: "span",
                    className: styles.text,
                    weight: "bold",
                    children: children
                })
            }),
            _jsx("span", {
                className: styles.content,
                children: _jsx(Text, {
                    tagName: "span",
                    className: styles.text,
                    tone: InheritColor,
                    children: children
                })
            })
        ]
    });
    return _jsx("div", {
        className: styles.wrapper,
        children: _jsx(BasicButton, {
            buttonRef: collectionRef,
            ariaLabel: ariaLabel,
            tooltipLabel: tooltipLabel,
            className: classNames(styles.button, animate && styles.animate, tabProps.active && styles.active, isHoverSupported && styles.hoverSupported),
            size: "medium",
            noChildWrapper: true,
            ...tabProps,
            children: _jsx("span", {
                className: styles.buttonInner,
                style: {
                    [customProperties.tabListBleedX]: `var(${tabListCustomProperties.bleedX})`
                },
                children: _jsx(TabContentWithDecorators, {
                    start: start,
                    end: end,
                    layout: layout,
                    children: content
                })
            })
        })
    });
};
const TabContentWithDecorators = memo(({ children, start, end, layout })=>{
    if (!start && !end) return children;
    const spacing = '1u';
    if (layout === 'horizontal') return _jsxs(Columns, {
        tagName: "span",
        alignY: "center",
        spacing: spacing,
        children: [
            start && _jsx(Column, {
                tagName: "span",
                width: "content",
                children: start
            }),
            _jsx(Column, {
                tagName: "span",
                children: children
            }),
            end && _jsx(Column, {
                tagName: "span",
                width: "content",
                children: end
            })
        ]
    });
    return _jsxs(Rows, {
        tagName: "span",
        spacing: spacing,
        align: "center",
        children: [
            start,
            children,
            end
        ]
    });
});
