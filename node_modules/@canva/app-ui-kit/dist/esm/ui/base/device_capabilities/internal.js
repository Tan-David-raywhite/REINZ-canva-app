const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
export const Internal = {
    isIOSDevice(navigator1 = globalNavigator) {
        return navigator1 != null && !!navigator1.userAgent.match(/iphone|ipad/gi);
    },
    isIpad(navigator1 = globalNavigator) {
        return navigator1 != null && /iPad|Macintosh/i.test(navigator1.userAgent) && navigator1.maxTouchPoints != null && navigator1.maxTouchPoints > 2;
    },
    isAndroidDevice(navigator1 = globalNavigator) {
        return navigator1 != null && !!navigator1.userAgent.match(/android/i);
    }
};
