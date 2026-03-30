import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { TruncatedText as EaselTruncatedText } from '../../../../../../base/typography/truncated/truncated';
/** 
 * A component that styles text bodies and clamps them to a specified number of rows.
 * If the text is truncated, a tooltip provides access to the full content.
 */ export function TruncatedText(props) {
    return _jsx(EaselTruncatedText, {
        tooltipPlacement: props.tooltipPlacement,
        tooltipAlignment: props.tooltipAlignment,
        alignment: props.alignment,
        capitalization: props.capitalization,
        lineClamp: props.lineClamp || 1,
        children: props.children,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone,
        weight: props.variant
    });
}
