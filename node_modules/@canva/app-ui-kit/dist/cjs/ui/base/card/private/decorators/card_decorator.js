"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CardDecorator", {
    enumerable: true,
    get: function() {
        return CardDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobxreactlite = require("mobx-react-lite");
require("react");
const _pointer_input_state = require('../../../a11y/pointer_input_state/pointer_input_state');
const _badge = require('../../../badge/badge');
const _cardcss = _interop_require_default(require("../card.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CardDecorator = (0, _mobxreactlite.observer)(function CardDecorator({ location, stretch, children, transition = 'fade', visibility = 'on-hover', isInteractive = false }) {
    return (0, _jsxruntime.jsx)(_badge.BadgeGroup, {
        stretch: stretch,
        transition: transition,
        visibility: !_pointer_input_state.pointerInputState.isMouseInput ? 'always' : visibility,
        location: location,
        className: isInteractive ? _cardcss.default.cardAction : undefined,
        children: children
    });
});
