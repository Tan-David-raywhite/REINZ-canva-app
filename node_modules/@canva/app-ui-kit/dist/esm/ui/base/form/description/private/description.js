import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import styles, { getStyle } from './description.css';
export const Description = ({ tone = 'neutral', children, id })=>{
    if (children == null) return null;
    const hasChildrenArray = Array.isArray(children);
    const className = classNames(styles.description, getStyle(tone), {
        [styles.listItem]: hasChildrenArray
    });
    const role = tone === 'critical' ? 'alert' : undefined;
    if (hasChildrenArray) return _jsx("div", {
        id: id,
        className: styles.list,
        role: role,
        "aria-atomic": false,
        children: React.Children.map(children, (child, i)=>_jsx("p", {
                className: className,
                children: child
            }, i))
    });
    return _jsx("p", {
        id: id,
        className: className,
        role: role,
        children: children
    });
};
