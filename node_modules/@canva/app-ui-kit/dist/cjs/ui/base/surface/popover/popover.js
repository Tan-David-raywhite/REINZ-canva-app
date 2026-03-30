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
    get AdaptivePopover () {
        return _adaptive.AdaptivePopover;
    },
    get Popover () {
        return _popover.Popover;
    },
    get getTypicalSheetAdaptation () {
        return _sheet.getTypicalSheetAdaptation;
    },
    get useTypicalSheetAdaptation () {
        return _sheet.useTypicalSheetAdaptation;
    }
});
const _popover = require("./private/popover");
const _adaptive = require("./private/adaptive");
const _sheet = require('../sheet/sheet');
