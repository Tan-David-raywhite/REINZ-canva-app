import { $mobx, comparer, computed, createAtom, observe } from 'mobx';
import { useSyncExternalStore } from 'react';
import { smallBreakpoint } from '../metrics/metrics';
import { Internal } from './internal';
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
export function supportsSafeAreaInsetValues(navigator1 = globalNavigator) {
    return typeof navigator1 !== 'undefined' ? !navigator1.userAgent.match(/CriOS/gi) : false;
}
export function supportsSafeAreaInsetTopValue(navigator1 = globalNavigator) {
    return typeof navigator1 !== 'undefined' ? /i(Phone|Pad).*xhsminiapp/i.test(navigator1.userAgent) : false;
}
export function isPortraitMobileScreen(screenWidth = getScreenSize().width, width = smallBreakpoint) {
    return screenWidth > 0
     && screenWidth < width;
}
export function useIsPortraitMobileScreen() {
    return useSyncExternalStore(subscribeIsPortraitMobileScreen, getClientIsPortraitMobileScreen, getServerIsPortraitMobileScreen);
}
export function getScreenSize(window1 = globalWindow, navigator1 = globalNavigator) {
    if (!window1 || !navigator1) return {
        width: 0,
        height: 0
    };
    if (Internal.isIOSDevice(navigator1)) {
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
        this[$mobx].reportObserved();
        return this.window ? getScreenSize(this.window, globalNavigator) : {
            width: 0,
            height: 0
        };
    }
    constructor(window1){
        this.window = window1;
        this[_$mobx] = createAtom('ScreenSize', ()=>this.startTracking(), ()=>this.stopTracking());
        this.onChanged = ()=>{
            this[$mobx].reportChanged();
        };
    }
}
prop = _$mobx = $mobx;
const screenSizeMonitor = new ScreenSizeMonitor(globalWindow);
export const computedScreenSize = computed(function() {
    return {
        height: screenSizeMonitor.value.height,
        width: screenSizeMonitor.value.width
    };
}, {
    equals: comparer.shallow
});
const computedIsPortraitMobileScreen = computed(function() {
    return isPortraitMobileScreen(computedScreenSize.get().width);
});
const subscribeIsPortraitMobileScreen = (callback)=>observe(computedIsPortraitMobileScreen, callback);
const getClientIsPortraitMobileScreen = ()=>isPortraitMobileScreen();
const getServerIsPortraitMobileScreen = ()=>false;
var _$mobx;
