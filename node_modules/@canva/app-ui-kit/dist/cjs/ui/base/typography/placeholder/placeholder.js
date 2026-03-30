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
    get DisplayPlaceholder () {
        return _placeholder.DisplayPlaceholder;
    },
    get TextPlaceholder () {
        return _placeholder.TextPlaceholder;
    },
    get TitlePlaceholder () {
        return _placeholder.TitlePlaceholder;
    }
});
const _placeholder = require("./private/placeholder");
