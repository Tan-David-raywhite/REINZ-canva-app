import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Grid as EaselGrid } from '../../../../../../base/layout/layout';
/** 
 * Arranges its children into a grid layout, with each item in the grid being the same size.
 */ export function Grid(props) {
    return _jsx(EaselGrid, {
        children: props.children,
        columns: props.columns,
        spacing: props.spacing,
        spacingX: props.spacingX,
        spacingY: props.spacingY,
        alignY: props.alignY,
        alignX: props.alignX
    });
}
