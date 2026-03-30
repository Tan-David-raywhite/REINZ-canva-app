"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "IdGenerator", {
    enumerable: true,
    get: function() {
        return IdGenerator;
    }
});
class IdGenerator {
    next() {
        return `${this.prefix}${this.idCount++}`;
    }
    constructor(prefix = '__id'){
        this.prefix = prefix;
        this.idCount = 0;
    }
}
