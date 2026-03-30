"use strict";
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
    get SkipLink () {
        return SkipLink;
    },
    get SkipTarget () {
        return SkipTarget;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _mobxreactlite = require("mobx-react-lite");
const _react = _interop_require_wildcard(require("react"));
const _access_mode_state = require('../access_mode_state/access_mode_state');
const _screen_reader_content = require('../screen_reader_content/screen_reader_content');
const _link = require('../../link/link');
const _typography = require('../../typography/typography');
const _skip_linkcss = _interop_require_wildcard(require("./skip_link.css"));
const _skip_linkmessages = require("./skip_link.messages");
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
const SkipLink = (0, _mobxreactlite.observer)(function SkipLink(props) {
    const { to, onClick, displayMode = 'focus', position, ref, ...rest } = props;
    const imperativeFocusFallback = useImperativeFocusFallback(to);
    const link = !onClick ? (0, _jsxruntime.jsx)(_link.Link, {
        href: `#${to}`,
        variant: "regular",
        ref: ref,
        onClick: imperativeFocusFallback,
        children: (0, _jsxruntime.jsx)("span", {
            className: _skip_linkcss.default.skipLinkInner,
            children: getText(rest)
        })
    }) : (0, _jsxruntime.jsx)(_link.LinkButton, {
        onClick: onClick,
        ref: ref,
        children: (0, _jsxruntime.jsx)("span", {
            className: _skip_linkcss.default.skipLinkInner,
            children: getText(rest)
        })
    });
    return (0, _jsxruntime.jsx)("div", {
        className: (0, _classnames.default)(_skip_linkcss.default.skipLink, displayMode === 'always' ? _skip_linkcss.default.always : !_access_mode_state.accessModeState.isMouseMode && _skip_linkcss.default.focus, position && (0, _skip_linkcss.getStyle)(position), (rest.variant || rest.useGlobalStyle) && _skip_linkcss.default.global),
        children: (0, _jsxruntime.jsx)(_typography.Text, {
            margins: "legacy",
            children: link
        })
    });
});
function getText(props) {
    if (props.variant) return ({
        ['skipToMainContent']: _skip_linkmessages.SkipLinkMessages.skipToMainContent(),
        ['skipNavigation']: _skip_linkmessages.SkipLinkMessages.skipNavigation(),
        ['skipToSearch']: _skip_linkmessages.SkipLinkMessages.skipToSearch()
    })[props.variant];
    else return props.children;
}
function SkipTarget({ id, scrollMarginTop, label }) {
    return (0, _jsxruntime.jsx)("div", {
        id: id,
        tabIndex: -1,
        style: scrollMarginTop ? {
            scrollMarginTop
        } : undefined,
        children: label && (0, _jsxruntime.jsx)(_screen_reader_content.ScreenReaderContent, {
            children: label
        })
    });
}
function useImperativeFocusFallback(destinationId) {
    return _react.useMemo(()=>{
        if (destinationId === undefined) return;
        return (e)=>{
            const { ownerDocument } = e.currentTarget;
            const hash = ownerDocument.defaultView?.location.hash;
            if (!hash?.startsWith('#/'))
                return;
            const destination = ownerDocument.getElementById(destinationId);
            if (!destination)
            return;
            destination.focus();
            e.preventDefault();
        };
    }, [
        destinationId
    ]);
}
