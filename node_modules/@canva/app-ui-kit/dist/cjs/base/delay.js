"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "delay", {
    enumerable: true,
    get: function() {
        return delay;
    }
});
function delay(timeout) {
    return new Promise((res)=>setTimeout(res, timeout));
}
