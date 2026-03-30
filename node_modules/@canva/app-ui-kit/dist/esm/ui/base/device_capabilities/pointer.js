import { Internal } from './internal';
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const touchMatch = globalWindow && globalWindow.matchMedia ? globalWindow.matchMedia('(pointer:coarse), (-moz-touch-enabled:1)') : null;
const noHoverMatch = globalWindow && globalWindow.matchMedia ? globalWindow.matchMedia('(hover: none)') : null;
export function isTouchSupported(window1 = globalWindow) {
    if (window1 == null) return false;
    if (window1.matchMedia == null)
     return false;
    if (Internal.isAndroidDevice(navigator))
     return true;
    if (window1 === globalWindow && touchMatch)
     return touchMatch.matches;
    return window1.matchMedia('(pointer:coarse), (-moz-touch-enabled:1)').matches;
}
export function canHover(window1 = globalWindow) {
    if (window1 == null) return false;
    if (window1.matchMedia == null)
     return true;
    if (!isTouchSupported(window1))
     return true;
    if (window1 === globalWindow && noHoverMatch) return !noHoverMatch.matches;
    return !window1.matchMedia('(hover: none)').matches;
}
