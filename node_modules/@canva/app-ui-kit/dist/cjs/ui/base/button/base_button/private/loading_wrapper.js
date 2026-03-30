"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "LoadingWrapper", {
    enumerable: true,
    get: function() {
        return LoadingWrapper;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _screen_reader_content = require('../../../a11y/screen_reader_content/screen_reader_content');
const _box = require('../../../box/box');
const _icon = require('../../../icons/animated_spinner/icon');
const _base_buttonmessages = require("./base_button.messages");
const _loading_wrappercss = _interop_require_default(require("./loading_wrapper.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function LoadingWrapper({ loading = false, size = 'medium', icon = ({ size })=> (0, _jsxruntime.jsx)(_icon.AnimatedSpinnerIcon, {
        size: size
    }), message = _base_buttonmessages.ButtonMessages.loading(), children }) {
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            loading && (0, _jsxruntime.jsxs)(_box.Box, {
                tagName: "span",
                position: "absolute",
                inset: "0",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                children: [
                    (0, _jsxruntime.jsx)(_screen_reader_content.ScreenReaderContent, {
                        children: message
                    }),
                    icon({
                        size
                    })
                ]
            }),
            (0, _jsxruntime.jsx)("span", {
                className: (0, _classnames.default)(_loading_wrappercss.default.content, loading && _loading_wrappercss.default.loading),
                "aria-hidden": loading,
                children: children
            })
        ]
    });
}
