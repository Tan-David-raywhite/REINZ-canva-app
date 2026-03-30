import { jsx as _jsx } from "react/jsx-runtime";
import { Preconditions } from '../../../../base/preconditions';
import 'react';
import { resolveUnitOrNumberSize } from '../../metrics/metrics';
import styles from './aspect_ratio.css';
export const AspectRatio = ({ ratio, children, width: widthProp, height: heightProp })=>{
    Preconditions.checkArgument(ratio > 0, 'Ratio must be greater than 0');
    if (widthProp == null && heightProp == null) {
        const containerStyles = {
            paddingTop: `${1 / ratio * 100}%`
        };
        return _jsx("div", {
            className: styles.container,
            style: containerStyles,
            children: _jsx("div", {
                className: styles.content,
                children: children
            })
        });
    }
    const width = resolveUnitOrNumberSize(widthProp);
    const height = resolveUnitOrNumberSize(heightProp);
    if (width != null) return _jsx("div", {
        style: {
            width,
            height: width / ratio,
            flexShrink: 0
        },
        children: children
    });
    return _jsx("div", {
        style: {
            height,
            width: height * ratio,
            flexShrink: 0
        },
        children: children
    });
};
