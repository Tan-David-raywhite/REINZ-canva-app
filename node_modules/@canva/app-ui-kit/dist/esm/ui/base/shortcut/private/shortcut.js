import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import { makeHumanReadableArray, makeHumanReadableString } from '../../key_combinations/key_combinations';
import { useDirection } from '../../provider/provider';
import styles, { getStyle } from './shortcut.css';
export const Shortcut = React.memo(
    ({ combination, platform, compact = false, size = 'medium', className })=>{
        const direction = useDirection();
        const keyClassName = classNames(styles.key, getStyle(size));
        if (compact) return _jsx(Key, {
            className: classNames(className, keyClassName),
            children: makeHumanReadableString(combination, direction, platform)
        });
        const keyStrings = makeHumanReadableArray(combination, direction, platform);
        return keyStrings.length === 1 ? _jsx(Key, {
            className: classNames(className, keyClassName),
            children: keyStrings[0]
        }) : _jsx("kbd", {
            className: classNames(className, styles.keygroup),
            children: keyStrings.map((keyString)=>_jsx(Key, {
                    className: keyClassName,
                    children: keyString
                }, keyString))
        });
    }
);
Shortcut.displayName = 'Shortcut';
const Key = ({ className, children })=>{
    return _jsx("kbd", {
        className: classNames(className, children.length === 1 && styles.square),
        children: children
    });
};
