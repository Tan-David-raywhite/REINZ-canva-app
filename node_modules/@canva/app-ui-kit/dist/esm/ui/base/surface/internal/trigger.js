export function resolveTrigger(opt) {
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
