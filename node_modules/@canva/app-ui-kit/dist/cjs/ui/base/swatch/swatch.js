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
    get AddColorButton () {
        return _swatch.AddColorButton;
    },
    get Swatch () {
        return _swatch.Swatch;
    }
});
const _swatch = require("./private/swatch");
