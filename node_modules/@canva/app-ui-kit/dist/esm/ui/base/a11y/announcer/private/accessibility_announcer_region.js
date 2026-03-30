import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useEffect, useRef } from 'react';
import 'react';
import { useVisuallyHidden } from '../../screen_reader_content/screen_reader_content';
export const AccessibilityAnnouncerRegion = ({ onMount, onUnmount })=>{
    const assertiveRef = useRef(null);
    const politeRef = useRef(null);
    const visuallyHiddenProps = useVisuallyHidden();
    useEffect(()=>{
        if (assertiveRef.current && politeRef.current) onMount({
            assertiveRegion: assertiveRef,
            politeRegion: politeRef
        });
        return ()=>{
            onUnmount();
        };
    }, [
        onMount,
        onUnmount
    ]);
    return _jsxs(_Fragment, {
        children: [
            _jsx("div", {
                ref: assertiveRef,
                ...visuallyHiddenProps,
                "aria-atomic": "true",
                "aria-live": "assertive",
                "data-announcer-region": "assertive"
            }),
            _jsx("div", {
                ref: politeRef,
                ...visuallyHiddenProps,
                "aria-atomic": "true",
                "aria-live": "polite",
                "data-announcer-region": "polite"
            })
        ]
    });
};
