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
    get InheritColor () {
        return _link.InheritColor;
    },
    get Link () {
        return _link.Link;
    },
    get LinkButton () {
        return _link.LinkButton;
    }
});
const _link = require("./internal/link");
