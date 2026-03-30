"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "FormField", {
    enumerable: true,
    get: function() {
        return FormField;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _description = require('../../description/description');
const _label = require('../../label/label');
const _field_validation = require('../../validation/field_validation');
const _layout = require('../../../layout/layout');
function _getRequireWildcardCache(nodeInterop) {
    if (typeof WeakMap !== "function") return null;
    var cacheBabelInterop = new WeakMap();
    var cacheNodeInterop = new WeakMap();
    return (_getRequireWildcardCache = function(nodeInterop) {
        return nodeInterop ? cacheNodeInterop : cacheBabelInterop;
    })(nodeInterop);
}
function _interop_require_wildcard(obj, nodeInterop) {
    if (!nodeInterop && obj && obj.__esModule) {
        return obj;
    }
    if (obj === null || typeof obj !== "object" && typeof obj !== "function") {
        return {
            default: obj
        };
    }
    var cache = _getRequireWildcardCache(nodeInterop);
    if (cache && cache.has(obj)) {
        return cache.get(obj);
    }
    var newObj = {
        __proto__: null
    };
    var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor;
    for(var key in obj){
        if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) {
            var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null;
            if (desc && (desc.get || desc.set)) {
                Object.defineProperty(newObj, key, desc);
            } else {
                newObj[key] = obj[key];
            }
        }
    }
    newObj.default = obj;
    if (cache) {
        cache.set(obj, newObj);
    }
    return newObj;
}
const FormField = (0, _mobxreactlite.observer)(function FormField({ label, labelSize, description, error, tone, children, control, labelMarker = 'none', value, validator, store: storeProp, name }) {
    const labelId = _react.useId();
    const descriptionId = _react.useId();
    const errorId = _react.useId();
    const controlId = _react.useId();
    const store = (0, _field_validation.useFieldValidation)({
        store: storeProp,
        name,
        value,
        validator
    });
    const fieldError = error ?? (store != null ? (0, _field_validation.getError)(store) : undefined);
    const wrappedLabel = (0, _jsxruntime.jsx)(_label.Label, {
        size: labelSize,
        marker: labelMarker,
        id: labelId,
        htmlFor: controlId,
        children: label
    });
    const wrappedDescription = description && !fieldError ? (0, _jsxruntime.jsx)(_description.Description, {
        id: descriptionId,
        tone: tone,
        children: description
    }) : null;
    const wrappedError = fieldError ? (0, _jsxruntime.jsx)(_description.Description, {
        id: errorId,
        tone: "critical",
        children: fieldError
    }) : null;
    const onBlur = _react.useMemo(()=>store != null ? ()=>(0, _field_validation.startValidation)(store) : undefined, [
        store
    ]);
    const wrappedControl = control({
        id: controlId,
        ariaLabelledBy: labelId,
        ariaDescribedBy: fieldError && errorId || description && descriptionId || undefined,
        error: !!fieldError,
        value: storeProp != null ? storeProp.value : value,
        onBlur
    });
    const layout = children ?? defaultFormFieldLayout;
    return layout({
        label: wrappedLabel,
        error: wrappedError,
        description: wrappedDescription,
        control: wrappedControl
    });
});
function defaultFormFieldLayout({ label, description, error, control }) {
    return (0, _jsxruntime.jsxs)(_layout.Rows, {
        spacing: "1u",
        children: [
            label,
            control,
            description,
            error
        ]
    });
}
