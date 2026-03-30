"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get KeyCombinationHandler () {
        return _use_key_combination_handler.KeyCombinationHandler;
    },
    get KeyListener () {
        return _key_listener.KeyListener;
    },
    get WithKeyCombinationHandler () {
        return _use_key_combination_handler.WithKeyCombinationHandler;
    },
    get addListenerOnBody () {
        return _key_listener.addListenerOnBody;
    },
    get command () {
        return _key_combination.command;
    },
    get control () {
        return _key_combination.control;
    },
    get equal () {
        return _key_combination.equal;
    },
    get isKeyRange () {
        return _key_combination.isKeyRange;
    },
    get isModified () {
        return _key_combination.isModified;
    },
    get isModifierKey () {
        return _key_combination.isModifierKey;
    },
    get makeAriaKeyShortcuts () {
        return _key_combination.makeAriaKeyShortcuts;
    },
    get makeHumanReadableArray () {
        return _key_combination.makeHumanReadableArray;
    },
    get makeHumanReadableString () {
        return _key_combination.makeHumanReadableString;
    },
    get makeKeyTrigger () {
        return _key_combination.makeKeyTrigger;
    },
    get option () {
        return _key_combination.option;
    },
    get shift () {
        return _key_combination.shift;
    },
    get useKeyCombinationHandler () {
        return _use_key_combination_handler.useKeyCombinationHandler;
    }
});
const _key_combination = require("./private/key_combination");
const _key_listener = require("./private/key_listener");
const _use_key_combination_handler = require("./private/use_key_combination_handler");
