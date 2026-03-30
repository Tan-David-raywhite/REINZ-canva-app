import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import styles from './card.css';
export const CardAction = ({ children, position = 'relative' })=>{
    return children != null ? _jsx("div", {
        className: classNames(styles.cardAction, {
            [styles.relative]: position === 'relative'
        }),
        children: children
    }) : null;
};
