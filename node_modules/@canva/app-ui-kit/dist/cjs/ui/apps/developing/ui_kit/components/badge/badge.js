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
    get Badge () {
        return Badge;
    },
    get tones () {
        return tones;
    },
    get wrapInsets () {
        return wrapInsets;
    }
});
const _jsxruntime = require("react/jsx-runtime");
const _preconditions = require('../../../../../../base/preconditions');
require("react");
const _badge = require('../../../../../base/badge/badge');
const _tooltip = require('../../../../../base/tooltip/tooltip');
const tones = [
    'assist',
    'positive',
    'warn',
    'info',
    'critical',
    'contrast'
];
const wrapInsets = [
    '-0.5u',
    '-1u',
    '0',
    '0.5u',
    '1u'
];
function Badge(props) {
    const BadgeTooltip = props.tooltipLabel ? _tooltip.Tooltip : NoopWrapper;
    return (0, _jsxruntime.jsx)(BadgeTooltip, {
        label: props.tooltipLabel ?? '',
        children: (0, _jsxruntime.jsx)(_badge.Badge, {
            ...props,
            size: "tiny",
            tone: mapTone(props.tone)
        })
    });
}
function mapTone(tone) {
    switch(tone){
        case 'assist':
            return 'feedbackHint';
        case 'positive':
            return 'feedbackPositive';
        case 'warn':
            return 'feedbackWarn';
        case 'info':
            return 'feedbackInfo';
        case 'critical':
            return 'feedbackCritical';
        case 'contrast':
            return 'feedbackOverlay';
        default:
            throw new _preconditions.UnreachableError(tone);
    }
}
const NoopWrapper = (props)=>props.children;
