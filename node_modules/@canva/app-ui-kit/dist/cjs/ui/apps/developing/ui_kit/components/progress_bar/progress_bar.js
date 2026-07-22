"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ProgressBar", {
    enumerable: true,
    get: function() {
        return ProgressBar;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _progress_bar = require('../../../../../base/progress_bar/progress_bar');
const SIZE_TO_TRACK_THICKNESS = {
    small: '1u',
    medium: '2u'
};
function ProgressBar({ onProgressAnimationEnd, size = 'medium', value, ariaLabel }) {
    return (0, _jsxruntime.jsx)(_progress_bar.ProgressBar, {
        disableBubbles: false,
        onProgressAnimationEnd: onProgressAnimationEnd,
        trackThickness: SIZE_TO_TRACK_THICKNESS[size],
        value: value,
        ariaLabel: ariaLabel
    });
}
