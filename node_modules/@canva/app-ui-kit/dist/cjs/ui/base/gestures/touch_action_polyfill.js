"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "manuallyApplyTouchAction", {
    enumerable: true,
    get: function() {
        return manuallyApplyTouchAction;
    }
});
function manuallyApplyTouchAction(browserHandledTouchActions, pointer, allPointers) {
    const browserAllowedToHandleMultifingerGesture = browserHandledTouchActions.has('pinch-zoom') || browserHandledTouchActions.has('auto');
    if (allPointers.size >= 2 && !browserAllowedToHandleMultifingerGesture) pointer.sourceEvent.preventDefault();
}
