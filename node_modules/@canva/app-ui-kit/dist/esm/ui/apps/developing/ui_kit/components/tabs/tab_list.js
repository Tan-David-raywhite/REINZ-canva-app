import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { TabList as EaselTabList } from '../../../../../base/tabs/tabs';
/** 
 * The horizontal alignment of Tab items within the TabList.
 */ export const align = [
    'start',
    'end',
    'stretch'
];
/** 
 * Wrapper component for Tab and other children elements.
 *
 * This enables keyboard navigation (such as left and right arrow, home, end) for the
 * Tab items and other focusable elements within.
 */ export function TabList(props) {
    return _jsx(EaselTabList, {
        align: "stretch",
        ...props,
        bleedX: false
    });
}
