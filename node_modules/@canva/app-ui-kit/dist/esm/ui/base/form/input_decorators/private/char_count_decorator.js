import { jsx as _jsx } from "react/jsx-runtime";
import * as React from 'react';
import { useInputValue } from '../../base_input/base_input';
import { CharsRemaining } from './chars_remaining';
export const CharCountDecorator = React.memo(function CharCountDecorator({ max }) {
    const value = useInputValue();
    const count = (value ?? '').length;
    return _jsx(CharsRemaining, {
        count: count,
        max: max
    });
});
