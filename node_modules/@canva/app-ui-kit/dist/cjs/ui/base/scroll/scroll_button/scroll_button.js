"use strict"
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
    get ProminentScrollButton () {
        return _scroll_button.ProminentScrollButton;
    },
    get SubtleScrollButton () {
        return _scroll_button.SubtleScrollButton;
    },
    get useScrollButtonAriaLabel () {
        return _scroll_button.useScrollButtonAriaLabel;
    }
});
const _scroll_button = require("./private/scroll_button");
