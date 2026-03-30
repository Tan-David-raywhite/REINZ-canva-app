export function getScrollParent(el) {
    return getScrollParentRecursive(el.parentElement);
}
function getScrollParentRecursive(el) {
    if (el == null) return document.body;
    const { overflow, overflowX, overflowY } = window.getComputedStyle(el);
    if (/(auto|scroll|overlay)/.test(overflow + overflowY + overflowX)) return el;
    return getScrollParentRecursive(el.parentElement);
}
