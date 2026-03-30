import { jsx as _jsx } from "react/jsx-runtime";
import { toCallbackRef } from '../../../../../base/react/callback_ref';
import 'react';
import { commonPropsToDOMProps } from '../../../box/common_props/common_props';
import { getSpaceValue } from '../../../metrics/metrics';
import { generateStyle } from '../../../responsive/responsive';
import styles, { customProperties } from './rows.css';
export const aligns = [
    'start',
    'center',
    'end',
    'stretch'
];
const spacingPropertyMap = {
    default: customProperties.spacing,
    smallUp: customProperties.smallUpSpacing,
    mediumUp: customProperties.mediumUpSpacing,
    largeUp: customProperties.largeUpSpacing,
    xLargeUp: customProperties.xLargeUpSpacing
};
const alignPropertyMap = {
    default: customProperties.align,
    smallUp: customProperties.smallUpAlign,
    mediumUp: customProperties.mediumUpAlign,
    largeUp: customProperties.largeUpAlign,
    xLargeUp: customProperties.xLargeUpAlign
};
export function Rows({ children, spacing, align, tagName: TagName = 'div', ref, ...rest }) {
    return (_jsx(TagName, {
                className: styles.rows,
                style: {
                    ...(spacing && generateStyle(spacingPropertyMap, spacing, getSpaceValue)),
                    ...(align && generateStyle(alignPropertyMap, align))
                },
                ref: toCallbackRef(ref),
                ...commonPropsToDOMProps(rest),
                children: children
            }));
}
