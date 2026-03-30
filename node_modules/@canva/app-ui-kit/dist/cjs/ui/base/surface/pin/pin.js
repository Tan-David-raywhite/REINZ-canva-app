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
    get Pin () {
        return _pin.Pin;
    },
    get getScrollParent () {
        return _utils.getScrollParent;
    }
});
const _pin = require("./private/pin");
const _utils = require("./private/utils");
