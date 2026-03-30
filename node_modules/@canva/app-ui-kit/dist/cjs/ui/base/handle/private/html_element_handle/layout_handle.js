"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "createLayoutHandle", {
    enumerable: true,
    get: function() {
        return createLayoutHandle;
    }
});
const _create_handle = require("./create_handle");
function createLayoutHandle(ref) {
    return (0, _create_handle.createHTMLElementHandle)(ref, 'getBoundingClientRect', 'clientHeight', 'clientWidth', 'offsetHeight', 'offsetLeft', 'offsetTop', 'offsetWidth');
}
