"use strict"
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
    get EaselProvider () {
        return _provider.EaselProvider;
    },
    get useAutoplayVideos () {
        return _provider.useAutoplayVideos;
    },
    get useDirection () {
        return _provider.useDirection;
    },
    get useDisableDialogBlur () {
        return _provider.useDisableDialogBlur;
    },
    get useDisableFocusTraps () {
        return _provider.useDisableFocusTraps;
    },
    get useEnableAnimations () {
        return _provider.useEnableAnimations;
    },
    get useEnableButtonLoadingScan () {
        return _provider.useEnableButtonLoadingScan;
    },
    get useEnableHighColorContrast () {
        return _provider.useEnableHighColorContrast;
    },
    get useEnableUserSelection () {
        return _provider.useEnableUserSelection;
    },
    get useExpectedPixelsPerRem () {
        return _provider.useExpectedPixelsPerRem;
    },
    get useTheme () {
        return _provider.useTheme;
    }
});
const _provider = require("./private/provider");
