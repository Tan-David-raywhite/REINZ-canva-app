"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "CheckboxGroup", {
    enumerable: true,
    get: function() {
        return CheckboxGroup;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _controllable_value = require('../../../controllable_value/controllable_value');
const _checkbox = require("./checkbox");
const _checkbox_groupcss = _interop_require_default(require("./checkbox_group.css"));
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
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
function CheckboxGroup(props) {
    const { value: valueProp, defaultValue: defaultValueProp, options, onChange: onChangeProp, disabled, id, ariaLabel, ariaLabelledBy, ariaDescribedBy, focusRef, onFocus, onBlur } = props;
    const groupRef = _react.useRef(null);
    const [value, setValue] = (0, _controllable_value.useControllableValue)({
        value: valueProp,
        defaultValue: defaultValueProp || []
    });
    const onChange = _react.useCallback((newValue, checked)=>{
        const newValues = checked ? value.concat(newValue) : value.filter((v)=>v !== newValue);
        setValue(newValues);
        onChangeProp?.(newValues);
    }, [
        onChangeProp,
        setValue,
        value
    ]);
    const onItemFocus = _react.useCallback((e)=>{
        const previouslyFocussedElement = e.relatedTarget;
        if (previouslyFocussedElement && groupRef?.current?.contains(previouslyFocussedElement)) return;
        onFocus?.(e);
    }, [
        onFocus
    ]);
    const onItemBlur = _react.useCallback((e)=>{
        const nextElementToBeFocussed = e.relatedTarget;
        if (nextElementToBeFocussed && groupRef?.current?.contains(nextElementToBeFocussed)) return;
        onBlur?.(e);
    }, [
        onBlur
    ]);
    return (0, _jsxruntime.jsx)("div", {
        role: "group",
        id: id,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        className: _checkbox_groupcss.default.checkboxGroup,
        ref: groupRef,
        children: options.map((option, index)=>{
            const checked = value.indexOf(option.value) >= 0;
            return (0, _react.createElement)(_checkbox.Checkbox, {
                ...option,
                disabled: option.disabled ?? disabled,
                checked: checked,
                key: index,
                size: "small",
                onChange: onChange,
                focusRef: index === 0 ? focusRef : undefined,
                onFocus: onFocus && onItemFocus,
                onBlur: onBlur && onItemBlur
            });
        })
    });
}
