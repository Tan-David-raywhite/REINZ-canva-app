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
    get conditions () {
        return _responsive.conditions;
    },
    get generateStyle () {
        return _responsive.generateStyle;
    }
});
const _responsive = require("./private/responsive");
