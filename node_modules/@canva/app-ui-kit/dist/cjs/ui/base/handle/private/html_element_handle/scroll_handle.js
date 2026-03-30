"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createScrollHandle", {
    enumerable: true,
    get: function() {
        return createScrollHandle;
    }
});
const _create_handle = require("./create_handle");
function createScrollHandle(ref) {
    return (0, _create_handle.createHTMLElementHandle)(ref, 'scrollBy', 'scrollHeight', 'scrollIntoView', 'scrollLeft', 'scrollTo', 'scrollTop', 'scrollWidth');
}
