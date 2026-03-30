"use strict"
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "PlaceholderFader", {
    enumerable: true,
    get: function() {
        return PlaceholderFader;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _reacttransitiongroup = require("react-transition-group");
const _provider = require('../../provider/provider');
const _fadercss = _interop_require_default(require("./fader.css"));
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
const defaultDurationMs = parseInt(_fadercss.default.defaultDurationMs, 10);
const slowDurationMs = parseInt(_fadercss.default.slowDurationMs, 10);
const PlaceholderFader = (props)=>{
    const { loading, animate: animateProp, animationMode = 'fast', content, placeholder, expand, expandFlex } = props;
    const enableAnimations = (0, _provider.useEnableAnimations)();
    const animate = animateProp ?? enableAnimations;
    const contentRef = _react.useRef(null);
    const placeholderRef = _react.useRef(null);
    const isAnimationModeSlow = animationMode === 'slow';
    const expandClassName = (0, _classnames.default)({
        [_fadercss.default.expand]: expand,
        [_fadercss.default.expandFlex]: !expand && expandFlex
    });
    const animationModeClassName = animate ? (0, _classnames.default)({
        [_fadercss.default.slow]: isAnimationModeSlow
    }) : null;
    const renderContent = (ref)=>(0, _jsxruntime.jsx)("div", {
            ref: ref,
            className: expandClassName,
            children: loading ? placeholder : content
        });
    const { enter, enterActive, exit, exitActive, container } = _fadercss.default;
    const durationMs = isAnimationModeSlow ? slowDurationMs : defaultDurationMs;
    const ref = loading ? placeholderRef : contentRef;
    return (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(container, expandClassName, animationModeClassName),
        children: animate ? (0, _jsxruntime.jsx)(_reacttransitiongroup.TransitionGroup, {
            component: null,
            children: (0, _jsxruntime.jsx)(_reacttransitiongroup.CSSTransition, {
                timeout: durationMs,
                classNames: {
                    enter,
                    enterActive,
                    exit,
                    exitActive
                },
                mountOnEnter: true,
                unmountOnExit: true,
                nodeRef: ref,
                children: renderContent(ref)
            }, loading ? 'placeholder' : 'component')
        }) : renderContent(ref)
    });
};
