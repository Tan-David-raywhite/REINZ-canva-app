"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "RedoIcon", {
    enumerable: true,
    get: function() {
        return RedoIcon;
    }
});
const _icons = require('../icons');
const _iconredoinlinesvg = _interop_require_default(require("./icon-redo.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const RedoIcon = (0, _icons.createIcon)({
    medium: _iconredoinlinesvg.default
}, {
    followDirection: true
});
