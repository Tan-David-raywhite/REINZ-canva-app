"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "updateLiveRegionContent", {
    enumerable: true,
    get: function() {
        return updateLiveRegionContent;
    }
});
const _delay = require('../../../../../base/delay');
async function updateLiveRegionContent(element, message) {
    if (!element) return;
    const previousMessage = element.textContent;
    await (0, _delay.delay)(50);
    element.textContent = '';
    await (0, _delay.delay)(20);
    const finalMessage = previousMessage === message ? message + '\u00A0' : message;
    element.textContent = finalMessage;
}
