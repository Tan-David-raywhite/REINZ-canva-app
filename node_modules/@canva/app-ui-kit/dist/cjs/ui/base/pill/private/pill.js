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
    get Pill () {
        return Pill;
    },
    get pillSizes () {
        return pillSizes;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../base/preconditions');
const _classnames = _interop_require_default(require("classnames"));
require("react");
const _pointer_input_state = require('../../a11y/pointer_input_state/pointer_input_state');
const _button = require('../../button/button');
const _icon = require('../../icons/x/icon');
const _tooltip = require('../../tooltip/tooltip');
const _truncated = require('../../typography/truncated/truncated');
const _typography = require('../../typography/typography');
const _pillcss = _interop_require_default(require("./pill.css"));
const _pillmessages = require("./pill.messages");
function _interop_require_default(obj) {
    return obj && obj.__esModule ? obj : {
        default: obj
    };
}
const pillSizes = [
    'tiny',
    'xsmall',
    'small',
    'medium',
    'large'
];
function resolveDecorator(decorator, className) {
    const content = typeof decorator === 'function' ? decorator() : decorator;
    return content && (0, _jsxruntime.jsx)("span", {
        className: className,
        children: content
    });
}
const Pill = ({ text, size = 'xsmall', shape, active, selected, pressed, disabled, maxWidth = '25u', onRemoveClick, onClick, start, end, id, role = 'button', disclosure = role === 'combobox', ariaLabel, ariaLabelledBy, ariaDescribedBy, ariaControls, ariaHasPopup, ariaActiveDescendant, ariaInvalid, tooltipLabel: tooltipLabelProp, tooltipDescription, tooltipDisabled, tooltipPlacement, tooltipLineClamp, ref })=>{
    const hoverSupported = (0, _pointer_input_state.useIsHoveringInput)();
    const { ref: isTruncatedRef, isTruncated } = (0, _truncated.useIsTruncated)(text);
    const tooltipLabel = tooltipLabelProp || (isTruncated ? text : undefined);
    const className = (0, _classnames.default)(_pillcss.default.pill, {
        [_pillcss.default.button]: !onRemoveClick,
        [_pillcss.default.tiny]: size === 'tiny',
        [_pillcss.default.xsmall]: size === 'xsmall',
        [_pillcss.default.small]: size === 'small',
        [_pillcss.default.medium]: size === 'medium',
        [_pillcss.default.large]: size === 'large',
        [_pillcss.default.rectangle]: shape === 'rectangle',
        [_pillcss.default.disabled]: disabled,
        [_pillcss.default.maxWidth25U]: maxWidth === '25u',
        [_pillcss.default.hoverSupported]: hoverSupported,
        ...getStateClassnames({
            role,
            active,
            selected,
            pressed
        })
    });
    const startContent = resolveDecorator(start, _pillcss.default.start);
    const endContent = resolveDecorator(end, _pillcss.default.end);
    const content = (0, _jsxruntime.jsx)(_typography.Text, {
        ref: isTruncatedRef,
        tagName: "span",
        className: _pillcss.default.text,
        tone: _typography.InheritColor,
        size: size === 'tiny' ? 'small' : 'medium',
        lineClamp: 1,
        children: text
    });
    if (onRemoveClick != null && tooltipLabel != null) return (0, _jsxruntime.jsx)(_tooltip.Tooltip, {
        label: tooltipLabel,
        description: tooltipDescription,
        disabled: tooltipDisabled,
        lineClamp: tooltipLineClamp,
        placement: tooltipPlacement,
        children: ({ tooltipId, ...triggerProps })=>(0, _jsxruntime.jsxs)("span", {
                id: id,
                className: className,
                "aria-label": ariaLabel,
                "aria-labelledby": ariaLabelledBy,
                "aria-describedby": ariaDescribedBy ?? (text !== tooltipLabel ? tooltipId : undefined),
                ...triggerProps,
                children: [
                    startContent,
                    content,
                    (0, _jsxruntime.jsx)(_button.Button, {
                        ref: ref,
                        onClick: onRemoveClick,
                        size: size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'tiny',
                        variant: "tertiary",
                        className: _pillcss.default.removeButton,
                        icon: _icon.XIcon,
                        iconSize: "small",
                        ariaLabel: _pillmessages.PillMessages.remove(text),
                        disabled: disabled
                    })
                ]
            })
    });
    if (onRemoveClick != null) return (0, _jsxruntime.jsxs)("span", {
        id: id,
        className: className,
        "aria-label": ariaLabel,
        "aria-labelledby": ariaLabelledBy,
        "aria-describedby": ariaDescribedBy,
        children: [
            startContent,
            content,
            (0, _jsxruntime.jsx)(_button.Button, {
                ref: ref,
                onClick: onRemoveClick,
                size: size === 'large' ? 'medium' : size === 'medium' ? 'small' : 'tiny',
                variant: "tertiary",
                className: _pillcss.default.removeButton,
                icon: _icon.XIcon,
                iconSize: "small",
                ariaLabel: _pillmessages.PillMessages.remove(text),
                disabled: disabled
            })
        ]
    });
    return (0, _jsxruntime.jsxs)(_button.BasicButton, {
        ref: ref,
        id: id,
        onClick: onClick,
        className: className,
        noChildWrapper: true,
        role: role === 'button' ? undefined : role,
        active: active,
        selected: selected,
        pressed: pressed,
        disabled: disabled,
        disclosure: disclosure,
        ariaLabel: ariaLabel,
        ariaLabelledBy: ariaLabelledBy,
        ariaDescribedBy: ariaDescribedBy,
        ariaControls: ariaControls,
        ariaActiveDescendant: ariaActiveDescendant,
        ariaHasPopup: ariaHasPopup,
        ariaInvalid: ariaInvalid,
        tooltipLabel: tooltipLabel,
        tooltipDescription: tooltipDescription,
        tooltipDisabled: tooltipDisabled,
        tooltipPlacement: tooltipPlacement,
        tooltipLineClamp: tooltipLineClamp,
        children: [
            startContent,
            content,
            endContent
        ]
    });
};
function getStateClassnames({ role, active, selected, pressed }) {
    switch(role){
        case 'switch':
            return {
                [_pillcss.default.active]: false,
                [_pillcss.default.selected]: selected ?? active
            };
        case 'button':
        case 'combobox':
            return {
                [_pillcss.default.active]: pressed ?? active,
                [_pillcss.default.selected]: selected
            };
        default:
            throw new _preconditions.UnreachableError(role);
    }
}
