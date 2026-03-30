"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Select", {
    enumerable: true,
    get: function() {
        return Select;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _base_combo_select = require("./base_combo_select");
const _base_multi_select = require("./base_multi_select");
const _base_select = require("./base_select");
function Select(props) {
    switch(props.type){
        case 'multi':
            return (0, _jsxruntime.jsx)(_base_multi_select.BaseMultiSelect, {
                ...props
            });
        case 'combobox':
            return (0, _jsxruntime.jsx)(_base_combo_select.BaseComboSelect, {
                ...props
            });
        default:
            return (0, _jsxruntime.jsx)(_base_select.BaseSelect, {
                ...props
            });
    }
}
