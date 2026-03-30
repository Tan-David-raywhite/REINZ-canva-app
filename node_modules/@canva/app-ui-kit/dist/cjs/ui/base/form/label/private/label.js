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
    get CheckboxLabelText () {
        return CheckboxLabelText;
    },
    get Label () {
        return Label;
    },
    get LabelMediumText () {
        return LabelMediumText;
    },
    get LabelText () {
        return LabelText;
    },
    get RadioLabelText () {
        return RadioLabelText;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _classnames = _interop_require_default(require("classnames"));
const _react = _interop_require_wildcard(require("react"));
const _typography = require('../../../typography/typography');
const _labelcss = _interop_require_wildcard(require("./label.css"));
const _labelmessages = require("./label.messages");
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
const BaseLabelText = ({ id, className, disabled = false, fontVariant, children })=>{
    if (!children && children !== 0) return null;
    const classes = (0, _classnames.default)(className, _labelcss.default.label, (0, _labelcss.getStyle)(fontVariant), {
        [_labelcss.default.disabled]: disabled
    });
    return typeof children === 'string' ? (0, _jsxruntime.jsx)("p", {
        id: id,
        className: classes,
        children: children
    }) : (0, _jsxruntime.jsx)("div", {
        id: id,
        className: classes,
        children: children
    });
};
const MediumLabelText = (props)=>(0, _jsxruntime.jsx)(BaseLabelText, {
        fontVariant: "medium",
        ...props
    });
const RadioLabelText = MediumLabelText;
const CheckboxLabelText = MediumLabelText;
const LabelText = (props)=>(0, _jsxruntime.jsx)(BaseLabelText, {
        fontVariant: "small",
        ...props
    });
const LabelMediumText = (props)=>(0, _jsxruntime.jsx)(BaseLabelText, {
        fontVariant: "medium",
        ...props
    });
const Label = ({ children, disabled, htmlFor, id, variant = 'bold', size = 'medium', stopClickPropagation, marker })=>{
    const tagName = _react.useMemo(()=>typeof children === 'string' ? 'span' : 'div', [
        children
    ]);
    if (children == null) return null;
    const stopPropagation = (event)=>event.stopPropagation();
    return ((0, _jsxruntime.jsxs)("label", {
            id: id,
            htmlFor: htmlFor,
            onClick: stopClickPropagation ? stopPropagation : undefined,
            children: [
                (0, _jsxruntime.jsx)(_typography.Text, {
                    tagName: tagName,
                    size: size,
                    weight: variant,
                    className: (0, _classnames.default)(_labelcss.default.labelText, {
                        [_labelcss.default.disabled]: disabled
                    }),
                    tone: disabled ? 'tertiary' : 'primary',
                    children: children
                }),
                marker === 'optional' && (0, _jsxruntime.jsx)(_typography.Text, {
                    tagName: "span",
                    size: size,
                    weight: variant,
                    tone: "tertiary",
                    children: ` ${_labelmessages.LabelMessages.optionalText()}`
                }),
                marker === 'required' && (0, _jsxruntime.jsx)(_typography.Text, {
                    tagName: "span",
                    size: size,
                    weight: "regular",
                    tone: "critical",
                    ariaHidden: true,
                    children: ` *`
                })
            ]
        }));
};
