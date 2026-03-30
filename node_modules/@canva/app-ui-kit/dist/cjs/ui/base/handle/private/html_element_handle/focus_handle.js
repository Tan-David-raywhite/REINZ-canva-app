"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createFocusHandle", {
    enumerable: true,
    get: function() {
        return createFocusHandle;
    }
});
const _create_handle = require("./create_handle");
function createFocusHandle(ref) {
    return (0, _create_handle.createHTMLElementHandle)(ref, 'focus', 'blur');
}
