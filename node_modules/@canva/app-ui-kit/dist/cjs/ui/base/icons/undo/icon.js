"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "UndoIcon", {
    enumerable: true,
    get: function() {
        return UndoIcon;
    }
});
const _icons = require('../icons');
const _iconundoinlinesvg = _interop_require_default(require("./icon-undo.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const UndoIcon = (0, _icons.createIcon)({
    medium: _iconundoinlinesvg.default
}, {
    followDirection: true
});
