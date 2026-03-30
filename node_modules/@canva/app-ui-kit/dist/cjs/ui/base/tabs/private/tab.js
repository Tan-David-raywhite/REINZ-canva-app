"use strict";
Object.defineProperty(exports, "__esModule", {
    value: true
});
Object.defineProperty(exports, "Tab", {
    enumerable: true,
    get: function() {
        return Tab;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = require("react");
const _pointer_input_state = require('../../a11y/pointer_input_state/pointer_input_state');
const _button = require('../../button/button');
const _layout = require('../../layout/layout');
const _provider = require('../../provider/provider');
const _typography = require('../../typography/typography');
const _behavior = require("./behavior");
const _tabcss = _interop_require_wildcard(require("./tab.css"));
const _tab_listcss = require("./tab_list.css");
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
const Tab = ({ id, active, onClick, tooltipLabel, ariaLabel = tooltipLabel, ariaControls, children, start, end, layout = 'horizontal' })=>{
    const tabProps = (0, _behavior.useTab)({
        id,
        active,
        onClick,
        ariaControls
    });
    const animate = (0, _provider.useEnableAnimations)();
    const isHoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    const { ref: collectionRef } = (0, _behavior.useRegisterTabsElements)(tabProps.active);
    const content = (0, _jsxruntime.jsxs)("span", {
        className: _tabcss.default.contentWrapper,
        children: [
            (0, _jsxruntime.jsx)("span", {
                className: _tabcss.default.boldContent,
                "aria-hidden": true,
                children: (0, _jsxruntime.jsx)(_typography.Text, {
                    tagName: "span",
                    className: _tabcss.default.text,
                    weight: "bold",
                    children: children
                })
            }),
            (0, _jsxruntime.jsx)("span", {
                className: _tabcss.default.content,
                children: (0, _jsxruntime.jsx)(_typography.Text, {
                    tagName: "span",
                    className: _tabcss.default.text,
                    tone: _typography.InheritColor,
                    children: children
                })
            })
        ]
    });
    return (0, _jsxruntime.jsx)("div", {
        className: _tabcss.default.wrapper,
        children: (0, _jsxruntime.jsx)(_button.BasicButton, {
            buttonRef: collectionRef,
            ariaLabel: ariaLabel,
            tooltipLabel: tooltipLabel,
            className: (0, _classnames.default)(_tabcss.default.button, animate && _tabcss.default.animate, tabProps.active && _tabcss.default.active, isHoverSupported && _tabcss.default.hoverSupported),
            size: "medium",
            noChildWrapper: true,
            ...tabProps,
            children: (0, _jsxruntime.jsx)("span", {
                className: _tabcss.default.buttonInner,
                style: {
                    [_tabcss.customProperties.tabListBleedX]: `var(${_tab_listcss.customProperties.bleedX})`
                },
                children: (0, _jsxruntime.jsx)(TabContentWithDecorators, {
                    start: start,
                    end: end,
                    layout: layout,
                    children: content
                })
            })
        })
    });
};
const TabContentWithDecorators = (0, _react.memo)(({ children, start, end, layout })=>{
    if (!start && !end) return children;
    const spacing = '1u';
    if (layout === 'horizontal') return (0, _jsxruntime.jsxs)(_layout.Columns, {
        tagName: "span",
        alignY: "center",
        spacing: spacing,
        children: [
            start && (0, _jsxruntime.jsx)(_layout.Column, {
                tagName: "span",
                width: "content",
                children: start
            }),
            (0, _jsxruntime.jsx)(_layout.Column, {
                tagName: "span",
                children: children
            }),
            end && (0, _jsxruntime.jsx)(_layout.Column, {
                tagName: "span",
                width: "content",
                children: end
            })
        ]
    });
    return (0, _jsxruntime.jsxs)(_layout.Rows, {
        tagName: "span",
        spacing: spacing,
        align: "center",
        children: [
            start,
            children,
            end
        ]
    });
});
