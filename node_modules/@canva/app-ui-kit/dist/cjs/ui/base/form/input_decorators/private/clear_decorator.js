"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "ClearDecorator", {
    enumerable: true,
    get: function() {
        return ClearDecorator;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _box = require('../../../box/box');
const _divider = require('../../../divider/divider');
const _base_input = require('../../base_input/base_input');
const _icon = require('../../../icons/clear/icon');
const _button_decorator = require("./button_decorator");
const _clear_decoratorcss = _interop_require_default(require("./clear_decorator.css"));
const _input_decoratorsmessages = require("./input_decorators.messages");
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
const ClearDecorator = _react.memo(
    function ClearDecorator({ when = 'not-empty', label = _input_decoratorsmessages.InputDecoratorsMessages.clear(), onClear, showDivider }) {
        const controls = (0, _base_input.useInputControls)();
        const value = (0, _base_input.useInputValue)();
        const onClick = _react.useCallback(()=>{
            controls?.setValue('');
            controls?.focus();
            onClear?.();
        }, [
            controls,
            onClear
        ]);
        if (when === 'not-empty' && value === '') return null;
        return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
            children: [
                (0, _jsxruntime.jsx)(_button_decorator.ButtonDecorator, {
                    label: label,
                    icon: ()=>(0, _jsxruntime.jsx)(_icon.ClearIcon, {
                            size: "medium",
                            className: _clear_decoratorcss.default.clearIcon
                        }),
                    onClick: onClick
                }),
                showDivider && (0, _jsxruntime.jsx)(_box.Box, {
                    paddingY: "1u",
                    height: "full",
                    children: (0, _jsxruntime.jsx)(_divider.Divider, {
                        direction: "vertical"
                    })
                })
            ]
        });
    }
);
