"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Alert", {
    enumerable: true,
    get: function() {
        return Alert;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _alert = require('../../../../../base/alert/alert');
function Alert(props) {
    return (0, _jsxruntime.jsx)(_alert.Alert, {
        children: props.children,
        tone: props.tone,
        size: "small",
        showIcon: true,
        dismissible: props.onDismiss != null,
        onDismiss: ()=>props.onDismiss?.(),
        title: props.title
    });
}
