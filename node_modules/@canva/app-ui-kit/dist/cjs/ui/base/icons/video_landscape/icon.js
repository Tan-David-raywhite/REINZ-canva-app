"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "VideoLandscapeIcon", {
    enumerable: true,
    get: function() {
        return VideoLandscapeIcon;
    }
});
const _icons = require('../icons');
const _iconvideolandscapesmallinlinesvg = _interop_require_default(require("./icon-video-landscape-small.inline.svg"));
const _iconvideolandscapeinlinesvg = _interop_require_default(require("./icon-video-landscape.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const VideoLandscapeIcon = (0, _icons.createIcon)({
    small: _iconvideolandscapesmallinlinesvg.default,
    medium: _iconvideolandscapeinlinesvg.default
});
