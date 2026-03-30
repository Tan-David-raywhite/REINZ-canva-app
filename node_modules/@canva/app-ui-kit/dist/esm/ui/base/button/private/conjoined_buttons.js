import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import styles from './button.css';
export function ConjoinedButtons({ children }) {
    if (React.Children.count(children) < 2) return children;
    return _jsx("div", {
        className: styles.conjoinedButtons,
        children: React.Children.map(children, (child, index)=>_jsx("div", {
                className: styles.element,
                children: child
            }, index))
    });
}
