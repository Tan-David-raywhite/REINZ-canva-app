"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FolderIcon", {
    enumerable: true,
    get: function() {
        return FolderIcon;
    }
});
const _icons = require('../icons');
const _iconfolderinlinesvg = _interop_require_default(require("./icon-folder.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const FolderIcon = (0, _icons.createIcon)({
    medium: _iconfolderinlinesvg.default
});
