import { jsx as _jsx } from "react/jsx-runtime";
import { UnreachableError } from '../../../../../../base/preconditions';
import 'react';
import { Badge as EaselBadge } from '../../../../../base/badge/badge';
import { Tooltip as EaselTooltip } from '../../../../../base/tooltip/tooltip';
export const tones = [
    'assist',
    'positive',
    'warn',
    'info',
    'critical',
    'contrast'
];
export const wrapInsets = [
    '-0.5u',
    '-1u',
    '0',
    '0.5u',
    '1u'
];
/** 
 * Represents tallies, statuses, and other qualitative attributes on existing elements.
 */ export function Badge(props) {
    const BadgeTooltip = props.tooltipLabel ? EaselTooltip : NoopWrapper;
    return _jsx(BadgeTooltip, {
        label: props.tooltipLabel ?? '',
        children: _jsx(EaselBadge, {
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
            throw new UnreachableError(tone);
    }
}
const NoopWrapper = (props)=>props.children;
