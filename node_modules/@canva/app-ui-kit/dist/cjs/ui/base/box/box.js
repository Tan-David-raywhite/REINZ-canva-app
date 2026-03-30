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
    get Box () {
        return _box.Box;
    },
    get useBox () {
        return _box.useBox;
    }
});
const _box = require("./private/box");
