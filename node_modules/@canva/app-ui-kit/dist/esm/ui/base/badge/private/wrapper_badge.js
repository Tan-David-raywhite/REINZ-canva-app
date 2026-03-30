import { jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import styles from './badge.css';
export const WrapperBadge = React.memo(({ children, badge, wrapInset })=>{
    return _jsxs("div", {
        className: classNames(styles.wrapper, {
            [styles.wrapOutset1U]: wrapInset === '-1u',
            [styles.wrapOutset05U]: wrapInset === '-0.5u',
            [styles.wrapInset05U]: wrapInset === '0.5u',
            [styles.wrapInset1U]: wrapInset === '1u'
        }),
        children: [
            children,
            badge
        ]
    });
});
