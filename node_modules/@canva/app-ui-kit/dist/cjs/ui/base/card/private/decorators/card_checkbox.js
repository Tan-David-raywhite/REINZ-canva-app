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
    get CardCheckbox () {
        return CardCheckbox;
    },
    get CardCheckboxDecorator () {
        return CardCheckboxDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
require("react");
const _checkbox = require('../../../form/checkbox/checkbox');
const _card_context = require("../card_context");
const _card_decorator = require("./card_decorator");
const CardCheckbox = (props)=>{
    const configuration = (0, _card_context.useCardConfiguration)();
    return (0, _jsxruntime.jsx)(_checkbox.Checkbox, {
        size: "medium",
        onChange: props.onSelect,
        checked: props.selected,
        disabled: props.disabled || configuration.disabled,
        ariaLabel: props.label
    });
};
const CardCheckboxDecorator = ({ location, transition, visibility, ...checkboxProps })=>{
    return (0, _jsxruntime.jsx)(_card_decorator.CardDecorator, {
        location: location,
        transition: transition,
        visibility: visibility,
        isInteractive: true,
        children: (0, _jsxruntime.jsx)(CardCheckbox, {
            ...checkboxProps
        })
    });
};
