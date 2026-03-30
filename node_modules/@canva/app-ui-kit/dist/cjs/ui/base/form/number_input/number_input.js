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
    get NumberInput () {
        return _number_input.NumberInput;
    },
    get convertFullWidthNumerics () {
        return _number_input.convertFullWidthNumerics;
    },
    get getRoundedNumberValue () {
        return _number_input.getRoundedNumberValue;
    },
    get isDecimalCharacter () {
        return _number_input.isDecimalCharacter;
    },
    get isIntegerCharacter () {
        return _number_input.isIntegerCharacter;
    },
    get isNonNegativeDecimalCharacter () {
        return _number_input.isNonNegativeDecimalCharacter;
    },
    get isNonNegativeIntegerCharacter () {
        return _number_input.isNonNegativeIntegerCharacter;
    }
});
const _number_input = require("./private/number_input");
