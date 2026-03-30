import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { Text as EaselText, Title as EaselTitle } from '../../../../../base/typography/typography';
/** 
 * Renders body text.
 */ export function Text(props) {
    return _jsx(EaselText, {
        alignment: props.alignment,
        capitalization: props.capitalization,
        children: props.children,
        lineClamp: props.lineClamp,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone,
        weight: props.variant
    });
}
/** 
 * Renders heading text.
 */ export function Title(props) {
    return _jsx(EaselTitle, {
        alignment: props.alignment,
        capitalization: props.capitalization,
        children: props.children,
        lineClamp: props.lineClamp,
        size: props.size,
        tagName: props.tagName,
        tone: props.tone
    });
}
