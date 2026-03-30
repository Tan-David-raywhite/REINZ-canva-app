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
    get MultilineInput () {
        return _multiline_input.MultilineInput;
    },
    get MultilineInputWithFooter () {
        return _multiline_input_with_footer.MultilineInputWithFooter;
    }
});
const _multiline_input = require("./private/multiline_input");
const _multiline_input_with_footer = require("./private/multiline_input_with_footer");
