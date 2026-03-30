export type FocusStackOperation = 'push' | 'pop' | 'replace';
export type FocusState = {
    element: HTMLElement
    boundary: HTMLElement
};
export declare const FocusHistory: {
    readonly enabled: boolean
    readonly state: FocusState
    push(state: FocusState): void
    pop(): void
    replace(state: FocusState): void
    purge(): void
    prune(shallowCheck?: boolean): void
};
export declare const FOCUS_STATE_CHANGE_EVENT = "focusstatechange";
export declare function createFocusState(element: HTMLElement, boundary?: HTMLElement): FocusState;
export declare function registerEvents(document: Document): (() => void) | undefined;
