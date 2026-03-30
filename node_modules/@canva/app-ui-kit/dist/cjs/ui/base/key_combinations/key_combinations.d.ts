export { control, command, option, shift, equal, makeAriaKeyShortcuts, makeHumanReadableArray, makeHumanReadableString, makeKeyTrigger, isKeyRange, isModified, isModifierKey, } from './private/key_combination';
export type { KeyRange, KeyCombination, Key, NonModifierKey, ModifiedKey, Platform, } from './private/key_combination';
export { KeyListener, addListenerOnBody } from './private/key_listener';
export type { KeyCombinationMap, KeyCombinationOptions, KeyboardEventHandler, KeyCombinationMapItem, EventMap, } from './private/use_key_combination_handler';
export { useKeyCombinationHandler, KeyCombinationHandler, WithKeyCombinationHandler, } from './private/use_key_combination_handler';
