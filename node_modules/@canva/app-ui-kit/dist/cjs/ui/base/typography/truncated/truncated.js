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
    get TruncatedText () {
        return _truncated.TruncatedText;
    },
    get TruncatedTitle () {
        return _truncated.TruncatedTitle;
    },
    get useIsTruncated () {
        return _is_truncated.useIsTruncated;
    }
});
const _truncated = require("./private/truncated");
const _is_truncated = require("./private/is_truncated");
