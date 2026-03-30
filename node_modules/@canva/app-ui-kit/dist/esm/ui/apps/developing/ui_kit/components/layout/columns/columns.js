import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Column as EaselColumn, Columns as EaselColumns } from '../../../../../../base/layout/layout';
export function Column(props) {
    return _jsx(EaselColumn, {
        width: props.width,
        children: props.children
    });
}
/** 
 * Arranges one or more `Column` components into a horizontal layout.
 */ export function Columns(props) {
    return _jsx(EaselColumns, {
        children: props.children,
        spacing: props.spacing,
        align: props.align,
        alignY: props.alignY
    });
}
