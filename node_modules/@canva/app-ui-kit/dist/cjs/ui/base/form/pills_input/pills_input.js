"use strict"
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
    get InputPill () {
        return _input_pill.InputPill;
    },
    get PillsInput () {
        return _pills_input.PillsInput;
    }
});
const _pills_input = require("./private/pills_input");
const _input_pill = require("./private/input_pill");
