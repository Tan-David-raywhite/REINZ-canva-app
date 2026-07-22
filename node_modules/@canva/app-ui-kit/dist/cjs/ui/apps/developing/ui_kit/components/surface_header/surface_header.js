"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SurfaceHeader", {
    enumerable: true,
    get: function() {
        return SurfaceHeader;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _divider = require('../../../../../base/divider/divider');
const _background = require('../../../../../base/surface/background/background');
const _header = require('../../../../../base/surface/header/header');
const _surface_headercss = _interop_require_default(require("./surface_header.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function SurfaceHeader(props) {
    const legacyPadding = '2u';
    const header = (0, _jsxruntime.jsxs)("div", {
        className: _surface_headercss.default.legacy,
        children: [
            (0, _jsxruntime.jsx)(_header.SurfaceHeader, {
                title: props.title,
                description: props.description,
                start: props.start && (0, _jsxruntime.jsx)(_header.SurfaceHeaderBackButton, {
                    ariaLabel: props.start.ariaLabel,
                    onClick: props.start.onClick
                }),
                end: props.end,
                padding: legacyPadding
            }),
            props.divider !== false && (0, _jsxruntime.jsx)(_divider.Divider, {})
        ]
    });
    return props.background === 'none' ? header : (0, _jsxruntime.jsx)(_background.SurfaceBackground, {
        children: header
    });
}
