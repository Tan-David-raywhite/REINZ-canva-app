import { jsx as _jsx } from "react/jsx-runtime";
import 'react';
import { LoadingIndicator as EaselLoadingIndicator } from '../../../../../base/loading_indicator/loading_indicator';
/**
 * 
 * The possible sizes of a loading indicator icon.
 */ export const sizes = [
    'small',
    'medium'
];
/** 
 * An animated icon that indicates if content is loading or an action is pending.
 */ export function LoadingIndicator(props) {
    return _jsx(EaselLoadingIndicator, {
        size: props.size
    });
}
