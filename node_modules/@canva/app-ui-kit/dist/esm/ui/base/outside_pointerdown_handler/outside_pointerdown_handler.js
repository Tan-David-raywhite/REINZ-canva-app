import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { DetectExternalEvents } from './detect_external_events';
export const OutsidePointerDownHandler = (props)=>{
    return _jsx(DetectExternalEvents, {
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
