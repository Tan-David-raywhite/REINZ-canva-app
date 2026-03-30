"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DateInput", {
    enumerable: true,
    get: function() {
        return DateInput;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _date_time_input = require("./date_time_input");
function DateInput(props) {
    return (0, _jsxruntime.jsx)(_date_time_input.DateTimeInput, {
        ...props,
        mode: "date"
    });
}
