"use strict";
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
    get OutlinedChevronLeftIcon () {
        return OutlinedChevronLeftIcon;
    },
    get OutlinedChevronRightIcon () {
        return OutlinedChevronRightIcon;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _outlined_chevroncss = _interop_require_default(require("./outlined_chevron.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const SIZE_TO_DIMENSION = {
    tiny: 12,
    small: 16,
    medium: 24,
    large: 32
};
const CHEVRON_PATH = 'm9.216 7.619 4.204 4.204a.25.25 0 0 1 0 .354l-4.204 4.204a.75.75 0 0 0 1.06 1.061l4.205-4.204a1.75 1.75 0 0 0 0-2.475l-4.204-4.205a.75.75 0 0 0-1.061 1.06';
function ChevronIconBase({ orientation, size = 'medium', className, style, tone: _tone }) {
    const dimension = SIZE_TO_DIMENSION[size];
    const mirrorTransform = orientation === 'left' ? 'translate(24 0) scale(-1 1)' : undefined;
    return (0, _jsxruntime.jsx)("span", {
        className: (0, _classnames.default)(_outlined_chevroncss.default.icon, className),
        style: style,
        children: (0, _jsxruntime.jsx)("svg", {
            width: dimension,
            height: dimension,
            viewBox: "0 0 24 24",
            "aria-hidden": "true",
            focusable: "false",
            className: _outlined_chevroncss.default.svg,
            children: (0, _jsxruntime.jsxs)("g", {
                transform: mirrorTransform,
                children: [
                    (0, _jsxruntime.jsx)("path", {
                        d: CHEVRON_PATH,
                        className: _outlined_chevroncss.default.outline,
                        strokeLinecap: "round",
                        strokeLinejoin: "round"
                    }),
                    (0, _jsxruntime.jsx)("path", {
                        d: CHEVRON_PATH,
                        className: _outlined_chevroncss.default.glyph
                    })
                ]
            })
        })
    });
}
const OutlinedChevronRightIcon = (props)=>(0, _jsxruntime.jsx)(ChevronIconBase, {
        ...props,
        orientation: "right"
    });
const OutlinedChevronLeftIcon = (props)=>(0, _jsxruntime.jsx)(ChevronIconBase, {
        ...props,
        orientation: "left"
    });
