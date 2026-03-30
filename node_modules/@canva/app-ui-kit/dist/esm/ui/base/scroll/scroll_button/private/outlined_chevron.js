import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import styles from './outlined_chevron.css';
const SIZE_TO_DIMENSION = {
    tiny: 12,
    small: 16,
    medium: 24,
    large: 32
};
const CHEVRON_PATH = 'm9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06';
function ChevronIconBase({ orientation, size = 'medium', className, style, tone: _tone }) {
    const dimension = SIZE_TO_DIMENSION[size];
    const mirrorTransform = orientation === 'left' ? 'translate(24 0) scale(-1 1)' : undefined;
    return _jsx("span", {
        className: classNames(styles.icon, className),
        style: style,
        children: _jsx("svg", {
            width: dimension,
            height: dimension,
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            focusable: "false",
            className: styles.svg,
            children: _jsxs("g", {
                transform: mirrorTransform,
                children: [
                    _jsx("path", {
                        d: CHEVRON_PATH,
                        className: styles.outline,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    _jsx("path", {
                        d: CHEVRON_PATH,
                        className: styles.glyph
                    })
                ]
            })
        })
    });
}
export const OutlinedChevronRightIcon = (props)=>_jsx(ChevronIconBase, {
        ...props,
        orientation: "right"
    });
export const OutlinedChevronLeftIcon = (props)=>_jsx(ChevronIconBase, {
        ...props,
        orientation: "left"
    });
