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
    get computedScreenSize () {
        return computedScreenSize;
    },
    get getScreenSize () {
        return getScreenSize;
    },
    get isPortraitMobileScreen () {
        return isPortraitMobileScreen;
    },
    get supportsSafeAreaInsetTopValue () {
        return supportsSafeAreaInsetTopValue;
    },
    get supportsSafeAreaInsetValues () {
        return supportsSafeAreaInsetValues;
    },
    get useIsPortraitMobileScreen () {
        return useIsPortraitMobileScreen;
    }
});
const _mobx = require("mobx");
const _react = require("react");
const _metrics = require('../metrics/metrics');
const _internal = require("./internal");
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
function supportsSafeAreaInsetValues(navigator1 = globalNavigator) {
    return typeof navigator1 !== 'undefined' ? !navigator1.userAgent.match(/CriOS/gi) : false;
}
function supportsSafeAreaInsetTopValue(navigator1 = globalNavigator) {
    return typeof navigator1 !== 'undefined' ? /i(Phone|Pad).*xhsminiapp/i.test(navigator1.userAgent) : false;
}
function isPortraitMobileScreen(screenWidth = getScreenSize().width, width = _metrics.smallBreakpoint) {
    return screenWidth > 0
     && screenWidth < width;
}
function useIsPortraitMobileScreen() {
    return (0, _react.useSyncExternalStore)(subscribeIsPortraitMobileScreen, getClientIsPortraitMobileScreen, getServerIsPortraitMobileScreen);
}
function getScreenSize(window1 = globalWindow, navigator1 = globalNavigator) {
    if (!window1 || !navigator1) return {
        width: 0,
        height: 0
    };
    if (_internal.Internal.isIOSDevice(navigator1)) {
        const safariWindow = window1;
        const orientationLandscape = safariWindow.orientation === 90 || safariWindow.orientation === -90;
        if (orientationLandscape) return {
            width: window1.screen.height,
            height: window1.screen.width
        };
    }
    return window1.screen;
}
let prop;
class ScreenSizeMonitor {
    startTracking() {
        this.window?.addEventListener('resize', this.onChanged);
    }
    stopTracking() {
        this.window?.removeEventListener('resize', this.onChanged);
    }
    get value() {
        this[_mobx.$mobx].reportObserved();
        return this.window ? getScreenSize(this.window, globalNavigator) : {
            width: 0,
            height: 0
        };
    }
    constructor(window1){
        this.window = window1;
        this[_$mobx] = (0, _mobx.createAtom)('ScreenSize', ()=>this.startTracking(), ()=>this.stopTracking());
        this.onChanged = ()=>{
            this[_mobx.$mobx].reportChanged();
        };
    }
}
prop = _$mobx = _mobx.$mobx;
const screenSizeMonitor = new ScreenSizeMonitor(globalWindow);
const computedScreenSize = (0, _mobx.computed)(function() {
    return {
        height: screenSizeMonitor.value.height,
        width: screenSizeMonitor.value.width
    };
}, {
    equals: _mobx.comparer.shallow
});
const computedIsPortraitMobileScreen = (0, _mobx.computed)(function() {
    return isPortraitMobileScreen(computedScreenSize.get().width);
});
const subscribeIsPortraitMobileScreen = (callback)=>(0, _mobx.observe)(computedIsPortraitMobileScreen, callback);
const getClientIsPortraitMobileScreen = ()=>isPortraitMobileScreen();
const getServerIsPortraitMobileScreen = ()=>false;
var _$mobx;
