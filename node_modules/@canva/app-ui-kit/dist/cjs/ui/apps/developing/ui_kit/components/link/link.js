"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Link () {
        return Link;
    },
    get LinkButton () {
        return LinkButton;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _link = require('../../../../../base/link/link');
function Link(props) {
    return (0, _jsxruntime.jsx)(_link.LinkButton, {
        children: props.children,
        draggable: false,
        withOpenInNewIcon: true,
        target: "_blank",
        href: props.href,
        rel: "noopener noreferrer",
        id: props.id,
        ariaLabel: props.ariaLabel,
        tooltipLabel: props.tooltipLabel,
        disabled: props.disabled,
        variant: "regular",
        onClick: props.requestOpenExternalUrl
    });
}
function LinkButton(props) {
    return (0, _jsxruntime.jsx)(_link.LinkButton, {
        children: props.children,
        draggable: false,
        withOpenInNewIcon: false,
        id: props.id,
        ariaLabel: props.ariaLabel,
        tooltipLabel: props.tooltipLabel,
        disabled: props.disabled,
        variant: props.variant ?? 'regular',
        onClick: props.onClick
    });
}
