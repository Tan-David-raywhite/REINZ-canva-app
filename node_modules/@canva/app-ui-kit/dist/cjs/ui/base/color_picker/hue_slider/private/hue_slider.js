"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "HueSlider", {
    enumerable: true,
    get: function() {
        return HueSlider;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _access_mode_state = require('../../../a11y/access_mode_state/access_mode_state');
const _pointer_input_state = require('../../../a11y/pointer_input_state/pointer_input_state');
const _hsv_color = require('../../hsv_color/hsv_color');
const _color_picker_provider = require('../../internal/color_picker_provider');
const _handle = require('../../internal/handle');
const _slider = require('../../../form/slider/slider');
const _hue_slidercss = _interop_require_default(require("./hue_slider.css"));
const _hue_slidermessages = require("./hue_slider.messages");
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
const track = ()=>(0, _jsxruntime.jsx)("div", {
        className: _hue_slidercss.default.track
    });
function HueSlider({ hue: hueProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel = _hue_slidermessages.HueSliderMessages.colorHueLabel(), showHandlePreview = 'touch-only' }) {
    const colorPicker = (0, _color_picker_provider.useColorPickerControls)();
    const setColor = colorPicker?.setColor;
    const onChangeStart = onChangeStartProp ?? colorPicker?.onChangeStart;
    const onChangeComplete = onChangeCompleteProp ?? colorPicker?.onChangeComplete;
    const colorPickerHue = (0, _color_picker_provider.useColorPickerHue)();
    const hue = hueProp ?? colorPickerHue ?? 0;
    const handleAtEndRef = _react.useRef(false);
    const isMouseAccessMode = (0, _access_mode_state.useIsMouseAccessMode)();
    const [showPreview, setShowPreview] = _react.useState(false);
    const isTouchInput = (0, _pointer_input_state.useIsTouchInput)();
    const onChangeStartWithPreview = _react.useCallback(()=>{
        onChangeStart?.();
        if (showHandlePreview === 'always' || showHandlePreview === 'touch-only' && isTouchInput) setShowPreview(true);
    }, [
        onChangeStart,
        isTouchInput,
        showHandlePreview
    ]);
    const onChangeCompleteWithPreview = _react.useCallback(()=>{
        onChangeComplete?.();
        setShowPreview(false);
    }, [
        onChangeComplete
    ]);
    const handle = _react.useCallback(({ focused, active })=>{
        const hsvColor = new _hsv_color.HsvColor(hue, 1, 1);
        const swatchColor = hsvColor.toRgb().toHexString();
        return (0, _jsxruntime.jsx)(_handle.Handle, {
            color: swatchColor,
            focused: focused && !isMouseAccessMode,
            active: active,
            preview: showPreview,
            className: _hue_slidercss.default.handle
        });
    }, [
        hue,
        isMouseAccessMode,
        showPreview
    ]);
    const onChange = _react.useCallback((value)=>{
        handleAtEndRef.current = value === 1;
        setColor?.({
            h: value
        }, 'hue');
        onChangeProp?.(value);
    }, [
        onChangeProp,
        setColor
    ]);
    const handlePosition = handleAtEndRef.current && hue === 0 ? 1 : hue;
    const containerClassName = (0, _classnames.default)(_hue_slidercss.default.container, {
        [_hue_slidercss.default.hideOutline]: isMouseAccessMode
    });
    return (0, _jsxruntime.jsx)("div", {
        className: containerClassName,
        children: (0, _jsxruntime.jsx)("div", {
            className: _hue_slidercss.default.widener,
            children: (0, _jsxruntime.jsx)(_slider.BaseSlider, {
                value: handlePosition,
                min: 0,
                max: 1,
                step: 0.005,
                onChange: onChange,
                onDragStart: onChangeStartWithPreview,
                onDragEnd: onChangeCompleteWithPreview,
                ariaLabel: ariaLabel,
                fillColor: "transparent",
                handle: handle,
                track: track
            })
        })
    });
}
