"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "TruncatedText", {
    enumerable: true,
    get: function() {
        return TruncatedText;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _truncated = require('../../../../../../base/typography/truncated/truncated');
function TruncatedText(props) {
    return (0, _jsxruntime.jsx)(_truncated.TruncatedText, {
        tooltipPlacement: props.tooltipPlacement,
        tooltipAlignment: props.tooltipAlignment,
        alignment: props.alignment,
        capitalization: props.capitalization,
        lineClamp: props.lineClamp || 1,
        children: props.children,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone,
        weight: props.variant
    });
}
