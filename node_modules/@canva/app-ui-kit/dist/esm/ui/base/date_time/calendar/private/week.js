import { jsx as _jsx } from "react/jsx-runtime";
import classNames from 'classnames';
import * as React from 'react';
import styles from './week.css';
export const DAYS_IN_WEEK = 7;
export const CalendarWeek = React.memo(({ children, className })=>_jsx("div", {
        className: classNames(styles.week, className),
        role: "row",
        children: children
    }));
