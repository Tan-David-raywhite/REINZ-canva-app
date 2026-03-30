import type { Ref, RefObject } from 'react';
import type { DOMElementHandle } from '../../handle/handle';
type FocusableChildrenOptions = {
    onlyTabbables?: boolean
};
export declare function useFocusableChildren(options?: FocusableChildrenOptions): {
    ref: RefObject<HTMLElement | null>;
    focusableChildren: HTMLElement[];
};
export declare function useKeyboardFocusNavigation(): {
    ref: Ref<HTMLElement | DOMElementHandle | ((prevState: HTMLElement | DOMElementHandle | null) => HTMLElement | DOMElementHandle | null)>;
};
export {};
