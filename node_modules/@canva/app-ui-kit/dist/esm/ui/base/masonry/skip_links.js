import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { SkipLink } from '../a11y/skip_link/skip_link';
export const SkipLinks = React.memo(function SkipLinks({ messages, children }) {
    const idStart = React.useId();
    const idEnd = React.useId();
    return _jsxs(_Fragment, {
        children: [
            _jsx("span", {
                id: idStart
            }),
            _jsx(SkipLink, {
                to: idEnd,
                children: messages.skipToEnd
            }),
            children,
            _jsx(SkipLink, {
                to: idStart,
                children: messages.skipToStart
            }),
            _jsx("span", {
                id: idEnd
            })
        ]
    });
});
