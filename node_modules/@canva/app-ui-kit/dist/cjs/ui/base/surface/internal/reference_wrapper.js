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
    get ReferenceWrapper () {
        return ReferenceWrapper;
    },
    get isReferenceObject () {
        return isReferenceObject;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _reference_wrappercss = _interop_require_default(require("./reference_wrapper.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
function ReferenceWrapper({ ref, content }) {
    if (content == null || isReferenceObject(content)) return null;
    return (0, _jsxruntime.jsx)("div", {
        className: _reference_wrappercss.default.reference,
        ref: ref,
        children: content
    });
}
function isReferenceObject(reference) {
    if (reference == null || typeof reference !== 'object') return false;
    const { getBoundingClientRect } = reference;
    return getBoundingClientRect != null && typeof getBoundingClientRect === 'function';
}
