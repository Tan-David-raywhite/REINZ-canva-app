"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get ReloadIcon () {
        return ReloadIcon;
    },
    get ReplayIcon () {
        return ReplayIcon;
    },
    get RestoreIcon () {
        return RestoreIcon;
    }
});
const _icons = require('../icons');
const _iconreloadlargeinlinesvg = _interop_require_default(require("./icon-reload-large.inline.svg"));
const _iconreloadtinyinlinesvg = _interop_require_default(require("./icon-reload-tiny.inline.svg"));
const _iconreloadinlinesvg = _interop_require_default(require("./icon-reload.inline.svg"));
const _stylescss = _interop_require_default(require("./styles.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const ReloadIcon = (0, _icons.createIcon)({
    tiny: _iconreloadtinyinlinesvg.default,
    medium: _iconreloadinlinesvg.default,
    large: _iconreloadlargeinlinesvg.default
});
const ReplayIcon = (0, _icons.createIcon)({
    tiny: _iconreloadtinyinlinesvg.default,
    medium: _iconreloadinlinesvg.default,
    large: _iconreloadlargeinlinesvg.default
}, {
    extraClassName: _stylescss.default.replayIcon,
    followDirection: false
});
const RestoreIcon = (0, _icons.createIcon)({
    tiny: _iconreloadtinyinlinesvg.default,
    medium: _iconreloadinlinesvg.default,
    large: _iconreloadlargeinlinesvg.default
}, {
    extraClassName: _stylescss.default.restoreIcon,
    followDirection: false
});
