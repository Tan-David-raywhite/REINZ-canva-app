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
    get getTypicalSheetAdaptation () {
        return getTypicalSheetAdaptation;
    },
    get useTypicalSheetAdaptation () {
        return useTypicalSheetAdaptation;
    }
});
const _screen = require('../../../device_capabilities/screen');
function useTypicalSheetAdaptation() {
    return (0, _screen.useIsPortraitMobileScreen)();
}
function getTypicalSheetAdaptation() {
    return (0, _screen.isPortraitMobileScreen)();
}
