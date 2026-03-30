"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "EyeDropperButton", {
    enumerable: true,
    get: function() {
        return EyeDropperButton;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _base_button = require('../../../button/base_button/base_button');
const _button = require('../../../button/button');
const _icon = require('../../../icons/eyedropper/icon');
const _mobile_event_handler = require('../../../mobile_event_handler/mobile_event_handler');
const _eye_dropper_buttoncss = _interop_require_default(require("./eye_dropper_button.css"));
const _eye_dropper_buttonmessages = require("./eye_dropper_button.messages");
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
function EyeDropperButton(props) {
    const [active, setActive] = _react.useState(false);
    const onStart = (event)=>{
        setActive(true);
        props.onStart(event).finally(()=>setActive(false));
    };
    const onBackButton = (e)=>{
        if (!active) return;
        props.onBackButton?.();
        e.stopPropagation();
    };
    return (0, _jsxruntime.jsx)(_mobile_event_handler.MobileEventHandler, {
        onBackButton: onBackButton,
        children: props.shape === 'circle' ? (0, _jsxruntime.jsx)(_base_button.BaseButton, {
            tone: "tertiary",
            active: active,
            selected: active,
            className: _eye_dropper_buttoncss.default.eyedropperButtonCircle,
            tooltipLabel: _eye_dropper_buttonmessages.EyeDropperButtonMessages.eyedropperTooltip(),
            onClick: onStart,
            border: "ui",
            borderRadius: "elementRound",
            alignItems: "center",
            justifyContent: "center",
            children: (0, _jsxruntime.jsx)(_icon.EyedropperIcon, {
                size: "medium"
            })
        }) : (0, _jsxruntime.jsx)(_button.Button, {
            variant: "tertiary",
            icon: _icon.EyedropperIcon,
            active: active,
            className: _eye_dropper_buttoncss.default.eyedropperButton,
            tooltipLabel: _eye_dropper_buttonmessages.EyeDropperButtonMessages.eyedropperTooltip(),
            onClick: onStart
        })
    });
}
