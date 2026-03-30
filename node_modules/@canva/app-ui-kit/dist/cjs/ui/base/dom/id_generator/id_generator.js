"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "domIdGenerator", {
    enumerable: true,
    get: function() {
        return domIdGenerator;
    }
});
const _id_generator = require('../../../../base/id_generator/id_generator');
const idGenerator = new _id_generator.IdGenerator();
const domIdGenerator = {
    next: ()=>idGenerator.next()
};
