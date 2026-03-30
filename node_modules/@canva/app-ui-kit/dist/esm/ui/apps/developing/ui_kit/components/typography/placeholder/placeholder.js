import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { TextPlaceholder as EaselTextPlaceholder, TitlePlaceholder as EaselTitlePlaceholder } from '../../../../../../base/typography/placeholder/placeholder';
/** 
 * Visually represents a `Text` component while it's loading.
 */ export function TextPlaceholder(props) {
    return _jsx(EaselTextPlaceholder, {
        size: props.size
    });
}
/** 
 * Visually represents a `Title` component while it's loading.
 */ export function TitlePlaceholder(props) {
    return _jsx(EaselTitlePlaceholder, {
        size: props.size
    });
}
