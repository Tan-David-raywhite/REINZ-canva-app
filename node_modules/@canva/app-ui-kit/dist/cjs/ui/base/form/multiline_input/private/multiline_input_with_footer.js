"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "MultilineInputWithFooter", {
    enumerable: true,
    get: function() {
        return MultilineInputWithFooter;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _multiline_input = require("./multiline_input");
const _multiline_inputcss = _interop_require_default(require("./multiline_input.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function MultilineInputWithFooter(props) {
    const { EndContent, StartContent, ref, ...multilineProps } = props;
    return (0, _jsxruntime.jsx)(_multiline_input.MultilineInput, {
        ...multilineProps,
        ref: ref,
        footer: (0, _jsxruntime.jsxs)("div", {
            className: (0, _classnames.default)(_multiline_inputcss.default.footer, {
                [_multiline_inputcss.default.footerDisabled]: props.disabled,
                [_multiline_inputcss.default.footerReadOnly]: props.readOnly,
                [_multiline_inputcss.default.footerFadein]: !props.borderless
            }),
            role: "none",
            children: [
                (0, _jsxruntime.jsx)("span", {
                    children: StartContent
                }),
                (0, _jsxruntime.jsx)("span", {
                    children: EndContent
                })
            ]
        })
    });
}
