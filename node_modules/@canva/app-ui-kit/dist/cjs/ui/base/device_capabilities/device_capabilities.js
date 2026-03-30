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
    get Internal () {
        return _internal.Internal;
    },
    get canHover () {
        return _pointer.canHover;
    },
    get doesClipPathSupportPathValue () {
        return _graphics.doesClipPathSupportPathValue;
    },
    get getCanvasAreaLimitPx () {
        return _graphics.getCanvasAreaLimitPx;
    },
    get getLocalStorageIfAvailable () {
        return _storage.getLocalStorageIfAvailable;
    },
    get getScreenSize () {
        return _screen.getScreenSize;
    },
    get getSessionStorageIfAvailable () {
        return _storage.getSessionStorageIfAvailable;
    },
    get guessKeyboardOverlayHeight () {
        return _keyboard.guessKeyboardOverlayHeight;
    },
    get hasCookiesAccess () {
        return _storage.hasCookiesAccess;
    },
    get hasLocalStorageAccess () {
        return _storage.hasLocalStorageAccess;
    },
    get hasStorageAccess () {
        return _storage.hasStorageAccess;
    },
    get isBlobSupported () {
        return _graphics.isBlobSupported;
    },
    get isDesktopAppSupported () {
        return _desktop_app.isDesktopAppSupported;
    },
    get isHeicSupported () {
        return _graphics.isHeicSupported;
    },
    get isPortraitMobileScreen () {
        return _screen.isPortraitMobileScreen;
    },
    get isTouchSupported () {
        return _pointer.isTouchSupported;
    },
    get isVirtualKeyboard () {
        return _keyboard.isVirtualKeyboard;
    },
    get preferSameTab () {
        return _navigation.preferSameTab;
    },
    get requestStorageAccess () {
        return _storage.requestStorageAccess;
    },
    get supportsMomentumScrolling () {
        return _scrolling.supportsMomentumScrolling;
    },
    get supportsSafeAreaInsetTopValue () {
        return _screen.supportsSafeAreaInsetTopValue;
    },
    get supportsSafeAreaInsetValues () {
        return _screen.supportsSafeAreaInsetValues;
    }
});
const _internal = require("./internal");
const _pointer = require("./pointer");
const _keyboard = require("./keyboard");
const _scrolling = require("./scrolling");
const _screen = require("./screen");
const _navigation = require("./navigation");
const _graphics = require("./graphics");
const _desktop_app = require("./desktop_app");
const _storage = require("./storage");
