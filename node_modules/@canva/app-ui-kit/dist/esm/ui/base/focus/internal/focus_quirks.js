import { isFocusable } from './focus_utils';
export const FOCUS_FIXUP_EVENT = 'focusfixup';
export function focusFixup(document) {
    let previousActiveElement = document.activeElement;
    const observer = new IntersectionObserver(()=>{
        if (document.activeElement === previousActiveElement) return;
        if (previousActiveElement instanceof HTMLElement && isFocusable(previousActiveElement)) return;
        if (!isFocusLost(document)) return;
        document.dispatchEvent(new FocusEvent(FOCUS_FIXUP_EVENT));
    }, {
        root: null,
        rootMargin: '9999px'
    });
    function onFocusIn(e) {
        if (e.target instanceof Element) {
            previousActiveElement = e.target;
            observer.disconnect();
            observer.observe(e.target);
        } else previousActiveElement = null;
    }
    document.addEventListener('focusin', onFocusIn);
    return ()=>{
        observer.disconnect();
        document.removeEventListener('focusin', onFocusIn);
    };
}
export function focusInIFrame(document) {
    let iframeFocusInTimeout;
    function onFocusOut(e) {
        const previousTarget = e.target;
        clearTimeout(iframeFocusInTimeout);
        iframeFocusInTimeout = setTimeout(()=>{
            if (document.activeElement instanceof HTMLIFrameElement) document.activeElement.dispatchEvent(new FocusEvent('focusin', {
                relatedTarget: previousTarget
            }));
        });
    }
    document.addEventListener('focusout', onFocusOut, {
        capture: true
    });
    return ()=>{
        document.removeEventListener('focusout', onFocusOut, {
            capture: true
        });
    };
}
function isFocusLost(document) {
    const parentDocument = document.defaultView?.top?.document;
    if (parentDocument != null && parentDocument !== document && parentDocument.hasFocus() && !document.hasFocus()) return false;
    return document.activeElement == null || document.activeElement === document.body;
}
