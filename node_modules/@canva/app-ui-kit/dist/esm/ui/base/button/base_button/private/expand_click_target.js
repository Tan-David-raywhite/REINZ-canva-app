import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import styles from './expand_click_target.css';
export function ExpandClickTarget({ children }) {
    if (children == null) return _jsx("span", {
        "aria-hidden": true,
        className: styles.expandedClickTarget
    });
    return children({
        className: styles.expandClickTarget
    });
}
