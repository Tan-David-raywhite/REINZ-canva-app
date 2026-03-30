export function isElementInput(element, global) {
    return element instanceof (global?.HTMLElement ?? HTMLElement) && (element.tagName === 'INPUT' || element.tagName === 'SELECT' || element.tagName === 'TEXTAREA' || element.isContentEditable);
}
export const HIDDEN_INPUT_ATTR = 'data-hidden-input';
function isElementHiddenInput(element) {
    return element instanceof HTMLElement && isElementInput(element) && element.getAttribute(HIDDEN_INPUT_ATTR) != null;
}
export function isSomeInputActive(event) {
    const targetElement = event && (event.explicitOriginalTarget || event.target);
    return !!document.activeElement && isElementInput(document.activeElement) && !isElementHiddenInput(document.activeElement) || !!targetElement && isElementInput(targetElement) && !isElementHiddenInput(targetElement);
}
