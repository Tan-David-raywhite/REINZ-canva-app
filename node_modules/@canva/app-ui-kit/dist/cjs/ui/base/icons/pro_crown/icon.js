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
    get ProCrownCustomIcon () {
        return ProCrownCustomIcon;
    },
    get ProCrownGoldIcon () {
        return ProCrownGoldIcon;
    },
    get ProCrownGreyIcon () {
        return ProCrownGreyIcon;
    }
});
const _icons = require('../icons');
const _iconprocrownlargeinlinesvg = _interop_require_default(require("./icon-pro-crown-large.inline.svg"));
const _iconprocrownsmallinlinesvg = _interop_require_default(require("./icon-pro-crown-small.inline.svg"));
const _iconprocrowntinyinlinesvg = _interop_require_default(require("./icon-pro-crown-tiny.inline.svg"));
const _iconprocrowninlinesvg = _interop_require_default(require("./icon-pro-crown.inline.svg"));
const _stylescss = _interop_require_default(require("./styles.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const glyphs = {
    tiny: _iconprocrowntinyinlinesvg.default,
    small: _iconprocrownsmallinlinesvg.default,
    medium: _iconprocrowninlinesvg.default,
    large: _iconprocrownlargeinlinesvg.default
};
const ProCrownCustomIcon = (0, _icons.createIcon)(glyphs);
const ProCrownGoldIcon = (0, _icons.createIcon)(glyphs, {
    extraClassName: _stylescss.default.gold,
    defaultSize: 'small'
});
const ProCrownGreyIcon = (0, _icons.createIcon)(glyphs, {
    extraClassName: _stylescss.default.grey,
    defaultSize: 'small'
});
