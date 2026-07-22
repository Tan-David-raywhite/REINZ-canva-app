"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ChartLineIcon", {
    enumerable: true,
    get: function() {
        return ChartLineIcon;
    }
});
const _icons = require('../icons');
const _iconchartlineinlinesvg = _interop_require_default(require("./icon-chart-line.inline.svg"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ChartLineIcon = (0, _icons.createIcon)({
    medium: _iconchartlineinlinesvg.default
});
