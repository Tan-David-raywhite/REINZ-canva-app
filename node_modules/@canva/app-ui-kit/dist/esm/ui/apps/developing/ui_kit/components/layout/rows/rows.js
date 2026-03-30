import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Rows as EaselRows } from '../../../../../../base/layout/layout';
/** 
 * Arranges its children vertically, into rows, with consistent spacing between each row.
 */ export function Rows(props) {
    return _jsx(EaselRows, {
        spacing: props.spacing,
        align: props.align,
        children: props.children
    });
}
