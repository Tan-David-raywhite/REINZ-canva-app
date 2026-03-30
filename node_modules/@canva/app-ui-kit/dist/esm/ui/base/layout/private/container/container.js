import { jsx as _jsx } from "react/jsx-runtime";
import { toCallbackRef } from '../../../../../base/react/callback_ref';
import classNames from 'classnames';
import 'react';
import { commonPropsToDOMProps } from '../../../box/common_props/common_props';
import styles, { getStyle } from './container.css';
export const widths = [
    'medium',
    'large'
];
export const heights = [
    'full',
    'unset'
];
export function Container({ children, width, height, tagName: TagName = 'div', ref, ...rest }) {
    return _jsx(TagName, {
        className: classNames(styles.container, getStyle(width), {
            [styles.fullHeight]: height === 'full'
        }),
        ref: toCallbackRef(ref),
        ...commonPropsToDOMProps(rest),
        children: children
    });
}
