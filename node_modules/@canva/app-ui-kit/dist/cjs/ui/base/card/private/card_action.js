"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CardAction", {
    enumerable: true,
    get: function() {
        return CardAction;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _cardcss = _interop_require_default(require("./card.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CardAction = ({ children, position = 'relative' })=>{
    return children != null ? (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_cardcss.default.cardAction, {
            [_cardcss.default.relative]: position === 'relative'
        }),
        children: children
    }) : null;
};
