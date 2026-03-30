import { jsx as _jsx } from "react/jsx-runtime";
import { UnreachableError } from '../../../../../base/preconditions';
import { toCallbackRef } from '../../../../../base/react/callback_ref';
import 'react';
import { commonPropsToDOMProps } from '../../../box/common_props/common_props';
import { getSpaceValue } from '../../../metrics/metrics';
import { generateStyle } from '../../../responsive/responsive';
import styles, { customProperties } from './grid.css';
export const rowSizes = [
    'auto',
    'equal'
];
export const aligns = [
    'stretch',
    'start',
    'center',
    'end'
];
const spacingPropertyMap = {
    default: customProperties.spacing,
    smallUp: customProperties.smallUpSpacing,
    mediumUp: customProperties.mediumUpSpacing,
    largeUp: customProperties.largeUpSpacing,
    xLargeUp: customProperties.xLargeUpSpacing
};
const spacingXPropertyMap = {
    default: customProperties.spacingX,
    smallUp: customProperties.smallUpSpacingX,
    mediumUp: customProperties.mediumUpSpacingX,
    largeUp: customProperties.largeUpSpacingX,
    xLargeUp: customProperties.xLargeUpSpacingX
};
const spacingYPropertyMap = {
    default: customProperties.spacingY,
    smallUp: customProperties.smallUpSpacingY,
    mediumUp: customProperties.mediumUpSpacingY,
    largeUp: customProperties.largeUpSpacingY,
    xLargeUp: customProperties.xLargeUpSpacingY
};
const columnsPropertyMap = {
    default: customProperties.columns,
    smallUp: customProperties.smallUpColumns,
    mediumUp: customProperties.mediumUpColumns,
    largeUp: customProperties.largeUpColumns,
    xLargeUp: customProperties.xLargeUpColumns
};
const rowSizePropertyMap = {
    default: customProperties.rowSize,
    smallUp: customProperties.smallUpRowSize,
    mediumUp: customProperties.mediumUpRowSize,
    largeUp: customProperties.largeUpRowSize,
    xLargeUp: customProperties.xLargeUpRowSize
};
const alignYPropertyMap = {
    default: customProperties.alignY,
    smallUp: customProperties.smallUpAlignY,
    mediumUp: customProperties.mediumUpAlignY,
    largeUp: customProperties.largeUpAlignY,
    xLargeUp: customProperties.xLargeUpAlignY
};
const alignXPropertyMap = {
    default: customProperties.alignX,
    smallUp: customProperties.smallUpAlignX,
    mediumUp: customProperties.mediumUpAlignX,
    largeUp: customProperties.largeUpAlignX,
    xLargeUp: customProperties.xLargeUpAlignX
};
export function Grid(
    { children, spacing, spacingX, spacingY, columns, rowSize, tagName: TagName = 'div', alignY, alignX, ref, ...rest }
) {
    return (_jsx(TagName, {
                className: styles.grid,
                style: {
                    ...(spacing && generateStyle(spacingPropertyMap, spacing, getSpaceValue)),
                    ...(spacingX && generateStyle(spacingXPropertyMap, spacingX, getSpaceValue)),
                    ...(spacingY && generateStyle(spacingYPropertyMap, spacingY, getSpaceValue)),
                    ...(columns && generateStyle(columnsPropertyMap, columns)),
                    ...(rowSize && generateStyle(rowSizePropertyMap, rowSize, getRowSizeValue)),
                    ...(alignY && generateStyle(alignYPropertyMap, alignY)),
                    ...(alignX && generateStyle(alignXPropertyMap, alignX))
                },
                ref: toCallbackRef(ref),
                ...commonPropsToDOMProps(rest),
                children: children
            }));
}
function getRowSizeValue(rowSize) {
    switch(rowSize){
        case 'auto':
            return 'auto';
        case 'equal':
            return '1fr';
        default:
            throw new UnreachableError(rowSize);
    }
}
