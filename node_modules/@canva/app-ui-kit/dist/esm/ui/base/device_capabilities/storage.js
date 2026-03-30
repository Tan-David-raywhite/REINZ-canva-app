const globalWindow = typeof window !== 'undefined' ? window : undefined;
const globalDocument = typeof document !== 'undefined' ? document : undefined;
export async function hasStorageAccess(document1 = globalDocument, window1 = globalWindow) {
    if (document1 && 'hasStorageAccess' in document1 && document1.hasStorageAccess) try {
        return await document1.hasStorageAccess();
    } catch (e) {
        return true;
    }
    return hasLocalStorageAccess(window1) && hasCookiesAccess(document1);
}
export function hasCookiesAccess(document1 = globalDocument) {
    const SET_COOKIE_SAMESITE_LAX = 'canvacookietestlax=1';
    const GET_COOKIE_SAMESITE_LAX = 'canvacookietestlax=1';
    const SET_COOKIE_SAMESITE_NONE = 'canvacookietestnone=1; SameSite=None; Secure';
    const GET_COOKIE_SAMESITE_NONE = 'canvacookietestnone=1';
    return testCookieAccess(SET_COOKIE_SAMESITE_LAX, GET_COOKIE_SAMESITE_LAX, document1) || testCookieAccess(SET_COOKIE_SAMESITE_NONE, GET_COOKIE_SAMESITE_NONE, document1);
}
function testCookieAccess(testItem, expected, document1 = globalDocument) {
    if (!document1 || !('cookie' in document1)) return false;
    try {
        document1.cookie = testItem;
        const equal = document1.cookie.indexOf(expected) !== -1;
        document1.cookie = `${testItem}; expires=Thu, 01-Jan-1970 00:00:01 GMT`;
        return equal;
    } catch  {
        return false;
    }
}
export async function requestStorageAccess(document1 = globalDocument, window1 = globalWindow) {
    if (document1 && 'requestStorageAccess' in document1 && document1.requestStorageAccess) return document1.requestStorageAccess();
    if (await hasStorageAccess(document1, window1))
    return;
    throw new Error('Failed to grant permission for storage access.');
}
export function hasLocalStorageAccess(window1 = globalWindow) {
    return hasWebStorageAccess(window1, 'localStorage');
}
function hasSessionStorageAccess(window1 = globalWindow) {
    return hasWebStorageAccess(window1, 'sessionStorage');
}
function hasWebStorageAccess(window1 = globalWindow, webStorageAPIName = 'localStorage') {
    if (!window1 || !(webStorageAPIName in window1)) return false;
    const testItem = `E2${webStorageAPIName}Test`;
    try {
        const storage = window1[webStorageAPIName];
        if (storage == null)
        return false;
        storage.getItem(testItem);
        storage.setItem(testItem, testItem);
        if (storage.getItem(testItem) !== testItem)
        return false;
        storage.removeItem(testItem);
        return true;
    } catch (e) {
        if (e instanceof DOMException) {
            if (e.name === 'SecurityError' || e.code === 18)
                return false;
            if (e.name === 'QuotaExceededError'
             || e.name === 'QUOTA_EXCEEDED_ERR' || e.code === 22
             || e.name === 'NS_ERROR_DOM_QUOTA_REACHED' || e.name === 'NS_ERROR_FILE_NO_DEVICE_SPACE' || e.name === 'NS_ERROR_NOT_AVAILABLE' || e.code === 1014)
                return true;
        }
        throw e;
    }
}
export function getLocalStorageIfAvailable(window1 = globalWindow) {
    if (!window1 || !hasLocalStorageAccess(window1)) return;
    return window1.localStorage;
}
export function getSessionStorageIfAvailable(window1 = globalWindow) {
    if (!window1 || !hasSessionStorageAccess(window1)) return;
    return window1.sessionStorage;
}
