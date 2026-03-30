import { focusFixup, focusInIFrame } from './internal/focus_quirks';
import { findFocusable, isFocusable } from './internal/focus_utils';
const focusStack = [];
const FOCUS_STACK_MAX_SIZE = 100;
let focusHistoryEnabled = false;
let ignoreNextEvent = false;
export const FocusHistory = {
    get enabled() {
        return focusHistoryEnabled;
    },
    get state() {
        return focusStack[focusStack.length - 1] ?? createFocusState(document.activeElement, document.body);
    },
    push(state) {
        if (!FocusHistory.enabled) return;
        push(state);
        internalFocus(FocusHistory.state.element);
        dispatchFocusStateChange('push');
    },
    pop() {
        if (!FocusHistory.enabled) return;
        focusStack.pop();
        internalFocus(FocusHistory.state.element);
        dispatchFocusStateChange('pop');
    },
    replace(state) {
        if (!FocusHistory.enabled) return;
        focusStack[focusStack.length - 1] = state;
        internalFocus(FocusHistory.state.element);
        dispatchFocusStateChange('replace');
    },
    purge() {
        if (!FocusHistory.enabled) return;
        if (focusStack.length <= 2) return;
        focusStack.splice(1, focusStack.length - 2);
    },
    prune(shallowCheck = false) {
        if (!FocusHistory.enabled) return;
        for(let i = focusStack.length - 1; i > 0; i--){
            if (shallowCheck && focusStack[i].element.isConnected) continue;
            if (!shallowCheck && isFocusable(focusStack[i].element)) continue;
            focusStack.splice(i, 1);
        }
    }
};
function push(state) {
    if (focusStack.length >= FOCUS_STACK_MAX_SIZE) focusStack.shift();
    focusStack.push(state);
}
function internalFocus(element) {
    ignoreNextEvent = true;
    element.focus({
        preventScroll: true
    });
    return element;
}
export const FOCUS_STATE_CHANGE_EVENT = 'focusstatechange';
let dispatchFocusPopStateTimeout;
function dispatchFocusStateChange(type) {
    clearTimeout(dispatchFocusPopStateTimeout);
    dispatchFocusPopStateTimeout = setTimeout(()=>{
        document.dispatchEvent(new CustomEvent(FOCUS_STATE_CHANGE_EVENT, {
            detail: {
                type
            }
        }));
    });
}
export function createFocusState(element, boundary = FocusHistory.state.boundary) {
    return {
        element,
        boundary
    };
}
function recover() {
    FocusHistory.prune();
    internalFocus(FocusHistory.state.element);
    dispatchFocusStateChange('pop');
}
export function registerEvents(document1) {
    if (FocusHistory.enabled) return;
    focusStack.length = 0;
    focusStack.push({
        element: findFocusable(document1.body) ?? document1.body,
        boundary: document1.body
    });
    function onFocusFixup() {
        return recover();
    }
    function onFocusIn(e) {
        if (ignoreNextEvent) {
            ignoreNextEvent = false;
            return;
        }
        if (!(e.target instanceof HTMLElement)) return;
        FocusHistory.prune(true);
        push(createFocusState(e.target, document1.body));
        dispatchFocusStateChange('push');
    }
    focusHistoryEnabled = true;
    document1.addEventListener('focusfixup', onFocusFixup, {
        capture: true
    });
    document1.addEventListener('focusin', onFocusIn, {
        capture: true
    });
    const disposeFocusFixup = focusFixup(document1);
    const disposeFocusInIframe = focusInIFrame(document1);
    return ()=>{
        focusStack.length = 0;
        focusHistoryEnabled = false;
        document1.removeEventListener('focusfixup', onFocusFixup, {
            capture: true
        });
        document1.removeEventListener('focusin', onFocusIn, {
            capture: true
        });
        disposeFocusFixup();
        disposeFocusInIframe();
    };
}
