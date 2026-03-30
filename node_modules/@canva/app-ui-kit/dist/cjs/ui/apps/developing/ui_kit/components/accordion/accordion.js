"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Accordion", {
    enumerable: true,
    get: function() {
        return Accordion;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _accordion = require('../../../../../base/accordion/accordion');
function Accordion(props) {
    return (0, _jsxruntime.jsx)(_accordion.Accordion, {
        dividers: props.dividers,
        defaultExpanded: props.defaultExpanded,
        tagName: props.tagName,
        spacing: "2u",
        headingSize: "medium",
        children: props.children
    });
}
