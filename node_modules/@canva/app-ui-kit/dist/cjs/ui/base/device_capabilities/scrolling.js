"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "supportsMomentumScrolling", {
    enumerable: true,
    get: function() {
        return supportsMomentumScrolling;
    }
});
const _internal = require("./internal");
function supportsMomentumScrolling() {
    return _internal.Internal.isIOSDevice();
}
