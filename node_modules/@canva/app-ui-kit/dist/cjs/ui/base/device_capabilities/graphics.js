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
    get doesClipPathSupportPathValue () {
        return doesClipPathSupportPathValue;
    },
    get getCanvasAreaLimitPx () {
        return getCanvasAreaLimitPx;
    },
    get isBlobSupported () {
        return isBlobSupported;
    },
    get isHeicSupported () {
        return isHeicSupported;
    }
});
const _internal = require("./internal");
const globalWindow = typeof window !== 'undefined' ? window : undefined;
const globalNavigator = typeof navigator !== 'undefined' ? navigator : undefined;
let heicSupportPromise;
function getCanvasAreaLimitPx(navigator1 = globalNavigator) {
    return _internal.Internal.isIOSDevice(navigator1) ? 16777216 : 268435456;
}
function doesClipPathSupportPathValue(window1 = globalWindow) {
    return !!window1?.CSS?.supports && window1.CSS.supports('(clip-path: path("")) or (-webkit-clip-path: path(""))');
}
async function isBlobSupported(blob) {
    if (typeof window.createImageBitmap === 'function') return createImageBitmap(blob).then(()=>true).catch(()=>false);
    else
    return new Promise((resolve)=>{
        const url = URL.createObjectURL(blob);
        const img = new window.Image();
        img.onload = ()=>{
            resolve(true);
            URL.revokeObjectURL(url);
        };
        img.onerror = ()=>{
            resolve(false);
            URL.revokeObjectURL(url);
        };
        img.src = url;
    });
}
function isHeicSupported() {
    if (heicSupportPromise) return heicSupportPromise;
    const HEIC_16x16_BASE64 = 'AAAAHGZ0eXBoZWljAAAAAG1pZjFoZWljbWlhZgAAAX1tZXRhAAAAAAAAACFoZGxyAAAAAAAAAABwaWN0AAAAAAAAAAAAAAAAAAAAAA5waXRtAAAAAAABAAAAImlsb2MAAAAAREAAAQABAAAAAAGhAAEAAAAAAAAAKwAAACNpaW5mAAAAAAABAAAAFWluZmUCAAAAAAEAAGh2YzEAAAAA/WlwcnAAAADdaXBjbwAAAHZodmNDAQNwAAAAAAAAAAAAHvAA/P34+AAADwMgAAEAGEABDAH//wNwAAADAJAAAAMAAAMAHroCQCEAAQAqQgEBA3AAAAMAkAAAAwAAAwAeoCCBBZbqrprm4CGgwIAAAAMAgAAAAwCEIgABAAZEAcFzwYkAAAATY29scm5jbHgAAQANAAaAAAAAFGlzcGUAAAAAAAAAQAAAAEAAAAAoY2xhcAAAABAAAAABAAAAEAAAAAH////QAAAAAv///9AAAAACAAAAEHBpeGkAAAAAAwgICAAAABhpcG1hAAAAAAAAAAEAAQWBAgMFhAAAADNtZGF0AAAAJygBrxMhMZb4TlCn//1nhc0MlUxauU+lc90KUJNyfrj+8oeTxWKC4A==';
    const heicBytes = base64ToUint8Array(HEIC_16x16_BASE64);
    const heicBlob = new Blob([
        heicBytes
    ], {
        type: 'image/heic'
    });
    heicSupportPromise = isBlobSupported(heicBlob);
    return heicSupportPromise;
}
function base64ToUint8Array(base64) {
    const binary = atob(base64);
    const len = binary.length;
    const bytes = new Uint8Array(len);
    for(let i = 0; i < len; ++i)bytes[i] = binary.charCodeAt(i);
    return bytes;
}
