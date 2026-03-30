import * as React from 'react';
export type FocusManager = {
    readonly focused: HTMLElement | null
    readonly focusables: HTMLElement[]
    focusAt(
     index: number,
     options?: {
         wrap?: boolean;
     }
    ): HTMLElement | undefined
    focusNext(
     options?: {
         wrap?: boolean;
     }
    ): HTMLElement | undefined
    focusPrevious(
     options?: {
         wrap?: boolean;
     }
    ): HTMLElement | undefined
    focusFirst(): HTMLElement | undefined
    focusLast(): HTMLElement | undefined
};
export declare function useCreateFocusManager<T extends HTMLElement>(): {
    ref: React.Ref<T>;
    focusManager: FocusManager;
    onFocusCapture: (e: React.FocusEvent) => void;
    onBlur: (e: React.FocusEvent) => void;
};
export declare const FocusManagerProvider: React.Provider<FocusManager | null>;
export declare function WithFocusManager(props: React.PropsWithChildren): React.JSX.Element;
export declare function useFocusManager(): FocusManager | null;
