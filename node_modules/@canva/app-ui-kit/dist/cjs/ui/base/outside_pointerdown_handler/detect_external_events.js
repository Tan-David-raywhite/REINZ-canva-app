"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "DetectExternalEvents", {
    enumerable: true,
    get: function() {
        return DetectExternalEvents;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _detect_external_eventscss = _interop_require_default(require("./detect_external_events.css"));
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
class DetectExternalEvents extends _react.Component {
    render() {
        const { children, component: Component = 'div', reactEvents, onExternalEvent } = this.props;
        let events = {};
        if (onExternalEvent) events = reactEvents.reduce((obj, eventName)=>{
            obj[eventName] = this._handleWrapperEvent;
            return obj;
        }, {});
        return (0, _jsxruntime.jsx)(Component, {
            className: _detect_external_eventscss.default.detectExternalEvents,
            ...events,
            children: children
        });
    }
    componentDidMount() {
        this.props.onExternalEvent && this._setupTopLevelEvents();
    }
    componentDidUpdate() {
        this.props.onExternalEvent && this._setupTopLevelEvents();
    }
    componentWillUnmount() {
        if (this._disposeTopLevelEvents) {
            this._disposeTopLevelEvents();
            this._disposeTopLevelEvents = null;
        }
    }
    _setupTopLevelEvents() {
        if (this._disposeTopLevelEvents) {
            this._disposeTopLevelEvents();
            this._disposeTopLevelEvents = null;
        }
        const { domEvents } = this.props;
        domEvents.forEach((eventName)=>{
            window.addEventListener(eventName, this._handleTopLevelEvent);
        });
        this._disposeTopLevelEvents = ()=>{
            domEvents.forEach((eventName)=>{
                window.removeEventListener(eventName, this._handleTopLevelEvent);
            });
        };
    }
    constructor(...args){
        super(...args), this._disposeTopLevelEvents = null, this._lastInterceptedEvent = null, this._handleWrapperEvent = (event)=>{
            this._lastInterceptedEvent = event.nativeEvent;
        }, this._handleTopLevelEvent = (event)=>{
            const { onExternalEvent } = this.props;
            const wasEventIntercepted = this._lastInterceptedEvent === event;
            if (onExternalEvent && !wasEventIntercepted) onExternalEvent(event);
            this._lastInterceptedEvent = null;
        };
    }
}
