"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "resolveTrigger", {
    enumerable: true,
    get: function() {
        return resolveTrigger;
    }
});
function resolveTrigger(opt) {
    const { open, id, role, trigger } = opt;
    if (typeof trigger !== 'function') return trigger;
    return trigger({
        disclosure: true,
        pressed: open,
        active: open,
        ariaControls: open ? id : undefined,
        ariaHasPopup: role === 'alertdialog' ? undefined : role
    });
}
