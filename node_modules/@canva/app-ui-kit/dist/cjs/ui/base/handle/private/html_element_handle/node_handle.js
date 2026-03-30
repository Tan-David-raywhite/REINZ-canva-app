"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createNodeHandle", {
    enumerable: true,
    get: function() {
        return createNodeHandle;
    }
});
const _create_handle = require("./create_handle");
function createNodeHandle(ref) {
    return (0, _create_handle.createHTMLElementHandle)(ref, 'nodeName', 'nodeType', 'nodeValue', 'tagName');
}
