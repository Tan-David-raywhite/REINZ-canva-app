"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createTraverseHandle", {
    enumerable: true,
    get: function() {
        return createTraverseHandle;
    }
});
const _create_handle = require("./create_handle");
function createTraverseHandle(ref) {
    return (0, _create_handle.createHTMLElementHandle)(ref, 'closest', 'contains', 'compareDocumentPosition', 'ownerDocument');
}
