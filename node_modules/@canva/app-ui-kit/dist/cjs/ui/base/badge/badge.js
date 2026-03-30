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
    get Badge () {
        return _badge.Badge;
    },
    get BadgeContainer () {
        return _badge_container.BadgeContainer;
    },
    get BadgeGroup () {
        return _badge_container.BadgeGroup;
    },
    get NotificationDot () {
        return _notification_dot.NotificationDot;
    },
    get SwapOnHover () {
        return _badge_container.SwapOnHover;
    },
    get VisibleOnHover () {
        return _badge_container.VisibleOnHover;
    },
    get badgeButtonTones () {
        return _badge.badgeButtonTones;
    },
    get tones () {
        return _badge.tones;
    }
});
const _badge = require("./private/badge");
const _badge_container = require("./private/badge_container");
const _notification_dot = require("./private/notification_dot");
