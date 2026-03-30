export function getCommonEventProperties(pointer, center = pointer) {
    return {
        target: pointer.target,
        currentTarget: pointer.currentTarget,
        centerX: center.x,
        centerY: center.y,
        altKey: pointer.sourceEvent.altKey,
        ctrlKey: pointer.sourceEvent.ctrlKey,
        metaKey: pointer.sourceEvent.metaKey,
        shiftKey: pointer.sourceEvent.shiftKey,
        pointerType: pointer.pointerType,
        nativeEvent: pointer.sourceEvent
    };
}
