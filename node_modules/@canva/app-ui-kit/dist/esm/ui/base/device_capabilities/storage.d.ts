type DocumentWithStorageAccess = {
    hasStorageAccess?: () => Promise<boolean>;
    requestStorageAccess?: () => Promise<void>;
};
type DocumentWithCookie = {
    cookie: string;
};
type WindowWithWebStorage = {
    localStorage?: Storage;
    sessionStorage?: Storage;
};
export declare function hasStorageAccess(
 document?: (DocumentWithStorageAccess & DocumentWithCookie) | undefined,
 window?: WindowWithWebStorage | undefined
): Promise<boolean>;
export declare function hasCookiesAccess(document?: DocumentWithCookie | undefined): boolean;
export declare function requestStorageAccess(
 document?: (DocumentWithStorageAccess & DocumentWithCookie) | undefined,
 window?: WindowWithWebStorage | undefined
): Promise<void>;
export declare function hasLocalStorageAccess(window?: WindowWithWebStorage | undefined): boolean;
export declare function getLocalStorageIfAvailable(
 window?: {
     localStorage: Storage;
 } | undefined
): Storage | undefined;
export declare function getSessionStorageIfAvailable(
 window?: {
     sessionStorage: Storage;
 } | undefined
): Storage | undefined;
export {};
