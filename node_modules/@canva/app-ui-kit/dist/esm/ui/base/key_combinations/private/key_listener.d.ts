import type { KeyboardEventHandler, KeyCombinationOptions } from './use_key_combination_handler';
export type KeyTrigger = {
    key: string;
    altKey?: boolean;
    ctrlKey?: boolean;
    metaKey?: boolean;
    shiftKey?: boolean;
} & KeyCombinationOptions;
declare const eventKinds: readonly ["keydown", "keyup", "keypress"];
type EventKind = (typeof eventKinds)[number];
export declare class KeyListener {
    private readonly element;
    private readonly opt;
    private readonly events;
    constructor(element: Pick<HTMLElement, 'addEventListener' | 'removeEventListener'>, opt: {
        ignoreInput: boolean
    });
    static getEnglishKey(event: KeyboardEvent): string;
    static isKeyMatch(event: KeyboardEvent, trigger: KeyTrigger): boolean;
    addListener(kind: EventKind, trigger: KeyTrigger, callback: KeyboardEventHandler): void;
    private shouldIgnoreEvent;
    reset(): void;
}
export declare function addListenerOnBody(kind: EventKind, trigger: KeyTrigger, callback: KeyboardEventHandler): void;
export {};
