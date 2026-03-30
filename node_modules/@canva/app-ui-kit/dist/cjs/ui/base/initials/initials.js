"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "getInitials", {
    enumerable: true,
    get: function() {
        return getInitials;
    }
});
const _split = require('../../../base/graphemes/split');
const MAX_INITIALS = 2;
function getInitials(name, maxInitials = MAX_INITIALS) {
    return name.trim()
    .split(/\s+/, maxInitials)
    .map((s)=>(0, _split.splitByGraphemeClusters)(s)[0]).join('');
}
