import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { ProgressBar as EaselProgressBar } from '../../../../../base/progress_bar/progress_bar';
const SIZE_TO_TRACK_THICKNESS = {
    small: '1u',
    medium: '2u'
};
/** 
 * Visually represents the percentage completion of a task or operation.
 */ export function ProgressBar({ onProgressAnimationEnd, size = 'medium', value, ariaLabel }) {
    return _jsx(EaselProgressBar, {
        disableBubbles: false,
        onProgressAnimationEnd: onProgressAnimationEnd,
        trackThickness: SIZE_TO_TRACK_THICKNESS[size],
        value: value,
        ariaLabel: ariaLabel
    });
}
