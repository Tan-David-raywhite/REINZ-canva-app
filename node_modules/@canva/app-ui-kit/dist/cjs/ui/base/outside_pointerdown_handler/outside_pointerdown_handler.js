"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "OutsidePointerDownHandler", {
    enumerable: true,
    get: function() {
        return OutsidePointerDownHandler;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _detect_external_events = require("./detect_external_events");
const OutsidePointerDownHandler = (props)=>{
    return (0, _jsxruntime.jsx)(_detect_external_events.DetectExternalEvents, {
        reactEvents: [
            'onMouseDown',
            'onTouchStart'
        ],
        domEvents: [
            'mousedown',
            'touchstart'
        ],
        onExternalEvent: props.onOutsidePointerDown,
        children: props.children
    });
};
