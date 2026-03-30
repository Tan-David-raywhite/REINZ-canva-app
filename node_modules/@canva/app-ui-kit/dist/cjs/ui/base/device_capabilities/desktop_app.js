"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "isDesktopAppSupported", {
    enumerable: true,
    get: function() {
        return isDesktopAppSupported;
    }
});
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
function isDesktopAppSupported(navigator1 = globalNavigator) {
    if (navigator1 == null) return false;
    const userAgent = navigator1.userAgent;
    const windowsRegex = /windows nt 10\./i;
    const macOsRegex = /mac os x ([\w. ]*)/i;
    if (windowsRegex.test(userAgent)) return true;
    if (macOsRegex.test(userAgent)) {
        const version = macOsRegex.exec(userAgent)?.[1];
        if (!version) return false;
        try {
            const [major, minor] = version.replace('_', '.').split('.').map((value)=>parseInt(value, 10));
            if (major >= 11 || major >= 10 && minor >= 15) return true;
            return false;
        } catch  {
            return false;
        }
    }
    return false;
}
