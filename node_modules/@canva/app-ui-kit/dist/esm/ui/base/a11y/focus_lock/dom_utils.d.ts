export declare const FOCUS_GUARD_ATTR = "data-focus-guard";
export declare const AUTO_FOCUS_ATTR = "data-focus-lock-autofocus";
export declare const FOCUS_LOCK_EXCEPTED_ATTR = "data-focus-lock-excepted";
export declare function getFocusablesInside(node: HTMLElement): HTMLElement[];
export declare function findAutoFocusElement(node: HTMLElement): HTMLElement | null;
export declare function focusWithConditionalDelayHack(
 element: Pick<HTMLElement, 'focus' | 'tagName'>,
 options?: {
     preventScroll?: boolean;
 }
): void;
type FocusSiblingOptions = {
    scope?: HTMLElement
    cycle?: boolean
};
export declare function focusNextElement(baseElement: Element, opts?: FocusSiblingOptions): void;
export declare function focusPrevElement(baseElement: Element, opts?: FocusSiblingOptions): void;
export {};
