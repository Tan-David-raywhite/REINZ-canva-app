import * as React from 'react';
import type { DOMElementHandle } from '../../handle/handle';
import type { KeyCombination } from './key_combination';
export type KeyCombinationMapItem = [KeyCombination, KeyboardEventHandler | EventMap] | [KeyCombination, KeyboardEventHandler | EventMap, KeyCombinationOptions];
export type KeyCombinationMap = KeyCombinationMapItem[];
export type KeyCombinationOptions = {
    ignoreKeyboardLayout?: boolean
};
export type KeyboardEventHandler = (e: KeyboardEvent) => void;
export type EventMap = {
    [k in 'keydown' | 'keypress' | 'keyup']?: KeyboardEventHandler;
};
export declare function useKeyCombinationHandler(keyMap: KeyCombinationMap, { handleInputs }: {
    handleInputs: boolean;
}): {
    ref: React.Dispatch<React.SetStateAction<HTMLElement | DOMElementHandle | null>>;
    element: HTMLElement | DOMElementHandle | null;
};
type WithKeyCombinationHandlerProps = {
    children: (arg: {
        ref: (arg: HTMLElement | null) => void
    }) => React.ReactNode
    map: KeyCombinationMap
    handleInputs: boolean
};
export declare function WithKeyCombinationHandler(props: WithKeyCombinationHandlerProps): React.ReactNode;
type KeyCombinationHandlerProps = {
    map: KeyCombinationMap
    handleInputs: boolean
};
export declare function KeyCombinationHandler(props: React.PropsWithChildren<KeyCombinationHandlerProps>): React.ReactNode;
export {};
