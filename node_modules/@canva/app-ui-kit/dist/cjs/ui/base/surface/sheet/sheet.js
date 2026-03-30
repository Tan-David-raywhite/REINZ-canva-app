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
    get Sheet () {
        return _sheet.Sheet;
    },
    get getTypicalSheetAdaptation () {
        return _device.getTypicalSheetAdaptation;
    },
    get useContentScrollable () {
        return _content_scrollable.useContentScrollable;
    },
    get useTypicalSheetAdaptation () {
        return _device.useTypicalSheetAdaptation;
    }
});
const _sheet = require("./private/sheet");
const _content_scrollable = require("./private/content_scrollable");
const _device = require("./private/device");
