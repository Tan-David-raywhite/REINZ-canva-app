"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "generateId", {
    enumerable: true,
    get: function() {
        return generateId;
    }
});
function generateId(baseId, id, role) {
    return `${baseId}-${role}-${id.replace(/\s+/g, '')}`;
}
