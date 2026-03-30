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
    get TabList () {
        return TabList;
    },
    get align () {
        return align;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _tabs = require('../../../../../base/tabs/tabs');
const align = [
    'start',
    'end',
    'stretch'
];
function TabList(props) {
    return (0, _jsxruntime.jsx)(_tabs.TabList, {
        align: "stretch",
        ...props,
        bleedX: false
    });
}
