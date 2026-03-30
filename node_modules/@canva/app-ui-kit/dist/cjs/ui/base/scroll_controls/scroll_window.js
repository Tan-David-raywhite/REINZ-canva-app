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
    get GlobalScrollWindow () {
        return _global_scroll_window.GlobalScrollWindow;
    },
    get OptionalGlobalScrollWindow () {
        return _global_scroll_window.OptionalGlobalScrollWindow;
    },
    get OptionalScrollWindow () {
        return _scroll_window.OptionalScrollWindow;
    },
    get ScrollWindow () {
        return _scroll_window.ScrollWindow;
    },
    get WindowedList () {
        return _windowed_list.WindowedList;
    }
});
const _global_scroll_window = require("./internal/global_scroll_window");
const _scroll_window = require("./internal/scroll_window");
const _windowed_list = require("./internal/windowed_list");
