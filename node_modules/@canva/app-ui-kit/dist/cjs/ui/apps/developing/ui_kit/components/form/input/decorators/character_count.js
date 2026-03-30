"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CharacterCountDecorator", {
    enumerable: true,
    get: function() {
        return CharacterCountDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _input_decorators = require('../../../../../../../base/form/input_decorators/input_decorators');
function CharacterCountDecorator(props) {
    return (0, _jsxruntime.jsx)(_input_decorators.CharCountDecorator, {
        max: props.max
    });
}
