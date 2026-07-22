"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "SearchInputMenu", {
    enumerable: true,
    get: function() {
        return SearchInputMenu;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _legacy_search_input_menu = require('../../../../../../base/form/legacy_search_input_menu/legacy_search_input_menu');
const SearchInputMenu = ({ ref, ...props })=>{
    return (0, _jsxruntime.jsx)("div", {
        ref: ref,
        children: (0, _jsxruntime.jsx)(_legacy_search_input_menu.LegacySearchInputMenu, {
            border: "solid",
            captureFocus: false,
            inputMode: "search",
            type: "search",
            role: "searchbox",
            focusOnClear: true,
            ...props
        })
    });
};
