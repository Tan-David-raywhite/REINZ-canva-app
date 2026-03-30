import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { getSpaceValue } from '../../../metrics/metrics';
import { generateStyle } from '../../../responsive/responsive';
import styles, { customProperties } from './spacer.css';
const sizePropertyMap = {
    default: customProperties.size,
    smallUp: customProperties.smallUpSize,
    mediumUp: customProperties.mediumUpSize,
    largeUp: customProperties.largeUpSize,
    xLargeUp: customProperties.xLargeUpSize
};
export const Spacer = ({ size, direction = 'both' })=>{
    return _jsx("span", {
        className: classNames(styles.spacer, {
            [styles.horizontal]: direction === 'horizontal',
            [styles.vertical]: direction === 'vertical'
        }),
        style: generateStyle(sizePropertyMap, size, getSpaceValue),
        "aria-hidden": true
    });
};
