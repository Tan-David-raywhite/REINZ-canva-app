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
    get Scrollable () {
        return _scrollable.Scrollable;
    },
    get useScrollable () {
        return _base_scrollable.useScrollable;
    }
});
const _scrollable = require("./private/scrollable");
const _base_scrollable = require("./private/base_scrollable");
