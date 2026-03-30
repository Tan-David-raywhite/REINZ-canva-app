export function manuallyApplyTouchAction(browserHandledTouchActions, pointer, allPointers) {
    const browserAllowedToHandleMultifingerGesture = browserHandledTouchActions.has('pinch-zoom') || browserHandledTouchActions.has('auto');
    if (allPointers.size >= 2 && !browserAllowedToHandleMultifingerGesture) pointer.sourceEvent.preventDefault();
}
