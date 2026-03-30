"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
function _export(target, all) {
    for(var name in all)Object.defineProperty(target, name, {
        enumerable: true,
        get: Object.getOwnPropertyDescriptor(all, name).get
    });
}
_export(exports, {
    get Accordion () {
        return _accordion.Accordion;
    },
    get AccordionItem () {
        return _accordion.AccordionItem;
    }
});
const _accordion = require("./private/accordion");
