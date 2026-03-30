import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { useRef } from 'react';
import { TabsElementsProvider, useTabsElements } from './behavior';
import styles from './tab_panels.css';
export const TabPanels = ({ children })=>{
    return _jsx(TabsElementsProvider, {
        children: _jsx(TabPanelsContainer, {
            children: children
        })
    });
};
const TabPanelsContainer = ({ children })=>{
    const ref = useRef(null);
    const { isAnimating } = useTabsElements();
    return _jsx("div", {
        ref: ref,
        className: classNames(styles.container, isAnimating && styles.hideOverflow),
        children: children
    });
};
