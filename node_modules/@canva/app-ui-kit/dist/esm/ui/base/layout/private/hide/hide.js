import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { getStyle } from './hide.css';
export const Hide = ({ children, above, below, tagName: TagName = 'div' })=>{
    return _jsx(TagName, {
        className: classNames(above && getStyle(`hiddenAbove${capitalize(above)}`), below && getStyle(`hiddenBelow${capitalize(below)}`)),
        children: children
    });
};
function capitalize(str) {
    return str.charAt(0).toUpperCase() + str.slice(1);
}
