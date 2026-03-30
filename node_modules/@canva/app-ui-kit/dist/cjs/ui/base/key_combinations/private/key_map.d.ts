export declare class KeyMap {
    private static _shiftMap;
    static get shiftMap(): Record<string, string>;
    private static _reverseShiftMap;
    static get reverseShiftMap(): Record<string, string>;
    private static _codeToKey;
    static get codeToKey(): Record<string, string>;
    private static _englishKeys;
    static get englishKeys(): Set<string>;
}
