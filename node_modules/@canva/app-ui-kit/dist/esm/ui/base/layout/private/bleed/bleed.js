import { jsx as _jsx } from "react/jsx-runtime";
import { toCallbackRef } from '../../../../../base/react/callback_ref';
import classNames from 'classnames';
import 'react';
import { commonPropsToDOMProps } from '../../../box/common_props/common_props';
import { getSpaceValue } from '../../../metrics/metrics';
import { generateStyle } from '../../../responsive/responsive';
import styles, { customProperties } from './bleed.css';
export function Bleed(
    { all, x, y, top, bottom, start, end, tagName: TagName = 'div', children, ref, ...rest }
) {
    const preventMarginCollapse = all || y || top || bottom;
    const content = _jsx(TagName, {
        className: classNames(styles.hasBleed, {
            [styles.block]: TagName === 'span'
        }),
        style: {
            ...(all && generateStyle(allPropertyMap, all, getSpaceValue)),
            ...(x && generateStyle(xPropertyMap, x, getSpaceValue)),
            ...(y && generateStyle(yPropertyMap, y, getSpaceValue)),
            ...(top && generateStyle(topPropertyMap, top, getSpaceValue)),
            ...(bottom && generateStyle(bottomPropertyMap, bottom, getSpaceValue)),
            ...(start && generateStyle(startPropertyMap, start, getSpaceValue)),
            ...(end && generateStyle(endPropertyMap, end, getSpaceValue))
        },
        ...commonPropsToDOMProps(rest),
        ref: preventMarginCollapse ? undefined : toCallbackRef(ref),
        children: children
    });
    return preventMarginCollapse ? _jsx(TagName, {
        className: styles.noCollapse,
        ref: toCallbackRef(ref),
        children: content
    }) : content;
}
const allPropertyMap = {
    default: customProperties.bleed,
    smallUp: customProperties.smallUpBleed,
    mediumUp: customProperties.mediumUpBleed,
    largeUp: customProperties.largeUpBleed,
    xLargeUp: customProperties.xLargeUpBleed
};
const xPropertyMap = {
    default: customProperties.bleedX,
    smallUp: customProperties.smallUpBleedX,
    mediumUp: customProperties.mediumUpBleedX,
    largeUp: customProperties.largeUpBleedX,
    xLargeUp: customProperties.xLargeUpBleedX
};
const yPropertyMap = {
    default: customProperties.bleedY,
    smallUp: customProperties.smallUpBleedY,
    mediumUp: customProperties.mediumUpBleedY,
    largeUp: customProperties.largeUpBleedY,
    xLargeUp: customProperties.xLargeUpBleedY
};
const topPropertyMap = {
    default: customProperties.bleedTop,
    smallUp: customProperties.smallUpBleedTop,
    mediumUp: customProperties.mediumUpBleedTop,
    largeUp: customProperties.largeUpBleedTop,
    xLargeUp: customProperties.xLargeUpBleedTop
};
const bottomPropertyMap = {
    default: customProperties.bleedBottom,
    smallUp: customProperties.smallUpBleedBottom,
    mediumUp: customProperties.mediumUpBleedBottom,
    largeUp: customProperties.largeUpBleedBottom,
    xLargeUp: customProperties.xLargeUpBleedBottom
};
const startPropertyMap = {
    default: customProperties.bleedStart,
    smallUp: customProperties.smallUpBleedStart,
    mediumUp: customProperties.mediumUpBleedStart,
    largeUp: customProperties.largeUpBleedStart,
    xLargeUp: customProperties.xLargeUpBleedStart
};
const endPropertyMap = {
    default: customProperties.bleedEnd,
    smallUp: customProperties.smallUpBleedEnd,
    mediumUp: customProperties.mediumUpBleedEnd,
    largeUp: customProperties.largeUpBleedEnd,
    xLargeUp: customProperties.xLargeUpBleedEnd
};
