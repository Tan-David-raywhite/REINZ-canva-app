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
    get ScreenReaderContent () {
        return ScreenReaderContent;
    },
    get useVisuallyHidden () {
        return useVisuallyHidden;
    },
    get useWindow () {
        return useWindow;
    },
    get visuallyHiddenClass () {
        return visuallyHiddenClass;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _react = _interop_require_wildcard(require("react"));
const _reactdom = _interop_require_wildcard(require("react-dom"));
const _screen_reader_contentcss = _interop_require_default(require("./screen_reader_content.css"));
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
const visuallyHiddenClass = _screen_reader_contentcss.default.screenReaderContent;
function useVisuallyHidden() {
    return {
        className: visuallyHiddenClass
    };
}
function useWindow() {
    const [globalWindow, setGlobalWindow] = _react.useState();
    _react.useEffect(()=>{
        setGlobalWindow(window);
    }, []);
    return globalWindow;
}
const ScreenReaderContent = ({ children, ariaLive, ariaAtomic, asLabelTextOnly, ariaRelevant, id, tagName: TagName = 'div', role })=>{
    const window1 = useWindow();
    const content = (0, _jsxruntime.jsx)(TagName, {
        id: id,
        role: role,
        "aria-live": ariaLive,
        "aria-atomic": ariaAtomic,
        "aria-hidden": asLabelTextOnly,
        "aria-relevant": ariaRelevant,
        className: _screen_reader_contentcss.default.screenReaderContent,
        children: children
    });
    if (id != null) {
        if (window1 != null) return _reactdom.createPortal(content, window1.document.body);
        return null;
    }
    return content;
};
