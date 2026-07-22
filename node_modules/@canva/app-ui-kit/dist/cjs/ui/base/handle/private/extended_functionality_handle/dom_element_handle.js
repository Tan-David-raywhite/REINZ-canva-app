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
    get convertElementToHandleRef () {
        return convertElementToHandleRef;
    },
    get createDOMElementHandle () {
        return createDOMElementHandle;
    },
    get dangerouslyGetElement () {
        return dangerouslyGetElement;
    },
    get dangerouslyGetHTMLElement () {
        return dangerouslyGetHTMLElement;
    }
});
const _callback_ref = require('../../../../../base/react/callback_ref');
function createDOMElementHandle(ref) {
    return {
        dangerouslyGetElement: ()=>getElementRecursive(ref.current)
    };
}
function getElementRecursive(elementOrHandle) {
    if (isDOMElementHandleRecursive(elementOrHandle)) return getElementRecursive(elementOrHandle.dangerouslyGetElement());
    return elementOrHandle;
}
function dangerouslyGetElement(elementOrHandle) {
    return isDOMElementHandle(elementOrHandle) ? elementOrHandle.dangerouslyGetElement() : elementOrHandle;
}
function dangerouslyGetHTMLElement(elementOrHandle) {
    if (!isDOMElementHandle(elementOrHandle)) return elementOrHandle;
    const el = elementOrHandle.dangerouslyGetElement();
    return el instanceof HTMLElement ? el : null;
}
function isDOMElementHandle(elementOrHandle) {
    if (elementOrHandle == null) return false;
    return elementOrHandle.dangerouslyGetElement != null;
}
function isDOMElementHandleRecursive(elementOrHandle) {
    if (elementOrHandle == null) return false;
    return elementOrHandle.dangerouslyGetElement != null;
}
const handleRefCache = new WeakMap();
function convertElementToHandleRef(elementRef) {
    const elementCallbackRef = (0, _callback_ref.toCallbackRef)(elementRef);
    if (elementCallbackRef == null) return undefined;
    let handleRef = handleRefCache.get(elementCallbackRef);
    if (handleRef == null) {
        handleRef = (handle)=>elementCallbackRef(handle?.dangerouslyGetElement() ?? null);
        handleRefCache.set(elementCallbackRef, handleRef);
    }
    return handleRef;
}
