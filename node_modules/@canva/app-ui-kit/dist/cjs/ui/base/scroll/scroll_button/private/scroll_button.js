"use strict"
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
    get ProminentScrollButton () {
        return ProminentScrollButton;
    },
    get SubtleScrollButton () {
        return SubtleScrollButton;
    },
    get useScrollButtonAriaLabel () {
        return useScrollButtonAriaLabel;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _pointer_input_state = require('../../../a11y/pointer_input_state/pointer_input_state');
const _screen_reader_content = require('../../../a11y/screen_reader_content/screen_reader_content');
const _base_button = require('../../../button/base_button/base_button');
const _button = require('../../../button/button');
const _icon = require('../../../icons/chevron_left/icon');
const _icon1 = require('../../../icons/chevron_right/icon');
const _outlined_chevron = require("./outlined_chevron");
const _scroll_buttoncss = _interop_require_wildcard(require("./scroll_button.css"));
const _scroll_buttonmessages = require("./scroll_button.messages");
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
function useScrollButtonAriaLabel(parentAriaLabelProps, direction) {
    const childId = _react.useId();
    const directionMessage = direction === 'forward' ? _scroll_buttonmessages.ButtonMessages.nextPage() : _scroll_buttonmessages.ButtonMessages.prevPage();
    if (parentAriaLabelProps.ariaLabelledBy != null) return {
        ariaLabelledBy: `${childId} ${parentAriaLabelProps.ariaLabelledBy}`,
        hiddenLabelElement: (0, _jsxruntime.jsx)(_screen_reader_content.ScreenReaderContent, {
            id: childId,
            asLabelTextOnly: true,
            tagName: "span",
            children: `${directionMessage}:`
        })
    };
    if (parentAriaLabelProps.ariaLabel != null) return {
        ariaLabel: `${directionMessage}: ${parentAriaLabelProps.ariaLabel}`
    };
    return {
        ariaLabel: directionMessage
    };
}
const useScrollButton = (props)=>{
    const composedAriaLabel = useScrollButtonAriaLabel({
        ariaLabel: props.ariaLabel,
        ariaLabelledBy: props.ariaLabelledBy
    }, props.direction);
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    const isDisabled = props.atStart === true && props.direction === 'backward' || props.atEnd === true && props.direction === 'forward';
    const shouldDisplayButton = props.position === 'detached' || !isDisabled;
    const buttonClassName = (0, _classnames.default)(_scroll_buttoncss.default.base, {
        [_scroll_buttoncss.default.bounded]: props.position === 'bounded',
        [_scroll_buttoncss.default.forward]: props.direction === 'forward',
        [_scroll_buttoncss.default.backward]: props.direction === 'backward',
        [_scroll_buttoncss.default.hoverSupported]: hoverSupported
    });
    const setButtonHandle = _react.useCallback((handle)=>{
        if (props.buttonHandle) props.buttonHandle.current = handle;
    }, [
        props.buttonHandle
    ]);
    const resetButtonHandle = _react.useCallback(()=>{
        if (props.buttonHandle) props.buttonHandle.current = null;
    }, [
        props.buttonHandle
    ]);
    _react.useEffect(()=>{
        if (!shouldDisplayButton) resetButtonHandle();
    }, [
        resetButtonHandle,
        shouldDisplayButton
    ]);
    return {
        aria: composedAriaLabel,
        onClick: props.onClick,
        shouldDisplayButton,
        isDisabled,
        className: buttonClassName,
        buttonHandle: setButtonHandle
    };
};
function maybeWrapWithOffset(children, position, offsetY, horizontalOpts) {
    if (position !== 'bounded' || offsetY == null && horizontalOpts == null) return children;
    const horizontalDirection = horizontalOpts && (horizontalOpts.direction === 'backward' ? 1 : -1);
    const horizontalOffsetPx = horizontalDirection && horizontalOpts.offsetX * horizontalDirection;
    return (0, _jsxruntime.jsx)("div", {
        style: {
            [_scroll_buttoncss.customProperties.horizontalOffset]: horizontalOffsetPx ? `${horizontalOffsetPx}px` : undefined,
            [_scroll_buttoncss.customProperties.verticalOffset]: offsetY ? `${offsetY}px` : undefined
        },
        children: children
    });
}
const ProminentScrollButton = ({ position = 'bounded', size = 'medium', offsetY, offsetX, ...props })=>{
    const { aria, className, onClick, buttonHandle, shouldDisplayButton, isDisabled } = useScrollButton({
        ...props,
        position
    });
    if (!shouldDisplayButton) return null;
    const isForwardDirection = props.direction === 'forward';
    const circularIcon = isForwardDirection ? _icon1.ChevronRightIcon : _icon.ChevronLeftIcon;
    const circleButtonAriaLabelProps = aria.ariaLabel != null ? {
        ariaLabel: aria.ariaLabel
    } : {
        ariaLabelledBy: aria.ariaLabelledBy
    };
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            aria.hiddenLabelElement,
            maybeWrapWithOffset((0, _jsxruntime.jsx)(_button.CircleButton, {
                variant: "secondary",
                size: size,
                elevated: true,
                icon: circularIcon,
                ariaControls: props.scrollableId,
                onClick: onClick,
                containerClassName: (0, _classnames.default)(className, _scroll_buttoncss.default.prominent),
                ref: buttonHandle,
                disabled: isDisabled,
                ...circleButtonAriaLabelProps
            }), position, offsetY, offsetX ? {
                offsetX,
                direction: props.direction
            } : undefined)
        ]
    });
};
const SubtleScrollButton = ({ position = 'bounded', ...props })=>{
    const { aria, className, onClick, buttonHandle, shouldDisplayButton, isDisabled } = useScrollButton({
        ...props,
        position
    });
    if (!shouldDisplayButton) return null;
    const isForwardDirection = props.direction === 'forward';
    const OutlinedIcon = isForwardDirection ? _outlined_chevron.OutlinedChevronRightIcon : _outlined_chevron.OutlinedChevronLeftIcon;
    return (0, _jsxruntime.jsxs)(_jsxruntime.Fragment, {
        children: [
            aria.hiddenLabelElement,
            maybeWrapWithOffset((0, _jsxruntime.jsx)(_base_button.BaseButton, {
                type: "button",
                className: (0, _classnames.default)(className, _scroll_buttoncss.default.subtle, {
                    [_scroll_buttoncss.default.disabled]: isDisabled
                }),
                onClick: onClick,
                ariaControls: props.scrollableId,
                ariaLabel: aria.ariaLabel,
                ariaLabelledBy: aria.ariaLabelledBy,
                ref: buttonHandle,
                disabled: isDisabled,
                children: (0, _jsxruntime.jsx)(OutlinedIcon, {
                    size: "medium",
                    className: _scroll_buttoncss.default.subtleButtonIcon
                })
            }), position, props.offsetY)
        ]
    });
};
