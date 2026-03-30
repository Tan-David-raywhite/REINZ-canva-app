"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AccordionItem", {
    enumerable: true,
    get: function() {
        return AccordionItem;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _accordion = require('../../../../../base/accordion/accordion');
function AccordionItem(props) {
    return (0, _jsxruntime.jsx)(_accordion.AccordionItem, {
        title: props.title,
        defaultExpanded: props.defaultExpanded,
        disabled: props.disabled,
        expanded: props.expanded,
        onClick: props.onClick,
        children: props.children
    });
}
