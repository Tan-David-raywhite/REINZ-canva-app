import { jsx as _jsx } from "react/jsx-runtime";
import { UnreachableError } from '../../../../../base/preconditions';
import * as React from 'react';
import { Placeholder } from '../../../placeholder/placeholder';
import { getStyle } from './placeholder.css';
export const TextPlaceholder = React.memo((props)=>_jsx(TextPlaceholderComponent, {
        ...props,
        variant: "body"
    }));
export const TitlePlaceholder = React.memo((props)=>_jsx(TextPlaceholderComponent, {
        ...props,
        variant: "title"
    }));
export const DisplayPlaceholder = React.memo((props)=>_jsx(TextPlaceholderComponent, {
        ...props,
        variant: "display"
    }));
function TextPlaceholderComponent({ size = 'medium', variant, index, disableAnimations }) {
    const containerClassName = getStyle(`${variant}${getSizeClassName(size)}`);
    return _jsx("div", {
        className: containerClassName,
        children: _jsx(Placeholder, {
            shape: "textRectangle",
            index: index,
            disableAnimations: disableAnimations
        })
    });
}
function getSizeClassName(size) {
    switch(size){
        case 'xxlarge':
            return 'XxLarge';
        case 'xlarge':
            return 'XLarge';
        case 'large':
            return 'Large';
        case 'medium':
            return 'Medium';
        case 'small':
            return 'Small';
        case 'xsmall':
            return 'XSmall';
        case 'xxsmall':
            return 'XxSmall';
        default:
            throw new UnreachableError(size);
    }
}
