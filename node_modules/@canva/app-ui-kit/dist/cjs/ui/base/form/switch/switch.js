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
    get FakeSwitch () {
        return _switch.FakeSwitch;
    },
    get Switch () {
        return _switch.Switch;
    }
});
const _switch = require("./private/switch");
