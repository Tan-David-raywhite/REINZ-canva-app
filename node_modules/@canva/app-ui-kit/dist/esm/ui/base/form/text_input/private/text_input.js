import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import * as React from 'react';
import { BaseInput } from '../../base_input/base_input';
import { ClearDecorator } from '../../input_decorators/input_decorators';
export function TextInput(props) {
    const { type = 'text', clearable = 'never', end } = props;
    const endContent = getEndContent(end, clearable !== 'never');
    return _jsx(BaseInput, {
        ...props,
        type: type,
        end: endContent
    });
}
function getEndContent(end, showClearable) {
    const endContent = typeof end === 'function' ? end() : end;
    if (!showClearable) return endContent;
    return _jsxs(_Fragment, {
        children: [
            _jsx(ClearDecorator, {
                showDivider: !!endContent
            }),
            React.isValidElement(endContent) && endContent.type === React.Fragment ? React.Children.toArray(endContent.props.children) : endContent
        ]
    });
}
