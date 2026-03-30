import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import 'react';
import { AnimatedSpinnerIcon } from '../../icons/animated_spinner/icon';
import styles from './loading_indicator.css';
export const LoadingIndicator = ({ size = 'medium' })=>_jsx("span", {
        className: classNames(styles.indicator),
        children: _jsx(AnimatedSpinnerIcon, {
            size: size
        })
    });
