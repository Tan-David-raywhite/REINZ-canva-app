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
    get Checkbox () {
        return _checkbox.Checkbox;
    },
    get CheckboxGroup () {
        return _checkbox_group.CheckboxGroup;
    },
    get FakeCheckbox () {
        return _checkbox.FakeCheckbox;
    },
    get InheritColor () {
        return _checkbox.InheritColor;
    }
});
const _checkbox = require("./private/checkbox");
const _checkbox_group = require("./private/checkbox_group");
