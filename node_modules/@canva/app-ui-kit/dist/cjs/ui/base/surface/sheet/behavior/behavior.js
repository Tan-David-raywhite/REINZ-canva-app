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
    get useSheetControls () {
        return _behavior.useSheetControls;
    },
    get useSheetDrag () {
        return _behavior.useSheetDrag;
    },
    get useSheetPositioner () {
        return _positioner.useSheetPositioner;
    },
    get useSheetScroll () {
        return _behavior.useSheetScroll;
    },
    get useSheetScrollIsolation () {
        return _behavior.useSheetScrollIsolation;
    }
});
const _behavior = require("./private/behavior");
const _positioner = require("./private/positioner");
