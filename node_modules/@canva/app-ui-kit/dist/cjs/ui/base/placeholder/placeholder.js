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
    get Placeholder () {
        return _placeholder.Placeholder;
    },
    get PlaceholderFader () {
        return _fader.PlaceholderFader;
    }
});
const _placeholder = require("./private/placeholder");
const _fader = require("./private/fader");
