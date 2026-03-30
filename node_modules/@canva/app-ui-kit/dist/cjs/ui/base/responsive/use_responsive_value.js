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
    get useBreakpoint () {
        return _use_responsive_value.useBreakpoint;
    },
    get useResponsiveValue () {
        return _use_responsive_value.useResponsiveValue;
    }
});
const _use_responsive_value = require("./private/use_responsive_value");
