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
    get Duration () {
        return _duration.Duration;
    },
    get formatDuration () {
        return _duration.formatDuration;
    }
});
const _duration = require("./private/duration");
