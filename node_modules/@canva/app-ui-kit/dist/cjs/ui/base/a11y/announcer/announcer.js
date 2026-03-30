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
    get announcerInstanceStore () {
        return _announcer_instance_store.announcerInstanceStore;
    },
    get createAccessibilityAnnouncer () {
        return _create.createAccessibilityAnnouncer;
    },
    get removeFallbackRegions () {
        return _announcer_fallback.removeFallbackRegions;
    },
    get useAnnounceOnMount () {
        return _announcer_hooks.useAnnounceOnMount;
    },
    get useAnnounceOnUpdate () {
        return _announcer_hooks.useAnnounceOnUpdate;
    },
    get useAnnounceOnce () {
        return _announcer_hooks.useAnnounceOnce;
    },
    get useAnnounceWhen () {
        return _announcer_hooks.useAnnounceWhen;
    },
    get useAnnouncer () {
        return _announcer_hooks.useAnnouncer;
    }
});
const _create = require("./private/create");
const _announcer_instance_store = require("./private/announcer_instance_store");
const _announcer_hooks = require("./private/announcer_hooks");
const _announcer_fallback = require("./private/announcer_fallback");
