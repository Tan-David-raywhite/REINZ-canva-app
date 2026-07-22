"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CalendarIcon", {
    enumerable: true,
    get: function() {
        return CalendarIcon;
    }
});
const _icons = require('../icons');
const _iconcalendarinlinesvg = _interop_require_default(require("./icon-calendar.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const CalendarIcon = (0, _icons.createIcon)({
    medium: _iconcalendarinlinesvg.default
});
