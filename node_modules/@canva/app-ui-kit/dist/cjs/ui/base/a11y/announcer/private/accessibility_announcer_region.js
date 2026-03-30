"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccessibilityAnnouncerRegion", {
    enumerable: true,
    get: function() {
        return AccessibilityAnnouncerRegion;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = require("react");
const _screen_reader_content = require('../../screen_reader_content/screen_reader_content');
const AccessibilityAnnouncerRegion = ({ onMount, onUnmount })=>{
    const assertiveRef = (0, _react.useRef)(null);
    const politeRef = (0, _react.useRef)(null);
    const visuallyHiddenProps = (0, _screen_reader_content.useVisuallyHidden)();
    (0, _react.useEffect)(()=>{
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
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            (0, _jsxruntime.jsx)("div", {
                ref: assertiveRef,
                ...visuallyHiddenProps,
                "aria-atomic": "true",
                "aria-live": "assertive",
                "data-announcer-region": "assertive"
            }),
            (0, _jsxruntime.jsx)("div", {
                ref: politeRef,
                ...visuallyHiddenProps,
                "aria-atomic": "true",
                "aria-live": "polite",
                "data-announcer-region": "polite"
            })
        ]
    });
};
