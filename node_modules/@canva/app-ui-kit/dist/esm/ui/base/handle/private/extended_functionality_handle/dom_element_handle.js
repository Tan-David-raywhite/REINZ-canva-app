import { toCallbackRef } from '../../../../../base/react/callback_ref';
export function createDOMElementHandle(ref) {
    return {
        dangerouslyGetElement: ()=>getElementRecursive(ref.current)
    };
}
function getElementRecursive(elementOrHandle) {
    if (isDOMElementHandleRecursive(elementOrHandle)) return getElementRecursive(elementOrHandle.dangerouslyGetElement());
    return elementOrHandle;
}
export function dangerouslyGetElement(elementOrHandle) {
    return isDOMElementHandle(elementOrHandle) ? elementOrHandle.dangerouslyGetElement() : elementOrHandle;
}
export function dangerouslyGetHTMLElement(elementOrHandle) {
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
export function convertElementToHandleRef(elementRef) {
    const elementCallbackRef = toCallbackRef(elementRef);
    if (elementCallbackRef == null) return undefined;
    let handleRef = handleRefCache.get(elementCallbackRef);
    if (handleRef == null) {
        handleRef = (handle)=>elementCallbackRef(handle?.dangerouslyGetElement() ?? null);
        handleRefCache.set(elementCallbackRef, handleRef);
    }
    return handleRef;
}
