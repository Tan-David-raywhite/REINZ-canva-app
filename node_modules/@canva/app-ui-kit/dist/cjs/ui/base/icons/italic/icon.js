"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ItalicIcon", {
    enumerable: true,
    get: function() {
        return ItalicIcon;
    }
});
const _icons = require('../icons');
const _iconitalicinlinesvg = _interop_require_default(require("./icon-italic.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ItalicIcon = (0, _icons.createIcon)({
    medium: _iconitalicinlinesvg.default
});
