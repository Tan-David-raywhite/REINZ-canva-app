"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Flyout", {
    enumerable: true,
    get: function() {
        return Flyout;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _divider = require('../../../../../base/divider/divider');
const _header = require('../../../../../base/surface/header/header');
const _popover = require('../../../../../base/surface/popover/popover');
function Flyout(props) {
    const header = props.title ? (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            (0, _jsxruntime.jsx)(_header.SurfaceHeader, {
                title: props.title,
                description: props.description,
                start: typeof props.headerStart === 'function' ? props.headerStart() : props.headerStart,
                end: typeof props.headerEnd === 'function' ? props.headerEnd() : props.headerEnd
            }),
            (0, _jsxruntime.jsx)(_divider.Divider, {})
        ]
    }) : undefined;
    return (0, _jsxruntime.jsx)(_popover.AdaptivePopover, {
        header: header,
        open: props.open,
        onRequestClose: props.onRequestClose,
        onCloseComplete: props.onCloseComplete,
        placement: props.placement,
        width: props.width ?? '32u',
        trigger: props.trigger,
        footer: props.footer,
        children: props.children
    });
}
