"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "AlphaSlider", {
    enumerable: true,
    get: function() {
        return AlphaSlider;
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
const _alpha_slidercss = _interop_require_wildcard(require("./alpha_slider.css"));
const _alpha_slidermessages = require("./alpha_slider.messages");
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
const AlphaSlider = ({ alpha: alphaProp, color: colorProp, onChange: onChangeProp, onChangeStart: onChangeStartProp, onChangeComplete: onChangeCompleteProp, ariaLabel = _alpha_slidermessages.AlphaSliderMessages.colorAlphaLabel(), showHandlePreview = 'touch-only' })=>{
    const colorPicker = (0, _color_picker_provider.useColorPickerControls)();
    const setColor = colorPicker?.setColor;
    const onChangeStart = onChangeStartProp ?? colorPicker?.onChangeStart;
    const onChangeComplete = onChangeCompleteProp ?? colorPicker?.onChangeComplete;
    const colorPickerHex = (0, _color_picker_provider.useColorPickerHex)();
    const colorPickerAlpha = (0, _color_picker_provider.useColorPickerAlpha)();
    const color = colorProp ?? colorPickerHex ?? '#ffffff';
    const alpha = alphaProp ?? colorPickerAlpha ?? 1;
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
        setShowPreview(false);
        onChangeComplete?.();
    }, [
        onChangeComplete
    ]);
    const handle = _react.useCallback(({ focused, active })=>{
        const hsvColor = _hsv_color.HsvColor.fromHexString(color, alpha);
        const rgbColor = hsvColor.toRgb();
        const swatchColor = `rgba(${rgbColor.r}, ${rgbColor.g}, ${rgbColor.b}, ${alpha})`;
        return (0, _jsxruntime.jsx)(_handle.Handle, {
            color: swatchColor,
            focused: focused && !isMouseAccessMode,
            active: active,
            preview: showPreview,
            className: _alpha_slidercss.default.handle
        });
    }, [
        alpha,
        color,
        isMouseAccessMode,
        showPreview
    ]);
    const track = _react.useCallback(()=>(0, _jsxruntime.jsx)("div", {
            className: _alpha_slidercss.default.track,
            children: (0, _jsxruntime.jsx)("div", {
                className: _alpha_slidercss.default.overlay,
                style: {
                    [_alpha_slidercss.customProperties.overlayColor]: color
                }
            })
        }), [
        color
    ]);
    const onChange = _react.useCallback((value)=>{
        setColor?.({
            alpha: value
        }, 'alpha');
        onChangeProp?.(value);
    }, [
        onChangeProp,
        setColor
    ]);
    const containerClassName = (0, _classnames.default)(_alpha_slidercss.default.container, {
        [_alpha_slidercss.default.hideOutline]: isMouseAccessMode
    });
    return (0, _jsxruntime.jsx)("div", {
        className: containerClassName,
        children: (0, _jsxruntime.jsx)("div", {
            className: _alpha_slidercss.default.widener,
            children: (0, _jsxruntime.jsx)(_slider.BaseSlider, {
                value: alpha,
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
};
