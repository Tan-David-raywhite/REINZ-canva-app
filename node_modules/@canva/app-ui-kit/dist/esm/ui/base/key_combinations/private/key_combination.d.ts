import type { Direction } from '../../provider/provider';
import type { KeyTrigger } from './key_listener';
type MappedKey = 'previous' | 'next';
export type KeyRange = [Key | ModifiedKey, Key | ModifiedKey];
export type KeyCombination = Key | ModifiedKey;
type ModifierKey = 'Command' | 'Alt' | 'Shift' | 'Control';
export type Key = NonModifierKey | MappedKey | ModifierKey;
export type NonModifierKey = 'Escape' | 'F1' | 'F2' | 'F3' | 'F4' | 'F5' | 'F6' | 'F7' | 'F8' | 'F9' | 'F10' | 'F11' | 'F12' | 'F13' | 'F14' | 'F15' | 'F16' | 'F17' | 'F18' | 'F19' | '`' | '~' | '1' | '!' | '2' | '@' | '3' | '#' | '4' | '$' | '5' | '%' | '6' | '^' | '7' | '&' | '8' | '*' | '9' | '(' | '0' | ')' | '-' | '_' | '=' | '+' | 'Backspace' | 'Home' | 'PageUp' | 'Tab' | 'q' | 'w' | 'e' | 'r' | 't' | 'y' | 'u' | 'i' | 'o' | 'p' | '[' | '{' | ']' | '}' | '\\' | 'Delete' | 'End' | 'PageDown' | '|' | 'a' | 's' | 'd' | 'f' | 'g' | 'h' | 'j' | 'k' | 'l' | ';' | ':' | "'" | '"' | 'Enter' | 'z' | 'x' | 'c' | 'v' | 'b' | 'n' | 'm' | ',' | '<' | '.' | '>' | '/' | '?' | ' ' | 'ArrowUp' | 'ArrowLeft' | 'ArrowDown' | 'ArrowRight';
export type ModifiedKey = {
    readonly Control?: boolean;
    readonly command?: boolean;
    readonly key: NonModifierKey | MappedKey;
    readonly Alt?: boolean;
    readonly Shift?: boolean;
};
export declare const control: (key: ModifiedKey | NonModifierKey | MappedKey) => ModifiedKey;
export declare const command: (key: ModifiedKey | NonModifierKey | MappedKey) => ModifiedKey;
export declare const option: (key: ModifiedKey | NonModifierKey | MappedKey) => ModifiedKey;
export declare const shift: (key: ModifiedKey | NonModifierKey | MappedKey) => ModifiedKey;
export declare function equal(
 a: KeyCombination | KeyRange,
 b: KeyCombination | KeyRange,
 direction: Direction
): boolean;
export type Platform = 'apple' | 'other';
export declare function makeHumanReadableArray(
 keyCombination: KeyCombination | ModifierKey | KeyRange,
 direction: Direction,
 platform?: Platform
): string[];
export declare function makeHumanReadableString(
 keyCombination: KeyCombination | ModifierKey | KeyRange,
 direction: Direction,
 platform?: Platform
): string;
export declare function makeAriaKeyShortcuts(
 keyCombinations: KeyCombination | readonly KeyCombination[],
 direction: Direction,
 platform?: Platform
): string;
export declare function makeKeyTrigger(keyCombination: KeyCombination, direction: Direction, platform?: Platform): KeyTrigger;
export declare function isKeyRange(keyCombination: KeyCombination | KeyRange): keyCombination is KeyRange;
export declare function isModified(keyCombination: KeyCombination | KeyRange): keyCombination is ModifiedKey;
export declare function isModifierKey(keyCombination: KeyCombination | ModifierKey | KeyRange): keyCombination is ModifierKey;
export {};
